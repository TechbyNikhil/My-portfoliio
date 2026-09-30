const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#F7F5EF] text-[#111111] px-6 pt-32 pb-20 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-black/10 px-4 py-2 rounded-full text-sm font-medium mb-7 shadow-sm">
              <span className="w-2.5 h-2.5 bg-[#FFB000] rounded-full"></span>
              Available for opportunities
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight">
              I'm
              <span className="text-[#FFB000]"> Nikhil </span>
              <br />
              Pathak.
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl md:text-3xl font-semibold mt-7">
              Web Developer
              <span className="text-[#FFB000]"> & </span>
              CSE Student
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-8 max-w-xl mt-6">
              I build modern, responsive and user-friendly websites
              while exploring software development, application
              development and cybersecurity.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="#projects"
                className="bg-[#111111] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#FFB000] hover:text-black transition duration-300"
              >
                View My Work →
              </a>

              <a
                href="/Nikhil_Pathak_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-black/15 text-[#111111] px-7 py-3.5 rounded-full font-semibold hover:bg-[#FFB000] hover:border-[#FFB000] transition duration-300"
              >
                My Resume ↗
              </a>

            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-10">

              <span className="text-sm text-gray-500">
                Follow me
              </span>

              <span className="w-10 h-px bg-black/20"></span>

              <a
                href="https://github.com/TechbyNikhil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold hover:text-[#FFB000] transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/nikhilpathak09/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold hover:text-[#FFB000] transition"
              >
                LinkedIn
              </a>

              <a
                href="https://x.com/nikhilpathak09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold hover:text-[#FFB000] transition"
              >
                X
              </a>

            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Yellow Background Shape */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-[#FFB000] rounded-[3rem] rotate-6"></div>

            {/* Profile Card */}
            <div className="relative w-72 h-80 md:w-96 md:h-[28rem] bg-[#111111] rounded-[3rem] overflow-hidden flex items-end justify-center shadow-2xl">

              {/* Decorative Circle */}
              <div className="absolute top-8 right-8 w-20 h-20 border-8 border-[#FFB000] rounded-full"></div>

              {/* Decorative Text */}
              <div className="absolute top-10 left-8 text-white/70 text-sm">
                NIKHIL
                <br />
                DEVELOPER
              </div>

              {/* Profile Placeholder */}
              <div className="absolute inset-x-8 top-32 bottom-0 bg-[#F7F5EF] rounded-t-[10rem] flex items-center justify-center">

                <div className="text-center px-6">
                  <div className="w-28 h-28 mx-auto rounded-full bg-[#FFB000] flex items-center justify-center text-5xl font-bold">
                    N
                  </div>

                  <p className="font-bold text-xl mt-5">
                    Nikhil Pathak
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Web Developer
                  </p>
                </div>

              </div>

            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 -left-2 md:left-0 bg-white border border-black/10 shadow-xl px-5 py-3 rounded-full flex items-center gap-3">
              <span className="w-3 h-3 bg-[#FFB000] rounded-full"></span>

              <span className="text-sm font-semibold">
                Building for the web
              </span>
            </div>

            {/* Experience Badge */}
            <div className="absolute top-10 -right-2 md:-right-5 bg-[#111111] text-white px-5 py-4 rounded-2xl shadow-xl">
              <p className="text-[#FFB000] text-2xl font-bold">
                2+
              </p>

              <p className="text-xs text-gray-400">
                Years Learning
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="flex justify-center mt-20">

          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-[#111111] transition"
          >
            <span className="text-xs uppercase tracking-[0.2em]">
              Scroll to explore
            </span>

            <span className="text-xl animate-bounce">
              ↓
            </span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Home;