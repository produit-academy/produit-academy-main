import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, BarChart3, Users, Sprout } from 'lucide-react';

const features = [
  {
    icon: <Lightbulb size={28} />,
    title: 'Affordable, Transparent Pricing',
    description: 'Full mock-test access for as little as ₹29 - no hidden fees.',
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Real Analytics, Not Guesswork',
    description: 'Every test and class comes with data - know exactly where you stand.',
  },
  {
    icon: <Users size={28} />,
    title: 'Human Mentorship',
    description: 'Real mentors and teachers oversee your progress, not just an algorithm.',
  },
  {
    icon: <Sprout size={28} />,
    title: 'One Growing Ecosystem',
    description: 'Prep, learn, and eventually work with us - all under one academy.',
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function FeatureGrid() {
  return (
    <section className="section feature-section">
      <div className="section__container">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="section__header"
        >
          <span className="section__label">Why Us</span>
          <h2 className="section__heading">Why Students & Educators Choose Us</h2>
        </motion.div>

        <div className="feature-grid">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            >
              <div className="feature-card__icon">{feat.icon}</div>
              <h3 className="feature-card__title">{feat.title}</h3>
              <p className="feature-card__description">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
