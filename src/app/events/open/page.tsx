// import prisma from '@/lib/db';
// import Link from 'next/link';

// export default async function OpenEventsPage() {
//   const now = new Date();

//   const openEvents = await prisma.event.findMany({
//     where: {
//       fromDate: {
//         gt: now,
//       },
//     },
//     orderBy: {
//       fromDate: 'asc',
//     },
//   });

//   return (
//     <div className="p-10 max-w-3xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6">🟢 Open Events</h1>

//       {openEvents.length === 0 ? (
//         <p>No upcoming events.</p>
//       ) : (
//         <ul className="space-y-4">
//           {openEvents.map(event => (
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

// src/app/events/open/page.tsx
'use client';

import { useEffect, useState } from 'react';

type Event = {
  id: string;
  companyName: string;
  fromDate: string;
  toDate: string;
  completed: boolean;
};

export default function OpenEventsPage() {
  const [events, setEvents] = useState<Event[]>([]);

  // useEffect(() => {
  //   fetch('/api/events')
  //     .then(res => res.json())
  //     .then(data => setEvents(data.filter((e: Event) => !e.completed))); // ✅ Only incomplete
  // }, []);

  useEffect(() => {
    fetch('/api/events')
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`❌ Failed to fetch events: ${res.status}`);
        }
        return res.json();
      })
      .then(data => setEvents(data.filter((e: Event) => !e.completed))) // ✅ Only incomplete
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-green-600">🟢 Open Events</h1>
      {events.length === 0 ? (
        <p>No open events available.</p>
      ) : (
        <ul className="space-y-4">
          {events.map(event => (
            <li key={event.id} className="p-4 border rounded">
              <h3 className="font-bold">{event.companyName}</h3>
              <p>{new Date(event.fromDate).toLocaleDateString()} → {new Date(event.toDate).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
