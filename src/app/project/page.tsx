"use client";

import Image from "next/image";
import Link from "next/link";

export default function Project() {
  const projects = [
    {
      id: "1",
      title: "Ecommerce App (HOME STYLE)",
      description: "",
      status: "completed",
      image: "/assets/images/image.png",
      github: "https://github.com/PortoStack/ecommerce-site",
      demo: "https://portostack.github.io/ecommerce-site/",
      technology: [
        { tech: "React.js", icon: "https://cdn.simpleicons.org/react" },
        {
          tech: "Tailwind CSS",
          icon: "https://cdn.simpleicons.org/tailwindcss",
        },
      ],
    },
  ];

  const statusColor = (status: string) => {
    const colors: Record<string, string> = {
      completed:
        "bg-green-400/20 text-green-400 border-1 border-green-400 cursor-pointer",
      in_progress:
        "bg-orange-400/20 text-orange-400 border-1 border-orange-400 cursor-not-allowed",
      planning:
        "bg-gray-400/20 text-gray-400 border-1 border-gray-400 cursor-not-allowed",
      paused:
        "bg-red-400/20 text-red-400 border-1 border-red-400 cursor-not-allowed",
    };

    return colors[status] as string;
  };

  const statusText = (status: string) => {
    const txts: Record<string, string> = {
      completed: "Demo",
      in_progress: "In Progress",
      planning: "Planning",
      paused: "Paused",
    };

    return txts[status] as string;
  };

  return (
    <div className="text-white grid gap-12">
      <h1 className="text-5xl">Projects</h1>
      <div className="">
        {projects.map((project) => (
          <div key={project.id} className="relative">
            <Image
              src={project.image}
              width={1200}
              height={1200}
              alt="No Image"
            />
            <div className="absolute top-0 h-full w-full opacity-0 hover:opacity-100 hover:bg-surface/80 transition-all">
              <h2 className="text-4xl absolute top-1/3 left-1/2 -translate-x-1/2 text-center w-full">
                {project.title}
              </h2>
              <div className="absolute bottom-5 left-5 flex gap-4">
                <Link
                  href={project.github}
                  target="__blank"
                  className="bg-surface px-4 py-2 rounded-lg flex gap-2 items-center"
                >
                  <Image
                    src="https://cdn.simpleicons.org/github/fff"
                    height={16}
                    width={16}
                    alt="No icon"
                  />
                  Github
                </Link>
                <Link
                  href={project.demo}
                  target="__blank"
                  className={`${statusColor(project.status)} px-4 py-2 rounded-lg`}
                  aria-disabled={project.status !== "completed"}
                  tabIndex={project.status !== "completed" ? -1 : undefined}
                >
                  {statusText(project.status)}
                </Link>
              </div>
              <div className="absolute bottom-5 right-5 flex gap-4">
                {project.technology.map((technology) => (
                  <div key={technology.tech}>
                    <Image
                      src={`${technology.icon}/fff`}
                      width={32}
                      height={32}
                      alt="No icon"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
