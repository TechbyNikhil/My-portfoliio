import { FaTrophy, FaAward, FaCloud, FaLaptopCode, FaGraduationCap } from "react-icons/fa6";
import stagePhoto from "../assets/nikhil-builder-challenge.jpg";

const Achievements = () => {
  const milestones = [
    {
      icon: <FaTrophy className="text-[#ff5722]" size={22} />,
      year: "2024",
      badge: "Competition Winner",
      title: "1st Place Champion — IoT Wars",
      organization: "Invertis University",
      description:
        "Led hardware-software prototyping to develop an IoT-powered smart automation and security device, beating competing university engineering teams.",
      tag: "Hardware & IoT",
    },
    {
      icon: <FaAward className="text-[#ff7a00]" size={22} />,
      year: "2024",
      badge: "Hackathon Finalist",
      title: "Top 10 Finalist — Inverthon 2.0",
      organization: "Inverthon Hackathon",
      description:
        "Collaborated with Team Guard to design, engineer, and demonstrate an IoT-based practical solution, securing a spot in the Top 10 teams.",
      tag: "Hackathon",
    },
    {
      icon: <FaCloud className="text-[#38bdf8]" size={22} />,
      year: "2024",
      badge: "Industry Immersion",
      title: "AWS Builder Center: Future Builders Connect",
      organization: "Amazon Web Services",
      description:
        "Participated in the AWS Builder Center developer event, engaging with cloud architects, hands-on trivia challenges, and exploring scalable cloud paradigms.",
      tag: "Cloud / AWS",
    },
    {
      icon: <FaLaptopCode className="text-[#ffa116]" size={22} />,
      year: "Continuous",
      badge: "Problem Solving",
      title: "60+ LeetCode Algorithms Solved",
      organization: "LeetCode Competitive Profile",
      description:
        "Consistent daily problem solving practicing Data Structures (Arrays, Strings, Linked Lists, Trees, Sorting, OOP) with Java.",
      tag: "Data Structures",
    },
    {
      icon: <FaGraduationCap className="text-[#10b981]" size={22} />,
      year: "2025 - 2029",
      badge: "Academic Foundation",
      title: "B.Tech Computer Science Engineering",
      organization: "Invertis University, Bareilly",
      description:
        "Pursuing undergraduate studies with strong performance (74% 1st year score), studying Core CS, Software Engineering, and Operating Systems.",
      tag: "Academics",
    },
  ];

  return (
    <section id="milestones" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5722]/15 border border-[#ff5722]/30 text-[#ff5722] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#ff5722]"></span>
              Honors & Highlights
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
              Milestones & <span className="text-[#ff5722]">Achievements.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm md:text-base leading-relaxed">
            Key accomplishments, awards, and industry immersions that reflect my dedication to continuous learning and growth.
          </p>
        </div>

        {/* Milestones Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: AWS Builder Stage Card */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden bg-[#11131a] border border-white/10 relative shadow-2xl flex flex-col justify-between group min-h-[480px]">
            <img
              src={stagePhoto}
              alt="Nikhil Pathak at AWS Builder Center Challenge Wall"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20"></div>

            <div className="relative z-10 p-6 sm:p-8 space-y-3 mt-auto">
              <span className="inline-block px-3 py-1 rounded-full bg-[#ff5722] text-white text-xs font-bold uppercase tracking-wider">
                Builder Mindset
              </span>
              <h3 className="text-2xl font-black text-white leading-tight">
                "Take on the challenges. Bring your best game."
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Featured at the AWS Builder Center stage — applying competitive drive to software engineering, hackathons, and real-world system building.
              </p>
            </div>
          </div>

          {/* Right: Milestones Timeline List */}
          <div className="lg:col-span-7 space-y-4">
            {milestones.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#11131a] border border-white/5 hover:border-[#ff5722]/30 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-[#ff5722]/40 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-bold text-[#ff7a00] uppercase tracking-wider">
                        {item.badge}
                      </span>
                      <span className="text-gray-500 text-xs">•</span>
                      <span className="text-gray-400 text-xs font-medium">
                        {item.organization}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white group-hover:text-[#ff5722] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-xs leading-relaxed max-w-xl">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
                  <span className="text-xs font-bold text-white bg-white/[0.06] px-3 py-1 rounded-full border border-white/5">
                    {item.year}
                  </span>
                  <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Achievements;
