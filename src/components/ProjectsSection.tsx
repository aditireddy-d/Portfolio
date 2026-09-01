import { ArrowUpRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getImagePath } from "@/utils/imagePath";

type Project = {
  number: string;
  category: string;
  name: string;
  description: string;
  metrics: { value: string; label: string }[];
  skills: string[];
  image: string;
  projectUrl: string;
  tab: "data" | "data-visualization";
};

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      number: "01",
      category: "Data Platform",
      name: "E-commerce Data Platform",
      description:
        "A unified hybrid data and AI platform for AetherMart e-commerce, combining MariaDB Galera clusters, MongoDB, vector search, semantic retrieval, and real-time synchronization.",
      metrics: [
        { value: "6", label: "milestones" },
        { value: "Hybrid", label: "SQL + NoSQL stack" },
        { value: "Semantic", label: "product search" },
      ],
      skills: ["Python", "MariaDB", "MongoDB", "AWS", "ETL", "Semantic Search", "Vector Database"],
      image: getImagePath("/ecommerce-data-platform.png"),
      projectUrl: "https://github.com/aditireddy-d/E-commerce-Data-Platform",
      tab: "data",
    },
    {
      number: "01",
      category: "Data Visualization",
      name: "Data Visualization Portfolio",
      description:
        "Documented and presented data visualization work including dashboard design, analytical storytelling, and business insights delivered through interactive visual reports.",
      metrics: [
        { value: "Multi", label: "dashboard formats" },
        { value: "Story", label: "driven insights" },
        { value: "Business", label: "focused reporting" },
      ],
      skills: ["Data Visualization", "Dashboard Design", "Business Intelligence", "Analytics"],
      image: getImagePath("/data-visualization-portfolio.png"),
      projectUrl:
        "https://docs.google.com/document/d/1-ODEmgAwkIoBTmb37COSZYVaAH4D8Y1gR-4RMj9KvhY/edit?tab=t.0#heading=h.9z5k0xnfvw8b",
      tab: "data-visualization",
    },
    {
      number: "02",
      category: "Healthcare Analytics",
      name: "Health Care Looker Project",
      description:
        "Healthcare analytics dashboards in Looker to explore patient and operational metrics, enabling stakeholders to monitor trends and support data-driven decision making.",
      metrics: [
        { value: "Looker", label: "dashboards" },
        { value: "Healthcare", label: "domain focus" },
        { value: "KPI", label: "monitoring" },
      ],
      skills: ["Looker", "Healthcare Analytics", "SQL", "Data Modeling", "Dashboard Design"],
      image: getImagePath("/healthcare-looker-project.png"),
      projectUrl: "https://github.com/aditireddy-d/Health-Care-Looker-Project",
      tab: "data-visualization",
    },
    {
      number: "03",
      category: "Higher Education Analytics",
      name: "RIT Tableau Dashboard",
      description:
        "Interactive Tableau dashboard analyzing RIT enrollment, admissions, diversity, and academic program trends to communicate institutional insights.",
      metrics: [
        { value: "5+", label: "datasets" },
        { value: "Tableau", label: "dashboards" },
        { value: "Enrollment", label: "trend analysis" },
      ],
      skills: ["Tableau", "Data Visualization", "Higher Education Analytics", "Data Analysis"],
      image: getImagePath("/rit-tableau-project.png"),
      projectUrl: "https://github.com/aditireddy-d/RIT-Tableau",
      tab: "data-visualization",
    },
  ];

  const dataProjects = projects.filter((project) => project.tab === "data");
  const dataVisualizationProjects = projects.filter((project) => project.tab === "data-visualization");

  const renderProjectList = (projectList: Project[]) => (
    <div className="space-y-16">
      {projectList.map((project, index) => {
        const imageFirst = index % 2 === 0;

        return (
          <article
            key={project.name}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
          >
            <div className={`${imageFirst ? "lg:order-1" : "lg:order-2"}`}>
              <div className="overflow-hidden rounded-[1.5rem] border border-[#e7e2db] bg-white p-3 shadow-[0_12px_40px_rgba(17,24,39,0.08)]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-[22rem] w-full rounded-[1.1rem] object-cover"
                  onError={(e) => {
                    e.currentTarget.src = getImagePath("/placeholder.svg");
                  }}
                />
              </div>
            </div>

            <div className={`space-y-6 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}>
              <p className="portfolio-label">
                {project.number} {project.category}
              </p>
              <h3 className="font-serif text-3xl leading-tight text-[#111827] md:text-4xl">{project.name}</h3>
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
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-button-primary"
                >
                  View project
                </a>
                {project.projectUrl.includes("github.com") && (
                  <a
                    href={project.projectUrl}
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
          </article>
        );
      })}
    </div>
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
              Data engineering platforms, healthcare dashboards, and analytics projects spanning SQL, cloud pipelines,
              and BI tools.
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
