import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('about');
  const navigate = useNavigate();

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
    <nav className="fixed top-0 left-0 right-0 bg-blue-500 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-center items-center space-x-8">
          <button
            onClick={() => scrollToSection('about')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeSection === 'about'
                ? 'bg-green-500 text-white shadow-lg'
                : 'bg-green-600 text-white hover:bg-green-500'
            }`}
          >
            About Me
          </button>
          
          <button
            onClick={() => scrollToSection('education')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeSection === 'education'
                ? 'bg-green-500 text-white shadow-lg'
                : 'bg-green-600 text-white hover:bg-green-500'
            }`}
          >
            Education
          </button>
          
          <button
            onClick={() => scrollToSection('experience')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeSection === 'experience'
                ? 'bg-green-500 text-white shadow-lg'
                : 'bg-green-600 text-white hover:bg-green-500'
            }`}
          >
            Experience
          </button>
          
          <button
            onClick={() => scrollToSection('projects')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeSection === 'projects'
                ? 'bg-green-500 text-white shadow-lg'
                : 'bg-green-600 text-white hover:bg-green-500'
            }`}
          >
            Projects
          </button>
          
          <button
            onClick={() => scrollToSection('skills')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeSection === 'skills'
                ? 'bg-green-500 text-white shadow-lg'
                : 'bg-green-600 text-white hover:bg-green-500'
            }`}
          >
            Skills
          </button>
          
          <button
            onClick={() => navigate('/get-in-touch')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              'bg-green-600 text-white hover:bg-green-500'
            }`}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;