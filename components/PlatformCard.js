import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export default function PlatformCard({ icon, title, tagline, description, features, link, linkLabel, accentColor, index }) {
  return (
    <motion.div
      className="platform-card"
      style={{ '--card-accent': accentColor }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
    >
      <div className="platform-card__accent-bar" />

      <div className="platform-card__icon">{icon}</div>

      <h3 className="platform-card__title">{title}</h3>
      <p className="platform-card__tagline">{tagline}</p>
      <p className="platform-card__description">{description}</p>

      <ul className="platform-card__features">
        {features.map((feat, i) => (
          <li key={i}>
            <Check size={16} className="platform-card__check" />
            <span>{feat}</span>
          </li>
        ))}
      </ul>

      <a href={link} className="platform-card__link">
        {linkLabel}
        <ArrowRight size={16} />
      </a>
    </motion.div>
  );
}
