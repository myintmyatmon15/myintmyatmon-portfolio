import React, { memo, useMemo } from "react";
import { Code, ExternalLink, FolderKanban } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ProjectCard = memo(({ project }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow p-6 flex flex-col h-full"
    >
      <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
        {project.title}
      </h3>
      <p className="text-base text-muted-foreground mb-4 flex-grow">
        {project.desc}
      </p>
      <div className="flex flex-wrap gap-2 mb-5 mt-auto">
        {project.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-600"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4 flex-wrap">
        {project.links.map((link, linkIndex) => (
          <a
            key={linkIndex}
            href={link.href}
            className="flex items-center gap-2 text-primary font-semibold text-sm hover:underline hover:text-foreground dark:hover:text-primary-foreground/60 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.type === "code" ? (
              <Code className="w-4 h-4" />
            ) : (
              <ExternalLink className="w-4 h-4" />
            )}
            {link.type === "code" ? "Code" : "Demo"}
          </a>
        ))}
      </div>
    </motion.div>
  );
});
ProjectCard.displayName = "ProjectCard";

function ProjectsComponent() {
  const projectsData = useMemo(
    () => [
      {
        title: "Lumina Mon E-Commerce",
        desc: "Built with Next.js 14 and TypeScript for speed and code reliability. It features a real-time shopping cart powered by React Context and a premium, mobile-first UI designed with Tailwind CSS. The project ensures a smooth user journey from product discovery to a streamlined checkout.",
        tags: [
          "NextJS14",
          "TypeScript",
          "React",
          "TailwindCSS",
          "ResponsiveDesign",
          "ContextAPI",
          "Frontend Development",
          "UI/UX",
        ],
        links: [
          { type: "demo", href: "https://lumina-mon-ecommerce.vercel.app/" },
          {
            type: "code",
            href: "https://github.com/myintmyatmon15/lumina-mon-ecommerce.git",
          },
        ],
      },
      {
        title: "CosmoFlix : Premium Media",
        desc: "Developed a modern, dynamic web dashboard for movie exploration featuring responsive custom UI components. Implemented functional routing and layout components, integrating public REST APIs for real-time content fetching, genre-based navigation, and text-based multi-criteria searches.",
        tags: [
          "NextJS",
          "TypeScript",
          "APIIntegration",
          "ResponsiveDesign",
          "WebPerformance",
        ],
        links: [
          { type: "demo", href: "https://cosmoflixproject.vercel.app/" },
          {
            type: "code",
            href: "https://github.com/myintmyatmon15/Movie_Next_project.git",
          },
        ],
      },
      {
        title: "NewsHub – Full-Stack News",
        desc: "A comprehensive news management system built using the MERN Stack. It features a custom Node.js/Express backend and MongoDB database to handle article storage and retrieval. This project demonstrates full-stack capability through secure CRUD operations and a clean React-based user interface.",
        tags: ["MERNStack", "NodeJS", "MongoDB", "FullStack", "RESTAPI"],
        links: [
          { type: "demo", href: "" },
          {
            type: "code",
            href: "https://github.com/myintmyatmon15/News_Media.git",
          },
        ],
      },
    ],
    [],
  );

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center w-full"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 flex items-center gap-4 text-foreground">
            <FolderKanban className="w-8 h-8 sm:w-11 sm:h-11 text-primary drop-shadow-sm" />
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center mb-10">
            Here are some of the projects I’ve worked on, ranging from
            interactive web tools to complex frontend applications. I am
            dedicated to building user-centric solutions with a strong emphasis
            on clean design, performance, and maintainable code.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default memo(ProjectsComponent);
