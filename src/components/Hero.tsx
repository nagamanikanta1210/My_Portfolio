import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, School, Briefcase, Globe, Code, FileText, Brain, Sparkles, Sprout, BrainCog } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

export const Hero: React.FC = () => {
  const handleViewResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  const handleViewCV = () => {
    window.open('/cv.pdf', '_blank');
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="inline-block border border-primary px-6 py-2 rounded-full mb-6">
            <span className="text-white">Welcome to my Portfolio</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Hi! I'm <span className="gradient-text">Nagamanikanta Nallaganchu</span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <TypeAnimation
              sequence={[
                'Artificial Intelligence',
                5000,
                'FullStack Developer',
                5000,
                'Machine Learning',
                5000,
              ]}
              wrapper="span"
              speed={60}
              repeat={Infinity}
            />
          </h2>
          
          <div className="mb-8 space-y-4">
            <p className="text-lg text-gray-300 lg:pr-12">
              A passionate and results-oriented technologist pursuing a B.Tech in Computer Science and Engineering (AI/ML specialization) at Parul University (Class of 2026). My work bridges the fields of Artificial Intelligence, full-stack development, and prompt engineering, where I bring together structured thinking and hands-on development to solve real-world problems.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="glass-effect p-4 rounded-lg">
                <Code className="text-primary mb-2" size={24} />
                <h3 className="font-semibold mb-1">FullStack Development</h3>
                <p className="text-sm text-gray-300">MERN Stack specialist with modern web technologies</p>
              </div>
              
              <div className="glass-effect p-4 rounded-lg">
                <Brain className="text-primary mb-2" size={24} />
                <h3 className="font-semibold mb-1">Artificial Intelligence</h3>
                <p className="text-sm text-gray-300">Designing smart solutions - blending logic, learning, and real-world impact</p>
              </div>

              <div className="glass-effect p-4 rounded-lg">
                <BrainCog className="text-primary mb-2" size={24} />
                <h3 className="font-semibold mb-1"> Machine Learning</h3>
                <p className="text-sm text-gray-300">Building intelligent systems with deep learning </p>
              </div>

              <div className="glass-effect p-4 rounded-lg">
                <Sparkles className="text-primary mb-2" size={24} />
                <h3 className="font-semibold mb-1">Prompt Engineering</h3>
                <p className="text-sm text-gray-300">Crafting effective prompts for AI models</p>
              </div>
              
            </div>
          </div>
          
          <ul className="mb-8 space-y-2">
            <li className="flex items-center gap-2 lg:justify-start justify-center">
              <School className="text-primary" size={20} />
              <span>Parul University, Vadodara, Gujarat (Class of 2026)</span>
            </li>
            <li className="flex items-center gap-2 lg:justify-start justify-center">
              <Briefcase className="text-primary" size={20} />
              <span>Data Analyst, Full-Stack Developer(MERN) & Prompt Engineer</span>
            </li>
            <li className="flex items-center gap-2 lg:justify-start justify-center">
              <Rocket className="text-primary" size={20} />
              <span>Passionate about data insights, clean code, and scalable architectures</span>
            </li>
            <li className="flex items-center gap-2 lg:justify-start justify-center">
              <Globe className="text-primary" size={20} />
              <span>Languages: Telugu • English • Hindi</span>
            </li>
            <li className="flex items-center gap-2 lg:justify-start justify-center">
              <Sprout className="text-primary" size={40} />
              <span>Naturally self-motivated with a passion for continuous growth and a drive to turn challenges into opportunities</span>
            </li>
          </ul>
          
          <div className="flex flex-wrap gap-4 lg:justify-start justify-center">
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-accent/50"
            >
              <span className="text-white">Contact Me</span>
            </a>
            <button 
              onClick={handleViewResume}
              className="flex items-center gap-2 bg-gradient-to-r from-accent to-primary hover:opacity-90 px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-primary/50"
            >
              <FileText size={18} />
              <span className="text-white">View Resume</span>
            </button>
            <button 
              onClick={handleViewCV}
              className="flex items-center gap-2 bg-gradient-to-br from-primary via-accent to-primary hover:opacity-90 px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-accent/50"
            >
              <FileText size={18} />
              <span className="text-white">View CV</span>
            </button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block relative"
        >
          <div className="relative">
            <motion.div 
              className="w-[400px] h-[400px] mx-auto relative z-10"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src="/profile.jpg"
                alt="Nagamanikanta Nallaganchu" 
                className="w-full h-full object-cover rounded-full border-4 border-primary/30"
              />
            </motion.div>
            
            <motion.div 
              className="absolute -top-10 right-0 w-32 h-32 rounded-full bg-accent/20 blur-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.div 
              className="absolute bottom-10 left-0 w-40 h-40 rounded-full bg-primary/20 blur-2xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};