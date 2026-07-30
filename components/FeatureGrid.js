import React from 'react';
import { motion } from 'framer-motion';
import { Users, Lightbulb, Clock, Globe } from 'lucide-react';

const features = [
  {
    icon: <Users size={28} />,
    title: 'Personal Attention',
    description:
      'We provide dedicated, one-on-one focus to ensure each student receives the guidance they need.',
  },
  {
    icon: <Lightbulb size={28} />,
    title: 'Clear Concepts',
    description:
      'Our educators break down complex topics into clear lessons, prioritizing real understanding over memorization.',
  },
  {
    icon: <Clock size={28} />,
    title: 'Flexible Learning',
    description:
      'Education that adapts to your busy lifestyle, allowing you to learn at your own pace, on your own time.',
  },
  {
    icon: <Globe size={28} />,
    title: 'Global Syllabus Support',
    description:
      'Our educators are equipped to guide you through major global syllabuses and curricula, wherever you are located.',
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
          <span className="section__label">Why Choose Us</span>
          <h2 className="section__heading">Why Students Choose Produit Academy</h2>
          <p className="section__subheading">
            Don't leave your academic success to chance. Seek knowledge actively
            with a team that puts you first.
          </p>
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
