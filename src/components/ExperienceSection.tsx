import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getImagePath } from "@/utils/imagePath";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Data Engineer Intern",
      company: "iCitizen",
      logo: null,
      period: "July 2025 - Present",
      location: "Remote",
      description: "",
      achievements: [
        "Extracted and analyzed 500k+ unstructured congressional profiles from Congress.gov and Bioguide into structured datasets using AWS (DynamoDB, S3, Glue, Lambda), enabling real-time updates on political representation and funding interests",
        "Reduced research time by 23% and enhanced policy engagement by designing interactive U.S. maps in QuickSight, linking states to representatives and senators, highlighting their sponsored bills and funding interests for student government advocacy"
      ],
      technologies: ["AWS", "DynamoDB", "S3", "AWS Glue", "Lambda", "QuickSight", "Data Engineering", "Data Extraction", "Data Visualization"]
    },
    {
      title: "GRADUATE TEACHING ASSISTANT",
      company: "ROCHESTER INSTITUTE OF TECHNOLOGY",
      logo: getImagePath("/rit-logo.png"),
      period: "January 2025 - Present",
      location: "USA",
      description: "",
      achievements: [
        "Guided 200 undergraduates in database systems and SQL, through labs focused on query writing, data normalization, and relational modeling using industry-aligned case studies"
      ],
      technologies: ["SQL", "Database Systems", "Teaching", "Data Normalization", "Relational Modeling"]
    },
    {
      title: "BUSINESS ANALYST INTERN",
      company: "STANDARDWINGS TECHNOLOGIES PVT. LTD",
      logo: getImagePath("/standardwings-logo.png"),
      period: "December 2023 - July 2024",
      location: "India",
      description: "",
      achievements: [
        "Documented client requirements by collaborating with 15+ cross-functional team members and attending client meetings",
        "Extracted actionable insights from 20,000+ rows of patient data using MS Excel, then designed a low-code application in Mendix, leading to improved patient onboarding and streamlined appointment scheduling",
        "Presented the Mendix app functionality to technical and non-technical stakeholders using clear MS PowerPoint decks"
      ],
      technologies: ["MS Excel", "Mendix", "MS PowerPoint", "Data Analysis", "Client Collaboration", "Low-code Development"]
    },
    {
      title: "MACHINE LEARNING & DATA ANALYSIS INTERN",
      company: "CLOUD4C",
      logo: `${getImagePath("/cloud4c-logo.png")}?v=1`,
      period: "June 2023 - August 2023",
      location: "India",
      description: "",
      achievements: [
        "Achieved Natural Language Processing (NLP) accuracy above 90% by developing a sentiment analysis product using BERT through transfer learning and fine-tuning on customer raised tickets",
        "Optimized training pipelines in TensorFlow using dynamic learning rates, mixed-precision training and gradient clipping to improve training efficiency and model stability",
        "Identified the top 5 recurring customer concerns by applying K-Means clustering on BERT embeddings"
      ],
      technologies: ["BERT", "TensorFlow", "NLP", "K-Means Clustering", "Transfer Learning", "Sentiment Analysis"]
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