import React, { useRef, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import gsap from 'gsap';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;

    if (!card || !image) return;

    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -10,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(image, {
        scale: 1.1,
        duration: 0.5,
        ease: "power2.out"
      });

      gsap.to('.project-overlay', {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(image, {
        scale: 1,
        duration: 0.5,
        ease: "power2.out"
      });

      gsap.to('.project-overlay', {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl 
                 transition-shadow duration-300 overflow-hidden group border border-gray-100 dark:border-gray-700"
    >
      <div className="relative overflow-hidden">
        <img
          ref={imageRef}
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="project-overlay absolute inset-0 bg-black/40 opacity-0 flex items-center justify-center space-x-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/90 hover:bg-white rounded-full text-gray-800 
                         hover:scale-110 transition-all duration-300"
            >
              <ExternalLink size={20} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/90 hover:bg-white rounded-full text-gray-800 
                         hover:scale-110 transition-all duration-300"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 
                         dark:from-purple-900/30 dark:to-pink-900/30 
                         text-purple-700 dark:text-purple-300 text-sm font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;