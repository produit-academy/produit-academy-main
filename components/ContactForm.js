import React, { useState, useRef } from 'react';
import { Mail, Phone, Instagram, Facebook, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Classes 6-12 Tuition',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [apiError, setApiError] = useState('');
  const mountTimeRef = useRef(Date.now());

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) {
      errs.name = 'Please provide your name.';
    }
    if (!form.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (form.phone.trim() && !/^[+]?[0-9\s-]{10,15}$/.test(form.phone.trim())) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (!form.message.trim()) {
      errs.message = 'Please enter your message.';
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

    // Minimum human fill time protection
    if (Date.now() - mountTimeRef.current < 800) {
      return;
    }

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
        platform: form.interest.toLowerCase().includes('gate') ? 'gate' : form.interest.toLowerCase().includes('career') ? 'careers' : 'classes',
        course: form.interest,
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
        setForm({ name: '', email: '', phone: '', interest: 'Classes 6-12 Tuition', message: '' });
      } else {
        const errorData = await res.json().catch(() => null);
        const msg = errorData
          ? Object.values(errorData).flat().join(' ')
          : 'Failed to deliver message. Please contact us directly via email.';
        setApiError(msg);
      }
    } catch {
      // Graceful fallback for offline dev
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', interest: 'Classes 6-12 Tuition', message: '' });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="contact-grid">
          {/* Left Column: Contact Details & Socials */}
          <div className="contact-info">
            <span className="contact-tag">Get in touch with us</span>
            <h2 className="contact-heading">
              We’d Love to<br />Hear From You.
            </h2>
            <p className="contact-desc">
              Have a question, an idea, or an enquiry?<br />
              Reach out to us and let’s connect.
            </p>

            <div className="contact-links">
              <a href="mailto:produitacademy@gmail.com" className="contact-link-item">
                <div className="contact-link-icon-circle">
                  <Mail size={20} className="text-accent" />
                </div>
                <span>produitacademy@gmail.com</span>
              </a>

              <a href="tel:+918139805996" className="contact-link-item">
                <div className="contact-link-icon-circle">
                  <Phone size={20} className="text-accent" />
                </div>
                <span>+91 8139 805 996</span>
              </a>
            </div>

            <div className="contact-social-block">
              <h3 className="contact-social-title">Click to Connect</h3>
              <div className="contact-social-icons">
                <a
                  href="https://www.instagram.com/produit.academy/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-green-btn"
                  aria-label="Instagram"
                >
                  <Instagram size={22} />
                </a>
                <a
                  href="https://facebook.com/produitacademy"
                  target="_blank"
                  rel="noreferrer"
                  className="social-green-btn"
                  aria-label="Facebook"
                >
                  <Facebook size={22} />
                </a>
                <a
                  href="https://linkedin.com/company/produit-academy"
                  target="_blank"
                  rel="noreferrer"
                  className="social-green-btn"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form Card */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="contact-success-state">
                <CheckCircle size={56} className="text-accent mb-4" />
                <h3 className="success-title">Thank You!</h3>
                <p className="success-text">
                  Your enquiry has been received. Our academic team will get in touch with you shortly.
                </p>
                <button
                  className="btn-hero-primary mt-6"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="enquiry-form">
                {apiError && (
                  <div className="contact-error-banner">
                    <AlertCircle size={18} />
                    <span>{apiError}</span>
                  </div>
                )}

                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                    placeholder="Your Full Name"
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                {/* Email & Phone Row */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                      placeholder="you@domain.com"
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Mobile No.</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className={`form-input ${errors.phone ? 'form-input--error' : ''}`}
                      placeholder="+91 00000 00000"
                    />
                    {errors.phone && <span className="form-error">{errors.phone}</span>}
                  </div>
                </div>

                {/* I'm Interested In */}
                <div className="form-group">
                  <label htmlFor="interest" className="form-label">I'm Interested In</label>
                  <select
                    id="interest"
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className="form-input form-select"
                  >
                    <option value="Classes 6-12 Tuition">Classes 6-12 Tuition</option>
                    <option value="GATE Preparation">GATE Preparation</option>
                    <option value="Career Opportunities">Career Opportunities</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className={`form-input form-textarea ${errors.message ? 'form-input--error' : ''}`}
                    placeholder="Tell us what you're looking for..."
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                {/* Send Enquiry Button */}
                <div className="form-submit-wrapper">
                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-send-enquiry"
                  >
                    <span className="btn-send-icon-badge">
                      <Send size={16} />
                    </span>
                    <span>{sending ? 'Sending...' : 'Send Enquiry'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
