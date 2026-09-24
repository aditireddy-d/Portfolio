import { getImagePath } from "@/utils/imagePath";

type Experience = {
  label?: string;
  title: string;
  company: string;
  period: string;
  location: string;
  logo: string;
  achievements: string[];
};

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      label: "Current role",
      title: "Artificial Intelligence Engineer Intern",
      company: "Johnson Controls",
      period: "August 2026 – Present",
      location: "Sunnyvale, California",
      logo: getImagePath("/johnson-controls-logo.png"),
      achievements: [
        "Developing the Control Spec Assistant, an AI agent using hybrid RAG (BGE-large + BM25, Qdrant) and GPT-5.1 to deliver instant, cited spec answers, targeting 157 hrs/week that 18 controls engineers spend manually searching documents.",
        "Architecting Agent Q, an agentic AI chatbot that converts engineers' natural-language questions into SQL over the Snowflake chiller sensor database, delivering instant performance insights without writing code, accelerated with Claude Code.",
      ],
    },
    {
      title: "Data Engineering Intern",
      company: "Johnson Controls",
      period: "June 2026 – August 2026",
      location: "York, Pennsylvania",
      logo: getImagePath("/johnson-controls-logo.png"),
      achievements: [
        "Built an ETL pipeline from Microsoft Fabric to Snowflake using KQL and Python, centralizing 17M+ chiller sensor records.",
        "Defined 15+ equipment health KPIs and built Tableau dashboards for cross-functional teams to monitor equipment reliability.",
        "Won the Johnson Controls Summer Innovation Challenge among 150+ North American interns with an AI-powered Predictive Sales Optimization Engine recommending bid strategies from historical win/loss data.",
      ],
    },
    {
      title: "Data Science Research Assistant",
      company: "iCitizen",
      period: "May 2025 – Present",
      location: "Rochester, New York",
      logo: getImagePath("/icitizen-logo.png"),
      achievements: [
        "Web scraped and analyzed 500K+ unstructured congressional profiles from Congress.gov and Bioguide websites using APIs, transforming unstructured data into structured datasets stored in AWS DynamoDB for real-time updates.",
        "Designed a dynamic U.S. map using D3.js, visualizing senators, their sponsored bills and co-sponsors by state.",
        "Increased user engagement by 27.2% on the iCitizen app by building a GraphRAG chatbot on Neo4j, reducing hallucinations.",
      ],
    },
    {
      title: "Graduate Teaching Assistant",
      company: "Rochester Institute of Technology",
      period: "May 2025 – May 2026",
      location: "Rochester, New York",
      logo: getImagePath("/rit-logo.png"),
      achievements: [
        "Guided 200 undergraduates in database systems and SQL through labs focused on query writing and relational data modeling.",
      ],
    },
    {
      title: "Data Analyst",
      company: "StandardWings Technologies Pvt. Ltd.",
      period: "August 2023 – August 2024",
      location: "Nashik, India",
      logo: getImagePath("/standardwings-logo.png"),
      achievements: [
        "Extracted, cleaned and integrated multi-source data (GPS, sensor, Salesforce CRM, SAP, Excel) from 120+ vehicles into AWS S3 using SQL and Python, enabling Power BI fleet analysis that identified 37% fuel cost reduction opportunities.",
        "Collaborated with cross-functional teams throughout the project lifecycle to define 21 key KPIs aligned with business objectives.",
      ],
    },
    {
      title: "Machine Learning Intern",
      company: "Cloud4C",
      period: "June 2023 – July 2023",
      location: "Hyderabad, India",
      logo: getImagePath("/cloud4c-logo.png"),
      achievements: [
        "Achieved over 90% accuracy in a sentiment analysis model using BERT to analyze customer feedback.",
        "Performed large-scale text analysis on customer feedback using Databricks with PySpark for data processing.",
        "Identified top 5 recurring customer concerns using unsupervised learning (K-Means clustering) on BERT embeddings.",
      ],
    },
  ];

  return (
    <section id="experience" className="portfolio-section">
      <div className="mx-auto max-w-6xl px-6">
        <div className="portfolio-divider pb-10">
          <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="portfolio-label mb-3">01 · Experience</p>
              <h2 className="portfolio-title max-w-3xl">Experience.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#5b6472]">
              Data engineering, machine learning, AI, and visualization across industry and research settings.
            </p>
          </div>
        </div>

        <div className="relative border-l border-[#cfc7bd] pl-8 md:pl-10">
          {experiences.map((exp, index) => (
            <article key={index} className={`relative ${index < experiences.length - 1 ? "pb-12" : ""}`}>
              <span className="absolute -left-[calc(2rem+0.5px)] top-1 h-3 w-3 rounded-full border-2 border-[#111827] bg-[#f7f6f3] md:-left-[calc(2.5rem+0.5px)]" />

              <div className="grid gap-8 md:grid-cols-[220px_1fr]">
                <div className="space-y-3">
                  {exp.label && <p className="portfolio-label text-[#6b7280]">{exp.label}</p>}
                  <p className="text-sm font-medium text-[#111827]">{exp.period}</p>
                  <p className="text-sm text-[#5b6472]">{exp.location}</p>
                </div>

                <div className={`space-y-5 ${index < experiences.length - 1 ? "pb-10" : ""}`}>
                  <div className="flex items-start gap-5">
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#e7e2db] bg-white p-2 shadow-sm">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="h-full w-full object-contain"
                        onError={(e) => {
                          e.currentTarget.src = getImagePath("/placeholder.svg");
                        }}
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#6b7280]">
                        {exp.company}
                      </p>
                      <h3 className="mt-2 font-serif text-2xl text-[#111827] md:text-3xl">{exp.title}</h3>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex gap-3 text-sm leading-7 text-[#374151]">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#111827]" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
