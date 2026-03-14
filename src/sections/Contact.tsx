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
  Clock,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
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
        '.contact-reveal',
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 82%',
            once: true,
          },
        }
      );

      const panelItems = panelRef.current?.querySelectorAll('.panel-item');
      if (panelItems?.length) {
        gsap.fromTo(
          panelItems,
          { y: 28, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.75,
            stagger: 0.1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: panelRef.current,
              start: 'top 82%',
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
      className="relative overflow-hidden py-24 lg:py-32 bg-mesh"
    >
      {/* soft glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-[-80px] w-72 h-72 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="absolute bottom-0 right-[-80px] w-80 h-80 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-[26rem] h-[26rem] rounded-full bg-violet-200/20 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div ref={headingRef} className="text-center mb-16 lg:mb-20">
          <div className="contact-reveal inline-flex items-center gap-2 px-5 py-3 rounded-full glass-pill mb-6">
            <MessageSquare className="w-4 h-4 text-violet-600" />
            <span className="text-sm font-medium text-slate-700">Get in Touch</span>
          </div>

          <h2 className="contact-reveal text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800 mb-5">
            Let&apos;s <span className="text-gradient">Build Something Great</span>
          </h2>

          <p className="contact-reveal max-w-2xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed">
            Have a project in mind, a role to discuss, or just want to say hello?
            Reach out through any of the channels below.
          </p>
        </div>

        {/* main panel */}
        <div
          ref={panelRef}
          className="glass-card-strong rounded-[34px] p-6 sm:p-8 lg:p-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.35),transparent_45%)] pointer-events-none" />
          <div className="absolute top-0 left-8 right-8 h-[3px] rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 relative z-10">
            {/* left intro */}
            <div className="lg:col-span-5">
              <div className="panel-item">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill mb-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-medium text-slate-700">
                    {contactInfo.availability}
                  </span>
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 leading-tight">
                  Open for freelance work, collaborations, and full-time opportunities.
                </h3>

                <p className="text-slate-600 leading-relaxed mb-6">
                  I enjoy building polished, performant, and user-focused digital
                  experiences. If you have a product idea or an opportunity, I’d love
                  to hear about it.
                </p>

                <div className="flex items-center gap-3 rounded-2xl glass-card p-4">
                  <div className="w-12 h-12 rounded-2xl glass-icon flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Based in</p>
                    <p className="font-semibold text-slate-800">{contactInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* right info cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="panel-item glass-card rounded-[26px] p-5 group transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl glass-icon flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5 text-violet-600" />
                </div>
                <p className="text-sm text-slate-500 mb-1">Email</p>
                <p className="text-slate-800 font-semibold break-all mb-4">
                  {contactInfo.email}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-violet-600">
                  <span>Send Email</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>

              <a
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="panel-item glass-card rounded-[26px] p-5 group transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl glass-icon flex items-center justify-center mb-4">
                  <Phone className="w-5 h-5 text-violet-600" />
                </div>
                <p className="text-sm text-slate-500 mb-1">WhatsApp</p>
                <p className="text-slate-800 font-semibold mb-4">{contactInfo.whatsapp}</p>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-violet-600">
                  <span>Start Chat</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>

              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="panel-item glass-card rounded-[26px] p-5 group transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl glass-icon flex items-center justify-center mb-4">
                  <Linkedin className="w-5 h-5 text-violet-600" />
                </div>
                <p className="text-sm text-slate-500 mb-1">LinkedIn</p>
                <p className="text-slate-800 font-semibold mb-4">Professional Profile</p>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-violet-600">
                  <span>Visit Profile</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>

              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="panel-item glass-card rounded-[26px] p-5 group transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl glass-icon flex items-center justify-center mb-4">
                  <Github className="w-5 h-5 text-violet-600" />
                </div>
                <p className="text-sm text-slate-500 mb-1">GitHub</p>
                <p className="text-slate-800 font-semibold mb-4">Code & Experiments</p>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-violet-600">
                  <span>Explore Work</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* socials */}
        <div
          ref={socialsRef}
          className="mt-10 flex items-center justify-center gap-4 flex-wrap"
        >
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="social-item w-14 h-14 rounded-2xl glass-pill flex items-center justify-center text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:text-violet-700"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* footer */}
        <div ref={footerRef} className="mt-20 pt-8 border-t border-white/60 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Usama Tariq. Crafted with care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;