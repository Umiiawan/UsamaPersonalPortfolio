import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { Menu, X, Code2, ArrowUpRight, Sparkles } from 'lucide-react';
import { scrollToSection } from '../utils/scrollToSection';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen && mobileMenuRef.current && mobilePanelRef.current) {
      gsap.fromTo(
        mobilePanelRef.current,
        { y: 24, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.42,
          ease: 'power3.out',
        }
      );

      gsap.fromTo(
        mobileMenuRef.current.querySelectorAll('.mobile-link'),
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.36,
          stagger: 0.06,
          ease: 'power3.out',
          delay: 0.05,
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
    scrollToSection(href);
  };

  return (
    <>
      {/* Top Navbar */}
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 lg:px-6 pt-4 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto' : 'opacity-100'
        }`}
      >
        <div
          className={`max-w-7xl mx-auto rounded-[26px] border transition-all duration-500 ${
            isScrolled
              ? 'bg-white/82 backdrop-blur-2xl border-white/85 shadow-[0_18px_40px_rgba(180,190,220,0.18)]'
              : 'bg-white/60 backdrop-blur-xl border-white/75 shadow-[0_14px_32px_rgba(180,190,220,0.12)]'
          }`}
        >
          <div className="flex items-center justify-between h-16 lg:h-[76px] px-4 sm:px-6 lg:px-7">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(0);
              }}
              className="flex items-center gap-2 font-extrabold tracking-tight shrink-0"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/90 bg-white/85 shadow-[6px_6px_14px_rgba(180,190,220,0.12),-6px_-6px_14px_rgba(255,255,255,0.95)]">
                <Code2 className="h-4 w-4 text-violet-600" />
              </div>

              <div className="leading-none">
                <span className="block text-slate-800 text-base sm:text-lg lg:text-xl">
                  USAMA
                </span>
                <span className="block text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase bg-gradient-to-r from-violet-600 to-orange-400 bg-clip-text text-transparent">
                  Tariq
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2 rounded-full border border-white/80 bg-white/62 px-2 py-1 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-white hover:text-slate-900"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-orange-400 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(249,115,22,0.18)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            {/* Mobile Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden flex h-11 w-11 items-center justify-center rounded-2xl border border-white/85 bg-white/80 text-slate-700 shadow-[6px_6px_14px_rgba(180,190,220,0.14),-6px_-6px_14px_rgba(255,255,255,0.95)] transition-all hover:scale-105"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        ref={mobileMenuRef}
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-white/86 backdrop-blur-2xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Ambient blobs */}
        <div className="absolute top-8 left-4 h-40 w-40 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute bottom-8 right-4 h-48 w-48 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-200/30 blur-3xl" />

        {/* Center Panel */}
        <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-6">
          <div
            ref={mobilePanelRef}
            className="w-full max-w-sm rounded-[30px] border border-white/85 bg-white/78 p-5 backdrop-blur-2xl shadow-[0_20px_50px_rgba(180,190,220,0.16)]"
          >
            {/* Panel Header */}
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2 font-extrabold tracking-tight">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/90 bg-white/85 shadow-[6px_6px_14px_rgba(180,190,220,0.12),-6px_-6px_14px_rgba(255,255,255,0.95)]">
                  <Code2 className="h-4 w-4 text-violet-600" />
                </div>

                <div className="leading-none">
                  <span className="block text-slate-800 text-base">USAMA</span>
                  <span className="block text-[10px] font-semibold tracking-[0.2em] uppercase bg-gradient-to-r from-violet-600 to-orange-400 bg-clip-text text-transparent">
                    Tariq
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/85 bg-white/80 text-slate-700 shadow-[6px_6px_14px_rgba(180,190,220,0.12),-6px_-6px_14px_rgba(255,255,255,0.95)]"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Mini label */}
            <div className="mobile-link mb-4 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/72 px-4 py-2 text-xs font-semibold text-slate-700 shadow-[6px_6px_14px_rgba(180,190,220,0.1),-6px_-6px_14px_rgba(255,255,255,0.94)]">
              <Sparkles className="h-3.5 w-3.5 text-violet-600" />
              Menu
            </div>

            {/* Links */}
            <div className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="mobile-link flex items-center justify-between rounded-[20px] border border-white/85 bg-white/80 px-5 py-4 text-lg font-semibold text-slate-800 shadow-[8px_8px_18px_rgba(180,190,220,0.12),-8px_-8px_18px_rgba(255,255,255,0.96)] transition-all duration-300 hover:scale-[1.02] hover:text-violet-700"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="h-4 w-4 opacity-60" />
                </a>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="mobile-link mt-5 flex items-center justify-center gap-2 rounded-[20px] bg-gradient-to-r from-violet-600 to-orange-400 px-6 py-4 text-base font-semibold text-white shadow-[0_12px_24px_rgba(249,115,22,0.18)] transition-all duration-300 hover:scale-[1.02]"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;