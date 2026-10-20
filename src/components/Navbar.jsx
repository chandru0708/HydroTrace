import React, { useState, useEffect } from 'react';
import Logo from '../illustrations/Logo';
import PressButton from '../ui/PressButton';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { num: '01', label: 'Problem', href: '#problem' },
    { num: '02', label: 'Solution', href: '#solution' },
    { num: '03', label: 'PFAS', href: '#pfas' },
    { num: '04', label: 'Microplastics', href: '#microplastics' },
    { num: '05', label: 'Reporting', href: '#reporting' },
    { num: '06', label: 'Prototype', href: '#prototype' },
    { num: '07', label: 'Impact', href: '#impact' },
    { num: '08', label: 'Live Demo', href: '#demo' },
  ];

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'var(--color-paper)', borderBottom: '2px solid var(--color-ink)' }}>
      {/* Scroll Progress Trace Line */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'rgba(20, 33, 61, 0.1)' }}>
        <div
          style={{
            height: '100%',
            width: `${scrollProgress}%`,
            backgroundColor: 'var(--color-river-teal)',
            transition: 'width 0.1s linear'
          }}
        />
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" style={{ textDecoration: 'none' }}>
          <Logo size={36} />
        </a>

        {/* Desktop Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '1.25rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.num}
              href={link.href}
              style={{
                textDecoration: 'none',
                color: 'var(--color-ink)',
                fontSize: '0.9rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                transition: 'color 0.15s ease'
              }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-river-teal)' }}>
                {link.num}
              </span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <PressButton href="#demo" variant="yellow" style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem' }}>
            Run the test ▸
          </PressButton>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-toggle"
            style={{
              display: 'none',
              background: 'none',
              border: '2px solid var(--color-ink)',
              padding: '0.4rem',
              borderRadius: '6px',
              cursor: 'pointer',
              color: 'var(--color-ink)'
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: '64px',
            backgroundColor: 'var(--color-river-teal)',
            color: '#ffffff',
            padding: '2rem',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            overflowY: 'auto'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.num}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                textDecoration: 'none',
                color: '#ffffff',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.8rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'baseline',
                gap: '1rem',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                paddingBottom: '0.8rem'
              }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--color-signal-yellow)' }}>
                {link.num}
              </span>
              <span>{link.label}</span>
            </a>
          ))}
          <div style={{ marginTop: '1rem' }}>
            <PressButton
              href="#demo"
              variant="yellow"
              onClick={() => setMobileOpen(false)}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Run the field test ▸
            </PressButton>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 991px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
}
