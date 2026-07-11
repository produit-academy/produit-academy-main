import React from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, ClipboardCheck, TrendingUp } from 'lucide-react';

/**
 * StatsStrip component — renders a row of stat counters.
 *
 * Each stat accepts an optional `value` prop. If a real number is provided,
 * it displays the number with a "+" suffix. If no value is provided (null/0),
 * it shows friendly placeholder text so the page never shows "0+".
 */

const defaultStats = [
  {
    icon: <Users size={24} />,
    label: 'Students Enrolled',
    value: null, // Replace with real number when available
    placeholder: 'Growing every day',
  },
  {
    icon: <FileText size={24} />,
    label: 'Previous Year Questions',
    value: null,
    placeholder: 'Expanding library',
  },
  {
    icon: <ClipboardCheck size={24} />,
    label: 'Mock Tests Delivered',
    value: null,
    placeholder: 'Building momentum',
  },
  {
    icon: <TrendingUp size={24} />,
    label: 'Success Rate',
    value: null,
    placeholder: 'Striving for excellence',
  },
];

export default function StatsStrip({ stats = defaultStats }) {
  return (
    <section className="stats-strip">
      <div className="section__container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="stat-item__icon">{stat.icon}</div>
              <span className="stat-item__value">
                {stat.value ? `${stat.value}+` : stat.placeholder}
              </span>
              <span className="stat-item__label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
