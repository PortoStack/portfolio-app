import { ExpType } from "@/types/experience";
import { RevealSection } from "../reveal";

export default function Experience({ experiences }: { experiences?: ExpType[] }) {
  return (
    <section className="p-8 mx-auto max-w-screen-xl grid gap-4 text-foreground" id="experience">
      <RevealSection>
        <h2 className="text-3xl md:text-5xl font-bold">EXPERIENCE</h2>
      </RevealSection>
      <div className="grid gap-2">
        {experiences?.map((exp, index) => (
          <RevealSection key={index}>
            <div className="border-l-2 border-gray-300 py-2 px-6 hover:border-corn-flower transition-all group">
              <h3 className="text-2xl font-semibold group-hover:text-corn-flower transition-all">{exp.role} - {exp.company}</h3>
              <span className="text-sm text-gray-400">{exp.period}</span>
              <p className="mt-2">{exp.description}</p>
            </div>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}