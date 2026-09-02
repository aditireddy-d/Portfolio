import { ArrowUpRight } from "lucide-react";
import { getImagePath } from "@/utils/imagePath";

const resumeUrl = getImagePath("/Resume_Aditi_Reddy_Doma.pdf");

const targetRoles = [
  "AI Engineer",
  "Machine Learning Engineer",
  "Data Scientist",
  "Data Analyst",
  "Data Engineer",
];

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="portfolio-section pt-32 md:pt-36">
      <div className="mx-auto max-w-4xl px-6">
        <div className="space-y-8">
          <div className="space-y-5">
            <h1 className="portfolio-title">Aditi Reddy Doma</h1>
            <p className="max-w-3xl text-xl font-medium leading-relaxed text-[#374151] md:text-2xl">
              Turning messy data into models, pipelines, and decisions that actually move the business forward.
            </p>
          </div>

          <p className="max-w-3xl text-base leading-7 text-[#5b6472] md:text-lg md:leading-8">
            M.S. Data Science candidate at RIT with hands-on experience across ETL, analytics, ML, dashboards, and
            research. Open to roles where I can build intelligent systems, ship reliable data products, and deliver
            insights teams can act on.
          </p>

          <div className="flex flex-wrap gap-2">
            {targetRoles.map((role) => (
              <span key={role} className="portfolio-tag px-4 py-2 text-sm">
                {role}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
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
      </div>
    </section>
  );
};

export default HeroSection;
