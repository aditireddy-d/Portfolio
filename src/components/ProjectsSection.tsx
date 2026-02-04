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
      name: "AutoConvo: Real-Time Driver Intent Detection",
      description: "AutoConvo is a real-time speech-to-intent understanding pipeline designed for in-car assistance. It fuses OpenAI Whisper (ASR) for speech recognition with DistilBERT for natural language intent detection, optimized for NVIDIA Jetson Nano edge deployment using TensorRT. The system transcribes driver voice commands, classifies them into 7+ intent categories (navigate, play music, call contact, etc.), and maintains conversation context. Achieved 91.7% accuracy with TensorRT optimization reducing inference latency to ~385ms, enabling real-time edge operation. Built with Python, PyTorch, Transformers, ONNX Runtime, and TensorRT.",
      skills: ["Python", "PyTorch", "NLP", "Whisper", "DistilBERT", "TensorRT", "Edge Computing", "Real-time Systems"],
      image: getImagePath("/autoconvo-car.png"),
      githubUrl: "https://github.com/aditireddy-d/AutoConvo-Real-Time-Driver-Intent-Detection"
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
    {
      name: "Diabetes Disease Prediction",
      description: "Trained 7 machine learning classifiers in Python (Logistic Regression, SVM, Gradient Boosting, XGBoost, Decision Tree, KNN, Random Forest) to predict diabetes based on patient health metrics. Applied one-hot encoding and MinMax normalization for data cleaning and split data into 75/25 train-test. Found Gradient Boosting most effective with 91.45% prediction accuracy and root mean squared error (RMSE) of 0.39.",
      skills: ["Python", "Machine Learning", "Scikit-learn", "XGBoost", "Gradient Boosting", "Data Preprocessing"],
      image: getImagePath("/diabetes-project.png"),
      githubUrl: "https://github.com/aditireddy-d/Diabetes-Prediction-Python-Machine-Learning"
    },
    {
      name: "Instacart Sales Forecasting & Recommendation System",
      description: "Built a comprehensive recommendation system using XGBoost for reorder prediction and K-Nearest Neighbors for collaborative filtering. Implemented customer segmentation and personalized recommendations based on spending patterns, achieving high precision and recall metrics.",
      skills: ["Python", "XGBoost", "K-Nearest Neighbors", "Customer Segmentation", "Machine Learning"],
      image: getImagePath("/project.png"),
      githubUrl: "https://github.com/aditireddy-d/Instacart_Sales-Forecasting_Recommendation-System"
    },
    {
      name: "Cloud-Native ETL Pipeline for YouTube Analytics",
      description: "Built a cloud-native ETL pipeline using AWS and PySpark to analyze YouTube trends across countries, cleaning and converting 170K+ semi-structured records to partitioned Parquet format in Amazon S3. Developed 3+ AWS Glue jobs and Lambda triggers for region based ingestion, schema mapping and data partitioning by country. Queried datasets in Athena and visualized regional category trends to enable content performance insights using SQL.",
      skills: ["AWS", "PySpark", "ETL", "Data Engineering", "Amazon S3", "AWS Glue", "Athena"],
      image: getImagePath("/youtube-etl-project.png"),
      githubUrl: "https://github.com/aditireddy-d/CloudDataEngineering-Youtube-Analysis-Project"
    },
    {
      name: "Strategic Insights using PowerBI",
      description: "Drove strategies for Mitron Bank's new credit card launch by developing 4 Power BI dashboards focused on income analysis, expenditure trends and customer segmentation by demographics. Developed 3 Power BI dashboards on income analysis, expenditure trends, and customer segmentation by demographics. Designed a web like interface with button based navigation and statistical visuals to support effective decision making.",
      skills: ["Power BI", "Data Visualization", "Business Intelligence", "Customer Segmentation", "Financial Analytics", "Dashboard Design"],
      image: getImagePath("/powerbi-project.png"),
      githubUrl: "https://github.com/aditireddy-d/Strategic-Insights-for-Mitron-Bank-New-Credit-Line"
    },
    {
      name: "Cooking Recipe Recommendation System with ETL Pipeline",
      description: "Built a comprehensive recipe recommendation system using web-scraped data from Jamie Oliver's website. Developed similarity scoring algorithms to rank recipes based on available ingredients and user preferences. Implemented end-to-end ETL pipeline with Apache Airflow, FastAPI, Streamlit UI, JWT authentication, and cloud deployment on GCP. Features include recipe caching, email notifications, data validation, and BigQuery visualizations.",
      skills: ["ETL", "Apache Airflow", "FastAPI", "Streamlit", "GCP", "Web Scraping", "Machine Learning", "BigQuery"],
      image: getImagePath("/cooking-etl-project.png"),
      githubUrl: "https://github.com/aditireddy-d/Cooking-ETL"
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