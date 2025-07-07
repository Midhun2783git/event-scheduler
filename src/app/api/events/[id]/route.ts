// import { NextRequest, NextResponse } from 'next/server';
// import prisma from '@/lib/db';

// export async function PATCH(
//   req: NextRequest,
//   context: { params: any } // Use 'any' or infer via typeof context.params.id
// ) {
//   try {
//     const { id } = context.params;
//     const { completed } = await req.json();

//     const updated = await prisma.event.update({
//       where: { id },
//       data: { completed },
//     });

//     return NextResponse.json(updated, { status: 200 });
//   } catch (error) {
//     console.error('Error updating event:', error);
//     return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
//   }
// }

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

// ✅ Define an explicit type for context.params
type Params = {
  params: {
    id: string;
  };
};

export async function PATCH(req: NextRequest, context: Params) {
  try {
    const { id } = context.params;
    const { completed } = await req.json();

    const updated = await prisma.event.update({
      where: { id },
      data: { completed },
    });

    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    console.error('PATCH /api/events/[id] failed:', error);
    return NextResponse.json(
      { error: 'Failed to update event' },
      { status: 500 }
    );
  }
}
