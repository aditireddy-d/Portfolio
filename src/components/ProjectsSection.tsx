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

type Project = {
  category: string;
  name: string;
  description: string;
  metrics: { value: string; label: string }[];
  skills: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  problem: { label: string; title: string; text: string };
  system: { label: string; title: string; text: string };
  tab: "data" | "data-visualization";
};

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      category: "Data Platform",
      name: "Aethernet",
      description:
        "A hybrid data and AI platform for AetherMart e-commerce, combining MariaDB Galera clusters, MongoDB, vector search, and real-time synchronization.",
      metrics: [
        { value: "6", label: "milestones delivered" },
        { value: "Hybrid", label: "SQL + NoSQL stack" },
        { value: "Semantic", label: "product search" },
      ],
      skills: ["Python", "MariaDB", "MongoDB", "AWS", "ETL", "Vector Search", "API Development"],
      image: getImagePath("/aethernet-project.png"),
      githubUrl: "https://github.com/aditireddy-d/E-commerce-Data-Platform",
      problem: {
        label: "Problem",
        title: "What needed to change",
        text: "The e-commerce backend needed to scale beyond a single relational database while supporting semantic product discovery, real-time sync, and AI-ready retrieval without sacrificing transactional reliability.",
      },
      system: {
        label: "System",
        title: "What I built",
        text: "An end-to-end hybrid platform with MariaDB Galera clustering, MongoDB document storage, Python ETL pipelines, CDC-based sync workers, semantic search APIs, and AWS-hosted orchestration across six engineering milestones.",
      },
      tab: "data",
    },
    {
      category: "Energy Analytics",
      name: "Energy Consumption Predictor",
      description:
        "Forecasting project for South Carolina residential energy use, combining hourly usage, weather, and building metadata from 5,700+ homes to predict summer demand and guide energy-saving strategies.",
      metrics: [
        { value: "5,700+", label: "homes analyzed" },
        { value: "75–85%", label: "forecast accuracy" },
        { value: "Shiny", label: "live dashboard" },
      ],
      skills: ["R", "Shiny", "ggplot2", "Time Series", "Regression", "Energy Analytics"],
      image: getImagePath("/energy-project.png"),
      githubUrl: "https://github.com/aditireddy-d/Energy-Consumption-Predictor",
      liveUrl: "https://pisin.shinyapps.io/energyPredApp/",
      problem: {
        label: "Problem",
        title: "What needed to change",
        text: "South Carolina electric utilities needed better visibility into residential summer demand patterns across thousands of homes with varying weather conditions, appliances, and building characteristics.",
      },
      system: {
        label: "System",
        title: "What I built",
        text: "A time-series linear regression model using hourly energy, weather, and house metadata, paired with an interactive Shiny dashboard for hotspot mapping, static data review, and future usage prediction.",
      },
      tab: "data-visualization",
    },
    {
      category: "Healthcare Analytics",
      name: "CMC Health",
      description:
        "Healthcare analytics dashboards in Looker exploring patient and operational metrics to support monitoring, comparison, and data-driven clinical decisions.",
      metrics: [
        { value: "Looker", label: "BI platform" },
        { value: "Clinical", label: "domain focus" },
        { value: "KPI", label: "tracking" },
      ],
      skills: ["Looker", "Healthcare Analytics", "SQL", "Data Modeling", "Dashboard Design"],
      image: getImagePath("/healthcare-looker-project.png"),
      githubUrl: "https://github.com/aditireddy-d/Health-Care-Looker-Project",
      problem: {
        label: "Problem",
        title: "What needed to change",
        text: "Healthcare stakeholders needed clearer visibility into patient and operational performance metrics without manually stitching together reports from disconnected sources.",
      },
      system: {
        label: "System",
        title: "What I built",
        text: "Looker dashboards with modeled healthcare datasets, KPI views, and interactive filters that let teams monitor trends, compare performance, and explore operational insights in one place.",
      },
      tab: "data-visualization",
    },
    {
      category: "Higher Education Analytics",
      name: "RIT Enrollment Dashboard",
      description:
        "Tableau dashboard analyzing RIT degree-seeking enrollment by country, college, term, and student type with interactive geographic and filter-driven views.",
      metrics: [
        { value: "15K+", label: "students tracked" },
        { value: "Global", label: "country view" },
        { value: "Tableau", label: "interactive maps" },
      ],
      skills: ["Tableau", "Higher Education Analytics", "Geospatial Visualization", "Dashboard Design"],
      image: getImagePath("/rit-tableau-project.png"),
      githubUrl: "https://github.com/aditireddy-d/RIT-Tableau",
      problem: {
        label: "Problem",
        title: "What needed to change",
        text: "Enrollment trends across colleges, terms, and geographies were difficult to communicate in static reports, making it harder to spot shifts in international and domestic student composition.",
      },
      system: {
        label: "System",
        title: "What I built",
        text: "A Tableau dashboard with choropleth maps, enrollment tables, and multi-filter controls for term, college, student level, and transfer status to support institutional reporting and exploration.",
      },
      tab: "data-visualization",
    },
  ];

  const dataProjects = projects.filter((project) => project.tab === "data");
  const dataVisualizationProjects = projects.filter((project) => project.tab === "data-visualization");

  const renderProjectCaseStudy = (project: Project) => (
    <article key={project.name} className="space-y-10 border-t border-[#e7e2db] pt-14 first:border-t-0 first:pt-0">
      <div>
        <p className="portfolio-label mb-3">{project.category}</p>
        <h3 className="font-serif text-3xl text-[#111827] md:text-4xl">{project.name}</h3>
      </div>

      <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <Dialog>
          <DialogTrigger asChild>
            <button
              type="button"
              className="overflow-hidden rounded-[1.25rem] border border-[#e7e2db] bg-white p-3 text-left shadow-[0_12px_40px_rgba(17,24,39,0.08)] transition hover:shadow-[0_16px_48px_rgba(17,24,39,0.12)]"
            >
              <img
                src={project.image}
                alt={project.name}
                className="h-[22rem] w-full rounded-[0.95rem] object-cover object-top"
                onError={(e) => {
                  e.currentTarget.src = getImagePath("/placeholder.svg");
                }}
              />
            </button>
          </DialogTrigger>
          <DialogContent className="max-h-[90vh] max-w-5xl overflow-y-auto border-[#e7e2db] bg-[#f7f6f3]">
            <DialogHeader>
              <p className="portfolio-label">{project.category}</p>
              <DialogTitle className="font-serif text-3xl text-[#111827]">{project.name}</DialogTitle>
            </DialogHeader>
            <img
              src={project.image}
              alt={project.name}
              className="w-full rounded-[1rem] border border-[#e7e2db] bg-white object-contain"
            />
          </DialogContent>
        </Dialog>

        <div className="space-y-6">
          <p className="max-w-xl text-sm leading-7 text-[#4b5563]">{project.description}</p>

          <div className="grid max-w-lg grid-cols-3 gap-4 border-y border-[#e7e2db] py-5">
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

          <div className="flex flex-wrap items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-button-primary"
              >
                GitHub
              </a>
            )}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-button-secondary"
              >
                Live viewer
              </a>
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <button type="button" className="portfolio-button-secondary">
                    Case details
                  </button>
                </DialogTrigger>
                <DialogContent className="max-h-[90vh] max-w-5xl overflow-y-auto border-[#e7e2db] bg-[#f7f6f3]">
                  <DialogHeader>
                    <p className="portfolio-label">{project.category}</p>
                    <DialogTitle className="font-serif text-3xl text-[#111827]">{project.name}</DialogTitle>
                  </DialogHeader>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full rounded-[1rem] border border-[#e7e2db] bg-white object-contain"
                  />
                </DialogContent>
              </Dialog>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-[#111827] hover:underline"
              >
                Repository
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="grid gap-10 border-t border-[#e7e2db] pt-10 md:grid-cols-2">
        <div>
          <p className="portfolio-label mb-3">{project.problem.label}</p>
          <h4 className="font-serif text-2xl text-[#111827]">{project.problem.title}</h4>
          <p className="mt-4 text-sm leading-7 text-[#4b5563]">{project.problem.text}</p>
        </div>
        <div>
          <p className="portfolio-label mb-3">{project.system.label}</p>
          <h4 className="font-serif text-2xl text-[#111827]">{project.system.title}</h4>
          <p className="mt-4 text-sm leading-7 text-[#4b5563]">{project.system.text}</p>
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
              <h2 className="portfolio-title max-w-3xl">Selected data and visualization work.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#5b6472]">
              Case-study style project writeups spanning hybrid data platforms, healthcare analytics, streaming
              dashboards, and institutional reporting.
            </p>
          </div>
        </div>

        <Tabs defaultValue="data" className="w-full">
          <TabsList className="mb-12 flex h-auto w-fit gap-2 rounded-full border border-[#e7e2db] bg-[#f7f6f3] p-1">
            <TabsTrigger
              value="data"
              className="rounded-full px-5 py-2 text-sm text-[#5b6472] data-[state=active]:bg-[#111827] data-[state=active]:text-white"
            >
              Data Projects
            </TabsTrigger>
            <TabsTrigger
              value="data-visualization"
              className="rounded-full px-5 py-2 text-sm text-[#5b6472] data-[state=active]:bg-[#111827] data-[state=active]:text-white"
            >
              Data Visualization Projects
            </TabsTrigger>
          </TabsList>

          <TabsContent value="data">{renderProjectList(dataProjects)}</TabsContent>
          <TabsContent value="data-visualization">{renderProjectList(dataVisualizationProjects)}</TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
