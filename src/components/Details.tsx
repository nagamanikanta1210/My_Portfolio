import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, ScrollText, User, ExternalLink, School, Backpack } from 'lucide-react';

interface TabProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ id, label, icon, isActive, onClick }) => (
  <button
    id={id}
    className={`tab flex items-center justify-center gap-2 py-3 px-6 relative z-10 ${
      isActive ? 'text-white' : 'text-gray-400 hover:text-white'
    }`}
    onClick={onClick}
  >
    {icon}
    <span className="hidden sm:inline">{label}</span>
  </button>
);

export const Details = () => {
  const [activeTab, setActiveTab] = useState('personal-Info');
  const [sliderStyle, setSliderStyle] = useState({ left: '0%', width: '20%' });

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    switch (tab) {
      case 'personal-Info':
        setSliderStyle({ left: '0%', width: '20%' });
        break;
      case 'education':
        setSliderStyle({ left: '20%', width: '20%' });
        break;
      case 'experience':
        setSliderStyle({ left: '40%', width: '20%' });
        break;
      case 'certifications':
        setSliderStyle({ left: '60%', width: '20%' });
        break;
      case 'trainings':
        setSliderStyle({ left: '80%', width: '20%' });
        break;
    }
  };

  return (
    <section id="details" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-background" style={{ 
        borderBottomLeftRadius: '50% 100%',
        borderBottomRightRadius: '50% 100%' 
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent mb-4">My Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Background</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-300 mb-8">
            A comprehensive overview of my educational and professional journey
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="tabs gradient-bg mb-12 p-1 rounded-full relative">
            <div
              className="tab-slider"
              style={{
                left: sliderStyle.left,
                width: sliderStyle.width,
              }}
            />
            <Tab
              id="personal-tab"
              label="Personal-Info"
              icon={<User size={18} />}
              isActive={activeTab === 'personal-Info'}
              onClick={() => handleTabClick('personal-Info')}
            />
            <Tab
              id="education-tab"
              label="Education"
              icon={<GraduationCap size={18} />}
              isActive={activeTab === 'education'}
              onClick={() => handleTabClick('education')}
            />
            <Tab
              id="experience-tab"
              label="Experience"
              icon={<Briefcase size={18} />}
              isActive={activeTab === 'experience'}
              onClick={() => handleTabClick('experience')}
            />
            <Tab
              id="certifications-tab"
              label="Certifications"
              icon={<Award size={18} />}
              isActive={activeTab === 'certifications'}
              onClick={() => handleTabClick('certifications')}
            />
            <Tab
              id="trainings-tab"
              label="Trainings"
              icon={<ScrollText size={18} />}
              isActive={activeTab === 'trainings'}
              onClick={() => handleTabClick('trainings')}
            />
          </div>

          <div className="tab-content space-y-8">

            {activeTab === 'personal-Info' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="glass-effect p-8 rounded-2xl">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <img 
                        src="/profile.jpg" 
                        alt="Nagamanikanta Nallaganchu"
                        className="w-48 h-48 rounded-full object-cover border-4 border-primary/30"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-6">Personal Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-4">About Me</h4>
                          <ul className="space-y-3 text-gray-300">
                            <li><span className="text-accent">Name:</span> Nagamanikanta Nallagancu</li>
                            <li><span className="text-accent">Date of Birth:</span> October, 2003</li>
                            <li><span className="text-accent">Languages:</span> Telugu, English, Hindi </li>
                            <li><span className="text-accent">Location:</span> Vadodara, Gujarat</li>
                            <li><span className="text-accent">Other Name:</span> Green</li>
                            <li><span className="text-accent">Hobbies:</span> Cooking, Music, Travelling</li>
                            <li><span className="text-accent">Sports:</span> Kabaddi, Running</li>
                            <li><span className="text-accent">Fun Fact:</span> Self Motivated & Positively Driven</li>
                            

                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-4">Interests</h4>
                          <ul className="space-y-3 text-gray-300">
                            <li>Full Stack Development</li>
                            <li>Artificial Intelligence</li>
                            <li>Meachine Learning</li>
                            <li>Prompt Engineering </li>
                            <li>Open Source Contributing</li>
                            <li>Aspiring Data Analyst</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'education' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="glass-effect p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <GraduationCap size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Bachelor of Technology in Computer Science</h3>
                      <p className="text-accent mb-4">Parul University • 2022 - 2026</p>
                      <ul className="list-disc list-inside text-gray-300 space-y-3">
                        <li>Current CGPA: 8.3/10</li>
                        <li>Specialization in Artificial Intelligence &  Data Science</li>
                        <li>Member of University Coding club</li>
                        <li>Team Leader, Project</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="glass-effect p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Backpack size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">College</h3>
                      <p className="text-accent mb-4">Pavitra Junior College • 2020 - 2022</p>
                      <ul className="list-disc list-inside text-gray-300 space-y-3">
                        <li>Mathematics, Physics, Chemistry - MPC</li>
                        <li>Location: Machilipatnam, Krishna District, Andhrapradesh</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="glass-effect p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <School size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">High School</h3>
                      <p className="text-accent mb-4">Bhashyam English Medium High School • 2016 - 2020</p>
                      <ul className="list-disc list-inside text-gray-300 space-y-3">
                        <li>CGPA: 10/10</li>
                        <li>Subjects: Telugu, English, Hindi, Science, Social, Mathematics</li>
                        <li>Sports: Kabaddi, Running</li>
                        <li>Team Captain, Kabaddi</li>
                        <li>Location: Machilipatnam, Krishna District, Andhrapradesh</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="glass-effect p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <School size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Primary School</h3>
                      <p className="text-accent mb-4">ST.Palloti English Medium School • 2011 - 2016</p>
                      <ul className="list-disc list-inside text-gray-300 space-y-3">
                        <li>From Lower Kindergarten to XI Standard</li>
                        <li>Location: Pedana, Machilipatnam, Krishna District, Andhrapradesh</li>
                      </ul>
                    </div>
                  </div>
                </div>

              </motion.div>
            )}

            {activeTab === 'experience' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="glass-effect p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Briefcase size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Fullstack Developer Intern</h3>
                      <p className="text-accent mb-4">Tech Solutions Inc. • Summer 2025</p>
                      <ul className="list-disc list-inside text-gray-300 space-y-3">
                        <li>Developed Responsive website</li>
                        <li>Implemented MERN Stack</li>
                        <li>Collaborated with cross-functional teams</li>
                      </ul>
                      <a
                        href="https://www.linkedin.com/in/your-profile/experience"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mt-4"
                      >
                        <ExternalLink size={16} />
                        View on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'certifications' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="glass-effect p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-accent">Full stack Developer</h3>
                  <p className="text-gray-300 mb-6">
                    Comprehensive certification covering MongoDB, Express, React, Nodejs, Tailwind Css techniques.
                  </p>
                  <p className="text-sm text-gray-400">Issued by Google • 2025</p>
                  <a
                    href="https://www.linkedin.com/in/your-profile/certifications"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mt-4"
                  >
                    <ExternalLink size={16} />
                    View on LinkedIn
                  </a>
                </div>
                
                <div className="glass-effect p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-accent">AWS Cloud Practitioner</h3>
                  <p className="text-gray-300 mb-6">
                    Foundation level certification for understanding cloud concepts
                    and AWS services.
                  </p>
                  <p className="text-sm text-gray-400">Issued by Amazon • 2023</p>
                  <a
                    href="https://www.linkedin.com/in/your-profile/certifications"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mt-4"
                  >
                    <ExternalLink size={16} />
                    View on LinkedIn
                  </a>
                </div>

                <div className="glass-effect p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-accent">Infosys Database & SQL</h3>
                  <p className="text-gray-300 mb-6">
                    Completed an in-depth course on database management and SQL querying. Gained hands-on experience with designing, creating, and managing relational databases, writing efficient SQL queries for data retrieval, manipulation, and analysis. Demonstrated proficiency by passing the certification exam.
                  </p>
                  <p className="text-sm text-gray-400">Issued by Infosys Springboard • 2023</p>
                  <a
                    href="https://www.linkedin.com/posts/nagamanikanta1210_db-sql-infosys-certificate-activity-7213898163332538371-OJm5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEGz7nEBsEvbYesZj7epWK-cTMU8cjLMtUQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mt-4"
                  >
                    <ExternalLink size={16} />
                    View on LinkedIn
                  </a>
                </div>

                 <div className="glass-effect p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-accent">Infosys Python</h3>
                  <p className="text-gray-300 mb-6">
                   Completed the comprehensive Python programming course offered by Infosys Springboard. The course covered foundational to advanced Python concepts including data structures, object-oriented programming, data science libraries, and introductory machine learning. Successfully passed the virtual proctored exam and earned the official certification.
                  </p>
                  <p className="text-sm text-gray-400">Issued by Infosys Springboard • 2023</p>
                  <a
                    href="https://www.linkedin.com/posts/nagamanikanta1210_basic-of-python-infosys-certificate-activity-7213895396610248704-OWvx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEGz7nEBsEvbYesZj7epWK-cTMU8cjLMtUQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mt-4"
                  >
                    <ExternalLink size={16} />
                    View on LinkedIn
                  </a>
                </div>

                
                 <div className="glass-effect p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-accent">NPTEL Computer Networks & Internet Protocols</h3>
                  <p className="text-gray-300 mb-6">
                   Completed the rigorous online course offered by IIT Kharagpur through NPTEL, covering core concepts of computer networks, protocols, architecture, and Internet communication principles. Gained deep understanding of network layers, routing, TCP/IP, and modern networking technologies. Successfully earned certification by meeting course requirements and passing the exam.
                  </p>
                  <p className="text-sm text-gray-400">Issued by NPTEL - IIT Kharagpur • 2024</p>
                  <a
                    href="https://www.linkedin.com/posts/nagamanikanta1210_nptl-computer-network-internet-protocol-activity-7213900797921677312-asws?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEGz7nEBsEvbYesZj7epWK-cTMU8cjLMtUQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mt-4"
                  >
                    <ExternalLink size={16} />
                    View on LinkedIn
                  </a>
                </div>


              </motion.div>
            )}

            {activeTab === 'trainings' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="glass-effect p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-accent">Data Structures & Algorithms Bootcamp</h3>
                  <p className="text-gray-300 mb-6">
                   Successfully completed an intensive 60-day bootcamp organized by the Training & Placement Cell, CSE Department, Parul University. Covered fundamental and advanced topics in data structures and algorithms, including arrays, linked lists, trees, sorting, searching, and problem-solving techniques.
                  </p>
                  <p className="text-sm text-gray-400">Training & Placement Cell, Parul University • 2024</p>
                  <a
                    href="https://www.linkedin.com/posts/nagamanikanta1210_datastructureandalgorithms-bootcamp-codingclub-activity-7277310530556432385-CwVH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEGz7nEBsEvbYesZj7epWK-cTMU8cjLMtUQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mt-4"
                  >
                    <ExternalLink size={16} />
                    View on LinkedIn
                  </a>
                </div>
                
                <div className="glass-effect p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-accent">C Programming Language Bootcamp</h3>
                  <p className="text-gray-300 mb-6">
                   Completed an intensive 45-day crash course organized by the Coding Club and Training & Placement Cell, CSE Department, Parul University. Gained solid foundations in C programming, including syntax, control structures, functions, arrays, pointers, and basic problem-solving skills.
                  </p>
                  <p className="text-sm text-gray-400">Training & Placement Cell, Parul University • 2023</p>
                  <a
                    href="https://www.linkedin.com/posts/nagamanikanta1210_cabrlanguage-codingclub-45dayscrashcourse-activity-7277307944751222784-5U1C?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEGz7nEBsEvbYesZj7epWK-cTMU8cjLMtUQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mt-4"
                  >
                    <ExternalLink size={16} />
                    View on LinkedIn
                  </a>
                </div>

                <div className="glass-effect p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-accent">python Bootcamp</h3>
                  <p className="text-gray-300 mb-6">
                   Python Bootcamp organized by LetsUpgrade, in collaboration with NSDC, ITM Edutech, and GDG MAD — held from 21st to 23rd May 2025.Over these 3 intensive days, I revisited and reinforced the core fundamentals of Python — from variables and control flow to functions and real-world problem-solving.
                  </p>
                  <p className="text-sm text-gray-400">LetsUpgrade, in collaboration with NSDC, ITM Edutech and GDG MAD • 2025</p>
                  <a
                    href="https://www.linkedin.com/posts/nagamanikanta1210_python-bootcamp-activity-7332265409267630080-TtWQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEGz7nEBsEvbYesZj7epWK-cTMU8cjLMtUQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mt-4"
                  >
                    <ExternalLink size={16} />
                    View on LinkedIn
                  </a>
                </div>

                <div className="glass-effect p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-accent">Excel Bootcamp</h3>
                  <p className="text-gray-300 mb-6">
                     I honed essential Excel skills — from mastering formulas and functions to crafting clear, data-driven visualizations. It was a great refresher that boosted my ability to handle data efficiently and make smarter decisions using spreadsheets.
                  </p>
                  <p className="text-sm text-gray-400">LetsUpgrade, in collaboration with NSDC, ITM Edutech and GDG MAD • 2025</p>
                  <a
                    href="https://www.linkedin.com/in/your-profile/certifications"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mt-4"
                  >
                    <ExternalLink size={16} />
                    View on LinkedIn
                  </a>
                </div>


              </motion.div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;