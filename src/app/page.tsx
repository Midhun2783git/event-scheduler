'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-8 p-6">
      <h1 className="text-4xl font-bold mb-8">📅 Event Scheduler</h1>
      <div className="flex flex-col gap-6 w-full max-w-md">
        <button
          onClick={() => router.push('/events/view')}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded text-xl font-semibold"
        >
          View Events
        </button>
        <button
          onClick={() => router.push('/events/new')}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded text-xl font-semibold"
        >
          Create Event
        </button>
      </div>
    </main>
  );
}

