import {
  FaReact,
  FaJava,
  FaJs,
  FaGithub,
  FaAws,
  FaHtml5,
} from "react-icons/fa6";
import { SiTailwindcss, SiVite, SiLeetcode } from "react-icons/si";

const TechRibbon = () => {
  const techs = [
    { name: "React.js", icon: <FaReact size={20} className="text-[#61DAFB]" /> },
    { name: "JavaScript", icon: <FaJs size={19} className="text-[#F7DF1E]" /> },
    { name: "Java", icon: <FaJava size={20} className="text-[#EA2D2E]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={20} className="text-[#38BDF8]" /> },
    { name: "AWS Cloud", icon: <FaAws size={20} className="text-[#FF9900]" /> },
    { name: "Vite", icon: <SiVite size={19} className="text-[#BD34FE]" /> },
    { name: "Git & GitHub", icon: <FaGithub size={19} className="text-white" /> },
    { name: "HTML5 & CSS3", icon: <FaHtml5 size={20} className="text-[#E34F26]" /> },
    { name: "LeetCode (60+)", icon: <SiLeetcode size={19} className="text-[#FFA116]" /> },
  ];

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      <div className="rounded-3xl bg-[#0f1118]/80 border border-white/5 p-6 backdrop-blur-md">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Label */}
          <div className="flex items-center gap-2.5 text-xs uppercase tracking-widest text-gray-400 font-semibold shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#ff5722]"></span>
            Core Tech Stack & Tools
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3">
            {techs.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#ff5722]/50 hover:bg-[#ff5722]/10 transition-all duration-300 group cursor-default"
              >
                <span className="group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </span>
                <span className="text-xs font-semibold text-gray-300 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechRibbon;
