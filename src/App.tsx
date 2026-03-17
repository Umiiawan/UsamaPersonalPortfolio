import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      touchMultiplier: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    const handleLenisScroll = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      const target = customEvent.detail;

      if (target) {
        lenis.scrollTo(target, {
          offset: -80,
          duration: 1.2,
        });
      }
    };

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.addEventListener('refresh', () => lenis.resize());
    window.addEventListener('lenis-scroll', handleLenisScroll as EventListener);

    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(update);
      window.removeEventListener('lenis-scroll', handleLenisScroll as EventListener);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Navigation />

      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;