// import { NextRequest, NextResponse } from 'next/server';
// import prisma from '@/lib/db';

// export async function POST(req: NextRequest) {
//   const data = await req.json();

//   const event = await prisma.event.create({ data });

//   return NextResponse.json({ message: 'Event created', event });
// }

// export async function GET() {
//   const events = await prisma.event.findMany();
//   return NextResponse.json(events);
// }

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function POST(req: NextRequest) {
  const data = await req.json();

  // 🛠️ Convert date strings to proper Date objects
  const event = await prisma.event.create({
    data: {
      ...data,
      fromDate: new Date(data.fromDate),
      toDate: new Date(data.toDate),
    },
  });

  return NextResponse.json({ message: 'Event created', event });
}

export async function GET() {
  const events = await prisma.event.findMany();
  return NextResponse.json(events);
}
