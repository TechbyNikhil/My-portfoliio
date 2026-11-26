import heroImage from "../assets/nikhil-hero.jpg";
import { FaArrowRight, FaArrowDown, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Home = () => {
  const highlights = [
    { number: "#01", title: "Full Stack Web", subtitle: "React, Tailwind & Modern UI" },
    { number: "#02", title: "Cloud & AWS", subtitle: "Builder Center Explorer" },
    { number: "#03", title: "DSA & Problem Solving", subtitle: "  Solved LeetCode Problems" },
    { number: "#04", title: "Cybersecurity & IoT", subtitle: "Winner — IoT Wars" },
  ];

  return (
    <section id="home" className="pt-24 md:pt-28 pb-8 px-3 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Grand Hero Card with fiery orange radiant background matching reference design */}
        <div className="relative overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] fiery-hero-gradient px-6 md:px-12 lg:px-16 pt-12 md:pt-16 pb-14 md:pb-20 text-white shadow-2xl shadow-orange-950/60 border border-orange-500/20">
          
          {/* Ambient luminous glow overlay */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-orange-400/30 via-orange-500/10 to-transparent blur-3xl pointer-events-none"></div>

          {/* Top Info Bar: Availability & Quick Pitch */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="inline-flex items-center gap-2.5 bg-black/40 backdrop-blur-md border border-white/15 px-4 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wide text-white/95 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for Software Engineering Internships & Projects
            </div>

            <div className="flex items-center gap-2 text-white/70 text-xs md:text-sm font-medium">
              <span>Bareilly, UP, India</span>
              <span>•</span>
              <span className="text-orange-200">Invertis University B.Tech CSE</span>
            </div>
          </div>

          {/* Hero Main Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Big Bold Statement */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <p className="text-orange-200 font-semibold text-lg md:text-xl tracking-tight">
                  Hey, I'm Nikhil Pathak
                </p>
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] text-white">
                  Full Stack
                  <span className="block text-white/95 mt-1">
                    Developer<span className="text-orange-300">.</span>
                  </span>
                </h1>
              </div>

              <p className="text-orange-100/90 text-base md:text-xl max-w-xl font-normal leading-relaxed">
                Computer Science student crafting modern web experiences, building scalable software, and solving real-world challenges through code.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2.5 bg-white text-black hover:bg-orange-100 font-bold px-7 py-3.5 rounded-full text-sm md:text-base transition-all duration-300 shadow-xl shadow-black/30 hover:scale-[1.02] active:scale-95"
                >
                  View My Work <FaArrowRight size={13} className="text-[#ff5722]" />
                </a>

                <a
                  href="/Nikhil_Pathak_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black/40 hover:bg-black/60 text-white border border-white/25 backdrop-blur-sm font-semibold px-6 py-3.5 rounded-full text-sm md:text-base transition-all duration-300 hover:border-white/50"
                >
                  View Resume <FaArrowDown size={13} className="text-orange-300" />
                </a>

                <div className="flex items-center gap-2 pl-1">
                  <a
                    href="https://github.com/TechbyNikhil"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-11 h-11 rounded-full bg-black/30 hover:bg-black/60 border border-white/20 flex items-center justify-center text-white transition-colors"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nikhilpathak09/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-11 h-11 rounded-full bg-black/30 hover:bg-black/60 border border-white/20 flex items-center justify-center text-white transition-colors"
                  >
                    <FaLinkedinIn size={17} />
                  </a>
                  <a
                    href="https://leetcode.com/u/nikhilpathak09/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LeetCode"
                    className="w-11 h-11 rounded-full bg-black/30 hover:bg-black/60 border border-white/20 flex items-center justify-center text-white hover:text-amber-400 transition-colors"
                  >
                    <SiLeetcode size={17} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Centered Visual Portrait with Ambient Light & Floating Badges */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-[300px] sm:w-[360px] md:w-[400px]">
                
                {/* Glow ring */}
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 via-amber-400 to-red-500 rounded-3xl blur-2xl opacity-60 animate-pulse"></div>

                {/* Portrait card container */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 bg-gradient-to-b from-black/20 to-black/80 shadow-2xl p-2.5">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#120a05]">
                    <img
                      src={heroImage}
                      alt="Nikhil Pathak at AWS Builder Center"
                      className="w-full h-full object-cover object-[center_20%] scale-105 hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Inner gradient vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

                    {/* Bottom overlay text */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-bold tracking-tight">Nikhil Pathak</p>
                      <p className="text-orange-300 text-xs font-medium">AWS Builder Center: Future Builders</p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 1: AWS Builder */}
                <div className="absolute -top-4 -left-4 sm:-left-6 bg-[#0e1017]/95 border border-white/20 backdrop-blur-xl px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5">
                  <span className="text-xl">☁️</span>
                  <div>
                    <p className="text-[10px] text-orange-400 uppercase font-bold tracking-wider">Experience</p>
                    <p className="text-white text-xs font-semibold">AWS Future Builder</p>
                  </div>
                </div>

                {/* Floating Badge 2: IoT Wars Winner */}
                <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-[#0e1017]/95 border border-white/20 backdrop-blur-xl px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5">
                  <span className="text-xl">🏆</span>
                  <div>
                    <p className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">Achievement</p>
                    <p className="text-white text-xs font-semibold">Winner — IoT Wars</p>
                  </div>
                </div>

                {/* Floating Badge 3: LeetCode */}
                <div className="absolute bottom-20 -left-6 hidden sm:flex bg-[#0e1017]/95 border border-white/20 backdrop-blur-xl px-3.5 py-2 rounded-2xl shadow-xl items-center gap-2">
                  <span className="text-amber-400 font-black text-sm">60+</span>
                  <span className="text-gray-300 text-xs font-medium">LeetCode Solved</span>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom Discipline Numbers Bar (Echoes the 01, 02, 03, 04 row from reference design) */}
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 md:mt-16 pt-8 border-t border-white/15">
            {highlights.map((item) => (
              <div key={item.number} className="group cursor-default">
                <span className="text-xs font-bold text-orange-300 tracking-wider block">
                  {item.number}
                </span>
                <p className="text-white font-bold text-sm md:text-base mt-0.5 group-hover:text-orange-200 transition-colors">
                  {item.title}
                </p>
                <p className="text-white/70 text-xs mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;