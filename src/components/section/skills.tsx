import { SkillType } from "@/types/skill";
import { RevealSection } from "../reveal";

export default function Skills({
  skills
}: {
  skills?: SkillType[];
}) {
  return (
    <section id="skills" className="p-8 mx-auto max-w-screen-xl text-foreground">
      <RevealSection className="grid gap-2">
        <h2 className="text-3xl md:text-5xl font-bold">SKILLS & TECHNOLOGIES</h2>
        {skills?.map((skill) => (
          <div
            key={skill.id}
            className="flex justify-between items-center border-b border-gray-300 pb-1"
          >
            <span>{skill.category}</span>
            <div className="flex flex-wrap justify-end gap-2">
              {skill.skillLabels?.map((name, index) => (
                <span
                  key={index}
                  className="px-2 py-1 border border-gray-300 rounded-full"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </RevealSection>
    </section>
  );
}