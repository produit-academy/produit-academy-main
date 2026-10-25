import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
  }),
};

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      {/* Floating Outline Background Icons */}
      <div className="hero-decorations" aria-hidden="true">
        {/* Book Outline Icon */}
        <svg className="hero-deco hero-deco--book" width="60" height="42" viewBox="0 0 24 18" fill="none" stroke="#222" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v10a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v10a3 3 0 0 1 3-3h7z" />
        </svg>

        {/* Chemistry Flask Icon */}
        <svg className="hero-deco hero-deco--flask" width="48" height="54" viewBox="0 0 24 24" fill="none" stroke="#10d07d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2v7.31L4.54 18.23A2 2 0 0 0 6.27 21h11.46a2 2 0 0 0 1.73-2.77L14 9.31V2" />
          <line x1="8.5" y1="2" x2="15.5" y2="2" />
          <line x1="14" y1="9" x2="10" y2="9" />
        </svg>

        {/* Proper 3-Orbit Scientific Atom Figure from design */}
        <img
          src="/images/hero_atom_clean.png"
          alt=""
          className="hero-deco hero-deco--atom"
          width="54"
          height="56"
        />

        {/* Dark Sparkle Icon near student */}
        <svg className="hero-deco hero-deco--sparkle" width="28" height="28" viewBox="0 0 24 24" fill="#333">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Cursive Eyebrow */}
          <motion.div
            className="hero-eyebrow"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className="hero-sparkle-icon">✦</span>
            <span className="hero-cursive-text">Let Your Potential Start to Shine.</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="hero-title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Your Personal Path <span className="hero-title-to-desktop">to</span><br className="hero-title-br-desktop" />
            <span className="hero-title-to-mobile">to </span><span className="hero-title--accent">Academic<br className="hero-title-br-mobile" /> Excellence.</span>
          </motion.h1>

          {/* Subtitle - exactly 2 lines on desktop */}
          <motion.p
            className="hero-subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Personalized 1-to-1 learning for school students and GATE aspirants. <br className="hero-br-desktop" />
            Get expert guidance, learn at your own pace, and move closer to your goals.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="hero-actions"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <button className="btn-hero-primary" onClick={() => scrollTo('#paths')}>
              <GraduationCap size={22} className="btn-icon" />
              <span>Explore Our Programs</span>
            </button>
            <button className="btn-hero-secondary" onClick={() => scrollTo('#contact')}>
              <span>Talk to Us</span>
            </button>
          </motion.div>
        </div>

        {/* Hero Visual Right Column */}
        <motion.div
          className="hero-visual-wrapper"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <div className="hero-visual-frame">
            <img
              src="/images/hero_student_clean.png"
              alt="Produit Academy Student Learning"
              className="hero-student-image"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
