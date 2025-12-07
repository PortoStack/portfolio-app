"use client";

import Link from "next/link";
import { RevealSection } from "../reveal";
import { SiGithub } from "react-icons/si";
import { ProjectType } from "@/types/project";

export default function Projects({
  projects,
}: {
  projects?: ProjectType[];
}) {
  return (
    <section id="projects" className="p-8 mx-auto max-w-screen-xl grid gap-4 text-foreground">
      <RevealSection>
        <h2 className="text-3xl md:text-5xl font-bold">PROJECTS</h2>
      </RevealSection>
      <div className="grid gap-4">
        {projects?.map((project, index) => (
          <RevealSection key={index} className="grid gap-4">
            <div className="p-4 border border-gray-300 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="mb-2">{project.description}</p>
              <div className="flex gap-2 flex-wrap mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 border border-gray-300 rounded-full hover:bg-gray-200 cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <Link
                  href={project.link}
                  target="_blank"
                  className={`px-2 py-1 rounded-md
                  ${project.status == "Completed"
                      ? "text-green-400 bg-green-300/30 cursor-pointer"
                      : "text-red-400 bg-red-300/30 cursor-not-allowed"}`}
                >
                  Live Demo
                </Link>
                <Link
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-md"
                >
                  <SiGithub /> Code
                </Link>
              </div>
            </div>
          </RevealSection>
        ))}
      </div>
      <RevealSection>
        <Link href="/projects" className="text-corn-flower hover:underline">View All Projects</Link>
      </RevealSection>
    </section>
  );
}