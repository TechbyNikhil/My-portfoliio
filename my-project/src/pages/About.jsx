import aboutPhoto from "../assets/nikhil-about.jpg";
import { FaGraduationCap, FaTrophy, FaCode, FaShieldHalved, FaArrowRight } from "react-icons/fa6";

const About = () => {
  const stats = [
    { label: "LeetCode Solved", value: "60+", sub: "DSA & Problem Solving" },
    { label: "Projects Completed", value: "10+", sub: "Web, Games & Apps" },
    { label: "IoT Wars Competition", value: "1st", sub: "University Champion" },
    { label: "Inverthon 2.0", value: "Top 10", sub: "Finalist (Team Guard)" },
  ];

  const highlights = [
    {
      icon: <FaGraduationCap className="text-[#ff5722]" size={22} />,
      title: "B.Tech Computer Science Engineering",
      subtitle: "Invertis University, Bareilly",
      desc: "2025 - 2029 • 1st Year: 74% • Focused on software engineering principles, algorithms, and systems.",
    },
    {
      icon: <FaCode className="text-[#ff7a00]" size={20} />,
      title: "Hands-on Full-Stack Development",
      subtitle: "React.js, Modern JavaScript & Java",
      desc: "Building intuitive user interfaces with clean architecture, responsive components, and scalable code.",
    },
    {
      icon: <FaTrophy className="text-[#ffc107]" size={20} />,
      title: "Competitive Hackathon Builder",
      subtitle: "Winner of IoT Wars & Inverthon 2.0 Finalist",
      desc: "Collaborated in high-pressure hackathons to architect IoT hardware-software solutions that won awards.",
    },
    {
      icon: <FaShieldHalved className="text-[#4caf50]" size={20} />,
      title: "Cybersecurity & Cloud Aspirations",
      subtitle: "AWS Builder Center Explorer",
      desc: "Exploring cloud architectures, web security vulnerabilities, and network protection practices.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Header matching reference photo 1's "Behind the Designs" layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5722]/15 border border-[#ff5722]/30 text-[#ff5722] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#ff5722]"></span>
              Behind the Code
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05]">
              Shaping Experiences That Make Technology <span className="text-[#ff5722]">Simpler.</span>
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-5 lg:pt-8">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              I'm Nikhil Pathak, a 2nd year B.Tech Computer Science student at Invertis University. I specialize in building responsive frontend applications with React and Tailwind, solving challenging Data Structure problems in Java, and exploring cloud infrastructures like AWS.
            </p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Whether architecting a full-stack e-commerce platform like ShopSphere, engineering a real-time financial dashboard like SpendWise, designing an award-winning IoT prototype, or solving algorithms in Java, I approach every challenge with curiosity, persistence, and attention to detail.
            </p>
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-[#ff5722] hover:bg-[#ff6b35] text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-[#ff5722]/30 hover:shadow-xl hover:shadow-[#ff5722]/50 hover:-translate-y-0.5"
              >
                Let's Build Something Meaningful <FaArrowRight size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#11131a] border border-white/5 hover:border-[#ff5722]/40 transition-all duration-300 group"
            >
              <p className="text-3xl md:text-4xl lg:text-5xl font-black text-white group-hover:text-[#ff5722] transition-colors">
                {s.value}
              </p>
              <p className="text-sm font-bold text-gray-200 mt-2">
                {s.label}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {s.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Bento Grid: Photo + Story + Education Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: AWS Builder Center Outdoor Photo Card */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-white/10 bg-[#11131a] min-h-[420px] group shadow-2xl">
            <img
              src={aboutPhoto}
              alt="Nikhil Pathak at AWS Builder Center"
              className="w-full h-full object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#ff5722] text-white text-xs font-bold uppercase tracking-wider">
                Active Builder
              </span>
              <h3 className="text-xl font-bold text-white leading-snug">
                AWS Builder Center: Future Builders Connect
              </h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                Immersing in real-world cloud architectures, developer tooling, and modern tech culture.
              </p>
            </div>
          </div>

          {/* Right: Pillars & Background Details */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#11131a] border border-white/5 hover:border-white/15 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-base font-bold text-white tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs font-semibold text-[#ff7a00] mt-1">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-gray-400 mt-2.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;