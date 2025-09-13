import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    'PHP', 'TypeScript', 'Laravel', 'Python' , 'JavaScript',
     'MySQL', 'PostgreSQL', 'MongoDB'
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-content', 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo('.skill-tag', 
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: '.skills-grid',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="about-content">
            <div className="relative group">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 p-1">
                <div className="w-full h-full rounded-2xl bg-gray-100 dark:bg-gray-900 overflow-hidden">
                  <img 
                    src="https://fadhlanarrizal.github.io/assets/images/fadhlan.jpg" 
                    alt="Fadhlan Profile" 
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-xl opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-xl opacity-30"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="about-content">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm a passionate backend developer with a knack for building robust and scalable web applications. 
                  With a strong foundation in PHP, TypeScript, and Laravel, I enjoy crafting efficient server-side solutions 
                  that power seamless user experiences.
                </p>
                <p>
                  Beyond coding, I love exploring new technologies, contributing to open-source projects, and continuously 
                  honing my skills. When I'm not in front of a computer, you can find me reading tech blogs, hiking, or 
                  experimenting with new recipes in the kitchen.
                </p>
              </div>
            </div>

            <div className="about-content">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Skills & Technologies
              </h3>
              <div className="skills-grid grid grid-cols-2 sm:grid-cols-4 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="skill-tag bg-white dark:bg-gray-700 px-4 py-2 rounded-lg text-center 
                               text-sm font-medium text-gray-700 dark:text-gray-300 
                               shadow-sm hover:shadow-md transition-shadow duration-300 
                               border border-gray-200 dark:border-gray-600"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;