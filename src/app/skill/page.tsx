"use client";

import BrandIcon from "@/components/BrandIcon";
import { useSkill } from "@/hook/useSkill";

export default function Skill() {
  const { data } = useSkill();

  return (
    <div className="text-white grid gap-6">
      <h1 className="text-5xl">Skills</h1>
      <div className="grid gap-8">
        {data?.map((skill) => (
          <div key={skill.id}>
            <h2 className="text-2xl">{skill.category}</h2>
            <div className="flex flex-wrap gap-8 p-4">
              {skill.technologies.map((technology) => (
                <div
                  key={technology.tech}
                  className="flex flex-col items-center justify-between"
                >
                  <BrandIcon
                    className="w-8 h-8 fill-white"
                    iconKey={technology.icon}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
