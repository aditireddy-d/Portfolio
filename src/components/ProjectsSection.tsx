import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getImagePath } from "@/utils/imagePath";

const ProjectsSection = () => {
  const projects = [
    {
      name: "IoT Telemetry Analytics for Health Monitoring Devices",
      description: "Built a data pipeline using Kafka + PySpark to process 2M+ IoT telemetry records from health devices (glucose, heart-rate). Reduced false alarms by 18% by fine-tuning anomaly detection models (Isolation Forest, ARIMA) for abnormal health data.",
      skills: ["Kafka", "PySpark", "Data Engineering", "Isolation Forest", "ARIMA", "Anomaly Detection", "IoT", "Healthcare Analytics"],
      image: getImagePath("/iot-project.png"),
      githubUrl: "https://github.com/aditireddy-d/IOT-Telemetry-Analytics-for-Health-Monitoring-Devices"
    },
    {
      name: "Portfolio Allocation Model",
      description: "Developed a data-driven investment strategy comparing Buy & Hold, Momentum Trading, and the S&P 500 benchmark across 9 diversified stocks from consumer, tech, and industrial sectors. Simulated 5-year stock returns using Monte Carlo analysis and applied Mean-Variance Optimization with Pyomo to identify the optimal allocation under risk constraints.",
      skills: ["Python", "Pandas", "Financial Modeling", "Risk Management", "Matplotlib", "Monte Carlo"],
      image: getImagePath("/stocks-project.png"),
      githubUrl: "https://github.com/aditireddy-d/Investing_Stocks_Strategy"
    },
    {
      name: "Energy Consumption Forecasting",
      description: "Analyzed energy use in 5,700+ South Carolina homes to predict summer demand spikes. Built time-series linear regression models using hourly energy usage, weather data, and building metadata. Created an interactive Shiny dashboard to guide energy-saving strategies and prevent blackouts with 75-85% accuracy.",
      skills: ["R", "Shiny", "ggplot2", "Time Series", "Regression", "Energy Analytics"],
      image: getImagePath("/energy-project.png"),
      githubUrl: "https://github.com/aditireddy-d/Energy-Consumption-Predictor"
    },
    {
      name: "COVID-19 Data Exploration Tableau",
      description: "Performed comprehensive data cleaning using advanced Excel techniques, followed by exploratory data analysis using SQL queries. Showcased COVID-19 trends and vaccination impact in Tableau using multiple visualizations including bar charts and interactive maps.",
      skills: ["SQL", "Tableau", "Excel", "Data Cleaning", "Data Visualization"],
      image: getImagePath("/covid-project.png"),
      githubUrl: "https://github.com/aditireddy-d/Covid-19-Data-Exploration"
    },

  ];


  const handleProjectClick = (project: any) => {
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank');
    }
  };

  // Debug: Log the image paths
  console.log('Project images:', projects.map(p => ({ name: p.name, image: p.image })));

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-lg transition-all duration-300 group bg-slate-900 border border-slate-800 hover:border-blue-500 h-[40rem] flex flex-col overflow-hidden ${project.githubUrl ? 'cursor-pointer' : ''}`}
              onClick={() => handleProjectClick(project)}
            >
              <CardHeader className="pb-3 flex-shrink-0 px-4 pt-4">
                <CardTitle className="text-lg text-white group-hover:text-blue-500 transition-colors line-clamp-2 font-semibold">
                  {project.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 flex flex-col flex-1 min-h-0 px-4 pb-4">
                <div className="w-full h-48 mb-4 bg-slate-800 rounded-lg flex items-center justify-center overflow-hidden shadow-sm border border-slate-700 hover:shadow-md transition-all duration-300 p-2 flex-shrink-0">
                  <img 
                    src={project.image} 
                    alt={`${project.name} - Project Image`}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                    onError={(e) => {
                      console.error('Failed to load project image:', project.image);
                      // Show a fallback placeholder
                      e.currentTarget.src = getImagePath("/placeholder.svg");
                      e.currentTarget.alt = "Project Image Placeholder";
                    }}
                    onLoad={() => console.log('Successfully loaded project image:', project.image)}
                  />
                </div>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed line-clamp-5 overflow-hidden text-ellipsis flex-shrink">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 flex-shrink-0 mt-auto">
                  {project.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="text-xs font-medium px-3 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;