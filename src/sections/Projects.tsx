import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Layers, Code2, Database, CreditCard } from 'lucide-react';

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
  const headingRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      title: 'Car Wash Management System',
      subtitle: 'Final Year Project',
      description:
        'A full-stack web application with separate admin and customer modules for managing a car wash business. Features include booking management, invoicing, inventory tracking, authentication, and online payments via Stripe. I followed MVC structure and RESTful API best practices, and deployed the project for final presentation and demonstration.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe'],
      image: '/project-carwash.png',
      role: 'Full-stack development (frontend in React, backend in Node/Express, database in MongoDB, API design, Stripe integration)',
     
    },
    {
      title: 'HifzLab.com',
      subtitle: 'React Web Application',
      description:
        'A modern web application built with React featuring a dashboard-style interface with authentication, user profiles, and data-driven views. This platform provides an intuitive learning experience with progress tracking and personalized content delivery. (Note: This is a placeholder description - customize once exact features are defined.)',
      tech: ['React.js', 'Modern UI', 'Responsive Design'],
      image: '/project-hifzlab.png',
      role: 'Frontend development in React, UI implementation, state management, and responsive design',
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
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Project cards animation
      const cards = projectsRef.current?.querySelectorAll('.project-card');
      if (cards) {
        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { 
              y: 80, 
              opacity: 0,
              skewY: index % 2 === 0 ? 2 : -2,
            },
            {
              y: 0,
              opacity: 1,
              skewY: 0,
              duration: 1,
              ease: 'expo.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headingRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-border bg-brand-dark/50 mb-6">
            <Code2 className="w-4 h-4 text-brand-red" />
            <span className="text-sm text-brand-gray font-body">Portfolio</span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white mb-4">
            Featured <span className="text-brand-red">Projects</span>
          </h2>
          <p className="font-body text-lg text-brand-gray max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden rounded-2xl ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* View Project Button */}
             

                {/* Border */}
                <div className="absolute inset-0 border-2 border-brand-border rounded-2xl group-hover:border-brand-red/50 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                {/* Subtitle */}
                <span className="inline-block px-3 py-1 bg-brand-red/10 text-brand-red text-xs font-body rounded-full mb-4">
                  {project.subtitle}
                </span>

                {/* Title */}
                <h3 className="font-display text-3xl lg:text-4xl text-white mb-4 group-hover:text-brand-red transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-body text-base text-brand-gray mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Role */}
                <div className="mb-6">
                  <span className="text-sm font-body text-white/60">My Role:</span>
                  <p className="font-body text-sm text-brand-gray mt-1">
                    {project.role}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <span className="text-sm font-body text-white/60 mb-3 block">
                    Technologies:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => {
                      const Icon = techIcons[tech] || Code2;
                      return (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-dark border border-brand-border rounded-lg text-sm font-body text-white transition-all hover:border-brand-red/50 hover:bg-brand-red/10"
                        >
                          <Icon className="w-3.5 h-3.5 text-brand-red" />
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.links?.demo && (
                    <a
                      href={project.links.demo}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-red text-white font-body text-sm rounded-lg transition-all hover:glow-red-strong"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-brand-border text-white font-body text-sm rounded-lg transition-all hover:border-brand-red hover:text-brand-red"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="mt-20 text-center">
          <p className="font-body text-brand-gray mb-4">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/Umiiawan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-brand-border rounded-full font-body text-white transition-all duration-300 hover:border-brand-red hover:text-brand-red"
          >
            <Github className="w-4 h-4" />
            <span>View GitHub Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
