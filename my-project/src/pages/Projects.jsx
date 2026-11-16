const Projects = () => {
  const projects = [
    {
      number: "01",
      title: "SpendWise",
      category: "Full Stack App",
      description:
        "A modern financial dashboard and expense tracker built with React, Vite and Tailwind CSS. Features real-time balance tracking, income vs. expense charts, budget management with visual guardrails and CSV export.",
      technologies: ["React", "Vite", "Tailwind CSS", "Recharts"],
      github: "https://github.com/TechbyNikhil/smart-expanse-tracker",
      live: "https://smart-expanse-tracker-orcin.vercel.app",
      image: "/projects/spendwise.png",
    },

    {
      number: "02",
      title: "ShopSphere",
      category: "E-Commerce",
      description:
        "A full-stack e-commerce platform with product listings, cart management, authentication and a backend API. Designed with a clean shopping-oriented layout and smooth user experience.",
      technologies: ["React", "Node.js", "JavaScript", "CSS"],
      github: "https://github.com/TechbyNikhil/E-Commerce-ShopSphere",
      live: "#",
      image: "/projects/shopsphere.png",
    },

    {
      number: "03",
      title: "Calculator",
      category: "JavaScript",
      description:
        "A clean and responsive calculator built with HTML, CSS and JavaScript, deployed on Vercel. Supports all basic arithmetic operations with a smooth, modern UI.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/TechbyNikhil/calculator",
      live: "https://calculator-nikhil-team6.vercel.app",
      image: "/projects/calculator.png",
    },

    {
      number: "04",
      title: "My Portfolio",
      category: "Web Development",
      description:
        "My personal developer portfolio built with React, Vite and Tailwind CSS. Showcases my skills, projects and experience with a minimal, modern design.",
      technologies: ["React", "Vite", "Tailwind CSS"],
      github: "https://github.com/TechbyNikhil/My-portfoliio",
      live: "https://www.nikhilpathak.me/",
      image: "/projects/portfolio.png",
    },

    {
      number: "05",
      title: "LeetCode Solutions",
      category: "DSA / Problem Solving",
      description:
        "A curated collection of my LeetCode problem solutions written in Java, covering Arrays, Strings, Hashmaps, Sliding Window, Two Pointers and more — tracked with LeetHub.",
      technologies: ["Java", "DSA", "LeetCode"],
      github: "https://github.com/TechbyNikhil/My-leetcode-solutions",
      live: "#",
      image: "/projects/leetcode.png",
    },

    {
      number: "06",
      title: "JavaScript Assignments",
      category: "Learning",
      description:
        "A repository of JavaScript practice exercises and assignments completed during my learning journey — covering core concepts, DOM manipulation, events and more.",
      technologies: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/TechbyNikhil/JavaScript-assignment",
      live: "#",
      image: "/projects/js-assignments.png",
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
                index % 3 === 1
                  ? "bg-[#FFB000]"
                  : index % 3 === 2
                  ? "bg-[#111111] text-white"
                  : "bg-white border border-black/10"
              }`}
            >

              {/* Project Visual */}
              <div className="h-56 relative overflow-hidden bg-[#111111]">

                {/* Project Screenshot */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />

                {/* Fallback if image fails */}
                <div className="absolute inset-0 hidden items-center justify-center bg-[#111111]">
                  <div className="space-y-3 px-8 w-full">
                    <div className="w-1/3 h-3 bg-[#FFB000]/40 rounded-full"></div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-16 bg-[#FFB000]/30 rounded-lg"></div>
                      <div className="h-16 bg-white/10 rounded-lg"></div>
                      <div className="h-16 bg-white/5 rounded-lg"></div>
                    </div>
                    <div className="w-2/3 h-3 bg-white/10 rounded-full"></div>
                    <div className="w-1/2 h-3 bg-white/5 rounded-full"></div>
                  </div>
                </div>

                {/* Gradient overlay at bottom for readability */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Project Number */}
                <span className="absolute top-4 right-5 bg-black/40 backdrop-blur-sm text-white/80 text-xs font-bold px-2.5 py-1 rounded-full">
                  {project.number}
                </span>

              </div>

              {/* Project Content */}
              <div className="p-8">

                {/* Category */}
                <p
                  className={`text-sm font-semibold uppercase tracking-wider ${
                    index % 3 === 2
                      ? "text-[#FFB000]"
                      : index % 3 === 1
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
                    index % 3 === 2
                      ? "text-gray-400"
                      : index % 3 === 1
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
                        index % 3 === 2
                          ? "bg-white/10 text-gray-300"
                          : index % 3 === 1
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
                      index % 3 === 2
                        ? "bg-[#FFB000] text-[#111111] hover:bg-white"
                        : "bg-[#111111] text-white hover:bg-[#FFB000] hover:text-black"
                    }`}
                  >
                    GitHub ↗
                  </a>

                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition duration-300 ${
                        index % 3 === 2
                          ? "border-white/20 text-gray-300 hover:border-[#FFB000] hover:text-[#FFB000]"
                          : "border-black/15 text-[#111111] hover:border-[#FFB000] hover:text-[#FFB000]"
                      }`}
                    >
                      Live Demo ↗
                    </a>
                  )}

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