import React from 'react';
import { Link } from 'react-scroll';
import { Linkedin, Instagram, Github, Mail, Phone, MapPin } from 'lucide-react';
import { SiHackerrank, SiLeetcode } from 'react-icons/si';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <img src="/logo.svg" alt="Logo" className="h-12 w-auto mb-4" />
            </Link>
            <p className="text-gray-300 mb-4">
              Creating innovative solutions with data analysis and full stack development.
            </p>
            <div className="flex gap-4">
               <a
                  href="https://www.linkedin.com/in/nagamanikanta1210/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-colors transform hover:scale-110" >

                 <Linkedin size={20} />
              </a>
              <a
                  href="https://www.instagram.com/_green_1210/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-colors transform hover:scale-110">

                  <Instagram size={20} />
              </a>
              <a
                  href="https://github.com/nagamanikanta1210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-colors transform hover:scale-110">

                  <Github size={20} />
              </a>
              <a
                  href="https://leetcode.com/nagamanikanta1210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-colors transform hover:scale-110">

                  <SiLeetcode size={20} />
              </a>
              <a
                  href="https://www.hackerrank.com/profile/green1210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-colors transform hover:scale-110" >

                  <SiHackerrank size={20} />
                </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="resume"
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-primary mt-1" />
                <span className="text-gray-300">nagamanikanta1210@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-primary mt-1" />
                <span className="text-gray-300">+91 9392409591</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-1" />
                <span className="text-gray-300">Parul University, Vadodara, Gujarat, India</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to get updates on my latest projects and blogs.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg bg-white/10 backdrop-blur border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-r-lg bg-primary hover:bg-primary/80 text-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Nagamanikanta Nallaganchu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};