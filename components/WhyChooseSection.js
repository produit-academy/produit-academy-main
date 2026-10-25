import React from 'react';
import { Users, CalendarClock, Lightbulb, GraduationCap } from 'lucide-react';

export default function WhyChooseSection() {
  return (
    <section id="why-choose" className="why-choose-section">
      <div className="section-container">
        <div className="why-choose-card">
          {/* Top Illustration Banner */}
          <div className="why-choose-banner-wrapper">
            <img
              src="/images/why_choose_banner_trimmed.png"
              alt="Produit Academy 1:1 Live Tuition and Course Materials"
              className="why-choose-banner-img"
            />
          </div>

          {/* Bottom Content Split */}
          <div className="why-choose-body">
            {/* Left Title & Paragraph */}
            <div className="why-choose-intro">
              <h2 className="why-choose-title">
                Why Choose <span className="text-accent">Produit Academy?</span>
              </h2>
              <p className="why-choose-desc">
                Personalised attention, experienced educators, and structured academic
                support come together to create a learning experience that helps every
                student move forward with confidence.
              </p>
            </div>

            {/* Right Features Grid */}
            <div className="why-choose-grid">
              {/* Item 1 */}
              <div className="why-feature-item why-feature-item--bordered-bottom why-feature-item--bordered-right">
                <div className="why-feature-icon-badge">
                  <Users size={24} className="why-feature-icon" />
                </div>
                <div className="why-feature-text">
                  <h3 className="why-feature-title">Personalised 1:1 Attention</h3>
                  <p className="why-feature-desc">
                    One-to-one sessions tailored to each student's pace and learning style.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="why-feature-item why-feature-item--bordered-bottom">
                <div className="why-feature-icon-badge">
                  <Lightbulb size={24} className="why-feature-icon" />
                </div>
                <div className="why-feature-text">
                  <h3 className="why-feature-title">Conceptual Clarity</h3>
                  <p className="why-feature-desc">
                    Build strong fundamentals and problem solving skills beyond memorisation.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="why-feature-item why-feature-item--bordered-right">
                <div className="why-feature-icon-badge">
                  <CalendarClock size={24} className="why-feature-icon" />
                </div>
                <div className="why-feature-text">
                  <h3 className="why-feature-title">Structured Scheduling</h3>
                  <p className="why-feature-desc">
                    Planned lessons that fit school commitments and support steady progress.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="why-feature-item">
                <div className="why-feature-icon-badge">
                  <GraduationCap size={24} className="why-feature-icon" />
                </div>
                <div className="why-feature-text">
                  <h3 className="why-feature-title">Global Curriculum Support</h3>
                  <p className="why-feature-desc">
                    Support across State Board, CBSE, ICSE, and international curricula for Grades 6-12.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
