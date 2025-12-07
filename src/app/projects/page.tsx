"use client";

import { RevealSection } from "@/components/reveal";
import { useProject } from "@/hook/project.hook";
import Link from "next/link";
import { FaArrowLeft, FaGithub } from "react-icons/fa";

export default function Projects() {

  const { projects } = useProject();

  return (
    <section className="relative bg-background h-screen border-b-1 border-gray-400 text-white">
      <Link href="/" className="absolute left-6 top-6 md:text-2xl transition-all hover:text-corn-flower"><FaArrowLeft /></Link>
      <div className="mx-auto max-w-screen-lg px-8 py-16">
        <h1 className="font-bold text-4xl">Projects</h1>
        <div className="grid">
          {projects?.map((project, index) => (
            <RevealSection key={index} className="border-b border-gray-400 py-4 grid gap-2">
              <div className="flex flex-wrap justify-between items-center">
                <h2 className="font-medium text-2xl">{project.title}</h2>
                <div className="flex gap-4">
                  <Link
                    href={project.link}
                    className={`p-2 rounded-md my-2
                  ${project.status == "Completed"
                        ? "text-green-400 bg-green-300/30 cursor-pointer"
                        : "text-red-400 bg-red-300/30 cursor-not-allowed"}`}
                  >
                    Live Demo
                  </Link>
                  <Link href={project.github} className="flex items-center gap-2 bg-white/20 p-2 my-2 rounded-md"><FaGithub /> Code</Link>
                </div>
              </div>
              <p  className="text-sm md:text-base">{project.description}</p>
              <div className="flex flex-wrap gap-2 items-center">
                {project.technologies.map((tech, techIndex) => (
                  <span className="px-2 py-1 border border-gray-300 rounded-full" key={techIndex}>
                    {tech}
                  </span>
                ))}</div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}