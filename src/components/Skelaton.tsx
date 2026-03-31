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
  return (
    <>
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="border-gray-50/10 border-l-4 pl-8 p-4 grid gap-4"
        >
          <div className="animate-pulse h-8 w-6/10 bg-gray-50/10 rounded flex" />
          <div className="animate-pulse h-6 w-8/10 bg-gray-50/10 rounded flex" />
          <div className="animate-pulse h-6  w-4/10 bg-gray-50/10 rounded flex" />
        </div>
      ))}
    </>
  );
};

export const SkillSkelaton = () => {
  return (
    <>
      {[...Array(4)].map((_, i) => (
        <div key={i} className="grid gap-4 py-2">
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
  return (
    <>
      {[...Array(2)].map((_, i) => (
        <div
          key={i}
          className="my-2 grid gap-4 border-b-4 border-gray-50/10 p-4"
        >
          <div className="animate-pulse h-8 w-1/2 bg-gray-50/10 rounded flex" />
          <div className="grid gap-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="animate-pulse h-5 bg-gray-50/10 rounded flex"
                style={{
                  width: i === 0 || i === 2 ? "90%" : "100%",
                  justifySelf: i === 0 ? "right" : "left",
                }}
              />
            ))}
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4">
              {[...Array(6)].map((_, j) => (
                <div key={j}>
                  <div className="animate-pulse h-10 w-10 bg-gray-50/10 rounded-full flex" />
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              {[...Array(2)].map((_, j) => (
                <div key={j}>
                  <div className="animate-pulse h-10 w-20 bg-gray-50/10 rounded-lg flex" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
