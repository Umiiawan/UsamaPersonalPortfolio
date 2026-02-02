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
  const timelineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
        'Designed and customized Shopify themes to enhance user experience and align with each brand\'s visual identity.',
        'Built and integrated custom features using Liquid, HTML, CSS, and JavaScript.',
        'Optimized store performance and SEO, improving page load times and increasing organic traffic.',
        'Worked directly with clients to understand their needs and provide tailored solutions and ongoing support.',
        'Conducted thorough testing and debugging to ensure smooth performance across devices and browsers.',
      ],
      highlights: ['Shopify', 'Liquid', 'SEO', 'Performance Optimization'],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline line animation
      gsap.fromTo(
        '.timeline-line',
        { height: '0%' },
        {
          height: '100%',
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            scrub: 1,
          },
        }
      );

      // Experience cards animation
      const cards = cardsRef.current?.querySelectorAll('.experience-card');
      if (cards) {
        cards.forEach((card, index) => {
          const direction = index % 2 === 0 ? -50 : 50;
          gsap.fromTo(
            card,
            { x: direction, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'expo.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 75%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      }

      // Timeline dots animation
      const dots = timelineRef.current?.querySelectorAll('.timeline-dot');
      if (dots) {
        gsap.fromTo(
          dots,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.2,
            ease: 'back.out(2)',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
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
      className="relative w-full py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-border bg-brand-dark/50 mb-6">
            <Briefcase className="w-4 h-4 text-brand-red" />
            <span className="text-sm text-brand-gray font-body">Work History</span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white mb-4">
            Work <span className="text-brand-red">Experience</span>
          </h2>
          <p className="font-body text-lg text-brand-gray max-w-2xl mx-auto">
            My professional journey and the companies I have worked with
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Vertical Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2">
            <div className="absolute inset-0 bg-brand-border" />
            <div className="timeline-line absolute top-0 left-0 w-full bg-brand-red" />
          </div>

          {/* Experience Cards */}
          <div ref={cardsRef} className="space-y-12 lg:space-y-0">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${
                  index !== experiences.length - 1 ? 'lg:mb-12' : ''
                }`}
              >
                {/* Timeline Dot - Desktop */}
                <div
                  className={`hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 z-10 ${
                    index % 2 === 0 ? 'lg:flex' : 'lg:flex'
                  }`}
                >
                  <div className="timeline-dot w-4 h-4 rounded-full bg-brand-red border-4 border-black animate-glow-pulse" />
                </div>

                {/* Card */}
                <div
                  className={`experience-card ${
                    index % 2 === 0
                      ? 'lg:col-start-1 lg:pr-12'
                      : 'lg:col-start-2 lg:pl-12'
                  }`}
                >
                  <div className="group p-6 lg:p-8 bg-brand-dark border border-brand-border rounded-2xl transition-all duration-300 hover:border-brand-red/50 hover:glow-red tilt-card">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <h3 className="font-display text-2xl lg:text-3xl text-white mb-1 group-hover:text-brand-red transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-brand-gray">
                          <span className="font-body text-lg">{exp.company}</span>
                          <span className="text-brand-border">|</span>
                          <span className="flex items-center gap-1 text-sm">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-brand-red/10 rounded-full">
                        <Calendar className="w-4 h-4 text-brand-red" />
                        <span className="text-sm font-body text-brand-red">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 font-body text-sm text-brand-gray"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-body text-white bg-brand-border rounded-full transition-colors hover:bg-brand-red/20"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
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
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-brand-border rounded-full font-body text-white transition-all duration-300 hover:border-brand-red hover:text-brand-red"
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
