"use client";

import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { useProject } from "@/hook/useProject";
import { ProjectSkelaton } from "@/components/Skelaton";

export default function Project() {
  const { data: projects, isLoading } = useProject();

  return (
    <div className="text-white flex flex-col gap-12 h-full">
      <h1 className="text-5xl">Projects</h1>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <ProjectSkelaton />
        ) : (
          <div className="flex-1 gap-8 overflow-y-auto max-h-full custom-scrollbar">
            {projects?.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
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
        )}
      </AnimatePresence>
    </div>
  );
}
