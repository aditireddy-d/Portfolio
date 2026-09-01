import { ArrowUpRight } from "lucide-react";
import { getImagePath } from "@/utils/imagePath";

const profilePhoto = getImagePath("/profile-photo.jpg");
const resumeUrl = getImagePath("/Resume_Aditi_Reddy_Doma.pdf");

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="portfolio-section pt-32 md:pt-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="portfolio-title">Aditi Reddy Doma</h1>
            <p className="max-w-xl text-lg font-medium leading-relaxed text-[#374151] md:text-xl">
              Data scientist working on analytics, data engineering, visualization, and applied machine learning.
            </p>
          </div>

          <p className="max-w-xl text-base leading-7 text-[#5b6472]">
            M.S. Data Science candidate at Rochester Institute of Technology with experience across ETL pipelines,
            dashboards, research, and teaching.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button onClick={scrollToProjects} className="portfolio-button-primary">
              Selected projects
            </button>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="portfolio-button-secondary">
              Download resume
            </a>
            <a
              href="https://github.com/aditireddy-d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2 py-2 text-sm font-medium text-[#111827] hover:underline"
            >
              GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="overflow-hidden rounded-[1.75rem] bg-white p-3 shadow-[0_20px_60px_rgba(17,24,39,0.12)]">
            <img
              src={profilePhoto}
              alt="Aditi Reddy Doma"
              className="h-[28rem] w-[22rem] object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
