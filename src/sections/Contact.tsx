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
  const infoRef = useRef<HTMLDivElement>(null);

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
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: contactInfo.linkedin,
      color: 'hover:bg-[#0077B5]',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: contactInfo.github,
      color: 'hover:bg-[#333]',
    },
    {
      name: 'WhatsApp',
      icon: Phone,
      url: contactInfo.whatsappLink,
      color: 'hover:bg-[#25D366]',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = infoRef.current?.querySelectorAll('.info-item');
      if (items) {
        gsap.fromTo(
          items,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
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
      className="relative w-full py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-border bg-brand-dark/50 mb-6">
            <MessageSquare className="w-4 h-4 text-brand-red" />
            <span className="text-sm text-brand-gray">Get in Touch</span>
          </div>

          <h2 className="font-display text-5xl sm:text-6xl text-white mb-4">
            Let&apos;s <span className="text-brand-red">Connect</span>
          </h2>

          <p className="text-lg text-brand-gray max-w-2xl mx-auto">
            Prefer direct communication? Reach out via email, WhatsApp, or LinkedIn.
          </p>
        </div>

        {/* Contact Info */}
        <div ref={infoRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email */}
          <a
            href={`mailto:${contactInfo.email}`}
            className="info-item group flex items-center gap-4 p-6 bg-brand-dark border border-brand-border rounded-xl hover:border-brand-red/50 transition-all"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-brand-red/10 rounded-lg">
              <Mail className="w-5 h-5 text-brand-red" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-brand-gray">Email</p>
              <p className="text-white">{contactInfo.email}</p>
            </div>
            <ExternalLink className="w-4 h-4 text-brand-gray group-hover:text-brand-red transition-colors" />
          </a>

          {/* WhatsApp */}
          <a
            href={contactInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="info-item group flex items-center gap-4 p-6 bg-brand-dark border border-brand-border rounded-xl hover:border-brand-red/50 transition-all"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-brand-red/10 rounded-lg">
              <Phone className="w-5 h-5 text-brand-red" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-brand-gray">WhatsApp</p>
              <p className="text-white">{contactInfo.whatsapp}</p>
            </div>
            <ExternalLink className="w-4 h-4 text-brand-gray group-hover:text-brand-red transition-colors" />
          </a>

          {/* Availability */}
          <div className="info-item flex items-center gap-4 p-6 bg-brand-dark border border-brand-border rounded-xl">
            <div className="w-12 h-12 flex items-center justify-center bg-green-500/10 rounded-lg">
              <Clock className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-brand-gray">Availability</p>
              <p className="text-white">{contactInfo.availability}</p>
            </div>
          </div>

          {/* Location */}
          <div className="info-item flex items-center gap-4 p-6 bg-brand-dark border border-brand-border rounded-xl">
            <div className="w-12 h-12 flex items-center justify-center bg-brand-red/10 rounded-lg">
              <MapPin className="w-5 h-5 text-brand-red" />
            </div>
            <div>
              <p className="text-sm text-brand-gray">Location</p>
              <p className="text-white">{contactInfo.location}</p>
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="mt-12 flex justify-center gap-4">
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 flex items-center justify-center bg-brand-dark border border-brand-border rounded-xl transition-all ${social.color}`}
            >
              <social.icon className="w-5 h-5 text-white" />
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-brand-border text-center">
          <p className="text-sm text-brand-gray">
            © {new Date().getFullYear()} Usama Tariq. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
