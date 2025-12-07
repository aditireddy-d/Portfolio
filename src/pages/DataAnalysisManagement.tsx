import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DataAnalysisManagement = () => {
  const navigate = useNavigate();

  const analysisProjects = [
    {
      title: "Investing Stocks Strategy",
      description: "Comprehensive visual analytics project exploring governance and trust across 100+ countries using global indices with R and Tableau. Analyzed government effectiveness, regulatory quality, and citizen trust patterns.",
      technologies: ["R", "Tableau", "Data Visualization", "Statistical Analysis", "ggplot2"],
      githubUrl: "https://github.com/aditireddy-d/Trust-in-Government-R-Tableau",
      demoUrl: "#",
      impact: "Identified key factors influencing government trust across different regions",
      image: "/project1-thumbnail.jpg"
    },
    {
      title: "Market Basket Analysis",
      description: "Performed association rule mining on retail transaction data to optimize product placement and cross-selling strategies. Used Apriori algorithm to discover product relationships.",
      technologies: ["R", "Apriori Algorithm", "ggplot2", "Shiny", "Association Rules"],
      githubUrl: "#",
      demoUrl: "#",
      impact: "Boosted revenue by 18% through optimized product placement",
      image: "/project2-thumbnail.jpg"
    },
    {
      title: "A/B Testing Framework",
      description: "Designed and implemented a statistical framework for A/B testing that improved conversion rates across multiple product features. Comprehensive statistical analysis with confidence intervals.",
      technologies: ["Python", "SciPy", "Matplotlib", "SQL", "Statistical Testing"],
      githubUrl: "#",
      demoUrl: "#",
      impact: "Improved conversion rates by 12% across multiple product features",
      image: "/project3-thumbnail.jpg"
    },
    {
      title: "Customer Segmentation Analysis",
      description: "Developed customer segmentation models using clustering algorithms to identify distinct customer groups and optimize marketing strategies.",
      technologies: ["Python", "Scikit-learn", "Pandas", "K-means", "RFM Analysis"],
      githubUrl: "#",
      demoUrl: "#",
      impact: "Improved marketing ROI by 25% through targeted campaigns",
      image: "/project4-thumbnail.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-blue-500">
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-pink-300 mb-4">Data Analysis & Management</h1>
          <p className="text-yellow-200 text-lg max-w-2xl mx-auto">
            Explore my projects across different domains of data science
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {analysisProjects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 group bg-orange-200 border-2 border-orange-400">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="text-xs bg-green-100 text-green-800">
                    Analysis
                  </Badge>
                </div>
                <CardTitle className="text-xl text-green-800 group-hover:text-green-900 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-800 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-green-900 mb-2">Impact:</h4>
                  <p className="text-xs text-green-800">{project.impact}</p>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="text-xs bg-green-200 text-green-800"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataAnalysisManagement; 