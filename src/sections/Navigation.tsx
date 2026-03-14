import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 70);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current.querySelectorAll('.mobile-link'),
        { y: 30, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.45,
          stagger: 0.08,
          ease: 'power3.out',
        }
      );
    }
  }, [isMobileMenuOpen]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 lg:px-6 pt-3"
      >
        <div
          className={`max-w-7xl mx-auto transition-all duration-500 rounded-[24px] border ${
            isScrolled
              ? 'bg-white/55 backdrop-blur-2xl border-white/70 shadow-[10px_10px_30px_rgba(180,190,220,0.35),-10px_-10px_30px_rgba(255,255,255,0.9)]'
              : 'bg-white/25 backdrop-blur-xl border-white/40 shadow-[8px_8px_25px_rgba(180,190,220,0.18),-8px_-8px_25px_rgba(255,255,255,0.65)]'
          }`}
        >
          <div className="flex items-center justify-between h-16 lg:h-20 px-4 sm:px-6">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-1 font-extrabold tracking-tight"
            >
              <span className="text-slate-800 text-xl lg:text-2xl">USAMA</span>
              <span className="text-xl lg:text-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                TARIQ
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2 p-1 rounded-full bg-white/40 backdrop-blur-xl border border-white/60 shadow-[inset_4px_4px_10px_rgba(255,255,255,0.55),inset_-4px_-4px_10px_rgba(210,220,240,0.2)]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="relative px-4 py-2 rounded-full text-sm font-medium text-slate-700 transition-all duration-300 hover:text-slate-900 hover:bg-white/70"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full text-white text-sm font-medium bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 shadow-[8px_8px_20px_rgba(196,181,253,0.4),-8px_-8px_20px_rgba(255,255,255,0.8)] transition-all duration-300 hover:scale-[1.04] hover:shadow-[12px_12px_28px_rgba(196,181,253,0.5)]"
            >
              Hire Me
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full bg-white/55 backdrop-blur-xl border border-white/70 text-slate-700 shadow-[8px_8px_20px_rgba(180,190,220,0.28),-8px_-8px_20px_rgba(255,255,255,0.9)] transition-all hover:scale-105"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#f5f7ff]/80 backdrop-blur-2xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Decorative blobs */}
        <div className="absolute top-16 left-8 w-56 h-56 bg-pink-200/50 blur-3xl rounded-full" />
        <div className="absolute bottom-16 right-8 w-64 h-64 bg-sky-200/50 blur-3xl rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-violet-200/40 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />

        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center gap-5 px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="mobile-link min-w-[220px] text-center px-8 py-4 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/70 text-slate-800 text-2xl font-semibold shadow-[10px_10px_24px_rgba(180,190,220,0.28),-10px_-10px_24px_rgba(255,255,255,0.95)] transition-all duration-300 hover:scale-[1.03] hover:text-violet-700"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="mobile-link mt-3 px-10 py-4 rounded-2xl text-white text-base font-medium bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 shadow-[10px_10px_24px_rgba(196,181,253,0.4),-10px_-10px_24px_rgba(255,255,255,0.8)] transition-all duration-300 hover:scale-[1.03]"
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;