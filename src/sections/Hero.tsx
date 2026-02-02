import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown, Code2 } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Fluid background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 25; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 150 + 100,
        alpha: Math.random() * 0.08 + 0.02,
      });
    }

    const animate = () => {
      time += 0.005;
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -particle.radius) particle.x = canvas.width + particle.radius;
        if (particle.x > canvas.width + particle.radius) particle.x = -particle.radius;
        if (particle.y < -particle.radius) particle.y = canvas.height + particle.radius;
        if (particle.y > canvas.height + particle.radius) particle.y = -particle.radius;

        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius
        );
        gradient.addColorStop(0, `rgba(255, 0, 0, ${particle.alpha})`);
        gradient.addColorStop(0.5, `rgba(255, 0, 0, ${particle.alpha * 0.5})`);
        gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // GSAP entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      // Heading animation - split into characters
      if (headingRef.current) {
        const chars = headingRef.current.querySelectorAll('.char');
        tl.fromTo(
          chars,
          { y: '100%', opacity: 0 },
          { y: '0%', opacity: 1, duration: 1.2, stagger: 0.03 },
          0.2
        );
      }

      // Subheading
      tl.fromTo(
        subheadingRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0.6
      );

      // Description
      tl.fromTo(
        descriptionRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0.8
      );

      // Image
      tl.fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5 },
        0.4
      );

      // CTA
      tl.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        1
      );

      // Breathing animation for image
      gsap.to(imageRef.current, {
        scale: 1.02,
        duration: 4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Split text into characters
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

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Fluid Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-border bg-brand-dark/50 mb-6">
              <Code2 className="w-4 h-4 text-brand-red" />
              <span className="text-sm text-brand-gray font-body">Available for Work</span>
            </div>

            {/* Main Heading */}
            <h1
              ref={headingRef}
              className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-none mb-4 overflow-hidden"
            >
              <span className="block overflow-hidden">
                {splitText('USAMA')}
              </span>
              <span className="block overflow-hidden text-brand-red">
                {splitText('TARIQ')}
              </span>
            </h1>

            {/* Subheading */}
            <p
              ref={subheadingRef}
              className="font-display text-2xl sm:text-3xl md:text-4xl text-white/90 mb-6"
            >
              Full-Stack Developer
            </p>

            {/* Description */}
            <p
              ref={descriptionRef}
              className="font-body text-base sm:text-lg text-brand-gray max-w-xl mx-auto lg:mx-0 mb-8"
            >
              I build accessible, pixel-perfect, and performant web experiences.
              Specializing in React, Node.js, and modern web technologies.
            </p>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-red text-white font-body font-medium rounded-lg overflow-hidden transition-all duration-300 hover:glow-red-strong"
              >
                <span className="relative z-10">View My Work</span>
                <ArrowDown className="w-4 h-4 relative z-10 transition-transform group-hover:translate-y-1" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-brand-border text-white font-body font-medium rounded-lg transition-all duration-300 hover:border-brand-red hover:text-brand-red"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              ref={imageRef}
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
            >
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-brand-red/20 rounded-full blur-3xl scale-110" />
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-brand-border glow-red">
                <img
                  src="/hero-portrait.jpeg"
                  alt="Usama Tariq"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-brand-dark border border-brand-border rounded-lg animate-float">
                <span className="text-sm font-body text-white">React.js</span>
              </div>
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-brand-dark border border-brand-border rounded-lg animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-sm font-body text-white">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-brand-gray font-body">Scroll to explore</span>
        <button
          onClick={scrollToAbout}
          className="w-10 h-10 flex items-center justify-center border border-brand-border rounded-full transition-all duration-300 hover:border-brand-red hover:bg-brand-red/10"
        >
          <ArrowDown className="w-4 h-4 text-brand-red animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
