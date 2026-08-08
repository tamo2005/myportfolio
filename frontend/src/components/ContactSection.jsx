import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Mail, Github, Linkedin, MapPin, Calendar, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { openCalendar, socialLinks, RESUME_PATH } from '../utils/constants.js';

/**
 * ContactSection.jsx — EmailJS wired contact form.
 *
 * Set these three environment variables in .env:
 *   VITE_EMAILJS_SERVICE_ID   = your EmailJS service ID
 *   VITE_EMAILJS_TEMPLATE_ID  = your EmailJS template ID
 *   VITE_EMAILJS_PUBLIC_KEY   = your EmailJS public key
 *
 * Template variables EmailJS should use:
 *   {{from_name}}   {{from_email}}   {{message}}   {{to_name}}
 */

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || '';

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'tamagnoroy.roy2005@gmail.com',
    href: 'mailto:tamagnoroy.roy2005@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/tamo2005',
    href: 'https://github.com/tamo2005',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/tamagno-roy',
    href: 'https://www.linkedin.com/in/tamagno-roy-2ab072290/',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Kolkata, India',
    href: null,
  },
];

const ContactSection = () => {
  const [animated, setAnimated] = useState(false);
  const [form, setForm]         = useState({ name: '', email: '', message: '' });
  const [status, setStatus]     = useState('idle'); // idle | sending | success | error
  const [error, setError]       = useState('');
  const sectionRef              = useRef(null);
  const formRef                 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimated(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    if (!form.name.trim())    return 'Please enter your name.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return 'Please enter a valid email address.';
    if (form.message.trim().length < 20)
      return 'Message must be at least 20 characters.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) { setError(validationError); return; }
    setError('');
    setStatus('sending');

    try {
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        // No credentials yet — simulate for demo
        await new Promise((r) => setTimeout(r, 1200));
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        return;
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
          to_name:    'Tamagno',
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const reset = () => setStatus('idle');

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 relative"
      style={{ background: 'var(--bg)' }}
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'var(--border)' }} />

      <div className="section-container">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-label">Get in Touch</p>
          <h2 className="section-heading">
            Let's Work Together<span className="dot-accent">.</span>
          </h2>
          <p className="mt-4 text-base max-w-lg mx-auto" style={{ color: 'var(--txt-2)' }}>
            Whether it's a research collaboration, internship, or just a good conversation about AI systems — I'm always happy to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* ── Left: contact methods ──────────────────────────── */}
          <div className={`lg:col-span-2 space-y-4 transition-all duration-700 delay-100 ${animated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>

            {CONTACT_METHODS.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="card card-accent p-4 flex items-center gap-4 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--glow)', border: '1px solid var(--border-a)' }}
                >
                  <Icon className="w-4.5 h-4.5 w-5 h-5" style={{ color: 'var(--accent)' }} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-medium mb-0.5" style={{ color: 'var(--txt-3)' }}>{label}</div>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="text-sm font-medium truncate block hover:underline transition-colors"
                      style={{ color: 'var(--txt)' }}
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium" style={{ color: 'var(--txt)' }}>{value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Schedule a call */}
            <button
              onClick={openCalendar}
              className="w-full btn-outline mt-2"
            >
              <Calendar className="w-4 h-4" />
              Schedule a call
            </button>

            {/* Download CV */}
            <a
              href={RESUME_PATH}
              download="Tamagno_Roy_Resume.pdf"
              className="btn-primary w-full text-center"
            >
              Download CV
            </a>
          </div>

          {/* ── Right: form ────────────────────────────────────── */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-150 ${animated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="card p-6 sm:p-8">

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)' }}>
                    <CheckCircle className="w-7 h-7" style={{ color: '#10B981' }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--txt)' }}>Message sent!</h3>
                    <p className="text-sm" style={{ color: 'var(--txt-2)' }}>I'll reply within 24 hours.</p>
                  </div>
                  <button onClick={reset} className="btn-outline mt-2">Send another</button>
                </div>
              ) : status === 'error' ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.3)' }}>
                    <AlertCircle className="w-7 h-7" style={{ color: '#EF4444' }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--txt)' }}>Something went wrong</h3>
                    <p className="text-sm" style={{ color: 'var(--txt-2)' }}>
                      Please email me directly at{' '}
                      <a href="mailto:tamagnoroy.roy2005@gmail.com" className="underline" style={{ color: 'var(--accent)' }}>
                        tamagnoroy.roy2005@gmail.com
                      </a>
                    </p>
                  </div>
                  <button onClick={reset} className="btn-outline mt-2">Try again</button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
                  <h3 className="text-lg font-bold mb-6" style={{ color: 'var(--txt)' }}>Send a message</h3>

                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--txt-2)' }}>
                        Your name
                      </label>
                      <input
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Tamagno Roy"
                        className="field"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--txt-2)' }}>
                        Email address
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="field"
                        required
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--txt-2)' }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="I'd love to discuss a research collaboration on..."
                      rows={5}
                      className="field resize-none"
                      required
                    />
                  </div>

                  {/* Validation error */}
                  {error && (
                    <div className="flex items-center gap-2 text-sm px-4 py-3 rounded-xl" style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: '#EF4444' }}>
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {error}
                    </div>
                  )}

                  {/* EmailJS env warning */}
                  {(!EMAILJS_SERVICE_ID) && (
                    <div className="text-xs px-4 py-3 rounded-xl" style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', color: '#F59E0B' }}>
                      ⚠️ Set <code className="mono">VITE_EMAILJS_*</code> variables in <code className="mono">.env</code> to enable real email delivery.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader className="w-4 h-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;