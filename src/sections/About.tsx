import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Calendar,
  Users,
  Briefcase,
  Award,
  Sparkles,
  Palette,
  Code2,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    { icon: Calendar, value: '6+', label: 'Months Experience' },
    { icon: Briefcase, value: '10+', label: 'Projects Completed' },
    { icon: Users, value: '5+', label: 'Happy Clients' },
    { icon: Award, value: '100%', label: 'Commitment' },
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

      const leftItems = leftRef.current?.querySelectorAll('.left-item');
      if (leftItems?.length) {
        gsap.fromTo(
          leftItems,
          { x: -24, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: leftRef.current,
              start: 'top 84%',
              once: true,
            },
          }
        );
      }

      gsap.fromTo(
        imageRef.current,
        { y: 26, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 84%',
            once: true,
          },
        }
      );

      const rightItems = rightRef.current?.querySelectorAll('.right-item');
      if (rightItems?.length) {
        gsap.fromTo(
          rightItems,
          { x: 24, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: rightRef.current,
              start: 'top 84%',
              once: true,
            },
          }
        );
      }

      const statCards = statsRef.current?.querySelectorAll('.stat-card');
      if (statCards?.length) {
        gsap.fromTo(
          statCards,
          { y: 20, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.65,
            stagger: 0.08,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 88%',
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
      id="about"
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
          {/* glossy overlays */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.75),transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.35),transparent_30%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.35),transparent_42%)]" />

          {/* top accent */}
          <div className="absolute top-0 left-8 right-8 h-[3px] rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-orange-400" />

          <div className="relative z-20">
            {/* top label */}
            <div className="mb-10 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/60 px-5 py-3 backdrop-blur-md shadow-[8px_8px_18px_rgba(180,190,220,0.12),-8px_-8px_18px_rgba(255,255,255,0.95)]">
                <Sparkles className="h-4 w-4 text-violet-600" />
                <span className="text-sm font-medium text-slate-700">About Me</span>
              </div>
            </div>

            {/* split layout */}
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
              {/* left */}
              <div ref={leftRef} className="text-center lg:text-right">
                <div className="left-item mb-5 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/55 px-4 py-2 backdrop-blur-md shadow-[8px_8px_18px_rgba(180,190,220,0.12),-8px_-8px_18px_rgba(255,255,255,0.92)]">
                  <Palette className="h-4 w-4 text-orange-500" />
                  <span className="text-sm font-medium text-slate-700">Designer Mindset</span>
                </div>

                <h2 className="left-item mb-4 text-4xl font-extrabold text-slate-800 sm:text-5xl">
                  thoughtful
                  <span className="block bg-gradient-to-r from-orange-400 to-fuchsia-500 bg-clip-text text-transparent">
                    designer
                  </span>
                </h2>

                <p className="left-item mx-auto max-w-md text-base leading-relaxed text-slate-600 lg:ml-auto lg:mr-0">
                  I care deeply about visual clarity, spacing, typography, and
                  creating interfaces that feel refined, intuitive, and engaging.
                </p>
              </div>

              {/* center image */}
              <div ref={imageRef} className="relative flex justify-center">
                <div className="relative w-full max-w-[20rem] sm:max-w-[22rem]">
                  {/* glow */}
                  <div className="absolute inset-0 scale-105 rounded-[34px] bg-gradient-to-br from-orange-200/20 via-violet-200/20 to-pink-200/20 blur-3xl" />

                  {/* image frame */}
                  <div className="relative rounded-[34px] border border-white/80 bg-white/45 p-4 backdrop-blur-md shadow-[0_25px_60px_rgba(168,85,247,0.12)]">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[26px] bg-white/40">
                      <img
                        src="/about-portrait.jpeg"
                        alt="Usama Tariq"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10" />
                    </div>
                  </div>

                  {/* floating badge */}
                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-2xl border border-white/80 bg-white/70 px-5 py-3 backdrop-blur-md shadow-[0_12px_30px_rgba(249,115,22,0.12)]">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/70">
                        <Sparkles className="h-4 w-4 text-violet-600" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">Experience</p>
                        <p className="text-sm font-semibold text-slate-800">6+ Months</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* right */}
              <div ref={rightRef} className="text-center lg:text-left">
                <div className="right-item mb-5 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/55 px-4 py-2 backdrop-blur-md shadow-[8px_8px_18px_rgba(180,190,220,0.12),-8px_-8px_18px_rgba(255,255,255,0.92)]">
                  <Code2 className="h-4 w-4 text-violet-600" />
                  <span className="text-sm font-medium text-slate-700">Coder Mindset</span>
                </div>

                <h2 className="right-item mb-4 text-4xl font-extrabold text-slate-800 sm:text-5xl">
                  practical
                  <span className="block bg-gradient-to-r from-violet-600 to-orange-400 bg-clip-text text-transparent">
                    developer
                  </span>
                </h2>

                <p className="right-item mx-auto max-w-md text-base leading-relaxed text-slate-600 lg:ml-0 lg:mr-auto">
                  I build scalable full-stack solutions with React, Node.js,
                  APIs, and modern workflows — focusing on performance,
                  maintainability, and real-world usability.
                </p>
              </div>
            </div>

            {/* middle paragraph */}
            <div className="mt-14 text-center">
              <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
                I combine technical execution with product thinking — translating
                real requirements into polished, user-friendly digital experiences.
                My work spans government projects, Shopify stores, and modern web
                applications where clean code and thoughtful design go hand in hand.
              </p>
            </div>

            {/* stats */}
            <div
              ref={statsRef}
              className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="stat-card rounded-[24px] border border-white/80 bg-white/60 p-5 backdrop-blur-md shadow-[12px_12px_26px_rgba(180,190,220,0.14),-12px_-12px_26px_rgba(255,255,255,0.96)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70">
                    <stat.icon className="h-5 w-5 text-violet-600" />
                  </div>

                  <span className="mb-1 block text-2xl font-extrabold text-slate-800 sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="text-sm font-medium text-slate-600">
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