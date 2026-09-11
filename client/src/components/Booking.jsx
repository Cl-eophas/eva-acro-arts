import { useState } from 'react';
import Reveal from './Reveal';
import { brand, eventTypes, trainingServices } from '../data/content';
import { PERFORMANCE_WHATSAPP_MESSAGE, TRAINING_WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from '../config/whatsapp';

const initialState = {
  intent: 'performance',
  name: '',
  email: '',
  phone: '',
  service: '',
  eventType: '',
  date: '',
  location: '',
  audience: '',
  message: '',
  website: '', // honeypot field
};

export default function Booking() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState('idle'); // idle | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const sendViaEmail = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error');
      setErrorMsg('Please fill in your name, email and a short message.');
      return;
    }
    const details = [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      form.phone && `Phone: ${form.phone.trim()}`,
      `Enquiry type: ${form.intent === 'performance' ? 'Performance booking' : 'Training/classes'}`,
      `Message: ${form.message.trim()}`,
    ].filter(Boolean).join('\n');
    const subject = form.intent === 'performance' ? 'Performance booking enquiry' : 'Training/classes enquiry';
    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(details)}`;
    setStatus('success');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (form.website) {
      // honeypot triggered — silently "succeed" without sending
      setStatus('success');
      return;
    }

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error');
      setErrorMsg('Please fill in your name, email and a short message.');
      return;
    }

    try {
      const details = [
        `Name: ${form.name.trim()}`,
        `Email: ${form.email.trim()}`,
        form.phone && `Phone: ${form.phone.trim()}`,
        `Enquiry type: ${isPerformance ? 'Performance booking' : 'Training enquiry'}`,
        form.service && `Training interest: ${form.service}`,
        form.eventType && `Event type: ${form.eventType}`,
        form.date && `Date: ${form.date}`,
        form.location && `Location: ${form.location}`,
        form.audience && `Audience / occasion: ${form.audience}`,
        `Message: ${form.message.trim()}`,
      ].filter(Boolean).join('\n');
      const greeting = isPerformance ? PERFORMANCE_WHATSAPP_MESSAGE : TRAINING_WHATSAPP_MESSAGE;
      const message = `${greeting}\n\n${details}`;
      const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(whatsappLink, '_blank', 'noopener,noreferrer');
      setStatus('success');
      setForm(initialState);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    }
  };

  const isPerformance = form.intent === 'performance';

  return (
    <section id="book" className="relative overflow-x-clip bg-ink-950 px-5 py-24 sm:px-6 md:py-32" aria-labelledby="booking-heading">
      <div className="mx-auto w-full min-w-0 max-w-3xl">
        <div className="text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-400 sm:tracking-[0.35em]">Booking</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 id="booking-heading" className="mt-4 max-w-full font-display text-3xl font-semibold sm:text-4xl md:text-5xl">
              Let's make it happen
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-white/70">
              Tell us a little about what you need and we'll get back to you as soon as possible.
            </p>
          </Reveal>
        </div>

        {/* Intent toggle */}
        {status !== 'success' && (
        <Reveal delay={0.25} className="mt-10 flex w-full flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            onClick={() => setForm((f) => ({ ...initialState, intent: 'performance', name: f.name, email: f.email }))}
            aria-pressed={isPerformance}
            className={`w-full rounded-full px-6 py-3 text-sm font-semibold transition sm:w-auto ${
              isPerformance
                ? 'bg-gradient-to-r from-magenta-600 via-violet-600 to-aqua-500 text-white shadow-glow'
                : 'border border-white/15 text-white/70 hover:border-gold-400 hover:text-gold-300'
            }`}
          >
            Book a Performance
          </button>
          <button
            type="button"
            onClick={() => setForm((f) => ({ ...initialState, intent: 'training', name: f.name, email: f.email }))}
            aria-pressed={!isPerformance}
            className={`w-full rounded-full px-6 py-3 text-sm font-semibold transition sm:w-auto ${
              !isPerformance
                ? 'bg-gradient-to-r from-magenta-600 via-violet-600 to-aqua-500 text-white shadow-glow'
                : 'border border-white/15 text-white/70 hover:border-gold-400 hover:text-gold-300'
            }`}
          >
            Enquire About Training
          </button>
        </Reveal>
        )}

        <Reveal delay={0.3}>
          {status === 'success' ? (
            <div
              role="status"
              aria-live="polite"
              className="mt-10 rounded-2xl border border-aqua-400/30 bg-aqua-400/5 px-6 py-12 text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-magenta-600 via-violet-600 to-aqua-500">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-semibold text-white">Thank you!</h3>
              <p className="mt-2 text-white/70">
                Your message has been prepared in your chosen contact app. It has not been stored on this website.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-6 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/80 transition hover:border-gold-400 hover:text-gold-300"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
          <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2" noValidate>
            {/* Honeypot - hidden from real users */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" tabIndex="-1" autoComplete="off" value={form.website} onChange={update('website')} />
            </div>

            <Field label="Full name" htmlFor="name" required>
              <input id="name" required type="text" value={form.name} onChange={update('name')} autoComplete="name" className={inputClass} />
            </Field>
            <Field label="Email" htmlFor="email" required>
              <input id="email" required type="email" value={form.email} onChange={update('email')} autoComplete="email" className={inputClass} />
            </Field>
            <Field label="Phone" htmlFor="phone">
              <input id="phone" type="tel" value={form.phone} onChange={update('phone')} autoComplete="tel" className={inputClass} />
            </Field>

            {isPerformance ? (
              <Field label="Event type" htmlFor="eventType">
                <select id="eventType" value={form.eventType} onChange={update('eventType')} className={inputClass}>
                  <option value="">Select an option</option>
                  {eventTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </Field>
            ) : (
              <Field label="Training service" htmlFor="service">
                <select id="service" value={form.service} onChange={update('service')} className={inputClass}>
                  <option value="">Select an option</option>
                  {trainingServices.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </Field>
            )}

            <Field label={isPerformance ? 'Preferred event date' : 'Preferred start date'} htmlFor="date">
              <input id="date" type="date" value={form.date} onChange={update('date')} className={inputClass} />
            </Field>

            {isPerformance && (
              <Field label="Location" htmlFor="location">
                <input id="location" type="text" value={form.location} onChange={update('location')} className={inputClass} placeholder="Venue / city" />
              </Field>
            )}
            {isPerformance && (
              <Field label="Audience / occasion" htmlFor="audience" className="sm:col-span-2">
                <input id="audience" type="text" value={form.audience} onChange={update('audience')} className={inputClass} placeholder="e.g. 150-guest wedding reception" />
              </Field>
            )}

            <Field label="Message" htmlFor="message" required className="sm:col-span-2">
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={update('message')}
                className={inputClass}
                placeholder={isPerformance ? 'Tell us about your event and any special requirements…' : 'Tell us about your goals and experience level…'}
              />
            </Field>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-magenta-600 via-violet-600 to-aqua-500 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-glow transition hover:brightness-110 disabled:opacity-60"
              >
                Send via WhatsApp
              </button>

              <button
                type="button"
                onClick={sendViaEmail}
                className="mt-3 w-full rounded-full border border-white/25 bg-white/5 px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:border-gold-400 hover:text-gold-300"
              >
                Send via Email
              </button>

              <p className="mt-4 break-words text-center text-xs text-white/50">
                Prefer email or phone? Reach us at{' '}
                <a href={`mailto:${brand.email}`} className="underline hover:text-gold-300">{brand.email}</a>
                {brand.phone ? ` or ${brand.phone}` : ''}.
              </p>

              <div role="status" aria-live="polite" className="mt-4 text-center text-sm">
                {status === 'error' && <p className="text-magenta-400">{errorMsg}</p>}
              </div>
            </div>
          </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

const inputClass =
  'w-full min-w-0 max-w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition focus:border-aqua-400';

function Field({ label, htmlFor, required, children, className = '' }) {
  return (
    <div className={`min-w-0 ${className}`}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-white/80">
        {label} {required && <span className="text-magenta-400">*</span>}
      </label>
      {children}
    </div>
  );
}
