const EducationSection = () => {
  const education = [
    {
      period: "2024 – 2026",
      institution: "Rochester Institute of Technology",
      degree: "Master of Science, Data Science",
      details: "GPA 4.0/4.0 · Rochester, NY",
      coursework: [
        "Data Science & Analytics",
        "Database Design",
        "Data Warehousing",
        "Visual Analytics",
        "Time Series Forecasting",
        "Knowledge Discovery",
      ],
    },
    {
      period: "2020 – 2024",
      institution: "Mahindra University",
      degree: "Bachelor of Engineering, Artificial Intelligence",
      details: "GPA 3.52/4.0 · Hyderabad, India",
      coursework: [
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Database Systems",
        "Software Engineering",
      ],
    },
  ];

  const toolkit = [
    {
      category: "Analytics & engineering",
      items: "Python, SQL, R, ETL, AWS, Snowflake, Microsoft Fabric, MongoDB, MariaDB",
    },
    {
      category: "Machine learning",
      items: "PyTorch, TensorFlow, scikit-learn, BERT, NLP, computer vision, clustering",
    },
    {
      category: "Visualization & BI",
      items: "Tableau, Power BI, Looker, D3.js, dashboard design, KPI reporting",
    },
    {
      category: "Tools & platforms",
      items: "Git, Databricks, PySpark, Kafka, Excel, Jupyter, API development",
    },
  ];

  return (
    <section id="education" className="portfolio-section">
      <div className="mx-auto max-w-6xl px-6">
        <div className="portfolio-divider pb-10">
          <p className="portfolio-label mb-3">03 · Education & Skills</p>
          <h2 className="portfolio-title max-w-3xl">Academic background and working toolkit.</h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="portfolio-label mb-8">Education</p>
            <div className="space-y-0">
              {education.map((item, index) => (
                <article key={item.institution} className={`py-8 ${index > 0 ? "portfolio-divider" : ""}`}>
                  <p className="text-sm text-[#6b7280]">{item.period}</p>
                  <h3 className="mt-3 font-serif text-2xl text-[#111827]">{item.institution}</h3>
                  <p className="mt-2 text-sm font-medium text-[#374151]">{item.degree}</p>
                  <p className="mt-1 text-sm text-[#6b7280]">{item.details}</p>
                  <p className="mt-5 text-sm leading-7 text-[#4b5563]">
                    {item.coursework.join(" · ")}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <p className="portfolio-label mb-8">Working toolkit</p>
            <div className="space-y-0">
              {toolkit.map((group, index) => (
                <article key={group.category} className={`py-8 ${index > 0 ? "portfolio-divider" : ""}`}>
                  <h3 className="font-serif text-2xl text-[#111827]">{group.category}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#4b5563]">{group.items}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
