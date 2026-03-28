import momet from "moment";

export default function Education() {
  const educations = [
    {
      degree: "Bachelor of Computer Engineering",
      school: "Naresuan University",
      startAt: 2023,
      endedAt: 2028,
      detail:
        "Focusing on Software Development, Embedded Systems, and Robotics (Lead Developer for Medbot Project).",
    },
    {
      degree: "High School Diploma",
      school: "Noen Maprang Suksawittaya School",
      startAt: 2020,
      endedAt: 2023,
      detail:
        "Developed a strong foundation in Calculus, Physics, and analytical thinking.",
    },
    {
      degree: "Junior High School",
      school: "Ban Noen Maprang School",
      startAt: 2017,
      endedAt: 2020,
      detail:
        "Initiated interest in technology and basic computer programming.",
    },
  ];
  return (
    <div className="text-white w-full flex flex-col gap-4">
      <h1 className="text-5xl">Education</h1>
      <div className="grid gap-8">
        {educations.map((edu) => (
          <div
            key={edu.school}
            className="border-white border-l-2 hover:border-primary hover:bg-primary/10 group transition-colors pl-8 p-4"
          >
            <h2 className="group-hover:text-primary transition-colors text-2xl">
              {edu.school}
            </h2>
            <h3>{edu.degree}</h3>
            <div>
              {edu.startAt} -{" "}
              {edu.endedAt < momet().year() ? edu.endedAt : "Parent"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
