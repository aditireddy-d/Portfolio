import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getImagePath } from "@/utils/imagePath";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "DATA SCIENCE RESEARCH INTERN",
      company: "icitizen",
      logo: getImagePath("/icitizen-logo.png"),
      period: "May 2025 - Present",
      location: "Remote, USA",
      description: "",
      achievements: [
        "Web scraped and analyzed 500K+ unstructured congressional profiles from Congress.gov and Bioguide websites using APIs, transforming unstructured data into structured datasets stored in AWS DynamoDB for real-time updates.",
        "Designed a dynamic U.S. map using D3.js, visualizing senators, their sponsored bills and co-sponsors by state.",
        "Increased user engagement by 27.2% on the iCitizen app by developing a chatbot predicting likelihood of a bill becoming law."
      ],
      technologies: ["AWS", "DynamoDB", "D3.js", "Web Scraping", "Data Engineering", "Chatbot Development", "Data Visualization"]
    },
    {
      title: "GRADUATE TEACHING ASSISTANT",
      company: "ROCHESTER INSTITUTE OF TECHNOLOGY",
      logo: getImagePath("/rit-logo.png"),
      period: "January 2025 - Present",
      location: "Rochester, New York",
      description: "",
      achievements: [
        "Guided 200 undergraduates in database systems and SQL through labs focused on query writing and relational data modeling."
      ],
      technologies: ["SQL", "Database Systems", "Teaching", "Data Modeling"]
    },
    {
      title: "BUSINESS ANALYST INTERN",
      company: "STANDARDWINGS TECHNOLOGIES PVT. LTD",
      logo: getImagePath("/standardwings-logo.png"),
      period: "December 2023 - July 2024",
      location: "Nashik, India",
      description: "",
      achievements: [
        "Documented client requirements by collaborating with 15+ cross-functional team members and attending client meetings.",
        "Extracted actionable insights from 20,000+ rows of patient data using Pandas, which contributed to the design of an application that improved patient onboarding and streamlined appointment scheduling.",
        "Presented the application functionality to technical and non-technical stakeholders using clear MS PowerPoint decks."
      ],
      technologies: ["Pandas", "MS Excel", "MS PowerPoint", "Data Analysis", "Client Collaboration"]
    },
    {
      title: "MACHINE LEARNING & DATA ANALYST INTERN",
      company: "CLOUD4C",
      logo: `${getImagePath("/cloud4c-logo.png")}?v=1`,
      period: "June 2023 - August 2023",
      location: "Hyderabad, India",
      description: "",
      achievements: [
        "Achieved over 90% accuracy in a sentiment analysis model using BERT to analyze customer feedback.",
        "Performed large-scale text analysis on customer feedback using Databricks with PySpark for data processing.",
        "Identified top 5 recurring customer concerns using unsupervised learning (K-Means clustering) on BERT embeddings."
      ],
      technologies: ["BERT", "Databricks", "PySpark", "NLP", "K-Means Clustering", "Sentiment Analysis", "Unsupervised Learning"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-slate-900 border border-slate-800 shadow-sm hover:shadow-md hover:border-slate-700 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  {exp.logo && (
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`}
                      className="h-14 w-auto max-w-28 object-contain bg-white rounded-lg p-2 border border-slate-700"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  )}
                  <div className="flex-1">
                    <CardTitle className="text-xl md:text-2xl font-bold text-white mb-2">
                      {exp.title}
                    </CardTitle>
                    <div className="text-slate-300 mb-2 font-medium">
                      {exp.company}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {exp.period} • {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-slate-300 flex items-start leading-relaxed">
                      <span className="mr-3 text-blue-500 font-bold mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;