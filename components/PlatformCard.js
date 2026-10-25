import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function PlatformCard({
  number,
  title,
  tagline,
  description,
  features,
  link,
  btnLabel,
}) {
  return (
    <div className="path-card">
      {/* Corner Angled Badge: Solid connecting black, no green tabs, perfectly aligned */}
      <div className="path-card__badge" aria-hidden="true">
        <svg
          viewBox="0 0 160 160"
          className="path-card__badge-svg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Solid connecting black corner matching card's rounded radius */}
          <path
            d="M 0 36 C 0 16 16 0 36 0 L 142 0 L 0 142 Z"
            fill="#000000"
          />
          {/* Centered number */}
          <text
            x="48"
            y="52"
            fill="#ffffff"
            fontSize="34"
            fontWeight="700"
            fontFamily="var(--font-sans), Inter, sans-serif"
            textAnchor="middle"
            dominantBaseline="central"
          >
            {number}
          </text>
        </svg>
      </div>

      {/* Card Header with Centered Title clear of the corner badge */}
      <div className="path-card__header">
        <h3 className="path-card__title">{title}</h3>
      </div>

      {/* Tagline & Description */}
      <h4 className="path-card__tagline">{tagline}</h4>
      <p className="path-card__desc">{description}</p>

      {/* Feature Bullets with ✦ Sparkle Icon */}
      <ul className="path-card__features">
        {features.map((feat, idx) => (
          <li key={idx} className="path-card__feature-item">
            <span className="path-card__feature-sparkle">✦</span>
            <span>{feat}</span>
          </li>
        ))}
      </ul>

      {/* Action Button */}
      <div className="path-card__action">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="btn-path-action"
        >
          <span>{btnLabel}</span>
          <ArrowRight size={18} className="btn-arrow" />
        </a>
      </div>
    </div>
  );
}
