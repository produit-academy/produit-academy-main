import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function PlatformCard({ icon, title, tagline, description, features, link, linkLabel, accentColor }) {
  return (
    <div
      className="platform-card"
      style={{ '--card-accent': accentColor }}
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
    </div>
  );
}
