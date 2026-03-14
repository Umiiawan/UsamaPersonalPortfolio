import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ElementType } from "react";
import {
  Code2,
  Palette,
  Server,
  Database,
  Layers,
  Globe,
  Cpu,
  GitBranch,
  Terminal,
  Sparkles,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
  icon: ElementType;
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: "HTML5", icon: Code2 },
    { name: "CSS3", icon: Palette },
    { name: "JavaScript", icon: Terminal },
    { name: "React.js", icon: Layers },
    { name: "Node.js", icon: Server },
    { name: "Express", icon: Cpu },
    { name: "MongoDB", icon: Database },
    { name: "Git", icon: GitBranch },
    { name: "Responsive", icon: Globe },
  ];

  const featuredSkills = [
    {
      title: "Frontend",
      value: "React, JavaScript, responsive layouts, and polished UI systems.",
    },
    {
      title: "Backend",
      value: "Node.js, Express, API design, and scalable application logic.",
    },
    {
      title: "Database",
      value: "MongoDB integration, data handling, and backend architecture.",
    },
    {
      title: "Workflow",
      value: "Git, GitHub, SEO awareness, and clean development practices.",
    },
  ];

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skills-heading-item",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        orbitRef.current,
        { scale: 0.96, opacity: 0, y: 24 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: orbitRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      const orbitItems = orbitRef.current?.querySelectorAll(".orbit-skill");
      if (orbitItems?.length) {
        gsap.fromTo(
          orbitItems,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.55,
            stagger: 0.05,
            ease: "back.out(1.8)",
            scrollTrigger: {
              trigger: orbitRef.current,
              start: "top 86%",
              once: true,
            },
          }
        );
      }

      const contentItems = contentRef.current?.querySelectorAll(".content-item");
      if (contentItems?.length) {
        gsap.fromTo(
          contentItems,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      gsap.to(".orbit-rotate", {
        rotation: 360,
        duration: 55,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".orbit-skill-inner", {
        rotation: -360,
        duration: 55,
        ease: "none",
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getOrbitPosition = (index: number, total: number, radius: number) => {
    const angle = (360 / total) * index - 90;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    return { x, y };
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#f5f7ff] py-20 sm:py-24 lg:py-32"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-[-60px] h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-pink-200/25 blur-3xl" />
        <div className="absolute bottom-10 right-[-80px] h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-sky-200/25 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-[18rem] w-[18rem] sm:h-[24rem] sm:w-[24rem] lg:h-[28rem] lg:w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-200/18 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headingRef} className="mb-14 text-center sm:mb-16 lg:mb-20">
          <div className="skills-heading-item mb-5 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/60 px-4 py-2.5 sm:px-5 sm:py-3 backdrop-blur-xl shadow-[10px_10px_24px_rgba(180,190,220,0.2),-10px_-10px_24px_rgba(255,255,255,0.95)]">
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-slate-700">
              My Expertise
            </span>
          </div>

          <h2 className="skills-heading-item mb-4 text-3xl font-extrabold text-slate-800 sm:text-4xl md:text-5xl lg:text-6xl">
            Skills &{" "}
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="skills-heading-item mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base lg:text-lg">
            A visual representation of the technologies I use to craft modern,
            scalable, and polished digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Orbital Visual */}
          <div ref={orbitRef} className="relative flex justify-center">
            <div className="relative h-[320px] w-[320px] xs:h-[340px] xs:w-[340px] sm:h-[400px] sm:w-[400px] md:h-[440px] md:w-[440px] lg:h-[460px] lg:w-[460px]">
              {/* soft glow */}
              <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-br from-pink-300/15 via-violet-300/20 to-sky-300/15 blur-3xl" />

              {/* center card */}
              <div className="absolute left-1/2 top-1/2 z-20 w-[150px] xs:w-[165px] sm:w-[190px] md:w-[210px] lg:w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-[24px] sm:rounded-[28px] lg:rounded-[30px] border border-white/80 bg-white/72 p-4 sm:p-5 lg:p-6 text-center backdrop-blur-xl shadow-[18px_18px_38px_rgba(180,190,220,0.22),-18px_-18px_38px_rgba(255,255,255,0.96)]">
                <div className="mx-auto mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-[#eef2ff] shadow-[inset_6px_6px_12px_rgba(190,200,230,0.25),inset_-6px_-6px_12px_rgba(255,255,255,0.95)]">
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-violet-600" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800">
                  My Skills
                </h3>
                <p className="mt-2 text-[11px] sm:text-xs lg:text-sm leading-relaxed text-slate-600">
                  Frontend, backend, database, and workflow tools.
                </p>
              </div>

              {/* orbit rings */}
              <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] sm:h-[250px] sm:w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/45" />
              <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] sm:h-[340px] sm:w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/35" />

              {/* rotating orbit */}
              <div className="orbit-rotate absolute inset-0">
                {skills.map((skill, index) => {
                  const radius =
                    typeof window !== "undefined" && window.innerWidth < 640
                      ? 125
                      : window.innerWidth < 1024
                      ? 155
                      : 170;

                  const { x, y } = getOrbitPosition(index, skills.length, radius);
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="orbit-skill absolute left-1/2 top-1/2"
                      style={{
                        transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                      }}
                    >
                      <div className="orbit-skill-inner">
                        <div className="group flex h-[52px] w-[52px] xs:h-[58px] xs:w-[58px] sm:h-[64px] sm:w-[64px] lg:h-[72px] lg:w-[72px] flex-col items-center justify-center rounded-[16px] sm:rounded-[18px] lg:rounded-[22px] border border-white/80 bg-white/75 px-1 backdrop-blur-xl shadow-[12px_12px_22px_rgba(180,190,220,0.18),-12px_-12px_22px_rgba(255,255,255,0.96)] transition-all duration-300 hover:scale-105">
                          <Icon className="mb-0.5 sm:mb-1 h-4 w-4 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-violet-600" />
                          <span className="px-1 text-center text-[8px] xs:text-[9px] sm:text-[9px] lg:text-[10px] font-semibold leading-tight text-slate-700">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div ref={contentRef}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {featuredSkills.map((item, index) => (
                <div
                  key={index}
                  className="content-item rounded-[22px] sm:rounded-[24px] lg:rounded-[28px] border border-white/80 bg-white/60 p-5 sm:p-6 backdrop-blur-xl shadow-[14px_14px_30px_rgba(180,190,220,0.22),-14px_-14px_30px_rgba(255,255,255,0.95)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-4 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-[#eef2ff] shadow-[inset_6px_6px_12px_rgba(190,200,230,0.25),inset_-6px_-6px_12px_rgba(255,255,255,0.95)]">
                    <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-violet-600" />
                  </div>

                  <h3 className="mb-2 text-lg sm:text-xl font-bold text-slate-800">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="content-item mt-6 inline-flex w-full sm:w-auto items-center justify-center sm:justify-start gap-3 rounded-full border border-white/80 bg-white/60 px-5 sm:px-6 py-4 backdrop-blur-xl shadow-[10px_10px_24px_rgba(180,190,220,0.22),-10px_-10px_24px_rgba(255,255,255,0.95)]">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-pink-500">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-slate-700 sm:text-base text-center sm:text-left">
                Currently learning TypeScript
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}