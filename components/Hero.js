import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Instagram } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 },
  }),
};

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      {/* Decorative background */}
      <div className="hero__bg-gradient" />
      <div className="hero__bg-dots" />

      <div className="hero__container">
        <motion.span
          className="hero__eyebrow"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Seek Knowledge Actively
        </motion.span>

        <motion.h1
          className="hero__headline"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Your Personal Path to{' '}
          <span className="hero__headline-accent">Academic Excellence</span>
        </motion.h1>

        <motion.p
          className="hero__subheadline"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          At Produit Academy, we don't just teach - we empower. Personal 1:1 live
          classes, dedicated mentors, and a learning approach built entirely around
          your success. From school subjects to competitive exams, we meet you
          where you are.
        </motion.p>

        <motion.div
          className="hero__ctas"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <button className="btn btn--primary btn--lg" onClick={() => scrollTo('#platforms')}>
            Explore Our Platforms
          </button>
          <button className="btn btn--outline btn--lg" onClick={() => scrollTo('#contact')}>
            Talk to Us
          </button>
        </motion.div>

        <motion.div
          className="hero__trust-strip"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <div className="trust-chip">
            <MapPin size={16} />
            <span>Based in Kollam, Kerala</span>
          </div>
          <div className="trust-chip">
            <GraduationCap size={16} />
            <span>1:1 Classes · Academic Support · Live Interactive Learning</span>
          </div>
          <div className="trust-chip">
            <Instagram size={16} />
            <a
              href="https://www.instagram.com/produit.academy/"
              target="_blank"
              rel="noreferrer"
            >
              @produit.academy
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
