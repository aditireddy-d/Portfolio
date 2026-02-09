import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getImagePath } from '@/utils/imagePath';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('about');
  const navigate = useNavigate();
  const resumeUrl = getImagePath("/Resume_Aditi Reddy.pdf");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black z-50 shadow-lg border-b border-slate-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-center items-center space-x-6 flex-wrap">
          <button
            onClick={() => scrollToSection('about')}
            className={`px-5 py-2 rounded-md font-medium transition-all duration-200 ${
              activeSection === 'about'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-blue-500 hover:bg-slate-900'
            }`}
          >
            About Me
          </button>
          
          <button
            onClick={() => scrollToSection('education')}
            className={`px-5 py-2 rounded-md font-medium transition-all duration-200 ${
              activeSection === 'education'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-blue-500 hover:bg-slate-900'
            }`}
          >
            Education
          </button>
          
          <button
            onClick={() => scrollToSection('experience')}
            className={`px-5 py-2 rounded-md font-medium transition-all duration-200 ${
              activeSection === 'experience'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-blue-500 hover:bg-slate-900'
            }`}
          >
            Experience
          </button>
          
          <button
            onClick={() => scrollToSection('projects')}
            className={`px-5 py-2 rounded-md font-medium transition-all duration-200 ${
              activeSection === 'projects'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-blue-500 hover:bg-slate-900'
            }`}
          >
            Projects
          </button>
          
          <button
            onClick={() => scrollToSection('skills')}
            className={`px-5 py-2 rounded-md font-medium transition-all duration-200 ${
              activeSection === 'skills'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-blue-500 hover:bg-slate-900'
            }`}
          >
            Skills
          </button>
          
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-md font-medium transition-all duration-200 text-slate-300 hover:text-blue-500 hover:bg-slate-900"
          >
            Resume
          </a>
          
          <button
            onClick={() => navigate('/get-in-touch')}
            className="px-5 py-2 rounded-md font-medium transition-all duration-200 text-slate-300 hover:text-blue-500 hover:bg-slate-900"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;