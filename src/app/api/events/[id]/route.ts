// import { NextRequest, NextResponse } from 'next/server';
// import prisma from '@/lib/db';

// export async function GET(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   const event = await prisma.event.findUnique({
//     where: { id: params.id },
//   });

//   if (!event) {
//     return NextResponse.json({ error: 'Event not found' }, { status: 404 });
//   }

//   return NextResponse.json(event);
// }

// export async function PUT(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   const data = await req.json();

//   const updated = await prisma.event.update({
//     where: { id: params.id },
//     data,
//   });

//   return NextResponse.json(updated);
// }

// export async function DELETE(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   await prisma.event.delete({
//     where: { id: params.id },
//   });

//   return NextResponse.json({ message: 'Event deleted' });
// }


import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const { completed } = await req.json();

  const updated = await prisma.event.update({
    where: { id: params.id },
    data: { completed },
  });

  return NextResponse.json(updated);
}
