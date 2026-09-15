import React from 'react';
import { Users, Lightbulb, Clock, Globe } from 'lucide-react';

const features = [
  {
    icon: <Users size={24} />,
    title: 'Personal 1:1 Attention',
    description:
      'Dedicated one-on-one sessions ensure individualized instruction tailored to the student’s pace and learning style.',
  },
  {
    icon: <Lightbulb size={24} />,
    title: 'Conceptual Clarity',
    description:
      'Rigorous foundational teaching prioritizing first-principles understanding and analytical problem-solving over memorization.',
  },
  {
    icon: <Clock size={24} />,
    title: 'Structured Scheduling',
    description:
      'Consistent academic schedules designed around school commitments, with tracked lesson delivery and progress milestones.',
  },
  {
    icon: <Globe size={24} />,
    title: 'Global Curriculum Support',
    description:
      'Qualified faculty trained in state, national (CBSE, ICSE), and international curricula for grades 6 through 12.',
  },
];

export default function FeatureGrid() {
  return (
    <section className="section feature-section">
      <div className="section__container">
        <div className="section__header">
          <span className="section__label">Instructional Approach</span>
          <h2 className="section__heading">Why Choose Produit Academy</h2>
          <p className="section__subheading">
            Individualized attention, experienced subject educators, and consistent academic oversight.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feat) => (
            <div key={feat.title} className="feature-card">
              <div className="feature-card__icon">{feat.icon}</div>
              <h3 className="feature-card__title">{feat.title}</h3>
              <p className="feature-card__description">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
