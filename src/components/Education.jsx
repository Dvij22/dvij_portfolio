import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const education = [
    {
      institution: "University of Northern British Columbia (UNBC), Canada",
      degree: "Bachelor of Science",
      field: "Computer Science",
      period: "Sep 2023 – May 2027 (Expected)",
      gpa: "GPA: 3.97 / 4.4"
    },
        {
      institution: "Nirman High School, India",
      degree: "Secondary High School",
      field: "Science",
      period: "2020-2023"
    },
    
  ];

 const experience = [
    {
      role: "Jr. Software Developer",
      org: "Aeyesafe — Remote (U.S.)",
      period: "July 2026 – Present",
      bullets: [
        "Developed data pipelines for sensor-driven systems, processing and integrating real-time sensor data to support reliable monitoring and decision-making across the platform.",
        "Built backend workflows for real-time sensor ingestion and alerting, improving system reliability, performance, and observability.",
        "Debugged production issues to strengthen monitoring at scale."
      ]
    },
    {
      role: "Student Research Assistant",
      org: "Business Intelligence Research Group (BIRG) — UNBC",
      period: "Nov 2024 – Present",
      bullets: [
        "Own three production platforms end to end — Accessible UNBC, Biobank, and DCGA — as the full-stack and Flutter engineer.",
        "Architected cross-platform Flutter apps with offline-first workflows, media capture pipelines, wearable (BLE/health sensor) integration, and secure data sync.",
        "Engineered production-grade .NET 6/7 REST APIs using clean architecture, domain-driven design, JWT authentication, and async data pipelines.",
        "Built scalable Angular dashboards with advanced filtering, analytics views, and role-based access control.",
        "Designed and optimized SQL Server schemas for large scientific datasets using indexing strategies (B-tree data structures), stored procedures, and data integrity enforcement.",
        "Manage AWS serverless infrastructure (API Gateway, Lambda, S3, RDS, CloudWatch) with GitLab CI/CD pipelines for continuous deployment and observability, and provide third-level production support and technical documentation across all platforms.",
        "Integrated an LLM-based agentic module into the DCGA platform to automate clinical care plan generation, designing a structured tool-use pipeline with schema-validated outputs, fallback handling, and a human-review flag for low-confidence generations."
      ]
    },
    {
      role: "Flutter Developer Intern",
      org: "Bright Infonet — Remote (India)",
      period: "May 2023 – Aug 2023",
      bullets: [
        "Developed the cross-platform mobile application BoutiqFly using Flutter and GetX for Android, iOS, web, and desktop.",
        "Implemented responsive UI systems and state management for multi-platform consistency.",
        "Integrated Firebase Authentication, Realtime Database, and Cloud Storage with secure access controls.",
        "Contributed to Google Play Store deployment, debugging production crashes, and ensuring stable releases."
      ]
    }
  ];

  const publications = [
    {
      title: "Wearable-Sensors-Enabled Real-Time Decision Support in Geriatrics",
      authors: "W. Haque, S. Freeman, H. Fournier, V. Gami, D. Pandya",
      venue: "Gerontechnology, 25(s), 1-1",
      year: "2026",
      doi: "https://doi.org/10.4017/gt.2026.25.2.1354.3",
      details: [
        "ISG – International Society of Gerontechnology, Conference Abstract"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

   return (
    <section id="education" className="section-padding bg-primary">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h4 className="font-mono text-sm text-muted mb-2">BACKGROUND</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Experience</h2>
          <div className="w-16 h-[2px] bg-light opacity-50"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Education */}
          <motion.div
            className="md:col-span-1"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-xl font-medium mb-6 flex items-center">
              <div className="w-4 h-4 border border-light mr-3"></div>
              Education
            </h3>

            {education.map((edu, i) => (
              <motion.div
                key={i}
                className="border-l-2 border-muted border-opacity-30 pl-6 relative"
                variants={itemVariants}
              >
                <div className="absolute w-3 h-3 bg-primary border border-light rounded-full -left-[7px] top-1"></div>
                <h4 className="text-lg font-medium mb-1">{edu.institution}</h4>
                <p className="text-muted mb-1">{edu.degree} – {edu.field}</p>
                {edu.gpa && <p className="text-muted mb-1">{edu.gpa}</p>}
                <p className="text-sm font-mono text-light opacity-70">{edu.period}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience */}
          <motion.div
            className="md:col-span-2"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-xl font-medium mb-6 flex items-center">
              <div className="w-4 h-4 border border-light mr-3"></div>
              Experience
            </h3>

            <div className="space-y-8">
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  className="p-5 border border-muted border-opacity-20 bg-secondary bg-opacity-20"
                  variants={itemVariants}
                >
                  <h4 className="text-lg font-medium">{exp.role}</h4>
                  <p className="text-sm text-muted mb-1">{exp.org}</p>
                  <p className="text-xs font-mono text-light opacity-70 mb-4">{exp.period}</p>

                  <ul className="space-y-2">
                    {exp.bullets.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <span className="text-light opacity-60 mt-1">→</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Publications */}
        <motion.div
          className="mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="text-xl font-medium mb-6 flex items-center">
            <div className="w-4 h-4 border border-light mr-3"></div>
            Publications
          </h3>

          <div className="space-y-8">
            {publications.map((pub, i) => (
              <motion.div
                key={i}
                className="p-5 border border-muted border-opacity-20 bg-secondary bg-opacity-20"
                variants={itemVariants}
              >
                <h4 className="text-lg font-medium">{pub.title}</h4>
                <p className="text-sm text-muted mb-1">{pub.authors}</p>
                <p className="text-xs font-mono text-light opacity-70 mb-4">{pub.venue} · {pub.year}</p>

                <ul className="space-y-2">
                  {pub.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <span className="text-light opacity-60 mt-1">→</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {pub.doi && (
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 font-mono text-xs text-muted hover:text-light transition-colors"
                  >
                    DOI →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;