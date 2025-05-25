import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  repoUrl: string;
  liveUrl: string;
  tags: string[];
}

const projects: ProjectProps[] = [
  {
    title: 'Uniconnect',
    description: 'A Campus Student connectiveity application .',
    image: 'https://i.imgur.com/YLDvpFc.jpg',
    repoUrl: 'https://github.com/username/travel-website',
    liveUrl: 'https://travel-demo.example.com',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Html', 'Css', 'Javascript'],
  },
  {
    title: 'E-Commerce',
    description: 'A portfolio site for a marketing agency showcasing their services, team members, and past projects.',
    image: 'https://i.imgur.com/Qma9y5t.jpg',
    repoUrl: 'https://github.com/username/business-portfolio',
    liveUrl: 'https://business-demo.example.com',
    tags: ['React', 'Tailwind CSS', 'Firebase'],
  },
  {
    title: 'Task Management System',
    description: 'A comprehensive task management application with teams, projects, and real-time collaboration.',
    image: 'https://i.imgur.com/2A23Gcj.jpg',
    repoUrl: 'https://github.com/username/task-management-system',
    liveUrl: 'https://tasks-demo.example.com',
    tags: ['React', 'Redux', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Task Management System',
    description: 'A comprehensive task management application with teams, projects, and real-time collaboration.',
    image: 'https://i.imgur.com/2A23Gcj.jpg',
    repoUrl: 'https://github.com/username/task-management-system',
    liveUrl: 'https://tasks-demo.example.com',
    tags: ['React', 'Redux', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Task Management System',
    description: 'A comprehensive task management application with teams, projects, and real-time collaboration.',
    image: 'https://i.imgur.com/2A23Gcj.jpg',
    repoUrl: 'https://github.com/username/task-management-system',
    liveUrl: 'https://tasks-demo.example.com',
    tags: ['React', 'Redux', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Task Management System',
    description: 'A comprehensive task management application with teams, projects, and real-time collaboration.',
    image: 'https://i.imgur.com/2A23Gcj.jpg',
    repoUrl: 'https://github.com/username/task-management-system',
    liveUrl: 'https://tasks-demo.example.com',
    tags: ['React', 'Redux', 'Node.js', 'PostgreSQL'],
  },
];

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  repoUrl,
  liveUrl,
  tags,
}) => {
  return (
    <motion.div 
      className="relative group rounded-lg overflow-hidden card-hover"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
            <a 
              href={repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-full transition-colors"
            >
              <Github size={16} />
              Repo
            </a>
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white hover:bg-gray-200 text-background px-4 py-2 rounded-full transition-colors"
            >
              <ExternalLink size={16} />
              Live
            </a>
          </div>
        </div>
      </div>
      <div className="p-6 glass-effect bg-background/95">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-primary/20 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            Here are some of my featured projects. Click on any project to see the repository
            or visit the live demo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};