import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  highlights: string[];
}

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const experiences: ExperienceItem[] = [
    {
      company: 'NavTech',
      role: 'Full Stack Developer',
      location: 'Government Institute',
      period: 'March-2024 - June-2024',
      description: [
        'Developed and maintained responsive web applications using JavaScript, React, and Node.js, enhancing user engagement and functionality.',
        'Collaborated with cross-functional teams to gather requirements and deliver innovative solutions, improving overall project efficiency.',
        'Implemented RESTful APIs and integrated third-party services, ensuring seamless data flow and strong application performance.',
      ],
      highlights: ['React', 'Node.js', 'REST APIs', 'Team Collaboration'],
    },
    {
      company: 'Tab on Tech',
      role: 'Shopify Developer',
      location: 'Remote',
      period: '2023 - 2024',
      description: [
        'Designed and customized Shopify themes to enhance user experience and align with each brand’s visual identity.',
        'Built and integrated custom features using Liquid, HTML, CSS, and JavaScript.',
        'Optimized store performance and SEO, improving page load times and increasing organic traffic.',
        'Worked directly with clients to understand their needs and provide tailored solutions and ongoing support.',
        'Conducted thorough testing and debugging to ensure smooth performance across devices and browsers.',
      ],
      highlights: ['Shopify', 'Liquid', 'SEO', 'Performance Optimization'],
    },
  ];

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      // Heading animation
      if (headingRef.current) {
        const headingItems = headingRef.current.querySelectorAll('.heading-item');
        gsap.fromTo(
          headingItems,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }

      // Timeline line animation
      const line = sectionRef.current?.querySelector('.timeline-line');
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0, transformOrigin: 'top center' },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 75%',
              end: 'bottom 30%',
              scrub: 1.2,
            },
          }
        );
      }

      // Timeline dots
      const dots = sectionRef.current?.querySelectorAll('.timeline-dot');
      if (dots?.length) {
        gsap.fromTo(
          dots,
          { scale: 0.4, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.18,
            ease: 'back.out(1.8)',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 75%',
              once: true,
            },
          }
        );
      }

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll('.experience-card');
      if (cards?.length) {
        cards.forEach((card, index) => {
          const direction = index % 2 === 0 ? -40 : 40;

          gsap.fromTo(
            card,
            { x: direction, y: 20, opacity: 0 },
            {
              x: 0,
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: 'expo.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 82%',
                toggleActions: 'play none none none',
                once: true,
              },
            }
          );
        });
      }

      // Inner list items
      const listItems = sectionRef.current?.querySelectorAll('.exp-point');
      if (listItems?.length) {
        gsap.fromTo(
          listItems,
          { y: 10, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
            stagger: 0.04,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }

      // Bottom CTA
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 90%',
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
      id="experience"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 overflow-hidden bg-[#f5f7ff]"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[-60px] w-72 h-72 bg-pink-200/25 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-[-80px] w-80 h-80 bg-sky-200/25 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-[28rem] h-[28rem] bg-violet-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headingRef} className="text-center mb-16 lg:mb-20">
          <div className="heading-item inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/60 backdrop-blur-xl border border-white/70 shadow-[8px_8px_20px_rgba(180,190,220,0.3),-8px_-8px_20px_rgba(255,255,255,0.9)] mb-6">
            <Briefcase className="w-4 h-4 text-violet-600" />
            <span className="text-sm font-medium text-slate-700">Work History</span>
          </div>

          <h2 className="heading-item text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800 mb-5">
            Work{" "}
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="heading-item text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            My professional journey, the teams I have worked with, and the
            impact I have delivered through real-world projects.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Desktop center line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
            <div className="absolute inset-0 rounded-full bg-[#d9e1ff]" />
            <div className="timeline-line absolute inset-x-0 top-0 bottom-0 rounded-full bg-gradient-to-b from-violet-500 via-fuchsia-500 to-pink-500 origin-top" />
          </div>

          {/* Mobile line */}
          <div className="lg:hidden absolute left-4 top-0 bottom-0 w-[2px]">
            <div className="absolute inset-0 rounded-full bg-[#d9e1ff]" />
            <div className="timeline-line absolute inset-x-0 top-0 bottom-0 rounded-full bg-gradient-to-b from-violet-500 via-fuchsia-500 to-pink-500 origin-top" />
          </div>

          <div ref={cardsRef} className="space-y-10 lg:space-y-14">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative lg:grid lg:grid-cols-2 lg:gap-10 items-start"
              >
                {/* Timeline Dot Desktop */}
                <div className="hidden lg:flex absolute left-1/2 top-10 -translate-x-1/2 z-20">
                  <div className="timeline-dot w-5 h-5 rounded-full bg-white border-[5px] border-violet-500 shadow-[0_0_0_6px_rgba(255,255,255,0.7)]" />
                </div>

                {/* Timeline Dot Mobile */}
                <div className="lg:hidden absolute left-4 top-8 -translate-x-1/2 z-20">
                  <div className="timeline-dot w-4 h-4 rounded-full bg-white border-[4px] border-violet-500 shadow-[0_0_0_4px_rgba(255,255,255,0.7)]" />
                </div>

                {/* Card */}
                <div
                  className={`experience-card relative ${
                    index % 2 === 0
                      ? 'lg:col-start-1 lg:pr-12'
                      : 'lg:col-start-2 lg:pl-12'
                  } pl-10 lg:pl-0`}
                >
                  <div className="group relative rounded-[30px] p-6 lg:p-8 bg-white/60 backdrop-blur-xl border border-white/70 shadow-[14px_14px_30px_rgba(180,190,220,0.28),-14px_-14px_30px_rgba(255,255,255,0.95)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[18px_18px_36px_rgba(180,190,220,0.32),-18px_-18px_36px_rgba(255,255,255,1)]">
                    {/* top accent line */}
                    <div className="absolute top-0 left-6 right-6 h-[3px] rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-pink-400 opacity-90" />

                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-1">
                          {exp.role}
                        </h3>

                        <div className="flex flex-wrap items-center gap-2 text-slate-500">
                          <span className="text-lg font-medium text-slate-700">
                            {exp.company}
                          </span>
                          <span className="text-slate-300">|</span>
                          <span className="flex items-center gap-1 text-sm">
                            <MapPin className="w-4 h-4 text-violet-500" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-white/80 shadow-[6px_6px_14px_rgba(180,190,220,0.2),-6px_-6px_14px_rgba(255,255,255,0.95)]">
                        <Calendar className="w-4 h-4 text-violet-600" />
                        <span className="text-sm font-medium text-slate-700">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="exp-point flex items-start gap-3 text-sm sm:text-[15px] text-slate-600 leading-relaxed"
                        >
                          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 bg-white/70 border border-white/80 shadow-[4px_4px_10px_rgba(180,190,220,0.16),-4px_-4px_10px_rgba(255,255,255,0.9)] transition-all duration-300 hover:scale-[1.03]"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Alternate spacing */}
                {index % 2 === 0 ? (
                  <div className="hidden lg:block lg:col-start-2" />
                ) : (
                  <div className="hidden lg:block lg:col-start-1 lg:row-start-1" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div ref={ctaRef} className="mt-16 lg:mt-20 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/60 backdrop-blur-xl border border-white/70 text-slate-700 font-medium shadow-[10px_10px_24px_rgba(180,190,220,0.28),-10px_-10px_24px_rgba(255,255,255,0.95)] transition-all duration-300 hover:scale-[1.03] hover:text-violet-700"
          >
            <span>Let&apos;s Work Together</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;