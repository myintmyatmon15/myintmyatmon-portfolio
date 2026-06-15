import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { useMemo, memo } from "react";

const Tag = memo(({ tag }) => (
  <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all">
    {tag}
  </span>
));
Tag.displayName = "Tag";

const TAGS = [
  "React.js",
  "Next.js",
  "Node.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
];
function AboutComponent() {
  const tagElements = useMemo(
    () => TAGS.map((tag) => <Tag key={tag} tag={tag} />),
    [],
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full min-h-[80vh] flex items-center justify-center"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-5xl px-4 py-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0 w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white dark:border-neutral-900 shadow-md bg-neutral-200 dark:bg-neutral-800"
          tabIndex={0}
          aria-label="Profile photo of Myint Myat Mon"
        >
          <img
            src="/assets/MyPhotograph.png"
            alt="Myint Myat Mon"
            loading="lazy"
            decoding="async"
            className="object-cover w-full h-full"
            style={{ aspectRatio: "1/1" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex flex-col items-center md:items-start"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-200/50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              About Me
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-3 text-foreground text-center md:text-left">
            Hi! I&apos;m{" "}
            <span className="bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-600 dark:from-white dark:via-neutral-300 dark:to-neutral-400 bg-clip-text text-transparent">
              Myint Myat Mon
            </span>
          </h1>

          <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground text-sm mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>(B.C.Sc) Myanmar</span>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mb-4 text-justify ">
            An adaptable Software Engineer with over 5 years of professional experience bridging the gap between dynamic Full Stack Web Development and rigorous QA Automation. Armed with a Bachelor of Computer Science, I specialize in building high-performance applications using React, Node.js, and TypeScript, while ensuring airtight reliability through structured automated testing and logic debugging.Passionate about writing clean, maintainable code, managing data streams, and optimizing application delivery. I love building seamless user experiences from the server logic down to the final UI pixel. Currently seeking new opportunities in Singapore to innovate and grow with a forward-thinking engineering team.
          </p>

          <div className="flex flex-wrap gap-2 mb-4 justify-center items-center md:justify-start">
            {tagElements}
          </div>

        </motion.div>
      </div>
    </motion.div>
  );
}
export default memo(AboutComponent);