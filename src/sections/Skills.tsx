import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ElementType } from "react";
import {
  Code2,
  Palette,
  Server,
  Database,
  ShoppingCart,
  Layers,
  Globe,
  Cpu,
  GitBranch,
  Terminal,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
  icon: ElementType;
  level?: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: Code2, level: 90 },
        { name: "CSS3", icon: Palette, level: 85 },
        { name: "JavaScript", icon: Terminal, level: 85 },
        { name: "React.js", icon: Layers, level: 80 },
        { name: "Responsive Design", icon: Globe, level: 85 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: Server, level: 80 },
        { name: "Express.js", icon: Cpu, level: 75 },
        { name: "RESTful APIs", icon: Globe, level: 85 },
      ],
    },
    {
      title: "Database",
      skills: [{ name: "MongoDB", icon: Database, level: 75 }],
    },

    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: GitBranch, level: 80 },
        { name: "GitHub", icon: Code2, level: 80 },
        { name: "SEO", icon: Globe, level: 75 },
      ],
    },
  ];

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const cats = categoriesRef.current;

      // ensure clean initial state and GPU accelerated transforms
      if (section) gsap.set(section, { opacity: 1 });

      // Heading animation - gentle and once
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { y: 16, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      }

      // Category cards - staggered rise
      if (cats) {
        const categoryCards = cats.querySelectorAll(
          ".skill-category"
        ) as NodeListOf<HTMLElement>;
        if (categoryCards.length) {
          gsap.set(categoryCards, { willChange: "transform, opacity", force3D: true });
          gsap.fromTo(
            categoryCards,
            { y: 28, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              stagger: 0.12,
              ease: "power2.out",
              immediateRender: false,
              scrollTrigger: {
                trigger: cats,
                start: "top 80%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        }

        // Skill items - subtle fade and slide
        const skillItems = cats.querySelectorAll(
          ".skill-item"
        ) as NodeListOf<HTMLElement>;
        if (skillItems.length) {
          gsap.set(skillItems, { willChange: "transform, opacity", force3D: true });
          gsap.fromTo(
            skillItems,
            { y: 10, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              stagger: 0.01,
              ease: "power2.out",
              immediateRender: false,
              scrollTrigger: {
                trigger: cats,
                start: "top 78%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headingRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-sm text-zinc-400">My Expertise</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-4">
            Tech <span className="text-rose-500">Stack</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div
          ref={categoriesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="skill-category group p-6 bg-neutral-900/60 backdrop-blur border border-white/10 rounded-2xl transition-all duration-300 hover:border-rose-500/50"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-rose-500/10 rounded-lg">
                  <Layers className="w-5 h-5 text-rose-500" />
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-item flex items-center gap-3 p-3 rounded-lg bg-black/30 transition-colors duration-300 hover:bg-rose-500/10 will-change-transform transform-gpu"
                  >
                    <skill.icon className="w-5 h-5 text-zinc-400 group-hover:text-rose-500 transition-colors" />
                    <span className="flex-1 text-sm text-white">
                      {skill.name}
                    </span>
                    {skill.level !== undefined && (
                      <div className="w-20 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-rose-500 rounded-full transition-[width] duration-500 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-zinc-400 mb-4">
            Always learning and exploring new technologies
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 rounded-full bg-white/5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-white">Currently learning TypeScript</span>
          </div>
        </div>
      </div>
    </section>
  );
}