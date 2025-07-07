// import prisma from '@/lib/db';
// import Link from 'next/link';

// export default async function ClosedEventsPage() {
//   const now = new Date();

//   const closedEvents = await prisma.event.findMany({
//     where: {
//       toDate: {
//         lt: now,
//       },
//     },
//     orderBy: {
//       toDate: 'desc',
//     },
//   });

//   return (
//     <div className="p-10 max-w-3xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6">🔴 Closed Events</h1>

//       {closedEvents.length === 0 ? (
//         <p>No past events found.</p>
//       ) : (
//         <ul className="space-y-4">
//           {closedEvents.map(event => (
//             <li
//               key={event.id}
//               className="border border-gray-200 p-4 rounded shadow-sm"
//             >
//               <h3 className="text-xl font-semibold">{event.companyName}</h3>
//               <p>{event.city}, {event.country}</p>
//               <p>From: {new Date(event.fromDate).toLocaleDateString()}</p>
//               <p>To: {new Date(event.toDate).toLocaleDateString()}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// src/app/events/close/page.tsx
'use client';

import { useEffect, useState } from 'react';

type Event = {
  id: string;
  companyName: string;
  fromDate: string;
  toDate: string;
  completed: boolean;
};

export default function ClosedEventsPage() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then(data => setEvents(data.filter((e: Event) => e.completed))); // ✅ Only complete
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-red-700">✅ Closed Events</h1>
      {events.length === 0 ? (
        <p>No closed events yet.</p>
      ) : (
        <ul className="space-y-4">
          {events.map(event => (
            <li key={event.id} className="p-4 border rounded ">
              <h3 className="font-bold">{event.companyName}</h3>
              <p>{new Date(event.fromDate).toLocaleDateString()} → {new Date(event.toDate).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
