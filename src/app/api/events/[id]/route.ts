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
