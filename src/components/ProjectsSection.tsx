import { ArrowUpRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getImagePath } from "@/utils/imagePath";

type ProjectTab = "ai-ml" | "data-engineering" | "data-analysis";

type Project = {
  number: string;
  category: string;
  name: string;
  description: string;
  metrics: { value: string; label: string }[];
  skills: string[];
  image: string;
  imageClassName?: string;
  githubUrl?: string;
  liveUrl?: string;
  details?: string[];
  tab: ProjectTab;
};

const ProjectsSection = () => {
  const projects: Project[] = [
    // AI/ML — Fashion, Workout-Wise, Weld, RAN
    {
      number: "01",
      category: "Semantic search",
      name: "Fashion Finder",
      description:
        "CLIP-powered fashion search that maps text queries to product images using FAISS vector indexing and smart filters.",
      metrics: [
        { value: "CLIP", label: "embeddings" },
        { value: "FAISS", label: "vector search" },
        { value: "Multi-model", label: "comparison" },
      ],
      skills: ["CLIP", "FAISS", "Python", "Semantic Search"],
      image: getImagePath("/fashion-finder-project.png"),
      imageClassName: "h-[14rem] w-full rounded-[0.95rem] object-contain bg-[#eef2f6] lg:h-[16rem]",
      githubUrl: "https://github.com/aditireddy-d/Fashion-Finder/tree/main",
      details: [
        "Indexed product images with FAISS for natural language retrieval.",
        "Added query expansion, metadata filters, and side-by-side model comparison.",
      ],
      tab: "ai-ml",
    },
    {
      number: "02",
      category: "Computer vision",
      name: "Workout-Wise",
      description:
        "Real-time virtual gym trainer that detects exercise form, gives live posture feedback, and tracks workout progress.",
      metrics: [
        { value: "Real-time", label: "pose detection" },
        { value: "Live", label: "form feedback" },
        { value: "Full-stack", label: "React + Flask" },
      ],
      skills: ["React", "Flask", "MediaPipe", "OpenCV", "Computer Vision"],
      image: getImagePath("/workout-wise-project.png"),
      githubUrl: "https://github.com/aditireddy-d/Workout-Wise",
      details: [
        "Built a React and Flask app with MediaPipe for live posture correction during exercises.",
        "Tracked user performance over time with adaptive training rules from sample videos.",
      ],
      tab: "ai-ml",
    },
    {
      number: "03",
      category: "Object detection",
      name: "Weld Anomaly Detection",
      description:
        "YOLOv8 system that detects weld defects including cracks, porosity, and slag inclusion for faster industrial QA.",
      metrics: [
        { value: "YOLOv8", label: "detection model" },
        { value: "5+", label: "defect classes" },
        { value: "Industrial", label: "QA use case" },
      ],
      skills: ["YOLOv8", "PyTorch", "Ultralytics", "Computer Vision"],
      image: getImagePath("/weld-anomaly-detection-project.png"),
      githubUrl: "https://github.com/aditireddy-d/Weld-Anomoly-Detection",
      details: [
        "Trained YOLOv8 to localize and classify multiple weld anomaly types.",
        "Automated visual inspection workflows for manufacturing quality assurance.",
      ],
      tab: "ai-ml",
    },
    {
      number: "04",
      category: "Attention models",
      name: "RAN Image Classification",
      description:
        "Recurrent Attention Model in PyTorch that adaptively selects image regions for efficient, interpretable classification.",
      metrics: [
        { value: "RAM", label: "architecture" },
        { value: "Glimpse", label: "multi-resolution" },
        { value: "REINFORCE", label: "attention policy" },
      ],
      skills: ["PyTorch", "Recurrent Attention", "REINFORCE", "Deep Learning"],
      image: getImagePath("/ran-image-classification-project.png"),
      githubUrl: "https://github.com/aditireddy-d/RAN--Image-Classification",
      details: [
        "Implemented glimpse sensors and an RNN core with REINFORCE-trained location networks.",
        "Visualized sequential attention paths that drove classification decisions.",
      ],
      tab: "ai-ml",
    },

    // Data Engineering — Melody, e-CommMart, SQL Server, YouTube
    {
      number: "01",
      category: "Music analytics",
      name: "Melody: Spotify Analytics Platform",
      description:
        "Streaming Spotify analytics pipeline into Snowflake with a Phi-3.5 Streamlit app and Tableau dashboards for music insights.",
      metrics: [
        { value: "Real-time", label: "Kafka pipeline" },
        { value: "Phi-3.5", label: "AI playlists" },
        { value: "Snowflake", label: "warehouse" },
      ],
      skills: ["Snowflake", "Kafka", "Airflow", "PySpark", "Streamlit", "Generative AI"],
      image: getImagePath("/music-ai-project.png"),
      githubUrl: "https://github.com/aditireddy-d/Spotify",
      liveUrl: "https://rhythmflow.streamlit.app/",
      details: [
        "Streamed Spotify data via Airflow, Kafka, and PySpark into Snowflake.",
        "Built AI playlist recommendations in Streamlit and trend dashboards in Tableau.",
      ],
      tab: "data-engineering",
    },
    {
      number: "02",
      category: "E-commerce data platform",
      name: "e-CommMart",
      description:
        "Hybrid AWS data platform with MariaDB Galera, MongoDB, CDC sync, and vector search for scalable e-commerce analytics.",
      metrics: [
        { value: "3-node", label: "Galera cluster" },
        { value: "Hybrid", label: "SQL + NoSQL" },
        { value: "CDC", label: "real-time sync" },
      ],
      skills: ["AWS", "MariaDB", "MongoDB", "Python", "ETL", "CDC", "Vector Search"],
      image: getImagePath("/aethernet-project.png"),
      githubUrl: "https://github.com/aditireddy-d/E-commerce-Data-Platform",
      details: [
        "Engineered Python/SQL ETL with CDC sync between MariaDB and MongoDB on AWS EC2.",
        "Deployed a 3-node Galera cluster with RBAC, data-quality logging, and secure access controls.",
      ],
      tab: "data-engineering",
    },
    {
      number: "03",
      category: "Cloud migration",
      name: "SQL Server to Azure Migration",
      description:
        "Migrated a 10GB on-premises SQL Server database to Azure with Data Factory, Databricks, and Synapse Analytics.",
      metrics: [
        { value: "10GB", label: "data migrated" },
        { value: "Azure", label: "cloud stack" },
        { value: "3", label: "pipeline stages" },
      ],
      skills: ["SQL", "Azure", "Data Factory", "Databricks", "Synapse"],
      image: getImagePath("/azure-data-engineering.png"),
      githubUrl: "https://github.com/aditireddy-d/Azure-Data-Engineering",
      details: [
        "Ingested on-prem data into Azure Data Lake via Data Factory.",
        "Transformed with Databricks and connected Synapse for reporting.",
      ],
      tab: "data-engineering",
    },
    {
      number: "04",
      category: "AWS ETL pipeline",
      name: "YouTube Trend Analytics",
      description:
        "End-to-end AWS ETL pipeline on S3, Lambda, Glue, and Athena to store and analyze 1M+ YouTube records.",
      metrics: [
        { value: "1M+", label: "YouTube records" },
        { value: "AWS", label: "cloud stack" },
        { value: "Athena", label: "SQL queries" },
      ],
      skills: ["Python", "AWS", "S3", "Lambda", "Glue", "Athena"],
      image: getImagePath("/youtube-etl-project.png"),
      githubUrl: "https://github.com/aditireddy-d/ETL-Youtube-Analytics",
      details: [
        "Automated extract, transform, and load workflows into analysis-ready S3 datasets.",
        "Enabled channel performance and trend exploration with Athena.",
      ],
      tab: "data-engineering",
    },

    // Data Analysis — RIT, Energy, CMC
    {
      number: "01",
      category: "Higher education analytics",
      name: "RIT Enrollment Dashboard",
      description:
        "Tableau dashboard for RIT enrollment by country, college, and term with interactive maps and filter-driven institutional reporting.",
      metrics: [
        { value: "15K+", label: "students tracked" },
        { value: "Global", label: "country view" },
        { value: "5-year", label: "trends" },
      ],
      skills: ["Tableau", "Geospatial Viz", "Higher Ed Analytics"],
      image: getImagePath("/rit-tableau-project.png"),
      githubUrl: "https://github.com/aditireddy-d/RIT-Tableau",
      details: [
        "Built choropleth maps and enrollment tables with multi-filter controls.",
        "Consolidated five years of enrollment and admissions funnel data into one view.",
      ],
      tab: "data-analysis",
    },
    {
      number: "02",
      category: "Energy forecasting",
      name: "Energy Consumption Predictor",
      description:
        "Forecasted residential summer energy demand for 5,700+ South Carolina homes and shipped an interactive Shiny dashboard for utility planning.",
      metrics: [
        { value: "5,700+", label: "homes analyzed" },
        { value: "75–85%", label: "forecast accuracy" },
        { value: "Live", label: "Shiny dashboard" },
      ],
      skills: ["R", "Shiny", "ggplot2", "Time Series", "Regression"],
      image: getImagePath("/energy-project.png"),
      githubUrl: "https://github.com/aditireddy-d/Energy-Consumption-Predictor",
      liveUrl: "https://pisin.shinyapps.io/energyPredApp/",
      details: [
        "Built a time-series linear regression model on hourly energy, weather, and house metadata.",
        "Deployed a Shiny app with hotspot mapping, data review, and future usage simulation.",
      ],
      tab: "data-analysis",
    },
    {
      number: "03",
      category: "Healthcare analytics",
      name: "CMC Health",
      description:
        "Looker dashboards for patient and operational KPIs, giving clinical teams one place to monitor trends and compare performance.",
      metrics: [
        { value: "Looker", label: "BI platform" },
        { value: "Clinical", label: "domain focus" },
        { value: "KPI", label: "tracking" },
      ],
      skills: ["Looker", "SQL", "Healthcare Analytics", "Dashboard Design"],
      image: getImagePath("/healthcare-looker-project.png"),
      githubUrl: "https://github.com/aditireddy-d/Health-Care-Looker-Project",
      details: [
        "Modeled healthcare datasets for patient volume and operational throughput.",
        "Built filtered KPI views for time period, department, and cohort comparisons.",
      ],
      tab: "data-analysis",
    },
  ];

  const aiMlProjects = projects.filter((project) => project.tab === "ai-ml");
  const dataEngineeringProjects = projects.filter((project) => project.tab === "data-engineering");
  const dataAnalysisProjects = projects.filter((project) => project.tab === "data-analysis");

  const defaultImageClass =
    "h-[20rem] w-full rounded-[0.95rem] object-cover object-top lg:h-[22rem]";

  const renderCaseStudyDialog = (project: Project) => (
    <DialogContent className="max-h-[90vh] max-w-5xl overflow-y-auto border-[#e7e2db] bg-[#f7f6f3]">
      <DialogHeader>
        <p className="portfolio-label uppercase tracking-[0.14em]">
          {project.number} · {project.category}
        </p>
        <DialogTitle className="font-serif text-3xl text-[#111827]">{project.name}</DialogTitle>
        <p className="text-sm leading-7 text-[#4b5563]">{project.description}</p>
      </DialogHeader>
      <img
        src={project.image}
        alt={project.name}
        className="w-full rounded-[1rem] border border-[#e7e2db] bg-white object-contain"
      />
      {project.details && (
        <ul className="space-y-3">
          {project.details.map((detail) => (
            <li key={detail} className="flex gap-3 text-sm leading-7 text-[#374151]">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#111827]" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}
    </DialogContent>
  );

  const renderProjectCaseStudy = (project: Project) => (
    <article key={`${project.tab}-${project.name}`} className="border-t border-[#e7e2db] pt-14 first:border-t-0 first:pt-0">
      <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <Dialog>
          <div className="relative">
            <DialogTrigger asChild>
              <button
                type="button"
                className="group w-full overflow-hidden rounded-[1.25rem] border border-[#e7e2db] bg-white p-3 text-left shadow-[0_12px_40px_rgba(17,24,39,0.08)] transition hover:shadow-[0_16px_48px_rgba(17,24,39,0.12)]"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className={project.imageClassName ?? defaultImageClass}
                  onError={(e) => {
                    e.currentTarget.src = getImagePath("/placeholder.svg");
                  }}
                />
              </button>
            </DialogTrigger>
            <DialogTrigger asChild>
              <button
                type="button"
                className="absolute bottom-6 right-6 rounded-full bg-[#111827] px-4 py-2 text-xs font-medium text-white shadow-lg transition hover:bg-[#1f2937]"
              >
                Open case study
              </button>
            </DialogTrigger>
          </div>
          {renderCaseStudyDialog(project)}
        </Dialog>

        <div className="space-y-6">
          <div>
            <p className="portfolio-label mb-3 uppercase tracking-[0.14em]">
              {project.number} · {project.category}
            </p>
            <h3 className="font-serif text-3xl text-[#111827] md:text-[2.35rem]">{project.name}</h3>
            <p className="mt-4 max-w-lg text-sm leading-7 text-[#4b5563]">{project.description}</p>
          </div>

          <div className="grid max-w-md grid-cols-3 gap-4 border-y border-[#e7e2db] py-5">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-lg font-semibold text-[#111827]">{metric.value}</p>
                <p className="mt-1 text-xs text-[#6b7280]">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <span key={skill} className="portfolio-tag">
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <Dialog>
              <DialogTrigger asChild>
                <button type="button" className="portfolio-button-primary">
                  Case details
                </button>
              </DialogTrigger>
              {renderCaseStudyDialog(project)}
            </Dialog>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-button-secondary"
              >
                Live viewer
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-[#111827] hover:underline"
              >
                GitHub
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );

  const renderProjectList = (projectList: Project[]) => (
    <div className="space-y-16">{projectList.map((project) => renderProjectCaseStudy(project))}</div>
  );

  return (
    <section id="projects" className="portfolio-section bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="portfolio-divider pb-10">
          <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="portfolio-label mb-3">02 · Projects</p>
              <h2 className="portfolio-title max-w-3xl">Selected projects.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#5b6472]">
              AI/ML, data engineering, and analytics work built for real users and real data.
            </p>
          </div>
        </div>

        <Tabs defaultValue="ai-ml" className="w-full">
          <TabsList className="mb-12 flex h-auto w-full max-w-3xl flex-wrap gap-2 rounded-full border border-[#e7e2db] bg-[#f7f6f3] p-1">
            <TabsTrigger
              value="ai-ml"
              className="rounded-full px-5 py-2 text-sm text-[#5b6472] data-[state=active]:bg-[#111827] data-[state=active]:text-white"
            >
              AI/ML
            </TabsTrigger>
            <TabsTrigger
              value="data-engineering"
              className="rounded-full px-5 py-2 text-sm text-[#5b6472] data-[state=active]:bg-[#111827] data-[state=active]:text-white"
            >
              Data Engineering
            </TabsTrigger>
            <TabsTrigger
              value="data-analysis"
              className="rounded-full px-5 py-2 text-sm text-[#5b6472] data-[state=active]:bg-[#111827] data-[state=active]:text-white"
            >
              Data Analysis
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ai-ml">{renderProjectList(aiMlProjects)}</TabsContent>
          <TabsContent value="data-engineering">{renderProjectList(dataEngineeringProjects)}</TabsContent>
          <TabsContent value="data-analysis">{renderProjectList(dataAnalysisProjects)}</TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
