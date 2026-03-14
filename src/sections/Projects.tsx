import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ExternalLink,
  Github,
  Layers,
  Code2,
  Database,
  CreditCard,
  ArrowUpRight,
  Sparkles,
  BookOpen,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  image: string;
  role: string;
  links?: {
    demo?: string;
    github?: string;
  };
}

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const booksRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      title: 'Car Wash Management System',
      subtitle: 'Final Year Project',
      description:
        'A full-stack web application with admin and customer modules for managing bookings, invoicing, inventory, authentication, and Stripe-powered payments.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe'],
      image: '/project-carwash.png',
      role: 'Full-stack development, API architecture, Stripe integration, and dashboard workflows.',
    },
    {
      title: 'HifzLab.com',
      subtitle: 'React Web Application',
      description:
        'A modern React platform with dashboard-style flows, responsive layouts, and a clean interface designed for usability and progress tracking.',
      tech: ['React.js', 'Modern UI', 'Responsive Design'],
      image: '/project-hifzlab.png',
      role: 'Frontend development, responsive UI implementation, state handling, and polished user experience.',
      links: {
        demo: 'https://hifzlab.com',
      },
    },
  ];

  const techIcons: Record<string, React.ElementType> = {
    'React.js': Layers,
    'Node.js': Code2,
    'Express.js': Code2,
    'MongoDB': Database,
    'Stripe': CreditCard,
    'Modern UI': Layers,
    'Responsive Design': Layers,
  };

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

      const books = booksRef.current?.querySelectorAll('.book-project');
      if (books?.length) {
        books.forEach((book) => {
          const leftPage = book.querySelector('.left-page');
          const rightPage = book.querySelector('.right-page');
          const spine = book.querySelector('.book-spine');
          const leftInner = book.querySelectorAll('.left-inner');
          const rightInner = book.querySelectorAll('.right-inner');

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: book,
              start: 'top 84%',
              once: true,
            },
          });

          tl.fromTo(
            book,
            { y: 24, opacity: 0, scale: 0.98 },
            { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'expo.out' }
          )
            .fromTo(
              leftPage,
              {
                rotationY: -88,
                transformOrigin: 'right center',
                opacity: 0.7,
              },
              {
                rotationY: 0,
                opacity: 1,
                duration: 0.95,
                ease: 'expo.out',
              },
              0.1
            )
            .fromTo(
              rightPage,
              {
                rotationY: 88,
                transformOrigin: 'left center',
                opacity: 0.7,
              },
              {
                rotationY: 0,
                opacity: 1,
                duration: 0.95,
                ease: 'expo.out',
              },
              0.1
            )
            .fromTo(
              spine,
              { scaleY: 0.7, opacity: 0 },
              { scaleY: 1, opacity: 1, duration: 0.5, ease: 'power2.out' },
              0.25
            )
            .fromTo(
              leftInner,
              { y: 12, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.06,
                ease: 'power3.out',
              },
              0.55
            )
            .fromTo(
              rightInner,
              { y: 12, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.06,
                ease: 'power3.out',
              },
              0.7
            );
        });
      }

      if (footerRef.current) {
        gsap.fromTo(
          footerRef.current,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top 92%',
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
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 lg:px-8"
      style={{ perspective: '1800px' }}
    >
      <div className="absolute inset-0 bg-white" />

      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-pink-100/70 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-100/70 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-100/55 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div
          ref={panelRef}
          className="relative overflow-hidden rounded-[38px] border border-white/80 bg-[linear-gradient(135deg,#f8f4ff_0%,#efe7ff_34%,#ffe8d8_100%)] p-6 shadow-[0_30px_80px_rgba(168,85,247,0.12)] sm:p-8 lg:p-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.75),transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.35),transparent_30%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.35),transparent_42%)]" />

          <div className="absolute top-0 left-8 right-8 h-[3px] rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-orange-400" />

          <div ref={headingRef} className="relative z-20 mb-14 text-center lg:mb-16">
            <div className="heading-item mb-6 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/65 px-5 py-3 shadow-[8px_8px_18px_rgba(180,190,220,0.12),-8px_-8px_18px_rgba(255,255,255,0.95)]">
              <BookOpen className="h-4 w-4 text-violet-600" />
              <span className="text-sm font-medium text-slate-700">Project Showcase</span>
            </div>

            <h2 className="heading-item mb-5 text-4xl font-extrabold text-slate-800 sm:text-5xl lg:text-6xl">
              Featured
              <span className="block bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <p className="heading-item mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              A curated collection of projects presented like a digital portfolio
              spread — combining clean design, architecture, and execution.
            </p>
          </div>

          <div ref={booksRef} className="relative z-20 space-y-10 lg:space-y-12">
            {projects.map((project, index) => (
              <article
                key={index}
                className="book-project relative rounded-[34px] border border-white/80 bg-white/45 p-4 backdrop-blur-md shadow-[0_20px_50px_rgba(168,85,247,0.10)] lg:p-5"
              >
                <div className="grid grid-cols-1 gap-0 overflow-visible rounded-[28px] lg:grid-cols-[1.15fr_28px_1fr]">
                  {/* Left Page */}
                  <div
                    className="left-page relative border border-white/80 bg-white/72 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] lg:p-5"
                    style={{
                      transformStyle: 'preserve-3d',
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <div className="left-inner mb-4 flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-3 py-1.5 text-xs font-semibold text-slate-600">
                        <Sparkles className="h-3.5 w-3.5 text-violet-600" />
                        {project.subtitle}
                      </div>

                      <div className="text-sm font-bold text-slate-300">
                        0{index + 1}
                      </div>
                    </div>

                    <div className="left-inner relative overflow-hidden rounded-[22px] border border-white/80 bg-[#eef2ff] aspect-[16/10]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/8 via-transparent to-white/20" />
                    </div>

                    <div className="left-inner mt-4">
                      <h3 className="text-2xl font-bold text-slate-800 sm:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Spine */}
                  <div
                    className="book-spine relative hidden lg:block bg-[linear-gradient(180deg,#f4ebff_0%,#ead9ff_50%,#ffe6d7_100%)]"
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <div className="absolute inset-y-0 left-1/2 w-[1px] -translate-x-1/2 bg-white/70" />
                    <div className="absolute inset-y-0 left-0 w-full bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.10),transparent_65%)]" />
                  </div>

                  {/* Right Page */}
                  <div
                    className="right-page relative border border-white/80 bg-white/68 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] lg:p-6"
                    style={{
                      transformStyle: 'preserve-3d',
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <div className="right-inner mb-5">
                      <span className="mb-2 block text-sm font-semibold text-slate-500">
                        Contribution
                      </span>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {project.role}
                      </p>
                    </div>

                    <div className="right-inner mb-6">
                      <span className="mb-3 block text-sm font-semibold text-slate-500">
                        Stack
                      </span>
                      <div className="flex flex-wrap gap-2.5">
                        {project.tech.map((tech, i) => {
                          const Icon = techIcons[tech] || Code2;
                          return (
                            <span
                              key={i}
                              className="inline-flex items-center gap-2 rounded-xl border border-white/80 bg-white/75 px-3 py-2 text-sm font-medium text-slate-700 shadow-[4px_4px_10px_rgba(180,190,220,0.12),-4px_-4px_10px_rgba(255,255,255,0.92)]"
                            >
                              <Icon className="h-4 w-4 text-violet-600" />
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <div className="right-inner mb-6 rounded-[22px] border border-white/80 bg-white/72 p-4 shadow-[8px_8px_18px_rgba(180,190,220,0.10),-8px_-8px_18px_rgba(255,255,255,0.92)]">
                      <p className="mb-2 text-sm font-semibold text-slate-700">
                        Project Note
                      </p>
                      <p className="text-sm leading-relaxed text-slate-600">
                        This project reflects my approach to combining product
                        thinking, practical UI decisions, and maintainable code.
                      </p>
                    </div>

                    <div className="right-inner flex flex-wrap gap-3">
                      {project.links?.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-orange-400 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(249,115,22,0.18)] transition-all duration-300 hover:-translate-y-0.5"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      )}

                      {project.links?.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-5 py-3 text-sm font-medium text-slate-700 shadow-[8px_8px_20px_rgba(180,190,220,0.12),-8px_-8px_20px_rgba(255,255,255,0.94)] transition-all duration-300 hover:-translate-y-0.5 hover:text-violet-700"
                        >
                          <Github className="h-4 w-4" />
                          Source Code
                        </a>
                      )}

                      {!project.links?.github && !project.links?.demo && (
                        <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-5 py-3 text-sm font-medium text-slate-500">
                          <ArrowUpRight className="h-4 w-4" />
                          Private Project
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div ref={footerRef} className="relative z-20 mt-12 text-center">
            <p className="mb-5 text-base text-slate-600 sm:text-lg">
              Interested in more builds and experiments?
            </p>

            <a
              href="https://github.com/Umiiawan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-orange-400 px-6 py-3 font-semibold text-white shadow-[0_12px_24px_rgba(249,115,22,0.18)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <Github className="h-4 w-4" />
              <span>View GitHub Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;