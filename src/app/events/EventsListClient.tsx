// 'use client';

// import { useEffect, useState } from 'react';

// export default function EventsListClient() {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     fetch('/api/events')
//       .then((res) => res.json())
//       .then(setEvents)
//       .catch((err) => console.error('❌ Failed to load events', err));
//   }, []);

//   return (
//     <div>
//       <h1>All Events</h1>
//       {events.map((event) => (
//         <div key={event.id}>
//           <h3>{event.companyName}</h3>
//           {/* etc */}
//         </div>
//       ))}
//     </div>
//   );
// }

'use client';

import { useEffect, useState } from 'react';

type Event = {
  id: string;
  fromDate: string;
  toDate: string;
  companyName: string;
  companyAddress: string;
  city: string;
  country: string;
  task: string;
  asmeId: string;
  asmeApp: string;
  aia: string;
  hotelName: string;
  airportName: string;
  completed: boolean;
  createdAt: string;
};

export default function EventsListClient() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then(setEvents)
      .catch(err => console.error('❌ Failed to load events', err));
  }, []);

  return (
    <div>
      <h1>All Events</h1>
      {events.map(event => (
        <div key={event.id}>
          <h3>{event.companyName}</h3>
          <p>{event.city}, {event.country}</p>
        </div>
      ))}
    </div>
  );
}
