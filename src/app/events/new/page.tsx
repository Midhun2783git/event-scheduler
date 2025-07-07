// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// export default function NewEventPage() {
//   const router = useRouter();

//   const [form, setForm] = useState({
//     fromDate: '',
//     toDate: '',
//     companyName: '',
//     companyAddress: '',
//     city: '',
//     country: '',
//     task: '',
//     asmeId: '',
//     asmeApp: '',
//     aia: '',
//     hotelName: '',
//     airportName: '',
//   });

//   useEffect(() => {
//     if (status === 'unauthenticated') {
//       router.push('/auth/login');
//     }
//   }, [status, router]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const createEvent = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const res = await fetch('/api/events', {
//       method: 'POST',
//       body: JSON.stringify(form),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (res.ok) {
//       router.push('/events');
//     } else {
//       alert('❌ Failed to create event.');
//     }
//   };

//   if (status === 'loading') return <p className="p-10 text-center">Checking authentication...</p>;

//   return (
//     <form onSubmit={createEvent} className="p-10 max-w-2xl mx-auto space-y-4">
//       <h2 className="text-2xl font-bold mb-6 text-center">📅 Create New Event</h2>

//       <input name="fromDate" type="date" value={form.fromDate} onChange={handleChange} placeholder="From Date" required className="input" />
//       <input name="toDate" type="date" value={form.toDate} onChange={handleChange} placeholder="To Date" required className="input" />
//       <input name="companyName" type="text" value={form.companyName} onChange={handleChange} placeholder="Company Name" required className="input" />
//       <input name="companyAddress" type="text" value={form.companyAddress} onChange={handleChange} placeholder="Company Address" className="input" />
//       <input name="city" type="text" value={form.city} onChange={handleChange} placeholder="City Name" className="input" />
//       <input name="country" type="text" value={form.country} onChange={handleChange} placeholder="Country Code (e.g. US)" className="input" />
//       <textarea name="task" value={form.task} onChange={handleChange} placeholder="Task/Activity to be done" className="input" />
//       <input name="asmeId" type="text" value={form.asmeId} onChange={handleChange} placeholder="ASME ID" className="input" />
//       <input name="asmeApp" type="text" value={form.asmeApp} onChange={handleChange} placeholder="ASME APP" className="input" />
//       <input name="aia" type="text" value={form.aia} onChange={handleChange} placeholder="AIA" className="input" />
//       <input name="hotelName" type="text" value={form.hotelName} onChange={handleChange} placeholder="Hotel Name" className="input" />
//       <input name="airportName" type="text" value={form.airportName} onChange={handleChange} placeholder="Airport Name" className="input" />

//       <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//         ➕ Create Event
//       </button>
//     </form>
//   );
// }

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
          <input type="date" name="fromDate" value={form.fromDate} onChange={handleChange} required className="input w-full" />
        </div>
        <div>
          <label className="block mb-1 font-medium">To Date</label>
          <input type="date" name="toDate" value={form.toDate} onChange={handleChange} required className="input w-full" />
        </div>
      </div>

      {/* Company Details */}
      <div>
        <label className="block mb-1 font-medium">Company Name</label>
        <input type="text" name="companyName" value={form.companyName} onChange={handleChange} required className="input w-full" />
      </div>

      <div>
        <label className="block mb-1 font-medium">Company Address</label>
        <input type="text" name="companyAddress" value={form.companyAddress} onChange={handleChange} className="input w-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">City Name</label>
          <input type="text" name="city" value={form.city} onChange={handleChange} className="input w-full" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Country Code (e.g. US)</label>
          <input type="text" name="country" value={form.country} onChange={handleChange} className="input w-full" />
        </div>
      </div>

      {/* Task */}
      <div>
        <label className="block mb-1 font-medium">Task / Activity to be done</label>
        <textarea name="task" value={form.task} onChange={handleChange} rows={3} className="input w-full" />
      </div>

      {/* IDs & Codes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block mb-1 font-medium">ASME ID</label>
          <input type="text" name="asmeId" value={form.asmeId} onChange={handleChange} className="input w-full" />
        </div>
        <div>
          <label className="block mb-1 font-medium">ASME APP</label>
          <input type="text" name="asmeApp" value={form.asmeApp} onChange={handleChange} className="input w-full" />
        </div>
        <div>
          <label className="block mb-1 font-medium">AIA</label>
          <input type="text" name="aia" value={form.aia} onChange={handleChange} className="input w-full" />
        </div>
      </div>

      {/* Hotel & Airport */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Hotel Name</label>
          <input type="text" name="hotelName" value={form.hotelName} onChange={handleChange} className="input w-full" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Airport Name</label>
          <input type="text" name="airportName" value={form.airportName} onChange={handleChange} className="input w-full" />
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
