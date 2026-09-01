import { useState, useEffect } from "react";
import { getImagePath } from "@/utils/imagePath";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const resumeUrl = getImagePath("/Resume_Aditi_Reddy_Doma.pdf");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "education", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#e7e2db] bg-[#f7f6f3]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-3 text-left"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#111827] text-sm font-semibold text-white">
            AR
          </div>
          <span className="text-sm font-medium text-[#111827]">Aditi Reddy Doma</span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm transition ${
                activeSection === item.id
                  ? "font-semibold text-[#111827]"
                  : "text-[#5b6472] hover:text-[#111827]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-button-secondary px-4 py-2 text-sm"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
