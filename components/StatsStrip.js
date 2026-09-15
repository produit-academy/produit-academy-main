import React from 'react';
import { Users, FileText, ClipboardCheck, TrendingUp } from 'lucide-react';

const defaultStats = [
  {
    icon: <Users size={22} />,
    label: 'Students Enrolled',
    value: null,
    placeholder: 'Continuous Admissions',
  },
  {
    icon: <FileText size={22} />,
    label: 'Previous Year Papers',
    value: null,
    placeholder: 'Curated Question Banks',
  },
  {
    icon: <ClipboardCheck size={22} />,
    label: 'Mock Tests Delivered',
    value: null,
    placeholder: 'Standardized Assessments',
  },
  {
    icon: <TrendingUp size={22} />,
    label: 'Academic Focus',
    value: null,
    placeholder: 'Grades 6 to 12 & GATE',
  },
];

export default function StatsStrip({ stats = defaultStats }) {
  return (
    <section className="stats-strip">
      <div className="section__container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item">
              <div className="stat-item__icon">{stat.icon}</div>
              <span className="stat-item__value">
                {stat.value ? `${stat.value}+` : stat.placeholder}
              </span>
              <span className="stat-item__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
