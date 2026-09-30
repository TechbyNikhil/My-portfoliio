const Skills = () => {
  const skillGroups = [
    {
      number: "01",
      title: "Frontend Development",
      description:
        "Building responsive and modern web interfaces with clean and reusable code.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      number: "02",
      title: "Programming",
      description:
        "Developing programming fundamentals and solving problems using Java.",
      skills: ["Java", "Problem Solving", "OOP", "DSA"],
    },
    {
      number: "03",
      title: "Tools & Technologies",
      description:
        "Using modern development tools to build, manage and collaborate on projects.",
      skills: ["Git", "GitHub", "VS Code", "Vite"],
    },
    {
      number: "04",
      title: "Currently Exploring",
      description:
        "Continuously learning new technologies and improving my development skills.",
      skills: ["Cybersecurity", "Advanced React", "Web Development"],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-[#F7F5EF] text-[#111111] px-6 py-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">

          <div>
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-black/10 px-4 py-2 rounded-full text-sm font-semibold mb-5">
              <span className="w-2.5 h-2.5 bg-[#FFB000] rounded-full"></span>
              My Skills
            </div>

            {/* Heading */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none">
              What I
              <span className="text-[#FFB000]"> work </span>
              with.
            </h2>
          </div>

          <p className="text-gray-500 max-w-md leading-7">
            Technologies and tools I'm learning and using to build
            practical, responsive and modern digital experiences.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {skillGroups.map((group, index) => (
            <div
              key={group.number}
              className={`rounded-[2rem] p-8 md:p-10 min-h-[300px] border transition duration-300 hover:-translate-y-1 ${
                index === 1
                  ? "bg-[#FFB000] border-[#FFB000]"
                  : index === 3
                  ? "bg-[#111111] text-white border-[#111111]"
                  : "bg-white border-black/10"
              }`}
            >

              {/* Card Top */}
              <div className="flex items-center justify-between">

                <span
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                    index === 1
                      ? "bg-[#111111] text-white"
                      : index === 3
                      ? "bg-[#FFB000] text-[#111111]"
                      : "bg-[#FFB000] text-[#111111]"
                  }`}
                >
                  {group.number}
                </span>

                <span
                  className={`text-sm ${
                    index === 3
                      ? "text-gray-500"
                      : index === 1
                      ? "text-black/50"
                      : "text-gray-400"
                  }`}
                >
                  {group.title}
                </span>

              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold mt-8">
                {group.title}
              </h3>

              {/* Description */}
              <p
                className={`mt-3 leading-7 ${
                  index === 1
                    ? "text-black/60"
                    : index === 3
                    ? "text-gray-400"
                    : "text-gray-500"
                }`}
              >
                {group.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-6">

                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      index === 1
                        ? "bg-white text-[#111111]"
                        : index === 3
                        ? "bg-white/10 text-gray-200 border border-white/10"
                        : "bg-[#F7F5EF] text-[#111111]"
                    }`}
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

        {/* Tech Stack */}
        <div className="mt-6 bg-[#111111] rounded-[2rem] p-8 md:p-10 text-white">

          <div className="flex flex-col md:flex-row md:items-center gap-8">

            {/* Left */}
            <div className="md:w-1/3">

              <div className="w-14 h-14 bg-[#FFB000] rounded-full flex items-center justify-center text-2xl text-[#111111]">
                ⚡
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mt-5">
                My Tech Stack
              </h3>

              <p className="text-gray-400 mt-3 leading-7">
                A growing collection of technologies I'm using
                throughout my development journey.
              </p>

            </div>

            {/* Right */}
            <div className="flex-1 flex flex-wrap gap-3">

              {[
                "Java",
                "JavaScript",
                "HTML5",
                "CSS3",
                "React",
                "Git",
                "GitHub",
                "Vite",
                "DSA",
                "Cybersecurity",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-3 rounded-full border border-white/15 text-gray-300 hover:bg-[#FFB000] hover:text-[#111111] hover:border-[#FFB000] transition duration-300"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

        </div>

        {/* Bottom Statement */}
        <div className="mt-6 text-center">

          <p className="text-gray-500">
            Always learning. Always building.
            <span className="text-[#FFB000] font-semibold">
              {" "}Always improving.
            </span>
          </p>

        </div>

      </div>
    </section>
  );
};

export default Skills;