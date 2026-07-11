import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Instagram, Send, CheckCircle } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

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

    // TODO: Wire this to a real API route or email service (e.g. EmailJS, Resend, or a custom Next.js API route).
    // For now, we log the form data and show a success toast.
    console.log('Contact form submitted:', form);

    // Simulate a small delay for UX
    await new Promise((r) => setTimeout(r, 800));

    setSending(false);
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });

    // Reset the success state after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section__container">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="section__header"
        >
          <span className="section__label">Contact</span>
          <h2 className="section__heading">Get in Touch</h2>
        </motion.div>

        <div className="contact-grid">
          {/* Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-info__item">
              <div className="contact-info__icon">
                <MapPin size={20} />
              </div>
              <div>
                <h4>Address</h4>
                <p>Produit Academy, Kollam, Kerala</p>
              </div>
            </div>

            <div className="contact-info__item">
              <div className="contact-info__icon">
                <Mail size={20} />
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:produitacademy@gmail.com">produitacademy@gmail.com</a>
              </div>
            </div>

            <div className="contact-info__item">
              <div className="contact-info__icon">
                <Phone size={20} />
              </div>
              <div>
                <h4>Phone</h4>
                <a href="tel:+918139805996">+91 8139 805 996</a>
              </div>
            </div>

            <div className="contact-info__item">
              <div className="contact-info__icon">
                <Instagram size={20} />
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
          </motion.div>

          {/* Form */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
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
          </motion.form>
        </div>
      </div>
    </section>
  );
}
