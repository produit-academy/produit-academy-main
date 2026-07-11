import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'GATE Prep', href: '#platforms' },
  { label: 'Live Classes', href: '#platforms' },
  { label: 'Careers', href: '#platforms' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          <a href="#home" className="navbar__brand" onClick={(e) => handleNavClick(e, '#home')}>
            <img src="/logo.png" alt="Produit Academy Logo" className="navbar__logo" />
            <span className="navbar__wordmark">Produit Academy</span>
          </a>

          <div className="navbar__links">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="navbar__link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#platforms"
            className="navbar__cta"
            onClick={(e) => handleNavClick(e, '#platforms')}
          >
            Get Started
          </a>

          <button
            className="navbar__hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="mobile-menu__panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="mobile-menu__header">
                <a href="#home" className="navbar__brand" onClick={(e) => handleNavClick(e, '#home')}>
                  <img src="/logo.png" alt="Produit Academy Logo" className="navbar__logo" />
                  <span className="navbar__wordmark">Produit Academy</span>
                </a>
                <button
                  className="navbar__hamburger"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="mobile-menu__links">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="mobile-menu__link"
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <a
                href="#platforms"
                className="mobile-menu__cta"
                onClick={(e) => handleNavClick(e, '#platforms')}
              >
                Get Started
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
