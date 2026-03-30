"use client";

import { $Enums } from "@prisma/client";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { ProjectSchemaType } from "@/schema/project";

export default function Project() {
  const projects: ProjectSchemaType[] = [
    {
      id: "1",
      title: "Ecommerce App (HOME STYLE)",
      description:
        "This project is a simple e-commerce website built with React, Vite, and TailwindCSS. It is currently under development and not yet fully responsive.",
      status: $Enums.project_status.completed,
      github: "https://github.com/PortoStack/ecommerce-site",
      demoUrl: "https://portostack.github.io/ecommerce-site/",
      technologies: [
        { tech: "React.js", icon: "react" },
        {
          tech: "Tailwind CSS",
          icon: "tailwindcss",
        },
      ],
    },
  ];

  return (
    <div className="text-white flex flex-col gap-12 h-full">
      <h1 className="text-5xl">Projects</h1>
      <AnimatePresence mode="wait">
        <div className="flex-1 gap-8 overflow-y-auto max-h-full custom-scrollbar">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                ease: "easeInOut",
                duration: 0.5,
                delay: idx * 0.25,
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
}
