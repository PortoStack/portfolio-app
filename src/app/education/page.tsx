"use client";

import { EducationSkelaton } from "@/components/Skelaton";
import { useEducation } from "@/hook/useEducation";
import dayjs from "dayjs";
import { AnimatePresence, motion } from "framer-motion";

export default function Education() {
  const { data: educations, isLoading } = useEducation();

  return (
    <div className="text-white w-full flex flex-col gap-4">
      <h1 className="text-5xl">Education</h1>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <EducationSkelaton />
        ) : (
          <div className="grid gap-8">
            {educations?.map((edu, idx) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                  delay: idx * 0.05,
                }}
                className="border-white border-l-2 hover:border-primary hover:bg-primary/10 group transition-colors pl-8 p-4"
              >
                <h2 className="group-hover:text-primary transition-colors text-2xl">
                  {edu.school}
                </h2>
                <h3>{edu.degree}</h3>
                <div>
                  {new Date(edu.startedAt).getFullYear()} -{" "}
                  {edu.endedAt ? new Date(edu.endedAt).getFullYear() : "Parent"}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
