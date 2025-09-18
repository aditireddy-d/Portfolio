import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DataVisualization = () => {
  const navigate = useNavigate();

  const visualizationProjects = [
    {
      title: "Sales Performance Dashboard",
      description: "Created an interactive Tableau dashboard for real-time sales monitoring, enabling data-driven decisions that increased sales efficiency by 25%.",
      technologies: ["Tableau", "SQL", "Python", "PostgreSQL", "Data Visualization"],
      githubUrl: "#",
      demoUrl: "#",
      impact: "Increased sales efficiency by 25% through data-driven insights",
      image: "/project1-thumbnail.jpg"
    },
    {
      title: "Customer Analytics Dashboard",
      description: "Developed comprehensive customer analytics dashboard using Power BI to track customer behavior, preferences, and engagement metrics.",
      technologies: ["Power BI", "DAX", "SQL", "Customer Analytics", "KPI Tracking"],
      githubUrl: "#",
      demoUrl: "#",
      impact: "Improved customer retention by 15% through targeted insights",
      image: "/project2-thumbnail.jpg"
    },
    {
      title: "Real-time Monitoring Dashboard",
      description: "Built real-time monitoring dashboard for operational metrics using custom visualizations and interactive charts.",
      technologies: ["Python", "Plotly", "Streamlit", "Real-time Data", "Interactive Charts"],
      githubUrl: "#",
      demoUrl: "#",
      impact: "Reduced response time by 40% through real-time alerts",
      image: "/project3-thumbnail.jpg"
    },
    {
      title: "Geographic Data Visualization",
      description: "Created interactive maps and geographic visualizations for location-based data analysis and insights.",
      technologies: ["Python", "Folium", "GeoPandas", "Interactive Maps", "Spatial Analysis"],
      githubUrl: "#",
      demoUrl: "#",
      impact: "Identified key geographic patterns for market expansion",
      image: "/project4-thumbnail.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-blue-500">
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-pink-300 mb-4">Data Visualization</h1>
          <p className="text-yellow-200 text-lg max-w-2xl mx-auto">
            Explore my projects across different domains of data science
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {visualizationProjects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 group bg-orange-200 border-2 border-orange-400">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="text-xs bg-green-100 text-green-800">
                    Visualization
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

export default DataVisualization; 