import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1 });
      
      tl.fromTo('.hero-title-line', 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
      )
      .fromTo('.hero-subtitle', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo('.hero-cta', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo('.scroll-indicator', 
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.2"
      );

      // Floating animation for scroll indicator
      gsap.to('.scroll-indicator', {
        y: 10,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: "power2.inOut"
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="min-h-screen flex items-center justify-center relative section-padding"
    >
      <div className="container-width text-center">
        <div ref={textRef} className="space-y-6">
          <div className="overflow-hidden">
            <h1 className="hero-title-line text-5xl sm:text-6xl lg:text-7xl font-black mb-4">
              <span className="gradient-text">Hi, I'm Fadhlan</span>
            </h1>
          </div>
          
          <div className="overflow-hidden">
            <h2 className="hero-title-line text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 dark:text-gray-200">
              Backend Developer
            </h2>
          </div>
          
          <p className="hero-subtitle text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Crafting robust and scalable web applications with PHP, TypeScript, and Laravel.
          </p>
          
          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
                         text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 
                         transition-all duration-300 font-medium"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Scroll</span>
          <ChevronDown className="w-6 h-6 text-gray-500 dark:text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;