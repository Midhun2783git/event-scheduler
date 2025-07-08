import prisma from '@/lib/db';
import EventsListClient from './EventsListClient';

export default async function EventsPage() {
  const events = await prisma.event.findMany({
    orderBy: { fromDate: 'desc' },
  });

  return <EventsListClient events={events} />;
}
