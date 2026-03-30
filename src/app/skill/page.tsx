"use client";

import { AnimatePresence, motion } from "framer-motion";
import BrandIcon from "@/components/BrandIcon";
import { useSkill } from "@/hook/useSkill";
import { SkillSkelaton } from "@/components/Skelaton";

export default function Skill() {
  const { data, isLoading } = useSkill();

  return (
    <div className="text-white grid gap-6">
      <h1 className="text-5xl">Skills</h1>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <SkillSkelaton />
        ) : (
          <div className="grid gap-8">
            {data?.map((skill, idx) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                  delay: idx * 0.25,
                }}
              >
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
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
