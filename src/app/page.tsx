"use client";

import { Loading } from "@/components/loading";
import About from "@/components/section/about";
import Certifications from "@/components/section/certifications";
import Education from "@/components/section/education";
import Experience from "@/components/section/experience";
import Hero from "@/components/section/hero";
import Projects from "@/components/section/projects";
import Skills from "@/components/section/skills";
import { useCertifition } from "@/hook/certification.hook";
import { useEducation } from "@/hook/education.hook";
import { useExperience } from "@/hook/experience.hook";
import { useProject } from "@/hook/project.hook";
import { useSkill } from "@/hook/skill.hook";
import { useUser } from "@/hook/user.hook";
import { useEffect, useState } from "react";

export default function Home() {

  const { certifications } = useCertifition();
  const { educations } = useEducation();
  const { experiences } = useExperience();
  const { projects } = useProject();
  const { skills } = useSkill();
  const { user } = useUser();

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (user && skills && projects) setIsReady(true);
  }, [user, skills, projects]);

  if (!isReady) return <Loading />;

  return (
    <>
      <Hero title={user?.title} />
      <About bio={user?.bio} />
      {educations && educations.length > 0 && <Education educations={educations} />}
      {skills && skills.length > 0 && <Skills skills={skills} />}
      {projects && projects.length > 0 && <Projects projects={projects} />}
      {experiences && experiences.length > 0 && <Experience experiences={experiences} />}
      {certifications && certifications.length > 0 && <Certifications certifications={certifications} />}
    </>
  );
}
