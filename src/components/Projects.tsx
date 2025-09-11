import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './ProjectCard';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const projects: Project[] = [
    {
      id: '1',
      title: 'E-commerce Platform',
      description: 'A modern e-commerce platform built with React, Next.js, and Stripe. Features include user authentication, shopping cart, and payment processing.',
      image: 'https://picsum.photos/600/400?random=1',
      technologies: ['React', 'Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://picsum.photos/600/400?random=2',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: '3',
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with interactive charts, location-based forecasts, and responsive design for all devices.',
      image: 'https://picsum.photos/600/400?random=3',
      technologies: ['Vue.js', 'Chart.js', 'Weather API', 'Sass', 'PWA'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: '4',
      title: 'Portfolio Website',
      description: 'A modern portfolio website with GSAP animations, dark mode, and responsive design. Built with React and TypeScript.',
      image: 'https://picsum.photos/600/400?random=4',
      technologies: ['React', 'TypeScript', 'GSAP', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: '5',
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization, scheduling features, and multi-platform integration.',
      image: 'https://picsum.photos/600/400?random=5',
      technologies: ['React', 'D3.js', 'Node.js', 'GraphQL', 'PostgreSQL'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: '6',
      title: 'Fitness Tracking App',
      description: 'Mobile-first fitness tracking application with workout plans, progress tracking, and social features for motivation.',
      image: 'https://picsum.photos/600/400?random=6',
      technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.projects-header', 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo('.project-card-wrapper', 
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.projects-grid',
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-width">
        <div className="projects-header text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for creating amazing web experiences
          </p>
        </div>

        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card-wrapper">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;