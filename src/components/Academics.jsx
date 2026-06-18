import React, { useMemo, memo } from "react";
import { GraduationCap } from "lucide-react";
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

const EducationCard = memo(({ education }) => {
  const { logo, alt, title, program, year, scoreLabel, score } = education;

  return (
    <motion.div
      variants={itemVariants}
      className="bg-white/80 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-2xl p-6 flex items-center gap-6 shadow-sm dark:shadow-none"
    >
      <div className="w-16 h-16 flex-shrink-0 bg-white dark:bg-neutral-800 flex items-center justify-center rounded-full shadow-inner overflow-hidden border border-slate-100 dark:border-none">
        <img
          src={logo}
          alt={alt}
          className="w-10 h-10 object-contain"
        />
      </div>
      <div className="flex flex-col text-left">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
        <p className="text-slate-700 dark:text-white/90 font-medium">{program}</p>
        <div className="text-slate-500 dark:text-white/70 mt-2 text-sm">
          <p>
            <span className="font-semibold text-slate-700 dark:text-white/80">Years:</span> {year}
          </p>
          <p>
            <span className="font-semibold text-slate-700 dark:text-white/80">{scoreLabel}:</span> {score}
          </p>
        </div>
      </div>
    </motion.div>
  );
});

const ACADEMICS_DATA = [
  {
    logo: "/assets/logos/iit_bhu.png",
    alt: "University Logo",
    title: "University of Computer Studies, Myeik",
    program: "Computer Science (B.C.Sc)",
    year: "2012 – 2017",
    scoreLabel: "CGPA",
    score: "2.83 / 4",
  },
];

const AcademicsComponent = memo(function Academics() {
  const educationCards = useMemo(
    () =>
      ACADEMICS_DATA.map((education, index) => (
        <EducationCard key={index} education={education} />
      )),
    [],
  );

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-12">
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
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 flex items-center gap-4 text-slate-900 dark:text-white">
            <GraduationCap className="w-10 h-10 text-slate-900 dark:text-white" />
            Education
          </h2>
          <p className="text-lg text-slate-600 dark:text-white/70 max-w-2xl mx-auto mb-12">
            My academic background in Computer Science has provided me with a
            strong foundation in problem-solving and engineering principles. I
            have consistently focused on bridging theoretical knowledge with
            practical technical skills.
          </p>
        </motion.div>

        <div className="w-full max-w-3xl">{educationCards}</div>
      </motion.div>
    </div>
  );
});

export default AcademicsComponent;