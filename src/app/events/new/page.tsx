'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewEventPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    fromDate: '',
    toDate: '',
    companyName: '',
    companyAddress: '',
    city: '',
    country: '',
    task: '',
    asmeId: '',
    asmeApp: '',
    aia: '',
    hotelName: '',
    airportName: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const createEvent = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/events', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      router.push('/events');
    } else {
      alert('❌ Failed to create event.');
    }
  };

  return (
    <form onSubmit={createEvent} className="p-8 max-w-3xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-center mb-6">📅 Create New Event</h2>

      {/* Dates */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">From Date</label>
          <input
            type="date"
            name="fromDate"
            value={form.fromDate}
            onChange={handleChange}
            required
            className="input w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">To Date</label>
          <input
            type="date"
            name="toDate"
            value={form.toDate}
            onChange={handleChange}
            required
            className="input w-full"
          />
        </div>
      </div>

      {/* Company Info */}
      <div>
        <label className="block mb-1 font-medium">Company Name</label>
        <input
          type="text"
          name="companyName"
          value={form.companyName}
          onChange={handleChange}
          required
          className="input w-full"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Company Address</label>
        <input
          type="text"
          name="companyAddress"
          value={form.companyAddress}
          onChange={handleChange}
          required
          className="input w-full"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">City</label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            required
            className="input w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Country</label>
          <input
            type="text"
            name="country"
            value={form.country}
            onChange={handleChange}
            required
            className="input w-full"
          />
        </div>
      </div>

      {/* Task */}
      <div>
        <label className="block mb-1 font-medium">Task / Activity</label>
        <textarea
          name="task"
          value={form.task}
          onChange={handleChange}
          required
          rows={3}
          className="input w-full"
        />
      </div>

      {/* IDs and Codes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block mb-1 font-medium">ASME ID</label>
          <input
            type="text"
            name="asmeId"
            value={form.asmeId}
            onChange={handleChange}
            required
            className="input w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">ASME APP</label>
          <input
            type="text"
            name="asmeApp"
            value={form.asmeApp}
            onChange={handleChange}
            required
            className="input w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">AIA</label>
          <input
            type="text"
            name="aia"
            value={form.aia}
            onChange={handleChange}
            required
            className="input w-full"
          />
        </div>
      </div>

      {/* Hotel & Airport */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Hotel Name</label>
          <input
            type="text"
            name="hotelName"
            value={form.hotelName}
            onChange={handleChange}
            required
            className="input w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Airport Name</label>
          <input
            type="text"
            name="airportName"
            value={form.airportName}
            onChange={handleChange}
            required
            className="input w-full"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold text-lg py-2 rounded hover:bg-blue-700 transition"
      >
        ➕ Create Event
      </button>
    </form>
  );
}
