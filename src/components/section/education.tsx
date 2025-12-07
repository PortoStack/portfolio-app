import { EducationType } from "@/types/education";
import { RevealSection } from "../reveal";

export default function Education({
  educations,
}: {
  educations?: EducationType[];
}) {
  return (
    <section id="education" className="p-8 mx-auto max-w-screen-xl text-foreground">
      <RevealSection>
        <h3 className="text-xl md:text-2xl font-bold">EDUCATION</h3>
        {educations?.map((education, index) => (
          <div
            key={index}
            className="mt-2 text-lg px-6 py-2 border-l transition-all hover:border-corn-flower group"
          >
            <p className="font-medium text-gray-500">{education.period}</p>
            <h2 className="font-bold transition-all group-hover:text-corn-flower">{education.degree}</h2>
            <p>{education.school}</p>
          </div>
        ))}
      </RevealSection>
    </section>
  );
}