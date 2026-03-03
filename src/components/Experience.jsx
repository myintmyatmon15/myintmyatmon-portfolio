import React from "react";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const sectionContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const experiences = [
  {
    role: "Front-End Developer",
    company: "Code Lab Technology",
    location: "Myanmar",
    period: "Feb 2024 – Oct 2025",
    logo: "/assets/logos/codelab.jpg",
    tags: [
      "MERNStack",
      "ReactJS",
      "NodeJS",
      "MongoDB",
      "Redux",
      "JWT",
      "TailwindCSS",
      "FullStack",
      "RESTAPI",
      "ComponentDesign",
    ],
    points: [
      "Developed responsive web applications using React and TypeScript,prioritizing clean and modular code.",
      "Collaborated with UI/UX designers to implement pixel-perfect layouts using Tailwind CSS. ",
      "Created 10+ reusable UI components, improving team development efficiency by 20%. ",
      "Integrated RESTful APIs to manage dynamic data and ensure smooth user workflows. ",
      
    ],
  },
  {
    role: "Junior Software Engineer (Quality & Systems)",
    company: "Marelli Engineering",
    location: "Yangon, Myanmar",
    period: "Dec 2018 – Jun 2021",
    logo: "/assets/logos/Marelli-logo.jpg",
    tags: [
      "EmbeddedSystems",
      "CCPP",
      "System Validation",
      "AutomotiveSoftware",
      "QualityAssurance",
      "Imagix",
      "TechnicalDocumentation",
      "ProblemSolving",
    ],
    points: [
      "Supported software reliability by identifying and resolving over 50 system defects.",
      "Assisted senior engineers in meeting technical requirements and project deadlines.",
      "Maintained high data accuracy through systematic logic checks and validation processes.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12"
    >
      <motion.div
        variants={sectionContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center w-full max-w-6xl relative z-10"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 flex items-center gap-4 text-slate-900 dark:text-white">
            <Briefcase className="w-10 h-10 text-slate-900 dark:text-white" />
            Work Experience
          </h2>
          <p className="text-lg text-slate-600 dark:text-white/70 max-w-2xl mx-auto mb-12">
            A history of my professional growth and technical contributions.
          </p>
        </motion.div>

        <motion.div
          variants={listContainerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/80 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-2xl p-8 flex flex-col h-full shadow-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 flex-shrink-0 bg-white dark:bg-neutral-800 flex items-center justify-center rounded-xl p-1 shadow-sm border border-slate-100 dark:border-none overflow-hidden">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} Logo`}
                    className="w-full h-full object-contain rounded-lg"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/100";
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-slate-600 dark:text-white/90 font-medium text-sm">
                    {exp.company} • {exp.location}
                  </p>
                </div>
              </div>

              <span className="text-slate-400 dark:text-white/50 text-xs font-mono mb-4 block">
                {exp.period}
              </span>

              <ul className="space-y-3 mb-8 flex-grow">
                {exp.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-slate-600 dark:text-white/70 text-sm flex items-start leading-relaxed"
                  >
                    <span className="text-slate-400 dark:text-white mr-3 mt-1">
                      ▹
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto">
                {exp.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-white/80 text-[11px] font-medium rounded-md border border-slate-200 dark:border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default React.memo(Experience);
