import {
  FaReact,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaShieldHalved,
  FaMicrochip,
  FaTerminal,
  FaBrain,
} from "react-icons/fa6";
import { SiTailwindcss, SiVite, SiLeetcode, SiC } from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      description: "Crafting fast, accessible, and reactive web applications with clean component architecture.",
      color: "from-orange-500/20 to-transparent",
      borderColor: "border-orange-500/30",
      skills: [
        { name: "React.js", level: "Intermediate", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "JavaScript (ES6+)", level: "Advanced", icon: <FaJs className="text-[#F7DF1E]" /> },
        { name: "Tailwind CSS", level: "Advanced", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
        { name: "HTML5 & CSS3", level: "Expert", icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: "Vite & Tooling", level: "Proficient", icon: <SiVite className="text-[#BD34FE]" /> },
        { name: "Responsive UI", level: "Advanced", icon: <FaCss3Alt className="text-[#1572B6]" /> },
      ],
    },
    {
      category: "Programming & Core CS",
      description: "Developing rigorous algorithmic problem solving and solid object-oriented fundamentals.",
      color: "from-amber-500/20 to-transparent",
      borderColor: "border-amber-500/30",
      skills: [
        { name: "Java", level: "Advanced", icon: <FaJava className="text-[#EA2D2E]" /> },
        { name: "Data Structures & Algorithms", level: "Active (60+ LeetCode)", icon: <SiLeetcode className="text-[#FFA116]" /> },
        { name: "OOP Principles", level: "Advanced", icon: <FaBrain className="text-[#A78BFA]" /> },
        { name: "C Programming", level: "Intermediate", icon: <SiC className="text-[#A8B9CC]" /> },
        { name: "Problem Solving", level: "Active", icon: <FaTerminal className="text-[#10B981]" /> },
      ],
    },
    {
      category: "Cloud, Tools & Workflow",
      description: "Leveraging industry-standard developer toolchains, version control, and cloud environments.",
      color: "from-red-500/20 to-transparent",
      borderColor: "border-red-500/30",
      skills: [
        { name: "AWS Cloud (Builder)", level: "Exploring", icon: <FaAws className="text-[#FF9900]" /> },
        { name: "Git & Version Control", level: "Advanced", icon: <FaGitAlt className="text-[#F05032]" /> },
        { name: "GitHub Collaboration", level: "Advanced", icon: <FaGithub className="text-white" /> },
        { name: "VS Code & Debugging", level: "Proficient", icon: <FaTerminal className="text-[#007ACC]" /> },
        { name: "CLI & Environment", level: "Intermediate", icon: <FaTerminal className="text-gray-300" /> },
      ],
    },
    {
      category: "Focus & Future Horizons",
      description: "Exploring specialized domains at the intersection of connected hardware and application security.",
      color: "from-orange-600/20 to-transparent",
      borderColor: "border-orange-600/30",
      skills: [
        { name: "Cybersecurity Basics", level: "Exploring", icon: <FaShieldHalved className="text-emerald-400" /> },
        { name: "IoT Hardware & Sensors", level: "Competition Winner", icon: <FaMicrochip className="text-amber-400" /> },
        { name: "RESTful API Integration", level: "Proficient", icon: <FaBrain className="text-cyan-400" /> },
        { name: "Artificial Intelligence", level: "Exploring", icon: <FaBrain className="text-rose-400" /> },
      ],
    },
  ];

  const softSkills = [
    "Analytical Problem Solving",
    "Collaborative Teamwork",
    "Technical Communication",
    "Project Leadership",
    "Rapid Tech Adaptability",
    "Time Management",
    "Attention to Detail",
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5722]/15 border border-[#ff5722]/30 text-[#ff5722] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#ff5722]"></span>
              Technical Capabilities
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
              What I <span className="text-[#ff5722]">Build</span> With.
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm md:text-base leading-relaxed">
            A comprehensive overview of programming languages, frameworks, cloud tools, and core computer science competencies.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((group, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#11131a] border border-white/5 hover:border-white/15 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#ff5722] tracking-wider uppercase">
                    Module 0{idx + 1}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5722]/60 group-hover:scale-125 transition-transform"></span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {group.category}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-2 leading-relaxed">
                  {group.description}
                </p>

                {/* Skills Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-6">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#ff5722]/40 hover:bg-[#ff5722]/5 transition-all duration-200"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="text-lg shrink-0">{skill.icon}</span>
                        <span className="text-xs font-semibold text-gray-200 truncate">{skill.name}</span>
                      </div>
                      <span className="text-[10px] text-gray-400 font-medium shrink-0 ml-2 bg-black/40 px-2 py-0.5 rounded-full">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills & Working Philosophy */}
        <div className="rounded-3xl bg-gradient-to-r from-[#141620] via-[#10121a] to-[#141620] border border-white/10 p-8 md:p-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-2 max-w-md">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff7a00]">
                Beyond Code
              </span>
              <h3 className="text-2xl font-bold text-white">
                Soft Skills & Mindset
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Strong engineering is as much about communication, team synergy, and perseverance as it is about syntax.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 max-w-2xl">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-xs font-semibold bg-white/[0.04] border border-white/10 text-gray-300 hover:border-[#ff5722] hover:text-white transition-colors"
                >
                  ✓ {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;