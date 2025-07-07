import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function PATCH(
  req: NextRequest,
  { params }: { params: Record<string, string> }
) {
  try {
    const { completed } = await req.json();

    const updated = await prisma.event.update({
      where: { id: params.id },
      data: { completed },
    });

    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    console.error('Error updating event:', error);
    return NextResponse.json(
      { error: 'Failed to update event' },
      { status: 500 }
    );
  }
}
