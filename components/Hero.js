import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Instagram } from 'lucide-react';
import TrueFocus from './TrueFocus';
import MagicRings from './MagicRings';

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
      <div className="hero__container hero__split">
        <div className="hero__content">
          <motion.div
            className="hero__eyebrow-container"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            style={{ marginBottom: '1.5rem' }}
          >
            <TrueFocus
              sentence="Produit Academy"
              manualMode={false}
              blurAmount={4}
              borderColor="var(--accent-green)"
              glowColor="rgba(51, 174, 120, 0.4)"
              animationDuration={1.5}
              pauseBetweenAnimations={1.2}
            />
          </motion.div>

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
            Produit Academy provides personal 1:1 live classes, dedicated mentors, and a structured learning approach built for your success. From school subjects to competitive exams, we support students in achieving their academic goals.
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
              <Instagram size={16} />
              <a
                href="https://www.instagram.com/produit.academy/"
                target="_blank"
                rel="noreferrer"
              >
                produit.academy
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          {/* Signature Element: Logo with MagicRings (Desktop Only) */}
          <div className="hero__logo-wrapper" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <div style={{ position: 'absolute', width: '220%', height: '220%', zIndex: -1, pointerEvents: 'none' }}>
              <MagicRings
                color="#33ae78"
                colorTwo="#a5d6a7"
                ringCount={5}
                speed={0.6}
                attenuation={10}
                lineThickness={2.5}
                baseRadius={0.18}
                radiusStep={0.05}
                scaleRate={0.02}
                opacity={0.6}
                blur={0}
                noiseAmount={0}
                followMouse={true}
                mouseInfluence={0.1}
                hoverScale={1.1}
              />
            </div>
            <img src="/logo.png" alt="Produit Academy Logo" className="hero__logo-visual" style={{ position: 'relative', zIndex: 1 }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
