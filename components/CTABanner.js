import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="section__container">
        <motion.div
          className="cta-banner__inner"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <h2 className="cta-banner__heading">Ready to Begin?</h2>
          <p className="cta-banner__subtext">
            Whether you're preparing for GATE, looking for live classes, or want
            to join our team - there's a place for you at Produit Academy.
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
        </motion.div>
      </div>
    </section>
  );
}
