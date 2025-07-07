import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function PATCH(req: NextRequest, context: unknown) {
  try {
    // Cast to expected shape inside function
    const { params } = context as { params: { id: string } };
    const { id } = params;

    const { completed } = await req.json();

    const updated = await prisma.event.update({
      where: { id },
      data: { completed },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('PATCH /api/events/[id] failed:', error);
    return NextResponse.json({ error: 'Failed to update event' }, { status: 500 });
  }
}
