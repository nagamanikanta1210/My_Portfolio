import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SkillProps {
  name: string;
  percentage: number;
}

const skills: SkillProps[] = [
  { name: 'Full Stack Development', percentage: 95 },
  { name: 'A', percentage: 80 },
  { name: 'Java', percentage: 90 },
  { name: 'Python', percentage: 85 },
  { name: 'Artificial Intelligence', percentage: 85 },
  { name: 'Machine Learning', percentage: 75 },
  { name: 'React', percentage: 92 },
  { name: 'SQL', percentage: 88 },
  { name: 'OOPS', percentage: 82 },
];

const ProgressRing: React.FC<SkillProps & { isInView: boolean }> = ({ name, percentage, isInView }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const radius = 50;
  const strokeWidth = 8;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (currentPercentage / 100) * circumference;

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setCurrentPercentage(percentage);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setCurrentPercentage(0);
    }
  }, [isInView, percentage]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="progress-ring-container">
        <svg className="progress-ring" width="120" height="120">
          <circle
            className="progress-ring-circle-bg"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx="60"
            cy="60"
            fill="transparent"
          />
          <motion.circle
            className="progress-ring-circle"
            stroke="#a855f7"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx="60"
            cy="60"
            fill="transparent"
            initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <motion.div 
          className="progress-ring-percent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {Math.round(currentPercentage)}%
        </motion.div>
      </div>
      <h3 className="text-lg font-medium text-center">{name}</h3>
    </div>
  );
};

export const Skills: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const itemsPerPage = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  const maxIndex = Math.max(0, skills.length - itemsPerPage);
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <section id="skills" className="py-20 relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-300">

          </p>
        </motion.div>

        <div className="relative">
          <div className="flex items-center">
            <button
              onClick={prevSlide}
              className="absolute z-10 left-0 bg-primary/20 hover:bg-primary/40 p-2 rounded-full text-white"
              disabled={currentIndex === 0}
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="overflow-hidden w-full">
              <motion.div
                className="flex gap-8 justify-center"
                initial={{ x: 0 }}
                animate={{ x: -currentIndex * (itemsPerPage === 1 ? 260 : 280) }}
                transition={{ duration: 0.5 }}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="min-w-[240px]"
                  >
                    <ProgressRing 
                      name={skill.name} 
                      percentage={skill.percentage} 
                      isInView={isInView}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            <button
              onClick={nextSlide}
              className="absolute z-10 right-0 bg-primary/20 hover:bg-primary/40 p-2 rounded-full text-white"
              disabled={currentIndex === maxIndex}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};