import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      name: "Portfolio Allocation Model",
      description: "Developed a data-driven investment strategy comparing Buy & Hold, Momentum Trading, and the S&P 500 benchmark across 9 diversified stocks from consumer, tech, and industrial sectors. Simulated 5-year stock returns using Monte Carlo analysis and applied Mean-Variance Optimization with Pyomo to identify the optimal allocation under risk constraints.",
      skills: ["Python", "Pandas", "Financial Modeling", "Risk Management", "Matplotlib", "Monte Carlo"],
      image: "/stocks-project.png",
      githubUrl: "https://github.com/aditireddy-d/Investing_Stocks_Strategy"
    },
    {
      name: "Energy Consumption Forecasting",
      description: "Analyzed energy use in 5,700+ South Carolina homes to predict summer demand spikes. Built time-series linear regression models using hourly energy usage, weather data, and building metadata. Created an interactive Shiny dashboard to guide energy-saving strategies and prevent blackouts with 75-85% accuracy.",
      skills: ["R", "Shiny", "ggplot2", "Time Series", "Regression", "Energy Analytics"],
      image: "/energy-project.png",
      githubUrl: "https://github.com/aditireddy-d/Energy-Consumption-Predictor"
    },
    {
      name: "COVID-19 Data Exploration",
      description: "Performed comprehensive data cleaning using advanced Excel techniques, followed by exploratory data analysis using SQL queries. Showcased COVID-19 trends and vaccination impact in Tableau using multiple visualizations including bar charts and interactive maps.",
      skills: ["SQL", "Tableau", "Excel", "Data Cleaning", "Data Visualization"],
      image: "/covid-project.png",
      githubUrl: "https://github.com/aditireddy-d/Covid-19-Data-Exploration"
    },
    {
      name: "Diabetes Disease Prediction",
      description: "Trained 7 machine learning classifiers in Python (Logistic Regression, SVM, Gradient Boosting, XGBoost, Decision Tree, KNN, Random Forest) to predict diabetes based on patient health metrics. Applied one-hot encoding and MinMax normalization for data cleaning and split data into 75/25 train-test. Found Gradient Boosting most effective with 91.45% prediction accuracy and root mean squared error (RMSE) of 0.39.",
      skills: ["Python", "Machine Learning", "Scikit-learn", "XGBoost", "Gradient Boosting", "Data Preprocessing"],
      image: "/diabetes-project.png",
      githubUrl: "https://github.com/aditireddy-d/Diabetes-Prediction-Python-Machine-Learning"
    },
    {
      name: "Credibility Detection of Health Web Blogs Using Explainable AI",
      description: "Developed a comprehensive system to detect credibility of health web blogs using machine learning models, PageRank algorithm, and explainable AI techniques. Implemented web scraping, author analysis, customer ratings classification, and SHAP values for transparency. Utilized multiple regression models and classification algorithms to assess website features, author credibility, and content quality.",
      skills: ["Machine Learning", "Explainable AI", "Web Scraping", "PageRank", "SHAP", "NLP", "Healthcare Analytics"],
      image: "/health-credibility-project.png",
      githubUrl: "https://github.com/aditireddy-d/Credibility-Detection-of-Health-Web-Blogs-Using-Explainable-AI"
    },
    {
      name: "Instacart Sales Forecasting & Recommendation System",
      description: "Built a comprehensive recommendation system using XGBoost for reorder prediction and K-Nearest Neighbors for collaborative filtering. Implemented customer segmentation and personalized recommendations based on spending patterns, achieving high precision and recall metrics.",
      skills: ["Python", "XGBoost", "K-Nearest Neighbors", "Customer Segmentation", "Machine Learning"],
      image: "/project.png",
      githubUrl: "https://github.com/aditireddy-d/Instacart_Sales-Forecasting_Recommendation-System"
    },
    {
      name: "Cloud-Native ETL Pipeline for YouTube Analytics",
      description: "Built a cloud-native ETL pipeline using AWS and PySpark to analyze YouTube trends across countries, cleaning and converting 170K+ semi-structured records to partitioned Parquet format in Amazon S3. Developed 3+ AWS Glue jobs and Lambda triggers for region based ingestion, schema mapping and data partitioning by country. Queried datasets in Athena and visualized regional category trends to enable content performance insights using SQL.",
      skills: ["AWS", "PySpark", "ETL", "Data Engineering", "Amazon S3", "AWS Glue", "Athena"],
      image: "/youtube-etl-project.png",
      githubUrl: "https://github.com/aditireddy-d/CloudDataEngineering-Youtube-Analysis-Project"
    },
    {
      name: "Strategic Insights using PowerBI",
      description: "Drove strategies for Mitron Bank's new credit card launch by developing 4 Power BI dashboards focused on income analysis, expenditure trends and customer segmentation by demographics. Developed 3 Power BI dashboards on income analysis, expenditure trends, and customer segmentation by demographics. Designed a web like interface with button based navigation and statistical visuals to support effective decision making.",
      skills: ["Power BI", "Data Visualization", "Business Intelligence", "Customer Segmentation", "Financial Analytics", "Dashboard Design"],
      image: "/powerbi-project.png",
      githubUrl: "https://github.com/aditireddy-d/Strategic-Insights-for-Mitron-Bank-New-Credit-Line"
    },
    {
      name: "Emotion-Driven Chord Generation Using Lyrics",
      description: "Generated emotion driven chord progressions using a fine tuned GPT-2 model by developing an AI system that classifies song lyrics by genre with BERT and detects emotion using VADER. Engineered an end-to-end pipeline integrating Hugging Face Transformers, Scikit-learn and pretty_midi to convert lyrics into audio ready chord sequences. Achieved 8/10 evaluation score from Falcon-7B.",
      skills: ["GPT-2", "BERT", "NLP", "Machine Learning", "Hugging Face", "VADER", "Music Generation"],
      image: "/music-ai-project.png",
      githubUrl: "https://github.com/aditireddy-d/Emotion-Based-Chord-Generation-Using-Song-Lyrics"
    },
    {
      name: "Cooking Recipe Recommendation System with ETL Pipeline",
      description: "Built a comprehensive recipe recommendation system using web-scraped data from Jamie Oliver's website. Developed similarity scoring algorithms to rank recipes based on available ingredients and user preferences. Implemented end-to-end ETL pipeline with Apache Airflow, FastAPI, Streamlit UI, JWT authentication, and cloud deployment on GCP. Features include recipe caching, email notifications, data validation, and BigQuery visualizations.",
      skills: ["ETL", "Apache Airflow", "FastAPI", "Streamlit", "GCP", "Web Scraping", "Machine Learning", "BigQuery"],
      image: "/cooking-etl-project.png",
      githubUrl: "https://github.com/aditireddy-d/Cooking-ETL"
    },

  ];

  const skillColors = [
    "bg-blue-200 text-blue-800",
    "bg-green-200 text-green-800", 
    "bg-purple-200 text-purple-800",
    "bg-pink-200 text-pink-800",
    "bg-indigo-200 text-indigo-800",
    "bg-teal-200 text-teal-800",
    "bg-orange-200 text-orange-800",
    "bg-red-200 text-red-800",
    "bg-yellow-200 text-yellow-800",
    "bg-cyan-200 text-cyan-800"
  ];

  const handleProjectClick = (project: any) => {
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank');
    }
  };

  return (
    <section id="projects" className="py-20 bg-blue-500 relative overflow-hidden">
      {/* Bubble Effects */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-yellow-300 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-300 rounded-full opacity-25 animate-ping"></div>
      <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-purple-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-green-300 rounded-full opacity-30 animate-bounce"></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-pink-300 mb-4">Projects</h2>
          
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-2xl hover:shadow-yellow-200/50 transition-all duration-500 group bg-yellow-50 border-2 border-yellow-200 hover:border-yellow-300 h-[40rem] ${project.githubUrl ? 'cursor-pointer' : ''} hover:scale-105 hover:bg-yellow-100/80 backdrop-blur-sm`}
              onClick={() => handleProjectClick(project)}
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-gray-800 group-hover:text-yellow-700 transition-colors line-clamp-2 font-semibold">
                  {project.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="w-full h-40 mb-4 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-lg border border-yellow-200 hover:shadow-xl transition-all duration-300 group-hover:shadow-yellow-200/30">
                  {project.name === "Diabetes Disease Prediction" ? (
                    <img 
                      src="/diabetes-project.png" 
                      alt="Diabetes Disease Prediction - Machine Learning"
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  ) : project.name === "Credibility Detection of Health Web Blogs Using Explainable AI" ? (
                    <img 
                      src="/health-credibility-project.png" 
                      alt="Credibility Detection of Health Web Blogs Using Explainable AI - Healthcare Analytics"
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  ) : project.name === "Portfolio Allocation Model" ? (
                    <img 
                      src="/stocks-project.png" 
                      alt="Portfolio Allocation Model - Stock Analysis"
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  ) : project.name === "Energy Consumption Forecasting" ? (
                    <img 
                      src="/energy-project.png" 
                      alt="Energy Consumption Forecasting - Energy Analysis"
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  ) : project.name === "COVID-19 Data Exploration" ? (
                    <img 
                      src="/covid-project.png" 
                      alt="COVID-19 Data Exploration - Data Analysis"
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  ) : project.name === "Instacart Sales Forecasting & Recommendation System" ? (
                    <img 
                      src="/instacart-project.png" 
                      alt="Instacart Sales Forecasting & Recommendation System - Machine Learning"
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  ) : project.name === "Cloud-Native ETL Pipeline for YouTube Analytics" ? (
                    <img 
                      src="/youtube-etl-project.png" 
                      alt="Cloud-Native ETL Pipeline for YouTube Analytics - Data Engineering"
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  ) : project.name === "Strategic Insights using PowerBI" ? (
                    <img 
                      src="/powerbi-project.png" 
                      alt="Strategic Insights using PowerBI - Business Intelligence"
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  ) : project.name === "Emotion-Driven Chord Generation Using Lyrics" ? (
                    <img 
                      src="/music-ai-project.png" 
                      alt="Emotion-Driven Chord Generation Using Lyrics - AI Music Generation"
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  ) : project.name === "Cooking Recipe Recommendation System with ETL Pipeline" ? (
                    <img 
                      src="/cooking-etl-project.png" 
                      alt="Cooking Recipe Recommendation System with ETL Pipeline - Data Engineering"
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <span className="text-gray-500 text-sm">Project Image</span>
                  )}
                </div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-none h-auto overflow-hidden min-h-[8rem]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 min-h-[3rem]">
                  {project.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className={`text-xs font-medium px-3 py-1 rounded-md border transition-all duration-300 hover:scale-110 hover:shadow-md ${skillColors[skillIndex % skillColors.length]}`}
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