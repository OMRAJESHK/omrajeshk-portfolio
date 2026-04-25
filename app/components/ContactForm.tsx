'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setStatus('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { name, email, message } = form;
    if (!name || !email || !message) {
      setStatus('Please complete all fields before sending.');
      return;
    }

    const subject = `Website inquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:eminantcoding@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus('Opening your email client...');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-slate-100">
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="rounded-2xl border border-slate-600 bg-slate-700 px-4 py-3 text-slate-100 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 placeholder-slate-400"
            placeholder="Your name"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-slate-100">
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="rounded-2xl border border-slate-600 bg-slate-700 px-4 py-3 text-slate-100 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 placeholder-slate-400"
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm text-slate-100">
        Message
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={6}
          className="rounded-3xl border border-slate-600 bg-slate-700 px-4 py-3 text-slate-100 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 placeholder-slate-400"
          placeholder="Tell me about your project or support needs"
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-300">This form opens your email client so your message is sent directly to eminantcoding@gmail.com.</p>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          Send message
        </button>
      </div>
      {status ? <p className="text-sm text-slate-400">{status}</p> : null}
    </form>
  );
}
