import { NextRequest, NextResponse } from 'next/server';
import type { RouteHandlerContext } from 'next/dist/server/web/types'; // This is key
import prisma from '@/lib/db';

export async function PATCH(
  req: NextRequest,
  context: RouteHandlerContext
) {
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
