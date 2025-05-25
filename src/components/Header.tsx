import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Linkedin, Instagram, Github, Menu, X, Bell, TreePine, } from 'lucide-react';
import { SiHackerrank, SiLeetcode } from 'react-icons/si';

interface Notification {
  id: string;
  message: string;
  timestamp: Date;
}

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      
      const sections = ['home', 'skills',  'details','projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.notifications-panel') && !target.closest('.notification-button')) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setShowNotifications(false);
  };

  const toggleNotifications = (event: React.MouseEvent) => {
    event.stopPropagation();
    setShowNotifications(!showNotifications);
    setIsMenuOpen(false);
  };

  const addNotification = (message: string) => {
    const newNotification = {
      id: Date.now().toString(),
      message,
      timestamp: new Date(),
    };
    setNotifications(prev => [newNotification, ...prev]);
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const handleNavClick = () => {
    setShowNotifications(false);
    setIsMenuOpen(false);
  };

  React.useEffect(() => {
    (window as any).addNotification = addNotification;
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 glass-effect' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer"
          onClick={handleNavClick}
        >
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-500 blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center w-12 h-12 bg-black rounded-lg transform transition-all duration-300 hover:scale-110 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex gap-1">
                     <img src="/logo.svg" alt="Logo" className="h-12 w-auto transition-transform duration-300 hover:scale-110" />
                  </div>
                </div>
              </div>
            </div>
            <span className="text-xl font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
              Portfolio
            </span>
          </div>

        </Link>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {['home', 'skills', 'projects', 'details'].map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                className={`nav-link text-white hover:text-accent transition-colors cursor-pointer ${
                  activeSection === section ? 'active' : ''
                }`}
                onClick={handleNavClick}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/nagamanikanta1210/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors transform hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/_green_1210/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors transform hover:scale-110"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://github.com/nagamanikanta1210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors transform hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a
              href="https://leetcode.com/nagamanikanta1210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors transform hover:scale-110"
            >
              <SiLeetcode size={20} />
            </a>
            <a
              href="https://www.hackerrank.com/profile/green1210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors transform hover:scale-110"
            >
              <SiHackerrank size={20} />
            </a>
            <a
              href="https://linktr.ee/nagamanikanta1210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors transform hover:scale-110"
            >
              <TreePine size={20} />
            </a>
          </div>

          <div className="relative">
            <button 
              className="text-white hover:text-accent transition-colors p-2 notification-button transform hover:scale-110"
              onClick={toggleNotifications}
            >
              <Bell size={20} />
              {notifications.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {notifications.length}
                </span>
              )}
            </button>

            {showNotifications && (
              <div className="notifications-panel absolute right-0 mt-2 w-80 max-h-96 overflow-y-auto bg-background border border-white/10 rounded-lg shadow-lg glass-effect">
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-4">Notifications</h3>
                  {notifications.length === 0 ? (
                    <p className="text-gray-400 text-center py-4">No notifications</p>
                  ) : (
                    <div className="space-y-4">
                      {notifications.map(notification => (
                        <div key={notification.id} className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                          <div className="flex-1">
                            <p className="text-sm">{notification.message}</p>
                            <p className="text-xs text-gray-400 mt-1">
                              {notification.timestamp.toLocaleTimeString()}
                            </p>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeNotification(notification.id);
                            }}
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="border border-white hover:bg-white hover:text-background px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 cursor-pointer"
            onClick={handleNavClick}
          >
            Let's Connect
          </Link>
        </div>

        <button
          className="md:hidden text-white transition-transform duration-300 hover:scale-110"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background py-4 glass-effect">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-white hover:text-accent transition-colors py-2"
              onClick={handleNavClick}
            >
              Home
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="text-white hover:text-accent transition-colors py-2"
              onClick={handleNavClick}
            >
              Skills
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-white hover:text-accent transition-colors py-2"
              onClick={handleNavClick}
            >
              Projects
            </Link>
            <Link
              to="details"
              smooth={true}
              duration={500}
              className="text-white hover:text-accent transition-colors py-2"
              onClick={handleNavClick}
            >
              Details
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-white hover:text-accent transition-colors py-2"
              onClick={handleNavClick}
            >
              Contact
            </Link>

            <div className="flex gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/nagamanikanta1210/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/_green_1210/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors transform hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://github.com/nagamanikanta1210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors transform hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://leetcode.com/nagamanikanta1210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors transform hover:scale-110"
              >
                <SiLeetcode size={20} />
              </a>
              <a
                href="https://www.hackerrank.com/green1210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors transform hover:scale-110"
              >
                <SiHackerrank size={20} />
              </a>
              
              <a
                href="https://linktr.ee/nagamanikanta1210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors transform hover:scale-110"
              >
                <TreePine size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};