'use client';

import { useState } from 'react';

const initialForm = {
  name: '',
  business: '',
  website: '',
  email: '',
  country: '',
  goal: '',
  message: '',
  company_url: '',
};

export function InquiryForm({
  submitLabel = 'Request a discovery call',
  successMessage = 'Thanks — your discovery request has been received.',
}) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ message: '', state: '' });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ message: 'Sending your discovery request...', state: 'loading' });

    try {
      const payload = { ...form, pageUrl: window.location.href };
      const response = await fetch('/api/audit-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.ok) {
        throw new Error(result.message || 'Unable to send your request right now.');
      }
      setForm(initialForm);
      setStatus({ message: result.message || successMessage, state: 'success' });
    } catch (error) {
      setStatus({
        message: `${error.message || 'Something went wrong.'} You can also email jbxxnn6@gmail.com directly.`,
        state: 'error',
      });
    } finally {
      setSubmitting(false);
    }
  }

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  return (
    <form className="lead-form" action="/api/audit-submit" method="post" data-audit-form onSubmit={handleSubmit}>
      <label>
        Your name
        <input name="name" type="text" autoComplete="name" placeholder="Jane Smith" required value={form.name} onChange={updateField} />
      </label>
      <label>
        Clinic / business name
        <input
          name="business"
          type="text"
          autoComplete="organization"
          placeholder="Smith Dental Clinic"
          required
          value={form.business}
          onChange={updateField}
        />
      </label>
      <label>
        Website URL
        <input name="website" type="url" placeholder="https://example.com" required value={form.website} onChange={updateField} />
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required value={form.email} onChange={updateField} />
      </label>
      <label>
        Country
        <input name="country" type="text" autoComplete="country-name" placeholder="United Kingdom" value={form.country} onChange={updateField} />
      </label>
      <label>
        What do you need most?
        <select name="goal" required value={form.goal} onChange={updateField}>
          <option value="">Choose one</option>
          <option>Discovery call</option>
          <option>Operational systems review</option>
          <option>Booking and workflow assessment</option>
          <option>Custom operations software</option>
          <option>Improving current tools</option>
        </select>
      </label>
      <label>
        What should I know?
        <textarea name="message" rows="4" placeholder="Tell me where operations feel heavier than they should." value={form.message} onChange={updateField} />
      </label>
      <label className="hp-field" aria-hidden="true" tabIndex="-1">
        Company URL
        <input name="company_url" type="text" autoComplete="off" tabIndex="-1" value={form.company_url} onChange={updateField} />
      </label>
      <button className="primary-button form-button" type="submit" data-submit-button disabled={submitting}>
        {submitLabel}
      </button>
      <p className="form-note">Your request is saved so I can review the business context and reply by email.</p>
      <p className="form-status" data-form-status data-state={status.state} role="status" aria-live="polite">
        {status.message}
      </p>
    </form>
  );
}
