import { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Accessible UNBC – Cross-Platform Data Collection System",
      focus: "Accessibility · Field Data · Analytics",
      description:
        "Designed and built a production-ready cross-platform Flutter application for accessibility field data collection at UNBC. Integrated secure .NET REST APIs with validated ingestion pipelines and developed an Angular-based analytics dashboard for infrastructure planning. Designed and optimized a scalable SQL Server schema and deployed the full-stack system on AWS serverless infrastructure to support informed campus accessibility decisions.",
      tech: ["Flutter", ".NET", "Angular", "SQL Server", "AWS"],
      image: "/images/fitbill-preview.png",
      highlights: [
        "Production-grade Flutter application",
        "Secure data ingestion and validation pipelines",
        "Analytics dashboard for accessibility planning",
        "Deployed on AWS serverless infrastructure",
      ],
    },

    {
      title: "Biobank – Mobile Animal Collection Platform",
      description:
        "Built a cross-platform Flutter application for wildlife specimen and tissue sample collection with offline caching support. Developed scalable .NET APIs optimized for media-heavy uploads and implemented an Angular research dashboard featuring taxonomy management and geospatial mapping. Designed optimized SQL Server schemas and deployed the system on AWS using S3, RDS, and API Gateway to streamline wildlife research workflows across British Columbia.",
      tech: ["Flutter", ".NET 7", "Angular", "SQL Server", "AWS", "S3"],
      focus: "Wildlife · Offline Mobile · Geospatial",
      image: "/images/biobank-preview.png",
      highlights: [
        "Offline-first mobile data collection",
        "Optimized APIs for large media uploads",
        "Geospatial mapping and taxonomy management",
        "Supports province-wide wildlife research",
      ],
    },

    {
      title: "DCGA – Digital Care and Geriatric Assessment Platform",
      description:
        "Developed a clinical-grade Flutter application for geriatric assessments with wearable device integration. Built secure .NET APIs featuring encrypted data pipelines and JWT-based authorization. Designed an Angular clinician portal for vital monitoring and dashboards, implemented a robust SQL Server schema for time-series patient data, and integrated an internal LLM to auto-generate personalized care plans for clinicians.",
      tech: ["Flutter", ".NET", "Angular", "SQL Server", "JWT", "LLM"],
      image: "/images/dcga-preview.png",
      focus: "Healthcare · Wearables · LLM",
      highlights: [
        "Wearable-integrated clinical assessments",
        "Encrypted healthcare data pipelines",
        "Time-series patient data modeling",
        "LLM-powered automated care plans",
      ],
    },

    {
      title: "TravelMate – Intelligent Travel Planner",
      description:
        "Built a full-stack intelligent travel planning platform focused on optimized itinerary generation and route planning. Developed an Angular frontend with interactive map visualizations and implemented Node.js APIs backed by SQL database models. The system streamlined trip planning by generating efficient schedules and travel routes tailored to user preferences.",
      tech: ["Angular", "Node.js", "SQL", "Maps API"],
      focus: "Travel · Optimization · Maps",
      image: "/images/travelmate-preview.png",
      highlights: [
        "Optimized itinerary and route generation",
        "Interactive map-based UI",
        "Efficient backend scheduling logic",
        "Improved end-to-end travel planning experience",
      ],
    },

    {
      title: "MealPlanner - Personalized Nutrition Recommendation System",
      description:
        "Developed a Flutter-based mobile application with an Angular admin dashboard to deliver personalized nutrition recommendations. Built a recommendation engine leveraging BMI, dietary goals, and wearable health data. Implemented .NET APIs with SQL Server analytics workflows and integrated smartwatch and health sensor pipelines to dynamically update nutrition plans, improving user health outcomes and diet adherence.",
      tech: ["Flutter", ".NET", "Angular", "SQL Server", "Wearables"],
      image: "/images/mealplanner-preview.png",
      focus: "Health · Personalization · Sensors",
      highlights: [
        "Personalized nutrition recommendations",
        "Wearable and health sensor integration",
        "Dynamic plan updates based on user data",
        "Analytics-driven health insights",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="section-padding bg-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <h4 className="font-mono text-sm text-muted mb-2">PORTFOLIO</h4>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-[2px] bg-light opacity-50"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
          {/* Project selector - mobile version */}
          <motion.div
            className="md:hidden w-full mb-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-muted">SELECT PROJECT</p>
              <div className="text-xs text-muted">
                {activeProject + 1}/{projects.length}
              </div>
            </div>
            <div className="flex overflow-x-auto pb-3 scrollbar-hide snap-x snap-mandatory">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`snap-start flex-shrink-0 w-[75%] mr-3 p-4 cursor-pointer transition-all duration-300 ${
                    activeProject === index
                      ? "bg-secondary bg-opacity-50 border border-light border-opacity-20"
                      : "bg-secondary bg-opacity-10 border border-muted border-opacity-10"
                  }`}
                  onClick={() => setActiveProject(index)}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3
                    className={`font-medium text-sm mb-1 ${
                      activeProject === index ? "text-light" : "text-muted"
                    }`}
                  >
                    {project.title.split(" - ")[0]}
                  </h3>
                  <p className="text-xs text-muted line-clamp-1">
                    {project.focus}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Project selector - desktop version */}
          <motion.div
            className="hidden md:block md:col-span-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`border-l border-muted ${
                  activeProject === index
                    ? "border-opacity-100"
                    : "border-opacity-20"
                } p-4 cursor-pointer transition-all duration-300 ${
                  activeProject === index ? "bg-secondary bg-opacity-30" : ""
                }`}
                onClick={() => setActiveProject(index)}
                whileHover={{
                  backgroundColor: "rgba(26, 26, 26, 0.3)",
                  transition: { duration: 0.2 },
                }}
              >
                <h3
                  className={`font-medium text-sm mb-1 ${
                    activeProject === index ? "text-light" : "text-muted"
                  }`}
                >
                  {project.title.split(" - ")[0]}
                </h3>
                <p className="text-xs text-muted line-clamp-1">
                  {project.focus}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Project details */}
          <motion.div
            className="col-span-1 md:col-span-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={activeProject}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="bg-secondary bg-opacity-20 p-4 md:p-6 border border-muted border-opacity-10"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                {projects[activeProject].title}
              </h3>
              <p className="text-sm md:text-base text-muted mb-4 md:mb-6 leading-relaxed">
                {projects[activeProject].description}
              </p>

              <div className="mb-4 md:mb-6">
                <h4 className="text-xs md:text-sm font-mono text-light mb-2 md:mb-3">
                  KEY HIGHLIGHTS
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {projects[activeProject].highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-light opacity-50 mt-1">→</span>
                      <span className="text-xs md:text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs md:text-sm font-mono text-light mb-2 md:mb-3">
                  TECHNOLOGIES
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs py-1 px-2 md:px-3 bg-primary border border-muted border-opacity-20 rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {projects[activeProject].liveLink && (
                <div className="mt-6 md:mt-8 flex justify-center md:justify-end">
                  <a
                    href={projects[activeProject].liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs inline-flex items-center px-5 py-2 md:px-6 md:py-2 border border-light hover:bg-light hover:bg-opacity-5 transition-all duration-300 group"
                  >
                    VIEW PROJECT
                    <svg
                      className="ml-2 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
