import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Sparkles, Play } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroCardRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const badgeTopRef = useRef<HTMLDivElement>(null);
  const badgeBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      tl.fromTo(
        heroCardRef.current,
        { y: 35, opacity: 0, scale: 0.985 },
        { y: 0, opacity: 1, scale: 1, duration: 1.1 },
        0
      );

      if (headingRef.current) {
        const chars = headingRef.current.querySelectorAll('.char');
        tl.fromTo(
          chars,
          { y: '110%', opacity: 0 },
          { y: '0%', opacity: 1, duration: 1, stagger: 0.02 },
          0.2
        );
      }

      tl.fromTo(
        subheadingRef.current,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65 },
        0.45
      );

      tl.fromTo(
        descriptionRef.current,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        0.58
      );

      tl.fromTo(
        ctaRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        0.72
      );

      tl.fromTo(
        statsRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        0.84
      );

      tl.fromTo(
        imageWrapRef.current,
        { x: 30, y: 16, opacity: 0, scale: 0.97, rotate: -2 },
        { x: 0, y: 0, opacity: 1, scale: 1, rotate: 0, duration: 1.05 },
        0.28
      );

      tl.fromTo(
        [badgeTopRef.current, badgeBottomRef.current],
        { y: 12, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.65, stagger: 0.12 },
        0.95
      );

      gsap.to(imageWrapRef.current, {
        y: -8,
        duration: 4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });

      gsap.to(badgeTopRef.current, {
        y: -6,
        duration: 3.2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });

      gsap.to(badgeBottomRef.current, {
        y: 6,
        duration: 3.8,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className="char inline-block"
        style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* white base */}
      <div className="absolute inset-0 bg-white" />

      {/* soft page glows */}
      <div className="absolute -top-10 left-0 h-72 w-72 rounded-full bg-pink-100/70 blur-3xl" />
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-sky-100/70 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-100/60 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center">
        <div
          ref={heroCardRef}
          className="relative w-full overflow-hidden rounded-[38px] border border-white/80 bg-[linear-gradient(135deg,#f8f4ff_0%,#efe7ff_34%,#ffe8d8_100%)] p-6 shadow-[0_30px_80px_rgba(168,85,247,0.12)] sm:p-8 lg:p-10"
        >
          {/* glossy overlays */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.75),transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.35),transparent_30%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.35),transparent_42%)]" />

          {/* top accent */}
          <div className="absolute top-0 left-8 right-8 h-[3px] rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-orange-400" />

          {/* content */}
          <div className="relative z-20 grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
            {/* left */}
            <div className="text-center lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/55 px-4 py-2 backdrop-blur-md shadow-[8px_8px_18px_rgba(180,190,220,0.12),-8px_-8px_18px_rgba(255,255,255,0.9)]">
                <Sparkles className="h-4 w-4 text-violet-600" />
                <span className="text-sm font-medium text-slate-700">
                  Full-Stack Developer
                </span>
              </div>

              <h1
                ref={headingRef}
                className="mb-5 overflow-hidden text-4xl font-extrabold leading-[0.95] text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl"
              >
                <span className="block overflow-hidden">{splitText('Development')}</span>
                <span className="block overflow-hidden bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 bg-clip-text text-transparent">
                  {splitText('and Design')}
                </span>
              </h1>

              <p
                ref={subheadingRef}
                className="mb-5 text-lg font-semibold text-slate-700 sm:text-xl md:text-2xl"
              >
                Building modern digital products with clarity and impact
              </p>

              <p
                ref={descriptionRef}
                className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base lg:mx-0"
              >
                I create scalable web applications, polished interfaces, and
                high-performance full-stack solutions using React, Node.js,
                MongoDB, and modern frontend workflows.
              </p>

              <div
                ref={ctaRef}
                className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
              >
                <a
                  href="#projects"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-orange-400 px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(249,115,22,0.18)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/80 bg-white/65 px-7 py-4 text-sm font-medium text-slate-700 backdrop-blur-md shadow-[8px_8px_18px_rgba(180,190,220,0.12),-8px_-8px_18px_rgba(255,255,255,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:text-violet-700"
                >
                  <Play className="h-4 w-4" />
                  Get in Touch
                </a>
              </div>

              {/* stats */}
              <div
                ref={statsRef}
                className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-200/80 pt-6"
              >
                <div>
                  <h3 className="text-xl font-extrabold text-slate-800 sm:text-2xl">15+</h3>
                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">Projects</p>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-800 sm:text-2xl">20K</h3>
                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">Lines of Code</p>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-800 sm:text-2xl">99%</h3>
                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">Commitment</p>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="flex justify-center lg:justify-end">
              <div ref={imageWrapRef} className="relative w-full max-w-[25rem]">
                {/* soft glow */}
                <div className="absolute inset-0 scale-105 rounded-[34px] bg-gradient-to-br from-orange-200/20 via-violet-200/20 to-pink-200/20 blur-3xl" />

                {/* image board */}
                <div className="relative rounded-[34px] border border-white/80 bg-white/40 p-4 backdrop-blur-md shadow-[0_25px_60px_rgba(168,85,247,0.12)]">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[26px] bg-white/40">
                    <img
                      src="/hero-portrait.jpeg"
                      alt="Usama Tariq"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10" />
                  </div>
                </div>

                {/* top badge */}
                <div
                  ref={badgeTopRef}
                  className="absolute -right-3 top-8 rounded-2xl border border-white/80 bg-white/65 px-4 py-3 backdrop-blur-md shadow-[0_12px_30px_rgba(168,85,247,0.12)] sm:-right-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/70">
                      <Sparkles className="h-4 w-4 text-violet-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Specialized In</p>
                      <p className="text-sm font-semibold text-slate-800">React.js</p>
                    </div>
                  </div>
                </div>

                {/* bottom badge */}
                <div
                  ref={badgeBottomRef}
                  className="absolute -bottom-5 -left-3 rounded-2xl border border-white/80 bg-white/65 px-4 py-3 backdrop-blur-md shadow-[0_12px_30px_rgba(249,115,22,0.12)] sm:-left-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 animate-pulse" />
                    <div>
                      <p className="text-xs text-slate-500">Currently</p>
                      <p className="text-sm font-semibold text-slate-800">
                        Building with Node.js
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* bottom helper */}
          <div className="relative z-20 mt-10 flex justify-center lg:justify-start">
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-violet-700"
            >
              <span>Scroll to explore</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;