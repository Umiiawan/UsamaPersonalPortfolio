import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Users, Briefcase, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    { icon: Calendar, value: '6+', label: 'Months Experience', delay: 0 },
    { icon: Briefcase, value: '10+', label: 'Projects Completed', delay: 0.1 },
    { icon: Users, value: '5+', label: 'Happy Clients', delay: 0.2 },
    { icon: Award, value: '100%', label: 'Commitment', delay: 0.3 },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal animation
      gsap.fromTo(
        imageRef.current,
        { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)', opacity: 0 },
        {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          opacity: 1,
          duration: 1.2,
          ease: 'expo.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Content animation
      const contentElements = contentRef.current?.querySelectorAll('.animate-item');
      if (contentElements) {
        gsap.fromTo(
          contentElements,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Stats animation
      const statCards = statsRef.current?.querySelectorAll('.stat-card');
      if (statCards) {
        gsap.fromTo(
          statCards,
          { scale: 0, rotation: -10, opacity: 0 },
          {
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 80%',
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
      id="about"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Image */}
          <div ref={imageRef} className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              {/* Main image */}
              <img
                src="/about-portrait.jpeg"
                alt="Usama Tariq"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Decorative border */}
              <div className="absolute inset-0 border-2 border-brand-border rounded-2xl" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-brand-red/30 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-red/10 rounded-2xl -z-10" />

            {/* Experience badge */}
            <div className="absolute bottom-8 left-8 px-6 py-4 bg-brand-dark/90 backdrop-blur-sm border border-brand-border rounded-xl">
              <span className="block text-3xl font-display text-brand-red">6+</span>
              <span className="text-sm font-body text-brand-gray">Months Experience</span>
            </div>
          </div>

          {/* Right Column - Content */}
          <div ref={contentRef}>
            {/* Section label */}
            <div className="animate-item inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-border bg-brand-dark/50 mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span className="text-sm text-brand-gray font-body">About Me</span>
            </div>

            {/* Heading */}
            <h2 className="animate-item font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              Crafting Digital
              <span className="text-brand-red block">Experiences</span>
            </h2>

            {/* Description paragraphs */}
            <div className="space-y-4 mb-8">
              <p className="animate-item font-body text-base text-brand-gray leading-relaxed">
                I am a Full-Stack Web Developer with hands-on experience building responsive 
                web applications and Shopify e-commerce stores. I have worked on government 
                projects, client stores, and personal web apps, focusing on clean user interfaces, 
                performant backends, and SEO-friendly solutions.
              </p>
              <p className="animate-item font-body text-base text-brand-gray leading-relaxed">
                I enjoy turning real-world requirements into reliable, user-friendly products 
                using JavaScript, React, Node.js, and modern web tools. My approach combines 
                technical expertise with a keen eye for design, ensuring every project I work 
                on is both functional and visually appealing.
              </p>
              <p className="animate-item font-body text-base text-brand-gray leading-relaxed">
                I am currently open to freelance opportunities, full-time positions, and 
                collaborative projects where I can contribute my skills and continue growing 
                as a developer.
              </p>
            </div>

            {/* Stats Grid */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="stat-card group p-4 bg-brand-dark border border-brand-border rounded-xl transition-all duration-300 hover:border-brand-red/50 hover:glow-red"
                >
                  <stat.icon className="w-6 h-6 text-brand-red mb-3 transition-transform group-hover:scale-110" />
                  <span className="block text-2xl font-display text-white mb-1">
                    {stat.value}
                  </span>
                  <span className="text-sm font-body text-brand-gray">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
