import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';

export default function FooterNew() {
  return (
    <footer className="footer-new">
      <div className="footer-new__inner">
        <div className="footer-new__grid">
          {/* Column 1: Brand */}
          <div className="footer-new__col footer-new__brand-col">
            <div className="footer-new__brand">
              <img src="/logo.png" alt="Produit Academy" className="footer-new__logo" />
              <span className="footer-new__wordmark">Produit Academy</span>
            </div>
            <p className="footer-new__tagline">
              Building the future of creative education and academic excellence.
            </p>
          </div>

          {/* Column 2: Our Platforms */}
          <div className="footer-new__col">
            <h4 className="footer-new__heading">Our Platforms</h4>
            <ul className="footer-new__links">
              <li>
                <a href="https://gate.produitacademy.com">GATE Portal</a>
              </li>
              <li>
                <a href="https://classes.produitacademy.com">Classes Portal</a>
              </li>
              <li>
                <a href="https://careers.produitacademy.com">Careers</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="footer-new__col">
            <h4 className="footer-new__heading">Company</h4>
            <ul className="footer-new__links">
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="footer-new__col">
            <h4 className="footer-new__heading">Support</h4>
            <ul className="footer-new__links">
              <li>
                <a href="https://classes.produitacademy.com/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="https://classes.produitacademy.com/terms-and-conditions">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Column 5: Get in Touch */}
          <div className="footer-new__col">
            <h4 className="footer-new__heading">Get in Touch</h4>
            <ul className="footer-new__links footer-new__contact-links">
              <li>
                <Mail size={14} />
                <a href="mailto:produitacademy@gmail.com">produitacademy@gmail.com</a>
              </li>
              <li>
                <Phone size={14} />
                <a href="tel:+918139805996">+91 8139 805 996</a>
              </li>
              <li>
                <Instagram size={14} />
                <a
                  href="https://www.instagram.com/produit.academy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @produit.academy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-new__bottom">
          <p>© 2026 Produit Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
