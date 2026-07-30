import React from 'react';
import { motion } from 'framer-motion';
import { MonitorPlay, FileEdit, Camera } from 'lucide-react';
import PlatformCard from './PlatformCard';

const platforms = [
  {
    icon: <MonitorPlay size={28} />,
    title: 'Produit Academy Classes',
    tagline: 'Your classroom, reimagined.',
    description:
      'A live-learning portal that connects students, teachers, and mentors in one place. Join scheduled 1:1 live classes, track attendance, and view your academic progress through a clean analytics dashboard - with mentors keeping an eye on your growth.',
    features: [
      'Personal 1:1 live interactive classes',
      'Visual analytics dashboard for academic performance',
      'Dedicated mentor oversight for accountability',
      'Global syllabus support across curricula',
    ],
    link: 'https://classes.produitacademy.com',
    linkLabel: 'Join a live class',
    accentColor: '#33ae78', // green (brand)
  },
  {
    icon: <FileEdit size={28} />,
    title: 'Produit Academy GATE',
    tagline: 'Ace GATE with data-driven prep.',
    description:
      'A dedicated mock-test platform for GATE aspirants across Electrical, Mechanical, Civil, Computer Science, and Electronics & Communication. Take custom mock tests in a real exam-like interface, get topic-wise analytics, and track your progress.',
    features: [
      'Custom mock tests (choose question count, duration, type)',
      'Real GATE exam interface',
      'Detailed performance & topic-wise analytics',
      'Previous Year Questions & study notes (coming soon)',
    ],
    link: 'https://gate.produitacademy.com',
    linkLabel: 'Start a mock test',
    accentColor: '#3B82F6', // blue
  },
  {
    icon: <Camera size={28} />,
    title: 'Produit Academy Careers',
    tagline: 'Build your creative career with us.',
    description:
      "We're growing - and hiring across teaching, mentoring, design, media, and content. If you want to teach, mentor, shoot, edit, present, or create for a fast-moving education brand, this is where you apply.",
    features: [
      'Graphic Designer · Media Team Member · Video Editor',
      'Videographer/Shooting Crew · Content Creator',
      'Video Presenter · Teacher · Mentor',
    ],
    link: 'https://careers.produitacademy.com',
    linkLabel: 'Apply for a role',
    accentColor: '#F59E0B', // orange/amber
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function PlatformsSection() {
  return (
    <section id="platforms" className="section platforms-section">
      <div className="section__container">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="section__header"
        >
          <span className="section__label">Our Platforms</span>
          <h2 className="section__heading">One Academy, Three Platforms</h2>
          <p className="section__subheading">
            Each platform is purpose-built for a different part of your journey.
          </p>
        </motion.div>

        <div className="platforms-grid">
          {platforms.map((p, i) => (
            <PlatformCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
