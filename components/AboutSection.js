import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="section-container section-container--narrow">
        <div className="about-header">
          <span className="badge-pill-black">ABOUT US</span>
          <h2 className="about-title">
            Every Student Deserves the <span className="text-accent">Chance to Grow.</span>
          </h2>
        </div>

        <div className="about-content">
          <p className="about-paragraph">
            Produit Academy began with a simple belief that education should do more than impart knowledge. <br className="about-br" />
            It should help people discover their strengths, explore their potential, and see what they can achieve.
          </p>
          <p className="about-paragraph">
            As a student-led initiative, we bring fresh ideas and a people-first approach to education, <br className="about-br" />
            making learning more personal, preparation more purposeful, and opportunities more accessible.
          </p>
          <p className="about-paragraph">
            Our goal is to turn potential into progress by creating meaningful experiences that build strong <br className="about-br" />
            foundations, encourage ambition, and help people move towards their goals with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
