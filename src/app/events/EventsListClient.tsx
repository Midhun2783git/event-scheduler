'use client';

import { useEffect, useState } from 'react';

export default function EventsListClient() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/events')
      .then((res) => res.json())
      .then(setEvents)
      .catch((err) => console.error('❌ Failed to load events', err));
  }, []);

  return (
    <div>
      <h1>All Events</h1>
      {events.map((event) => (
        <div key={event.id}>
          <h3>{event.companyName}</h3>
          {/* etc */}
        </div>
      ))}
    </div>
  );
}
