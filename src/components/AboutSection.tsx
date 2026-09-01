import { getImagePath } from "@/utils/imagePath";

const profilePhoto = getImagePath("/profile-photo.jpg");

const aboutParagraphs = [
  "I am currently a Master of Science in Data Science student at Rochester Institute of Technology, building skills across analytics, machine learning, data engineering, and visualization.",
  "Before and during graduate school, I have worked as a Digital Engineering Intern at Johnson Controls, a Data Science Researcher at iCitizen, a Graduate Teaching Assistant at RIT, a Data Analyst at StandardWings Technologies, and a Machine Learning Intern at Cloud4C.",
  "I received my undergraduate education from Mahindra University, where I studied Artificial Intelligence. My interest in data science grew through coursework and hands-on projects that showed me how raw information could be transformed into meaningful decisions.",
  "I am interested in all things data, including machine learning, data engineering, business intelligence, dashboard design, and applied analytics across industry and research settings.",
  "In my free time, I enjoy exploring new datasets, building visual stories from data, cooking, and staying curious about how technology can solve real-world problems.",
];

const AboutSection = () => {
  return (
    <section id="about" className="portfolio-section bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="portfolio-divider pb-10">
          <p className="portfolio-label mb-3">About Me</p>
          <h2 className="portfolio-title max-w-3xl">A little more about my background.</h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          <div className="flex justify-center lg:justify-start">
            <img
              src={profilePhoto}
              alt="Aditi Reddy Doma"
              className="h-56 w-56 rounded-full object-cover object-top shadow-[0_12px_40px_rgba(17,24,39,0.12)] md:h-64 md:w-64"
            />
          </div>

          <div className="space-y-8">
            {aboutParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="border-l-2 border-[#93c5fd] pl-5 text-sm leading-7 text-[#374151] md:text-base md:leading-8"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
