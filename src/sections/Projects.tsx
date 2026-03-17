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
  Globe,
  Briefcase,
  ChevronRight,
  ShoppingBag,
  Palette,
  Settings,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  image: string;
  role: string;
  gradient: string;
  shadowColor: string;
  links?: {
    demo?: string;
    github?: string;
  };
  storePassword?: string;
}

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
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
      gradient: 'from-violet-600 via-purple-500 to-indigo-600',
      shadowColor: 'rgba(139,92,246,0.12)',
    },
    {
      title: 'HifzLab.com',
      subtitle: 'React Web Application',
      description:
        'A modern React platform with dashboard-style flows, responsive layouts, and a clean interface designed for usability and progress tracking.',
      tech: ['React.js', 'Modern UI', 'Responsive Design'],
      image: '/project-hifzlab.png',
      role: 'Frontend development, responsive UI implementation, state handling, and polished user experience.',
      gradient: 'from-orange-500 via-pink-500 to-rose-500',
      shadowColor: 'rgba(249,115,22,0.12)',
      links: {
        demo: 'https://www.hifzlab.com/',
      },
    },
    {
      title: 'FoldTech — Shopify Store',
      subtitle: 'E-Commerce Development',
      description:
        'A custom Shopify storefront built for a modern e-commerce brand. Features include a fully customized theme, optimized product pages, smooth checkout flow, and mobile-first responsive design for maximum conversions.',
      tech: ['Shopify', 'Liquid', 'Theme Customization', 'E-Commerce', 'Responsive Design'],
      image: '/image.png',
      role: 'Shopify store setup, theme customization, product catalog management, checkout optimization, and responsive storefront development.',
      gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
      shadowColor: 'rgba(20,184,166,0.12)',
      links: {
        demo: 'https://usamafoldtech.myshopify.com/',
      },
      storePassword: 'foldtech',
    },
  ];

  const techIcons: Record<string, React.ElementType> = {
    'React.js': Layers,
    'Node.js': Code2,
    'Express.js': Code2,
    MongoDB: Database,
    Stripe: CreditCard,
    'Modern UI': Sparkles,
    'Responsive Design': Globe,
    Shopify: ShoppingBag,
    Liquid: Code2,
    'Theme Customization': Palette,
    'E-Commerce': ShoppingBag,
  };

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const headItems = headingRef.current?.querySelectorAll('.h-anim');
      if (headItems?.length) {
        gsap.fromTo(
          headItems,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 82%',
              once: true,
            },
          }
        );
      }

      const cards = cardsRef.current?.querySelectorAll('.p-card');
      cards?.forEach((card) => {
        const items = card.querySelectorAll('.c-anim');
        const tl = gsap.timeline({
          scrollTrigger: { trigger: card, start: 'top 84%', once: true },
        });

        tl.fromTo(
          card,
          { y: 50, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, duration: 1, ease: 'expo.out' }
        ).fromTo(
          items,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            stagger: 0.07,
            ease: 'power3.out',
          },
          '-=0.5'
        );
      });

      if (footerRef.current) {
        gsap.fromTo(
          footerRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: footerRef.current,
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
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-4 py-28 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-violet-100/60 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[480px] w-[480px] rounded-full bg-orange-100/50 blur-[100px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-50/60 blur-[90px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading */}
        <div ref={headingRef} className="mb-20 text-center">
          <div className="h-anim mb-5 inline-flex items-center gap-2 rounded-full border border-violet-200/60 bg-violet-50/70 px-4 py-2">
            <BookOpen className="h-4 w-4 text-violet-600" />
            <span className="text-sm font-semibold text-violet-700">
              Project Showcase
            </span>
          </div>

          <h2 className="h-anim text-4xl font-extrabold tracking-tight text-slate-800 sm:text-5xl lg:text-6xl">
            Featured{' '}
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="h-anim mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
            A curated collection combining clean design, solid architecture, and
            thoughtful execution.
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="space-y-16">
          {projects.map((project, idx) => (
            <article key={idx} className="p-card group">
              <div
                className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white transition-all duration-500 ease-out hover:border-slate-300/90 hover:shadow-[0_20px_50px_-12px_var(--shadow)]"
                style={
                  {
                    '--shadow': project.shadowColor,
                    boxShadow: `0 8px 30px -8px ${project.shadowColor}`,
                  } as React.CSSProperties
                }
              >
                {/* top gradient bar */}
                <div
                  className={`h-[3px] bg-gradient-to-r ${project.gradient} opacity-80 transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Left: Image */}
                  <div className="relative">
                    <div className="relative m-5 overflow-hidden rounded-2xl bg-slate-100 lg:m-6">
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.03]"
                        />
                      </div>

                      {/* subtle overlay on hover */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* number badge */}
                      <div
                        className={`absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${project.gradient} text-sm font-bold text-white shadow-md`}
                      >
                        0{idx + 1}
                      </div>

                      {/* status pill */}
                      <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm backdrop-blur">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Completed
                      </div>
                    </div>
                  </div>

                  {/* Right: Details */}
                  <div className="flex flex-col justify-center px-5 pb-6 pt-2 lg:px-8 lg:py-8">
                    <div className="c-anim mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                      <Briefcase className="h-3 w-3" />
                      {project.subtitle}
                    </div>

                    <h3 className="c-anim mb-3 text-2xl font-bold text-slate-800 sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="c-anim mb-5 text-sm leading-relaxed text-slate-500 sm:text-[15px]">
                      {project.description}
                    </p>

                    {/* role */}
                    <div className="c-anim mb-5 rounded-xl border border-slate-100 bg-slate-50/80 p-4">
                      <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-400">
                        <Code2 className="h-3.5 w-3.5 text-violet-500" />
                        My Role
                      </span>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {project.role}
                      </p>
                    </div>

                    {/* tech */}
                    <div className="c-anim mb-6">
                      <span className="mb-2.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-400">
                        <Layers className="h-3.5 w-3.5 text-fuchsia-500" />
                        Stack
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, i) => {
                          const Icon = techIcons[t] || Code2;
                          return (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm transition-all duration-300 ease-out hover:border-violet-200 hover:bg-violet-50/50 hover:text-violet-700"
                            >
                              <Icon className="h-3.5 w-3.5 text-violet-500" />
                              {t}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    {/* store password notice */}
                    {project.storePassword && (
                      <div className="c-anim mb-5 flex items-center gap-3 rounded-xl border border-amber-200/60 bg-amber-50/60 px-4 py-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100">
                          <Settings className="h-4 w-4 text-amber-600" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-amber-800">
                            Password Protected Store
                          </p>
                          <p className="mt-0.5 text-xs text-amber-700">
                            Use password:{' '}
                            <code className="rounded bg-amber-100 px-1.5 py-0.5 font-mono font-bold text-amber-900">
                              {project.storePassword}
                            </code>
                          </p>
                        </div>
                      </div>
                    )}

                    {/* actions */}
                    <div className="c-anim flex flex-wrap gap-3">
                      {project.links?.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group/btn inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${project.gradient} px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 ease-out hover:shadow-lg`}
                        >
                          <ExternalLink className="h-4 w-4" />
                          {project.storePassword ? 'Visit Store' : 'Live Demo'}
                          <ChevronRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                        </a>
                      )}

                      {project.links?.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 ease-out hover:border-violet-200 hover:bg-violet-50/40 hover:text-violet-700 hover:shadow-md"
                        >
                          <Github className="h-4 w-4" />
                          Source Code
                        </a>
                      )}

                      {!project.links?.github && !project.links?.demo && (
                        <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-5 py-2.5 text-sm font-medium text-slate-400">
                          <ArrowUpRight className="h-4 w-4" />
                          Private Project
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer */}
        <div ref={footerRef} className="mt-20 text-center">
          <p className="mb-5 text-base text-slate-500 sm:text-lg">
            Interested in more builds and experiments?
          </p>
          <a
            href="https://github.com/Umiiawan"
            target="_blank"
            rel="noopener noreferrer"
            className="group/cta inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500 px-7 py-3.5 font-semibold text-white shadow-md shadow-violet-500/15 transition-all duration-300 ease-out hover:shadow-lg hover:shadow-violet-500/20"
          >
            <Github className="h-5 w-5" />
            View GitHub Profile
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;