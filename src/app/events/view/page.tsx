// 'use client';

// import { useRouter } from 'next/navigation';

// export default function ViewEventsPage() {
//   const router = useRouter();

//   return (
//     <main className="min-h-screen flex flex-col justify-center items-center gap-8 p-6">
//       <h1 className="text-3xl font-bold mb-8">📁 View Events</h1>
//       <div className="flex flex-col gap-6 w-full max-w-md">
//         <button
//           onClick={() => router.push('/events')}
//           className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded text-xl font-semibold"
//         >
//           All Events
//         </button>
//         <button
//           onClick={() => router.push('/events/open')}
//           className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-4 rounded text-xl font-semibold"
//         >
//           Open Events
//         </button>
//         <button
//           onClick={() => router.push('/events/close')}
//           className="w-full bg-gray-600 hover:bg-gray-700 text-white py-4 rounded text-xl font-semibold"
//         >
//           Closed Events
//         </button>
//       </div>
//     </main>
//   );
// }

// src/app/events/view/page.tsx
'use client';

import { useEffect, useState } from 'react';

type Event = {
  id: string;
  companyName: string;
  fromDate: string;
  toDate: string;
  completed: boolean;
};

export default function AllEventsPage() {
  const [events, setEvents] = useState<Event[]>([]);

  // useEffect(() => {
  //   fetch('/api/events')
  //     .then(res => res.json())
  //     .then(setEvents);
  // }, []);
  useEffect(() => {
    fetch('/api/events')
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`❌ Failed to fetch events: ${res.status}`);
        }
        return res.json();
      })
      .then(setEvents)
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const toggleCompletion = async (id: string, completed: boolean) => {
    await fetch(`/api/events/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed }),
    });

    setEvents(events.map(e => (e.id === id ? { ...e, completed } : e)));
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">📋 All Events</h1>
      {events.length === 0 ? (
        <p>No events available.</p>
      ) : (
        <ul className="space-y-4">
          {events.map(event => (
            <li key={event.id} className="p-4 border rounded flex justify-between items-center">
              <div>
                <h3 className="font-bold">{event.companyName}</h3>
                <p>{new Date(event.fromDate).toLocaleDateString()} → {new Date(event.toDate).toLocaleDateString()}</p>
              </div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={event.completed}
                  onChange={e => toggleCompletion(event.id, e.target.checked)}
                  className="w-5 h-5"
                />
                {event.completed ? '✅ Closed' : '🟢 Open'}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
