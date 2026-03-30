export const SidebarSkelaton = () => {
  return (
    <div className="grid gap-2">
      <div className="animate-pulse h-16 bg-gray-50/10 rounded" />
      <div className="animate-pulse h-6 w-2/3 bg-gray-50/10 rounded" />
    </div>
  );
};

export const AboutSkelaton = () => {
  const count = 16;

  return (
    <div className="grid h-full gap-4">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="animate-pulse h-5 bg-gray-50/10 rounded flex"
          style={{
            width:
              i === 0 ||
              i === count / 2 ||
              i === count / 2 - 1 ||
              i === count - 1
                ? "90%"
                : "100%",
            justifySelf: i === 0 || i == count / 2 ? "right" : "left",
          }}
        />
      ))}
    </div>
  );
};

export const EducationSkelaton = () => {
  return <div></div>;
};

export const SkillSkelaton = () => {
  return (
    <>
      {[...Array(4)].map((_, i) => (
        <div key={i} className="grid gap-4">
          <div className="animate-pulse h-8 w-1/3 bg-gray-50/10 rounded flex" />
          <div className="flex gap-4">
            {[...Array(8)].map((_, j) => (
              <div key={j}>
                <div className="nimate-pulse h-10 w-10 bg-gray-50/10 rounded-full flex" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export const ProjectSkelaton = () => {
  return <div></div>;
};
