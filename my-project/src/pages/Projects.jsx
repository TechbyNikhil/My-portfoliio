const Projects = () => {
  const projects = [
    {
      number: "01",
      title: "Zomato Clone",
      category: "Web Development",
      description:
        "A food delivery website inspired by Zomato, built to practice responsive layouts, navigation, cards and modern frontend design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "#",
    },

    {
      number: "02",
      title: "Flipkart Clone",
      category: "Web Development",
      description:
        "A responsive e-commerce interface inspired by Flipkart with product sections, navigation and a clean shopping-oriented layout.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "#",
    },

    {
      number: "03",
      title: "Calculator",
      category: "JavaScript",
      description:
        "A simple and responsive calculator built using HTML, CSS and JavaScript with basic arithmetic operations.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "#",
    },

    {
      number: "04",
      title: "Image Gallery",
      category: "Frontend",
      description:
        "A clean image gallery interface designed to display images in an organized and responsive layout.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "#",
    },

    {
      number: "05",
      title: "Snake Water Gun",
      category: "JavaScript Game",
      description:
        "A browser-based Snake Water Gun game created to practice JavaScript logic, conditions and user interaction.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "#",
    },

    {
      number: "06",
      title: "30 Days of JavaScript",
      category: "Learning",
      description:
        "A collection of JavaScript exercises and projects created while practicing JavaScript concepts through a 30-day learning challenge.",
      technologies: ["JavaScript", "HTML", "CSS"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#F7F5EF] text-[#111111] px-6 py-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">

          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-black/10 px-4 py-2 rounded-full text-sm font-semibold mb-5">
              <span className="w-2.5 h-2.5 bg-[#FFB000] rounded-full"></span>
              My Projects
            </div>

            {/* Heading */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none">
              Things I've
              <span className="text-[#FFB000]"> built.</span>
            </h2>
          </div>

          <p className="text-gray-500 max-w-md leading-7">
            A collection of projects I've built while learning,
            experimenting and improving my development skills.
          </p>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {projects.map((project, index) => (

            <div
              key={project.number}
              className={`group rounded-[2rem] overflow-hidden transition duration-300 hover:-translate-y-1 ${
                index === 1
                  ? "bg-[#FFB000]"
                  : index === 4
                  ? "bg-[#111111] text-white"
                  : "bg-white border border-black/10"
              }`}
            >

              {/* Project Visual */}
              <div
                className={`h-56 relative overflow-hidden ${
                  index === 1
                    ? "bg-[#111111]"
                    : index === 4
                    ? "bg-[#FFB000]"
                    : "bg-[#111111]"
                }`}
              >

                {/* Decorative Elements */}
                <div className="absolute w-40 h-40 rounded-full border-[25px] border-[#FFB000]/20 -top-16 -right-10"></div>

                <div className="absolute w-20 h-20 rounded-full bg-[#FFB000] -bottom-10 -left-8"></div>

                {/* Browser Window */}
                <div className="absolute left-8 right-8 top-8 bottom-0 bg-[#F7F5EF] rounded-t-2xl p-4 transition duration-500 group-hover:scale-[1.03]">

                  {/* Browser Header */}
                  <div className="flex items-center gap-1.5 mb-5">
                    <span className="w-2.5 h-2.5 bg-red-400 rounded-full"></span>
                    <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></span>
                    <span className="w-2.5 h-2.5 bg-green-400 rounded-full"></span>
                  </div>

                  {/* Project Mockup */}
                  <div className="space-y-3">

                    <div className="w-1/3 h-3 bg-[#111111] rounded-full"></div>

                    <div className="grid grid-cols-3 gap-2">

                      <div className="h-20 bg-[#FFB000] rounded-lg"></div>

                      <div className="h-20 bg-gray-200 rounded-lg"></div>

                      <div className="h-20 bg-gray-300 rounded-lg"></div>

                    </div>

                    <div className="w-2/3 h-3 bg-gray-300 rounded-full"></div>

                    <div className="w-1/2 h-3 bg-gray-200 rounded-full"></div>

                  </div>

                </div>

                {/* Project Number */}
                <span className="absolute top-5 right-6 text-white/60 text-sm font-semibold">
                  {project.number}
                </span>

              </div>

              {/* Project Content */}
              <div className="p-8">

                {/* Category */}
                <p
                  className={`text-sm font-semibold uppercase tracking-wider ${
                    index === 4
                      ? "text-[#FFB000]"
                      : index === 1
                      ? "text-black/60"
                      : "text-[#FFB000]"
                  }`}
                >
                  {project.category}
                </p>

                {/* Title */}
                <h3 className="text-3xl font-bold mt-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className={`mt-4 leading-7 ${
                    index === 4
                      ? "text-gray-400"
                      : index === 1
                      ? "text-black/60"
                      : "text-gray-500"
                  }`}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-6">

                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                        index === 4
                          ? "bg-white/10 text-gray-300"
                          : index === 1
                          ? "bg-white text-black"
                          : "bg-[#F7F5EF] text-[#111111]"
                      }`}
                    >
                      {technology}
                    </span>
                  ))}

                </div>

                {/* Links */}
                <div className="flex items-center gap-3 mt-7">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition duration-300 ${
                      index === 4
                        ? "bg-[#FFB000] text-[#111111] hover:bg-white"
                        : "bg-[#111111] text-white hover:bg-[#FFB000] hover:text-black"
                    }`}
                  >
                    GitHub ↗
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition duration-300 ${
                      index === 4
                        ? "border-white/20 text-gray-300 hover:border-[#FFB000] hover:text-[#FFB000]"
                        : "border-black/15 text-[#111111] hover:border-[#FFB000] hover:text-[#FFB000]"
                    }`}
                  >
                    Live Demo ↗
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-8 bg-[#111111] rounded-[2rem] p-8 md:p-10 text-white">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div>
              <p className="text-[#FFB000] text-sm uppercase tracking-[0.2em] font-semibold">
                More Projects
              </p>

              <h3 className="text-2xl md:text-3xl font-bold mt-2">
                Check out my GitHub
              </h3>

              <p className="text-gray-400 mt-2">
                More experiments, practice projects and code.
              </p>
            </div>

            <a
              href="https://github.com/TechbyNikhil"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit bg-[#FFB000] text-[#111111] px-7 py-3.5 rounded-full font-semibold hover:bg-white transition duration-300"
            >
              Visit GitHub ↗
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;