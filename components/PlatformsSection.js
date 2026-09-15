import React from 'react';
import { MonitorPlay, FileEdit, Camera } from 'lucide-react';
import PlatformCard from './PlatformCard';

const platforms = [
  {
    icon: <MonitorPlay size={26} />,
    title: 'Produit Academy Classes',
    tagline: 'Scheduled 1:1 live tuition and mentor guidance.',
    description:
      'A live learning portal connecting students, teachers, and academic mentors. Attend scheduled 1:1 live classes, track attendance, and monitor syllabus coverage through an academic analytics dashboard.',
    features: [
      'Personal 1:1 live interactive classes',
      'Performance analytics dashboard',
      'Dedicated mentor oversight',
      'Global syllabus support across curricula',
    ],
    link: 'https://classes.produitacademy.com',
    linkLabel: 'Join a live class',
    accentColor: '#33ae78', // green (brand)
  },
  {
    icon: <FileEdit size={26} />,
    title: 'Produit Academy GATE',
    tagline: 'Structured exam preparation and mock assessments.',
    description:
      'A dedicated mock test platform for GATE aspirants across Electrical, Mechanical, Civil, Computer Science, and Electronics & Communication engineering disciplines.',
    features: [
      'Custom mock tests with flexible parameters',
      'Authentic exam interface',
      'Detailed topic-wise performance analytics',
      'Previous Year Questions and study materials',
    ],
    link: 'https://gate.produitacademy.com',
    linkLabel: 'Start a mock test',
    accentColor: '#3B82F6', // blue
  },
  {
    icon: <Camera size={26} />,
    title: 'Produit Academy Careers',
    tagline: 'Faculty and institutional recruitment.',
    description:
      'Join our academic faculty and operations team. We are hiring educators, mentors, content researchers, and media professionals to support expanding operations.',
    features: [
      'Subject Teachers & Academic Mentors',
      'Content Researchers & Writers',
      'Media Team & Video Production',
      'Curriculum Development Specialists',
    ],
    link: 'https://careers.produitacademy.com',
    linkLabel: 'Apply for a role',
    accentColor: '#F59E0B', // orange/amber
  },
];

export default function PlatformsSection() {
  return (
    <section id="platforms" className="section platforms-section">
      <div className="section__container">
        <div className="section__header">
          <span className="section__label">Our Platforms</span>
          <h2 className="section__heading">One Academy, Three Platforms</h2>
          <p className="section__subheading">
            Dedicated portals designed for students, competitive exam aspirants, and prospective faculty.
          </p>
        </div>

        <div className="platforms-grid">
          {platforms.map((p, i) => (
            <PlatformCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
