import { useState } from "react";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

import spendwiseImg from "../assets/project-spendwise.jpg";
import shopsphereImg from "../assets/project-shopsphere.jpg";
import calculatorImg from "../assets/project-calculator.jpg";
import leetcodeImg from "../assets/project-leetcode.jpg";
import jslabImg from "../assets/project-jslab.jpg";
import iotImg from "../assets/project-iot.jpg";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "Web Applications",
    "JavaScript & Logic",
    "DSA & Problem Solving",
    "IoT & Hardware",
  ];

  const projects = [
    {
      id: "01",
      title: "SpendWise — Financial Dashboard",
      repoName: "smart-expanse-tracker",
      category: "Web Applications",
      badge: "Live on Vercel ⚡",
      image: spendwiseImg,
      isLive: true,
      description:
        "Comprehensive personal financial dashboard and expense tracker built with React 18, Tailwind CSS, and Recharts. Features dynamic cash-flow area charts, category donut analytics, monthly budget progress bars, and full localStorage persistence.",
      tech: ["React 18", "Vite", "Tailwind CSS", "Recharts", "LocalStorage"],
      github: "https://github.com/TechbyNikhil/smart-expanse-tracker",
      live: "https://smart-expanse-tracker-orcin.vercel.app",
    },
    {
      id: "02",
      title: "ShopSphere — E-Commerce Platform",
      repoName: "E-Commerce-ShopSphere",
      category: "Web Applications",
      badge: "Full-Stack MERN 🛒",
      image: shopsphereImg,
      isLive: false,
      description:
        "Modern full-stack e-commerce web platform architected with a React 19 + Tailwind v4 storefront and a Node.js / Express backend with MongoDB (Mongoose), JWT user authentication, cart management, and REST APIs.",
      tech: ["React 19", "Node.js", "Express", "MongoDB", "JWT", "Tailwind v4"],
      github: "https://github.com/TechbyNikhil/E-Commerce-ShopSphere",
      live: "https://github.com/TechbyNikhil/E-Commerce-ShopSphere",
    },
    {
      id: "03",
      title: "Modern Arithmetic Calculator",
      repoName: "calculator",
      category: "JavaScript & Logic",
      badge: "Live Web App 🧮",
      image: calculatorImg,
      isLive: true,
      description:
        "Sleek and responsive web calculator deployed on Vercel with glassmorphism UI, real-time dynamic arithmetic calculations, keyboard listener support, and tactile user feedback.",
      tech: ["HTML5", "CSS3", "JavaScript", "Vercel Deployment"],
      github: "https://github.com/TechbyNikhil/calculator",
      live: "https://calculator-nikhil-team6.vercel.app",
    },
    {
      id: "04",
      title: "LeetCode Solutions Repository",
      repoName: "My-leetcode-solutions",
      category: "DSA & Problem Solving",
      badge: "60+ Solved ☕",
      image: leetcodeImg,
      isLive: true,
      description:
        "Curated repository of tested and optimized Java solutions for 60+ LeetCode problems covering Arrays, Strings, Two Pointers, Linked Lists, Binary Trees, and Object-Oriented design principles.",
      tech: ["Java", "Data Structures", "Algorithms", "OOP", "LeetCode"],
      github: "https://github.com/TechbyNikhil/My-leetcode-solutions",
      live: "https://leetcode.com/u/nikhilpathak09/",
    },
    {
      id: "05",
      title: "JavaScript Core & Advanced Lab",
      repoName: "JavaScript-assignment",
      category: "JavaScript & Logic",
      badge: "15+ Lab Modules ⚡",
      image: jslabImg,
      isLive: false,
      description:
        "Comprehensive academic and practical suite of 15+ interactive JavaScript programs, DOM manipulation assignments, dynamic event listeners, algorithmic visualizations, and technical project reports.",
      tech: ["JavaScript ES6+", "DOM Manipulation", "Algorithms", "Event Loop"],
      github: "https://github.com/TechbyNikhil/JavaScript-assignment",
      live: "https://github.com/TechbyNikhil/JavaScript-assignment",
    },
    {
      id: "06",
      title: "Smart IoT Security & Automation",
      repoName: "IoT-Wars-System",
      category: "IoT & Hardware",
      badge: "🏆 1st Place Winner",
      image: iotImg,
      isLive: false,
      description:
        "Award-winning IoT hardware-software system developed with Team Guard (Winner of IoT Wars & Top 10 Finalist at Inverthon 2.0). Features real-time sensor telemetry, automated relays, and hardware alerts.",
      tech: ["C/C++", "IoT Sensors", "Microcontrollers", "Automation"],
      github: "https://github.com/TechbyNikhil",
      live: "https://github.com/TechbyNikhil",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5722]/15 border border-[#ff5722]/30 text-[#ff5722] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#ff5722]"></span>
              Original GitHub Projects
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
              Featured <span className="text-[#ff5722]">Projects.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm md:text-base leading-relaxed">
            Real repositories and deployed applications from my public GitHub profile (
            <a
              href="https://github.com/TechbyNikhil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff5722] hover:underline font-semibold"
            >
              @TechbyNikhil
            </a>
            ), showcasing full-stack applications, interactive tools, and algorithms.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeFilter === cat
                  ? "bg-[#ff5722] text-white shadow-lg shadow-[#ff5722]/30"
                  : "bg-white/[0.04] text-gray-400 hover:text-white hover:bg-white/[0.08] border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid with Screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-[#11131a] border border-white/5 hover:border-[#ff5722]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl hover:-translate-y-1"
            >
              {/* Project Image & Window Frame Header */}
              <div className="relative overflow-hidden bg-[#161821] border-b border-white/5">
                {/* Browser-like window header */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-black/40 backdrop-blur-md border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-gray-400 truncate max-w-[200px]">
                    <FaCode size={11} className="text-[#ff5722]" />
                    <span>TechbyNikhil/{project.repoName}</span>
                  </div>
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                    #{project.id}
                  </span>
                </div>

                {/* Picture Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/30">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11131a] via-transparent to-transparent opacity-60"></div>

                  {/* Badge overlay on top of picture */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-black/75 border border-white/15 text-white backdrop-blur-md shadow-lg">
                      {project.isLive && (
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      )}
                      {project.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#ff7a00]">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#ff5722] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills & Actions */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-medium bg-white/[0.04] text-gray-300 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons: GitHub Repo + Live Link */}
                  <div className="flex items-center gap-2.5 pt-2 border-t border-white/5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-[#ff5722] text-white text-xs font-semibold py-2.5 rounded-xl border border-white/10 hover:border-[#ff5722] transition-all duration-200"
                    >
                      <FaGithub size={14} /> GitHub Code
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                        project.isLive
                          ? "bg-[#ff5722] hover:bg-[#ff6b35] text-white shadow-md shadow-[#ff5722]/30"
                          : "bg-white/[0.05] hover:bg-white/15 text-gray-200 border border-white/10"
                      }`}
                      title={project.isLive ? "View Live Deployment" : "View Project Details"}
                    >
                      <span>{project.isLive ? "Live Demo" : "Explore"}</span>
                      {project.isLive ? (
                        <FaExternalLinkAlt size={11} />
                      ) : (
                        <FaArrowUpRightFromSquare size={11} />
                      )}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner: GitHub CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-[#180e0a] via-[#11131a] to-[#180e0a] border border-[#ff5722]/30 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff5722]">
              Explore Open Source & Commits
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white">
              Want to see all 12+ repositories?
            </h3>
            <p className="text-gray-400 text-sm max-w-xl">
              Visit my GitHub profile to explore active contributions, lab assignments, solved algorithms, and web applications.
            </p>
          </div>

          <a
            href="https://github.com/TechbyNikhil"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#ff5722] hover:bg-[#ff6b35] text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-300 shadow-xl shadow-[#ff5722]/30 hover:scale-105 shrink-0"
          >
            <FaGithub size={18} /> View @TechbyNikhil on GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;