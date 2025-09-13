import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Briefcase } from 'lucide-react';

interface TimelineItem {
  id: string;
  type: 'education' | 'work';
  title: string;
  institution: string;
  period: string;
  description: string;
  location: string;
}

const Timeline: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const timelineData: TimelineItem[] = [
    {
      id: '1',
      type: 'work',
      title: 'Data Entry',
      institution: 'PT. Rahadhyan Integrasi Nusantara',
      period: '2025 - Present',
      description: 'Responsible for accurate data entry and management, ensuring data integrity and confidentiality in a fast-paced environment.',
      location: 'Yogyakarta, ID'
    },
    {
      id: '2',
      type: 'education',
      title: 'B.Sc in Computer Science',
      institution: 'University of Mercu Buana Yogyakarta',
      period: '2023 - Present',
      description: 'Focused on software engineering, data structures, and web development. Graduated Magna Cum Laude with a 3.8 GPA.',
      location: 'Yogyakarta, ID'
    },
    {
      id: '3',
      type: 'work',
      title: 'Head of Student Success',
      institution: 'PPTI Qodr Yogyakarta',
      period: '2022 - 2023',
      description: 'Led initiatives to improve student engagement and success rates, organized workshops, and provided mentorship to students in web development courses.',
      location: 'Yogyakarta, ID'
    },
    {
      id: '4',
      type: 'work',
      title: 'Qur\'anic Teacher (full-time)',
      institution: 'Al-Andalus Islamic Boarding School',
      period: '2019 - 2021',
      description: 'Taught Qur\'anic studies to students, developed curriculum, and organized community events to promote Islamic education.',
      location: 'Bogor, ID'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.timeline-header', 
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

      gsap.fromTo('.timeline-line', 
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power3.out",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo('.timeline-item', 
        { x: (index) => index % 2 === 0 ? -100 : 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="timeline" className="section-padding">
      <div className="container-width">
        <div className="timeline-header text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A timeline of my education and professional experience
          </p>
        </div>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-pink-500 h-full rounded-full"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div key={item.id} className="timeline-item relative">
                <div className={`flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}>
                  <div className={`w-full max-w-md ${
                    index % 2 === 0 ? 'pr-8' : 'pl-8'
                  }`}>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                      <div className="flex items-center mb-3">
                        <div className={`p-2 rounded-lg mr-3 ${
                          item.type === 'education' 
                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                            : 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                        }`}>
                          {item.type === 'education' ? <GraduationCap size={20} /> : <Briefcase size={20} />}
                        </div>
                        <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                          {item.period}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {item.institution}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        📍 {item.location}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
                  <div className={`w-4 h-4 rounded-full ${
                    item.type === 'education' 
                      ? 'bg-blue-500' 
                      : 'bg-green-500'
                  } border-4 border-white dark:border-gray-900 shadow-lg`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;