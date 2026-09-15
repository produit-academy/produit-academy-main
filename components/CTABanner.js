import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="section__container">
        <div className="cta-banner__inner">
          <h2 className="cta-banner__heading">Get Started with Produit Academy</h2>
          <p className="cta-banner__subtext">
            Enroll for structured 1:1 school tuition, begin GATE mock preparation, or apply to join our instructional faculty.
          </p>
          <div className="cta-banner__buttons">
            <a href="https://classes.produitacademy.com" className="btn btn--white btn--lg">
              Join a live class <ArrowRight size={16} />
            </a>
            <a href="https://gate.produitacademy.com" className="btn btn--white-secondary btn--lg">
              Start a mock test <ArrowRight size={16} />
            </a>
            <a href="https://careers.produitacademy.com" className="btn btn--white-secondary btn--lg">
              Apply for a role <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
