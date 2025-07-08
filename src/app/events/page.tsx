// import prisma from '@/lib/db';
// import EventsListClient from './EventsListClient';

// export default async function EventsPage() {
//   const events = await prisma.event.findMany({
//     orderBy: { fromDate: 'desc' },
//   });

//   return <EventsListClient events={events} />;
// }

// import EventsListClient from './EventsListClient'; // wherever your client component is
// import prisma from '@/lib/db';

// export default async function EventsPage() {
//   const events = await prisma.event.findMany({
//     orderBy: { fromDate: 'desc' },
//   });

//   // Convert Date objects to ISO strings:
//   const eventsWithStrings = events.map(event => ({
//     ...event,
//     fromDate: event.fromDate.toISOString(),
//     toDate: event.toDate.toISOString(),
//     createdAt: event.createdAt.toISOString(),
//   }));

//   return <EventsListClient events={eventsWithStrings} />;
// }

import EventsListClient from './EventsListClient';

export default function EventsPage() {
  return (
    <div className="p-10">
      <EventsListClient />
    </div>
  );
}

