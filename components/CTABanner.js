import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section id="cta" className="green-cta-section">
      <div className="section-container">
        <div className="green-cta-content">
          <h2 className="green-cta-title">Get Started with Produit Academy</h2>
          <p className="green-cta-subtitle">
            Explore personalised 1:1 school tuition, prepare for GATE with mock tests,
            or find an opportunity to join our team.
          </p>

          <div className="green-cta-actions">
            <a
              href="https://classes.produitacademy.com"
              target="_blank"
              rel="noreferrer"
              className="btn-cta-white"
            >
              <span>Join a Live Class</span>
              <ArrowRight size={18} className="btn-arrow" />
            </a>

            <a
              href="https://gate.produitacademy.com"
              target="_blank"
              rel="noreferrer"
              className="btn-cta-outline"
            >
              <span>Start a Mock Test</span>
              <ArrowRight size={18} className="btn-arrow" />
            </a>

            <a
              href="https://careers.produitacademy.com"
              target="_blank"
              rel="noreferrer"
              className="btn-cta-outline"
            >
              <span>Apply for a Role</span>
              <ArrowRight size={18} className="btn-arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
