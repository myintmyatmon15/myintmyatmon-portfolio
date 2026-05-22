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
  const demoLink = project.links.find((l) => l.type === "demo")?.href;
  const codeLink = project.links.find((l) => l.type === "code")?.href;

  return (
    <motion.div
      variants={itemVariants}
      className="bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow-sm overflow-hidden flex flex-col h-full"
    >
      {project.image && (
        <div className="w-full h-48 overflow-hidden relative border-b border-neutral-200 dark:border-neutral-700">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/5 dark:bg-black/10 pointer-events-none" />
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">
          {project.title}
        </h3>
        
        <p className="text-base sm:text-m text-muted-foreground leading-relaxed max-w-lg mb-4 text-justify ">
          {project.desc}
        </p>

        <div className="flex gap-4 pt-2">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-1 py-3 bg-white text-black dark:bg-black dark:text-white rounded-full text-m font-semibold hover:opacity-90 transition-all duration-200 shadow-sm"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Demo
            </a>
          )}
          
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-1 py-3 bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 rounded-full text-xs font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 transition-all duration-200"
            >
              <Code className="w-3.5 h-3.5" />
              Code
            </a>
          )}
        </div>
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
        desc: "Built with Next.js 14 and TypeScript, this e-commerce app features a real-time React Context shopping cart and a premium, mobile-first Tailwind CSS design for a seamless checkout journey.",
        image: "/assets/LuminaMon.png",
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
        desc: "A modern movie exploration dashboard built with responsive UI components, functional routing, and public REST APIs for real-time content fetching, genre navigation, and multi-criteria searches.",
        image: "/assets/CsomoFlix.png",
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
        desc: "A full-stack news management system built on the MERN stack, featuring a custom Node.js/Express backend, MongoDB database for secure CRUD operations, and a clean React user interface.",
        image: "/assets/logos/codelab.jpg",
        links: [
          { type: "demo", href: "#" },
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center mb-12">
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
