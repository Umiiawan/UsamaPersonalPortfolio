import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
  icon: React.ElementType;
  level?: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', icon: Code2, level: 90 },
        { name: 'CSS3', icon: Palette, level: 85 },
        { name: 'JavaScript', icon: Terminal, level: 85 },
        { name: 'React.js', icon: Layers, level: 80 },
        { name: 'Responsive Design', icon: Globe, level: 85 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: Server, level: 80 },
        { name: 'Express.js', icon: Cpu, level: 75 },
        { name: 'RESTful APIs', icon: Globe, level: 85 },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', icon: Database, level: 75 },
      ],
    },
    {
      title: 'E-commerce',
      skills: [
        { name: 'Shopify', icon: ShoppingCart, level: 85 },
        { name: 'Liquid', icon: Code2, level: 80 },
        { name: 'Store Optimization', icon: Cpu, level: 80 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: GitBranch, level: 80 },
        { name: 'GitHub', icon: Code2, level: 80 },
        { name: 'SEO', icon: Globe, level: 75 },
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Category cards animation
      const categoryCards = categoriesRef.current?.querySelectorAll('.skill-category');
      if (categoryCards) {
        gsap.fromTo(
          categoryCards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: categoriesRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Skill items animation
      const skillItems = categoriesRef.current?.querySelectorAll('.skill-item');
      if (skillItems) {
        gsap.fromTo(
          skillItems,
          { scale: 2, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            stagger: 0.03,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: categoriesRef.current,
              start: 'top 60%',
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
      id="skills"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headingRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-border bg-brand-dark/50 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            <span className="text-sm text-brand-gray font-body">My Expertise</span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white mb-4">
            Tech <span className="text-brand-red">Stack</span>
          </h2>
          <p className="font-body text-lg text-brand-gray max-w-2xl mx-auto">
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
              className="skill-category group p-6 bg-brand-dark border border-brand-border rounded-2xl transition-all duration-300 hover:border-brand-red/50 hover:glow-red"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-brand-red/10 rounded-lg">
                  <Layers className="w-5 h-5 text-brand-red" />
                </div>
                <h3 className="font-display text-2xl text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-item group/skill flex items-center gap-3 p-3 rounded-lg bg-black/30 transition-all duration-300 hover:bg-brand-red/10"
                  >
                    <skill.icon className="w-5 h-5 text-brand-gray group-hover/skill:text-brand-red transition-colors" />
                    <span className="flex-1 font-body text-sm text-white">
                      {skill.name}
                    </span>
                    {skill.level && (
                      <div className="w-16 h-1.5 bg-brand-border rounded-full overflow-hidden">
                        <div
                          className="h-full bg-brand-red rounded-full transition-all duration-500 group-hover/skill:w-full"
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
          <p className="font-body text-brand-gray mb-4">
            Always learning and exploring new technologies
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 border border-brand-border rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-body text-white">Currently learning TypeScript</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
