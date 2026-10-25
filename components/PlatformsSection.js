import React from 'react';
import PlatformCard from './PlatformCard';

const pathsData = [
  {
    number: '01',
    title: 'Classes',
    tagline: 'Learning That Adapts to You.',
    description:
      'Personalized live tuition for students in Classes 6-12, designed around individual learning needs and school curricula.',
    features: [
      'Interactive 1-to-1 live classes',
      'Dedicated mentor guidance',
      'Attendance and syllabus tracking',
    ],
    link: 'https://classes.produitacademy.com',
    btnLabel: 'Explore Classes',
  },
  {
    number: '02',
    title: 'GATE',
    tagline: 'Practice with Purpose.',
    description:
      'Prepare for GATE using customizable mock tests that help you evaluate your knowledge and find areas for improvement.',
    features: [
      'Customizable mock tests',
      'Real-exam-style interface',
      'Topic-wise performance analytics',
    ],
    link: 'https://gate.produitacademy.com',
    btnLabel: 'Explore GATE',
  },
  {
    number: '03',
    title: 'Careers',
    tagline: 'Make Your Skills Matter.',
    description:
      'Bring your skills and ideas to a growing team working across education, content, and creative media.',
    features: [
      'Teaching and academic mentoring',
      'Content research and writing',
      'Media and video production',
    ],
    link: 'https://careers.produitacademy.com',
    btnLabel: 'Explore Careers',
  },
];

export default function PlatformsSection() {
  return (
    <section id="paths" className="paths-section">
      <div className="section-container">
        {/* Section Heading */}
        <div className="paths-header">
          <h2 className="paths-title">
            One Academy, Three Paths to <span className="text-accent">Progress.</span>
          </h2>
          <p className="paths-subtitle">
            Explore the path that matches your goals, whether you're building strong
            academic foundations, preparing for GATE, or looking to grow with our team.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="paths-grid">
          {pathsData.map((item) => (
            <PlatformCard key={item.number} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
