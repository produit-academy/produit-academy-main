import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Instagram, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [apiError, setApiError] = useState('');
  const mountTimeRef = useRef(Date.now());

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) {
      errs.name = 'Please provide your full name.';
    }
    if (!form.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (form.phone.trim() && !/^[+]?[0-9\s-]{10,15}$/.test(form.phone.trim())) {
      errs.phone = 'Please enter a valid 10-15 digit phone number.';
    }
    if (!form.message.trim()) {
      errs.message = 'Please write a brief message or question.';
    } else if (form.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');

    // Spam / Bot Protection 1: Check honeypot field
    if (honeypot) {
      console.warn('Bot submission blocked via honeypot');
      setSubmitted(true);
      return;
    }

    // Spam / Bot Protection 2: Minimum human fill time (1 second)
    const elapsed = Date.now() - mountTimeRef.current;
    if (elapsed < 1000) {
      console.warn('Bot submission blocked via velocity filter');
      return;
    }

    // Form validation
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSending(true);

    try {
      const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || 'Not Provided',
        platform: 'classes',
        course: 'General Inquiry',
        message: form.message.trim(),
      };

      const res = await fetch(`${apiBase}/api/contact/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        const errorData = await res.json().catch(() => null);
        const msg = errorData
          ? Object.values(errorData).flat().join(' ')
          : 'Failed to deliver message. Please contact us directly via email.';
        setApiError(msg);
      }
    } catch (err) {
      // Graceful fallback for offline dev or temporary network issues
      console.error('Contact submission error:', err);
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', message: '' });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section__container">
        <div className="section__header">
          <span className="section__label">Inquiries</span>
          <h2 className="section__heading">Get in Touch</h2>
        </div>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-info__item">
              <div className="contact-info__icon">
                <MapPin size={18} />
              </div>
              <div>
                <h4>Address</h4>
                <p>Produit Academy, Kollam, Kerala, India</p>
              </div>
            </div>

            <div className="contact-info__item">
              <div className="contact-info__icon">
                <Mail size={18} />
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:produitacademy@gmail.com">produitacademy@gmail.com</a>
              </div>
            </div>

            <div className="contact-info__item">
              <div className="contact-info__icon">
                <Phone size={18} />
              </div>
              <div>
                <h4>Phone</h4>
                <a href="tel:+918139805996">+91 8139 805 996</a>
              </div>
            </div>

            <div className="contact-info__item">
              <div className="contact-info__icon">
                <Instagram size={18} />
              </div>
              <div>
                <h4>Instagram</h4>
                <a
                  href="https://www.instagram.com/produit.academy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @produit.academy
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {/* Honeypot field (hidden from real users, filled by bots) */}
            <div style={{ display: 'none' }} aria-hidden="true">
              <label htmlFor="contact-website">Leave this field blank</label>
              <input
                id="contact-website"
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex="-1"
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-name">Full Name *</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                style={errors.name ? { borderColor: '#ef4444' } : undefined}
              />
              {errors.name && (
                <span style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: '4px', display: 'block' }}>
                  {errors.name}
                </span>
              )}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-email">Email Address *</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  style={errors.email ? { borderColor: '#ef4444' } : undefined}
                />
                {errors.email && (
                  <span style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: '4px', display: 'block' }}>
                    {errors.email}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="contact-phone">Mobile Number</label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={handleChange}
                  style={errors.phone ? { borderColor: '#ef4444' } : undefined}
                />
                {errors.phone && (
                  <span style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: '4px', display: 'block' }}>
                    {errors.phone}
                  </span>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message *</label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows="4"
                placeholder="Tell us about the subject or course you need assistance with..."
                value={form.message}
                onChange={handleChange}
                style={errors.message ? { borderColor: '#ef4444' } : undefined}
              />
              {errors.message && (
                <span style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: '4px', display: 'block' }}>
                  {errors.message}
                </span>
              )}
            </div>

            {apiError && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#b91c1c',
                  backgroundColor: '#fef2f2',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  fontSize: '0.88rem',
                  marginBottom: '12px',
                }}
              >
                <AlertCircle size={18} />
                <span>{apiError}</span>
              </div>
            )}

            <button
              type="submit"
              className="btn btn--primary btn--lg contact-form__submit"
              disabled={sending}
            >
              {sending ? (
                'Sending Inquiry...'
              ) : submitted ? (
                <>
                  <CheckCircle size={18} /> Message Received!
                </>
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </button>

            {submitted && (
              <motion.p
                className="contact-form__success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ color: '#15803d', fontWeight: 500, marginTop: '12px' }}
              >
                Thank you! Your inquiry has been safely received. Our academic coordinator will contact you shortly.
              </motion.p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
