'use client'

import { useState, FormEvent } from 'react'
import { company, services } from './content'

export default function EstimateForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.currentTarget)
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      })
      setStatus(res.ok ? 'done' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="bg-white border border-stone-line p-8 sm:p-10" role="status">
        <h2 className="font-heading font-bold uppercase text-3xl text-navy">Request received</h2>
        <p className="mt-3 text-stone-text">
          Thanks — we&apos;ll follow up shortly to schedule your consultation. Need us sooner? Call{' '}
          <a href={company.phoneHref} className="font-semibold text-navy">{company.phone}</a>.
        </p>
      </div>
    )
  }

  return (
    <form
      name="estimate"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="bg-white border border-stone-line p-6 sm:p-10 space-y-5"
    >
      <input type="hidden" name="form-name" value="estimate" />
      <p className="hidden">
        <label>Don&apos;t fill this out: <input name="bot-field" /></label>
      </p>

      <h2 className="font-heading font-bold uppercase text-3xl text-navy">Tell us about your project</h2>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="label">Name</label>
          <input id="name" name="name" type="text" required autoComplete="name" className="field" />
        </div>
        <div>
          <label htmlFor="phone" className="label">Phone</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className="field" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="label">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" className="field" />
        </div>
        <div>
          <label htmlFor="city" className="label">City / ZIP</label>
          <input id="city" name="city" type="text" required autoComplete="address-level2" className="field" />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="label">Project type</label>
        <select id="service" name="service" required className="field" defaultValue="">
          <option value="" disabled>Select one…</option>
          {services.map((s) => (
            <option key={s.id} value={s.title}>{s.title}</option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="details" className="label">Project details</label>
        <textarea id="details" name="details" rows={5} className="field" placeholder="Type of space, square footage, timeline, budget range — anything that helps us prepare." />
      </div>

      {status === 'error' && (
        <p className="text-red-700 font-semibold" role="alert">
          Something went wrong sending the form. Please call {company.phone}.
        </p>
      )}

      <button type="submit" disabled={status === 'sending'} className="btn-gold w-full disabled:opacity-60">
        {status === 'sending' ? 'Sending…' : 'Send my request'}
      </button>
      <p className="text-sm text-stone-text">No obligation. We don&apos;t share your information.</p>
    </form>
  )
}
