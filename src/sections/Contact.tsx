import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MessageSquare,
  ExternalLink,
  MapPin,
 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const contactInfo = {
    email: 'usama11tariqawan@gmail.com',
    whatsapp: '+92 311 5663465',
    whatsappLink:
      'https://wa.me/923115663465?text=Hi%20Usama,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch.',
    linkedin: 'https://www.linkedin.com/in/usama-tariq-396452279/',
    github: 'https://github.com/Umiiawan',
    location: 'Pakistan',
    availability: 'Open to work',
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: contactInfo.linkedin },
    { name: 'GitHub', icon: Github, url: contactInfo.github },
    { name: 'WhatsApp', icon: Phone, url: contactInfo.whatsappLink },
  ];

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        panelRef.current,
        { y: 30, opacity: 0, scale: 0.985 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: panelRef.current,
            start: 'top 82%',
            once: true,
          },
        }
      );

      const headingItems = headingRef.current?.querySelectorAll('.heading-item');
      if (headingItems?.length) {
        gsap.fromTo(
          headingItems,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 84%',
              once: true,
            },
          }
        );
      }

      const cards = cardsRef.current?.querySelectorAll('.contact-card');
      if (cards?.length) {
        gsap.fromTo(
          cards,
          { y: 24, opacity: 0, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.75,
            stagger: 0.08,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      const socials = socialsRef.current?.querySelectorAll('.social-item');
      if (socials?.length) {
        gsap.fromTo(
          socials,
          { y: 16, opacity: 0, scale: 0.92 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.55,
            stagger: 0.08,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: socialsRef.current,
              start: 'top 92%',
              once: true,
            },
          }
        );
      }

      if (footerRef.current) {
        gsap.fromTo(
          footerRef.current,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top 96%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* white background */}
      <div className="absolute inset-0 bg-white" />

      {/* page glows */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-pink-100/70 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-100/70 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-100/55 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div
          ref={panelRef}
          className="relative overflow-hidden rounded-[38px] border border-white/80 bg-[linear-gradient(135deg,#f8f4ff_0%,#efe7ff_34%,#ffe8d8_100%)] p-6 shadow-[0_30px_80px_rgba(168,85,247,0.12)] sm:p-8 lg:p-10"
        >
          {/* overlays */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.75),transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.35),transparent_30%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.35),transparent_42%)]" />

          {/* top accent */}
          <div className="absolute top-0 left-8 right-8 h-[3px] rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-orange-400" />

          <div className="relative z-20 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* left */}
            <div ref={headingRef} className="lg:col-span-5">
              <div className="heading-item mb-6 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/60 px-5 py-3 shadow-[8px_8px_18px_rgba(180,190,220,0.12),-8px_-8px_18px_rgba(255,255,255,0.95)]">
                <MessageSquare className="h-4 w-4 text-violet-600" />
                <span className="text-sm font-medium text-slate-700">Get in Touch</span>
              </div>

              <h2 className="heading-item mb-5 text-4xl font-extrabold leading-[0.95] text-slate-800 sm:text-5xl lg:text-6xl">
                Let&apos;s build
                <span className="block bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 bg-clip-text text-transparent">
                  something great
                </span>
              </h2>

              <p className="heading-item mb-8 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Whether you have a freelance project, a collaboration idea, or a
                full-time opportunity, I’d love to hear from you and discuss how
                we can work together.
              </p>

              <div className="heading-item rounded-[28px] border border-white/80 bg-white/60 p-5 backdrop-blur-md shadow-[10px_10px_22px_rgba(180,190,220,0.12),-10px_-10px_22px_rgba(255,255,255,0.92)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70">
                  <MapPin className="h-5 w-5 text-violet-600" />
                </div>
                <p className="text-sm text-slate-500 mb-1">Based in</p>
                <p className="text-lg font-semibold text-slate-800">
                  {contactInfo.location}
                </p>

                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  {contactInfo.availability}
                </div>
              </div>
            </div>

            {/* right cards */}
            <div
              ref={cardsRef}
              className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <a
                href={`mailto:${contactInfo.email}`}
                className="contact-card group rounded-[28px] border border-white/80 bg-white/65 p-5 backdrop-blur-md shadow-[12px_12px_24px_rgba(180,190,220,0.12),-12px_-12px_24px_rgba(255,255,255,0.95)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/75">
                  <Mail className="h-5 w-5 text-violet-600" />
                </div>
                <p className="text-sm text-slate-500 mb-1">Email</p>
                <p className="text-slate-800 font-semibold break-all mb-4">
                  {contactInfo.email}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600">
                  <span>Send Email</span>
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>

              <a
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card group rounded-[28px] border border-white/80 bg-white/65 p-5 backdrop-blur-md shadow-[12px_12px_24px_rgba(180,190,220,0.12),-12px_-12px_24px_rgba(255,255,255,0.95)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/75">
                  <Phone className="h-5 w-5 text-orange-500" />
                </div>
                <p className="text-sm text-slate-500 mb-1">WhatsApp</p>
                <p className="text-slate-800 font-semibold mb-4">{contactInfo.whatsapp}</p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500">
                  <span>Start Chat</span>
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>

              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card group rounded-[28px] border border-white/80 bg-white/65 p-5 backdrop-blur-md shadow-[12px_12px_24px_rgba(180,190,220,0.12),-12px_-12px_24px_rgba(255,255,255,0.95)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/75">
                  <Linkedin className="h-5 w-5 text-violet-600" />
                </div>
                <p className="text-sm text-slate-500 mb-1">LinkedIn</p>
                <p className="text-slate-800 font-semibold mb-4">Professional Profile</p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600">
                  <span>Visit Profile</span>
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>

              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card group rounded-[28px] border border-white/80 bg-white/65 p-5 backdrop-blur-md shadow-[12px_12px_24px_rgba(180,190,220,0.12),-12px_-12px_24px_rgba(255,255,255,0.95)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/75">
                  <Github className="h-5 w-5 text-slate-700" />
                </div>
                <p className="text-sm text-slate-500 mb-1">GitHub</p>
                <p className="text-slate-800 font-semibold mb-4">Code & Experiments</p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <span>Explore Work</span>
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            </div>
          </div>

          {/* bottom cta */}
          <div
            ref={socialsRef}
            className="relative z-20 mt-10 flex flex-col items-center justify-between gap-6 border-t border-white/60 pt-8 lg:flex-row"
          >
            <div className="flex items-center gap-4 flex-wrap justify-center lg:justify-start">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="social-item flex h-14 w-14 items-center justify-center rounded-2xl border border-white/80 bg-white/70 text-slate-700 shadow-[8px_8px_18px_rgba(180,190,220,0.12),-8px_-8px_18px_rgba(255,255,255,0.94)] transition-all duration-300 hover:-translate-y-1 hover:text-violet-700"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

        
          </div>

          {/* footer */}
          <div ref={footerRef} className="relative z-20 mt-10 text-center">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Usama Tariq. Crafted with care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;