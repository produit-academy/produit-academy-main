import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Instagram, Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    console.log('Contact form submitted:', form);

    await new Promise((r) => setTimeout(r, 800));

    setSending(false);
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });

    setTimeout(() => setSubmitted(false), 5000);
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
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="contact-name">Full Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                />
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
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows="4"
                placeholder="How can we help you?"
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn--primary btn--lg contact-form__submit"
              disabled={sending}
            >
              {sending ? (
                'Sending...'
              ) : submitted ? (
                <>
                  <CheckCircle size={18} /> Message Sent!
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
              >
                Thank you! We'll get back to you soon.
              </motion.p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
