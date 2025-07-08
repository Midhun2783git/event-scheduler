// import { NextRequest, NextResponse } from 'next/server';
// import prisma from '@/lib/db';

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();

//     const event = await prisma.event.create({
//       data: {
//         fromDate: new Date(body.fromDate),
//         toDate: new Date(body.toDate),
//         companyName: body.companyName,
//         companyAddress: body.companyAddress,
//         city: body.city,
//         country: body.country,
//         task: body.task,
//         asmeId: body.asmeId,
//         asmeApp: body.asmeApp,
//         aia: body.aia,
//         hotelName: body.hotelName,
//         airportName: body.airportName,
//         completed: false,
//       },
//     });

//     return NextResponse.json(event, { status: 201 });
//   } catch (error) {
//     console.error('❌ Failed to create event:', error);
//     return NextResponse.json({ error: 'Failed to create event' }, { status: 500 });
//   }
// }

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const events = await prisma.event.findMany({
      orderBy: { fromDate: 'desc' },
    });
    return NextResponse.json(events);
  } catch (error) {
    console.error('❌ Failed to fetch events:', error);
    return NextResponse.json({ error: 'Failed to load events' }, { status: 500 });
  }
}

export async function POST() {
  try {
    const body = await req.json();

    const event = await prisma.event.create({
      data: {
        fromDate: new Date(body.fromDate),
        toDate: new Date(body.toDate),
        companyName: body.companyName,
        companyAddress: body.companyAddress,
        city: body.city,
        country: body.country,
        task: body.task,
        asmeId: body.asmeId,
        asmeApp: body.asmeApp,
        aia: body.aia,
        hotelName: body.hotelName,
        airportName: body.airportName,
        completed: false,
      },
    });

    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    console.error('❌ Failed to create event:', error);
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 });
  }
}
