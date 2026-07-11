import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <div className="section__container section__container--narrow">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="section__label">About Us</span>
          <h2 className="section__heading">Who We Are</h2>
        </motion.div>

        <motion.div
          className="about__body"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.15 }}
        >
          <p>
            Produit Academy is an education ecosystem built around one idea:
            excellence should be accessible, structured, and measurable. We bring
            together exam preparation, live classroom teaching, and a creative
            team of mentors and content creators - all under one roof, so students
            don't have to juggle five different apps and tutors to get where they
            want to go.
          </p>
          <p>
            Whether you're an engineering student prepping for GATE, a student
            who wants live, teacher-led classes with real accountability, or
            someone who wants to build a career in education and media - Produit
            Academy has a platform for you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
