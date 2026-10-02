import profileImage from "../assets/nikhil-profile.jpeg";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#F7F5EF] text-[#111111] px-6 pt-28 pb-16"
    >
      <div className="max-w-7xl mx-auto min-h-[calc(100vh-7rem)] flex items-center">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center w-full">

          {/* ================= LEFT CONTENT ================= */}
          <div>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-black/10 px-4 py-2 rounded-full text-sm font-semibold mb-7">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
              Available for opportunities
            </div>

            {/* Small Introduction */}
            <p className="text-gray-500 text-lg mb-3">
              Hello, I'm
            </p>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9]">
              Nikhil
              <span className="text-[#FFB000]">.</span>
            </h1>

            {/* Profession */}
            <h2 className="text-2xl md:text-3xl font-semibold mt-6 leading-tight">
              Computer Science Student
              <br />
              <span className="text-gray-500">
                & Aspiring Software Engineer
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-base md:text-lg leading-8 max-w-xl mt-7">
              I build modern web experiences, solve programming problems,
              and explore cybersecurity while continuously improving my
              development skills.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-9">

              {/* Projects Button */}
              <a
                href="#projects"
                className="bg-[#111111] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#FFB000] hover:text-[#111111] transition duration-300"
              >
                View My Work ↗
              </a>

              {/* Resume Button */}
              <a
                href="/Nikhil_Pathak_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black/15 bg-white px-7 py-3.5 rounded-full font-semibold hover:border-[#FFB000] hover:text-[#FFB000] transition duration-300"
              >
                View Resume ↓
              </a>

            </div>

            {/* Technology Pills */}
            <div className="flex flex-wrap gap-2 mt-10">
              {[
                "Java",
                "JavaScript",
                "React",
                "HTML",
                "CSS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white border border-black/10 rounded-full text-sm font-medium hover:border-[#FFB000] hover:-translate-y-0.5 transition duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>

          {/* ================= RIGHT PROFILE IMAGE ================= */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Large Yellow Circle Behind Image */}
            <div className="absolute w-[390px] h-[390px] md:w-[510px] md:h-[510px] bg-[#FFB000] rounded-full"></div>

            {/* Black Outer Ring */}
            <div className="relative w-[360px] h-[360px] md:w-[470px] md:h-[470px] rounded-full bg-[#111111] p-3 shadow-2xl">

              {/* Image Container */}
              <div className="w-full h-full rounded-full overflow-hidden bg-[#F7F5EF]">

                <img
                  src={profileImage}
                  alt="Nikhil Pathak"
                  className="w-full h-full object-cover object-[center_18%]"
                />

              </div>
            </div>

            {/* ================= FLOATING BADGE ================= */}

            <div className="absolute -left-2 md:-left-8 top-8 md:top-12 bg-[#111111] text-white rounded-2xl px-5 py-4 shadow-xl">

              <p className="text-[#FFB000] text-xs font-semibold uppercase tracking-[0.15em]">
                Currently
              </p>

              <p className="font-semibold mt-1">
                Learning React ⚛️
              </p>

            </div>

            {/* ================= YELLOW DECORATION ================= */}

            <div className="absolute -right-2 md:-right-6 bottom-6 md:bottom-10 w-16 h-16 bg-[#FFB000] rounded-full flex items-center justify-center font-bold text-xl text-[#111111] shadow-lg">
              02
            </div>

            {/* Small Decorative Dot */}
            <div className="absolute left-8 bottom-16 w-4 h-4 bg-[#111111] rounded-full"></div>

          </div>

        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}

      <div className="hidden md:flex justify-center mt-4">

        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-[#111111] transition duration-300"
        >
          <span className="text-xs uppercase tracking-[0.25em]">
            Scroll to explore
          </span>

          <span className="text-xl animate-bounce">
            ↓
          </span>

        </a>

      </div>

    </section>
  );
};

export default Home;