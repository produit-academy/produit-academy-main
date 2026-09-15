import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <div className="section__container section__container--narrow">
        <div className="section__header">
          <span className="section__label">About Us</span>
          <h2 className="section__heading">Who We Are</h2>
        </div>

        <div className="about__body">
          <p>
            Produit Academy's mission is to empower students through
            high-quality online education, offering a comprehensive range of
            basic to advanced courses that strengthen academic foundations,
            boost knowledge, and inspire a lifelong love for learning.
          </p>
          <p>
            We know that every student's learning journey is unique. Our approach
            is built entirely around your success with personal 1:1 classes and
            dedicated mentors. We provide a complete educational ecosystem, from
            school tuitions to GATE exam preparation, all supported by a team
            of professional educators.
          </p>
        </div>
      </div>
    </section>
  );
}
