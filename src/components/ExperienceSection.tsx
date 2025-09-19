import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "GRADUATE RESEARCH ASSISTANT",
      company: "ROCHESTER INSTITUTE OF TECHNOLOGY",
      period: "July 2025 - Present",
      location: "USA",
      description: "",
      achievements: [
        "Built AWS-powered data pipelines and dashboards to visualize topics of interest for politicians across all U.S. states",
        "Applied topic modeling and sentiment analysis to identify state-specific research priorities",
        "Delivered insights enabling targeted funding requests for graduate school research investments"
      ],
      technologies: ["Research", "Data Science", "Artificial Intelligence", "Academic Writing"]
    },
    {
      title: "GRADUATE TEACHING ASSISTANT",
      company: "ROCHESTER INSTITUTE OF TECHNOLOGY",
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
      period: "December 2023 - July 2024",
      location: "Nashik, India",
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
    <section id="experience" className="py-20 bg-blue-500 relative overflow-hidden">
      {/* Bubble Effects */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-yellow-300 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-300 rounded-full opacity-25 animate-ping"></div>
      <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-purple-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-green-300 rounded-full opacity-30 animate-bounce"></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-pink-300 mb-4">Work Experience</h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8 relative">

          
          {experiences.map((exp, index) => (
            <div key={index} className="relative ml-20 mb-12">

              
              <div className="text-white hover:bg-blue-600/10 p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="mb-4">
                  <h3 className={`text-2xl font-bold mb-2 ${
                    index === 0 ? 'text-yellow-300' : 'text-orange-300'
                  }`}>
                    {exp.title}
                  </h3>
                  <div className="text-yellow-200 mb-1 font-semibold">
                    {exp.company} • {exp.period} • {exp.location}
                  </div>
                </div>
                
                <p className="text-cyan-200 mb-4 leading-relaxed font-medium">
                  {exp.description}
                </p>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                                          <li key={achIndex} className={`text-base flex items-start font-medium ${
                        index === 0 ? 'text-green-200' : 'text-green-300'
                      }`}>
                        <span className={`mr-2 text-xl ${
                          index === 0 ? 'text-yellow-300' : 'text-yellow-300'
                        }`}>•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;