import { getImagePath } from "@/utils/imagePath";

const ExperienceSection = () => {
  const experiences = [
    {
      label: "Current role",
      title: "Digital Engineering Intern",
      company: "Johnson Controls",
      period: "Jun 2026 – Present",
      location: "California",
      summary:
        "Building chiller reliability monitoring workflows with Microsoft Fabric, Snowflake, and Tableau for cross-functional engineering teams.",
      achievements: [
        "Partnering with maintenance, quality, and engineering teams to gather requirements and define key performance indicators (KPIs) for chiller (industrial HVAC) reliability monitoring.",
        "Extracting chiller sensor data from Microsoft Fabric using KQL and Python into Snowflake via ETL workflows for centralized data.",
        "Developing initial Tableau dashboards to translate raw sensor readings into insights for cross-functional teams.",
      ],
      technologies: ["Microsoft Fabric", "KQL", "Python", "Snowflake", "ETL", "Tableau", "KPI Development"],
    },
    {
      label: "Research",
      title: "Data Science Researcher",
      company: "iCitizen",
      period: "May 2025 – Apr 2026",
      location: "Rochester, New York",
      summary:
        "Built congressional data pipelines, interactive visualizations, and a RAG-based LLM chatbot for political affairs.",
      achievements: [
        "Web scraped and analyzed 500K+ unstructured congressional profiles from Congress.gov and Bioguide websites using APIs, transforming unstructured data into structured datasets stored in AWS DynamoDB for real-time updates.",
        "Designed a dynamic U.S. map using D3.js, visualizing senators, their sponsored bills and co-sponsors by state.",
        "Increased user engagement by 27.2% on the iCitizen app by building a RAG-based LLM chatbot for political affairs.",
      ],
      technologies: ["AWS", "DynamoDB", "D3.js", "Web Scraping", "RAG", "LLM", "Data Visualization"],
    },
    {
      label: "Teaching",
      title: "Graduate Teaching Assistant",
      company: "Rochester Institute of Technology",
      period: "May 2025 – May 2026",
      location: "Rochester, New York",
      summary: "Supported database systems instruction for undergraduates through SQL labs and relational data modeling.",
      achievements: [
        "Guided 200 undergraduates in database systems and SQL through labs focused on query writing and relational data modeling.",
      ],
      technologies: ["SQL", "Database Systems", "Teaching", "Data Modeling"],
    },
    {
      label: "Industry",
      title: "Data Analyst",
      company: "StandardWings Technologies Pvt. Ltd.",
      period: "Aug 2023 – Aug 2024",
      location: "Nashik, India",
      summary:
        "Integrated multi-source fleet data into AWS S3 and built Power BI dashboards that uncovered operational cost savings.",
      achievements: [
        "Extracted, cleaned and integrated multi-source data (GPS, sensor, Salesforce CRM, SAP, Excel) from 120+ vehicles into AWS S3 using SQL and Python, enabling detailed fleet analysis in Power BI that uncovered significant operational cost savings.",
        "Collaborated with cross-functional teams throughout the project lifecycle to define 21 key KPIs aligned with business objectives.",
      ],
      technologies: ["AWS S3", "SQL", "Python", "Power BI", "Salesforce", "SAP", "Excel", "Fleet Analytics"],
    },
    {
      label: "Internship",
      title: "Machine Learning Intern",
      company: "Cloud4C",
      period: "Jun 2023 – Jul 2023",
      location: "Hyderabad, India",
      summary: "Built NLP models for customer feedback analysis using BERT, Databricks, and PySpark.",
      achievements: [
        "Achieved over 90% accuracy in a sentiment analysis model using BERT to analyze customer feedback.",
        "Performed large-scale text analysis on customer feedback using Databricks with PySpark for data processing.",
        "Identified top 5 recurring customer concerns using unsupervised learning (K-Means clustering) on BERT embeddings.",
      ],
      technologies: ["BERT", "Databricks", "PySpark", "NLP", "K-Means Clustering", "Sentiment Analysis"],
    },
  ];

  return (
    <section id="experience" className="portfolio-section">
      <div className="mx-auto max-w-6xl px-6">
        <div className="portfolio-divider pb-10">
          <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="portfolio-label mb-3">01 · Experience</p>
              <h2 className="portfolio-title max-w-3xl">Industry and research experience.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#5b6472]">
              Digital engineering at Johnson Controls, data science research at iCitizen, teaching at RIT, and earlier
              work in analytics and machine learning.
            </p>
          </div>
        </div>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <article key={index} className="portfolio-divider py-10 first:border-t-0">
              <div className="grid gap-8 md:grid-cols-[220px_1fr]">
                <div className="space-y-3">
                  <p className="portfolio-label text-[#6b7280]">{exp.label}</p>
                  <p className="text-sm font-medium text-[#111827]">{exp.period}</p>
                  <p className="text-sm text-[#5b6472]">{exp.location}</p>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#6b7280]">{exp.company}</p>
                    <h3 className="mt-2 font-serif text-3xl text-[#111827]">{exp.title}</h3>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-[#4b5563]">{exp.summary}</p>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex gap-3 text-sm leading-7 text-[#374151]">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#111827]" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="portfolio-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
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
