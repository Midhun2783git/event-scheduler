'use client';

import { useCallback } from 'react';
import Link from 'next/link';

export default function EventsListClient({ events }: { events: any[] }) {
  const handlePrint = useCallback((id: string) => {
    const content = document.getElementById(`print-${id}`);
    if (!content) return;

    const printWindow = window.open('', '', 'width=800,height=600');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Print Event</title>
            <style>
              body { font-family: sans-serif; padding: 20px; }
              h1 { margin-bottom: 0.5em; }
            </style>
          </head>
          <body>${content.innerHTML}</body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    }
  }, []);

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📅 All Events</h1>

      {events.length === 0 ? (
        <p>
          No events yet. <Link href="/events/new" className="text-blue-500 underline">Create one</Link>.
        </p>
      ) : (
        <ul className="space-y-4">
          {events.map(event => (
            <li
              key={event.id}
              className="border border-gray-200 p-4 rounded shadow-sm flex justify-between items-start"
            >
              <div id={`print-${event.id}`}>
                <h3 className="text-xl font-semibold">{event.companyName}</h3>
                <p className="text-gray-600">From: {new Date(event.fromDate).toLocaleDateString()}</p>
                <p className="text-gray-600">To: {new Date(event.toDate).toLocaleDateString()}</p>
                <p className="text-gray-500">{event.city}, {event.country}</p>
              </div>
              <div className="space-y-2 flex flex-col items-end">
                <Link
                  href={`/events/edit/${event.id}`}
                  className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Edit
                </Link>
                <form action={`/api/events/${event.id}`} method="POST">
                  <button
                    type="submit"
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </form>
                <button
                  onClick={() => handlePrint(event.id)}
                  className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  🖨️ Print
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-8">
        <Link
          href="/events/new"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          ➕ Create New Event
        </Link>
      </div>
    </div>
  );
}
