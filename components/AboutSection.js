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
            Produit Academy's mission is to empower students through
            high-quality online education, offering a comprehensive range of
            basic to advanced courses that strengthen academic foundations,
            boost knowledge, and inspire a lifelong love for learning.
          </p>
          <p>
            We know that every student's learning journey is unique, which is
            why our approach is built entirely around your success. With
            personal 1:1 classes, dedicated mentors, and a growing ecosystem
            that also includes GATE exam preparation and career opportunities
            in education and media - Produit Academy is where learning comes
            alive.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
