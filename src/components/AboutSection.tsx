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
          <p className="portfolio-label">About Me</p>
        </div>

        <div className="max-w-3xl space-y-8">
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
    </section>
  );
};

export default AboutSection;
