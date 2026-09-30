const About = () => {
  return (
    <section
      id="about"
      className="bg-[#F7F5EF] text-[#111111] px-6 py-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">

          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-black/10 px-4 py-2 rounded-full text-sm font-semibold mb-5">
              <span className="w-2.5 h-2.5 bg-[#FFB000] rounded-full"></span>
              About Me
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none">
              A little
              <span className="text-[#FFB000]"> about </span>
              me.
            </h2>
          </div>

          <p className="text-gray-500 max-w-md leading-7">
            A Computer Science student passionate about Software
            Engineering, Web Development, and problem solving.
          </p>
        </div>

        {/* Main About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Left Profile Card */}
          <div className="lg:col-span-5 bg-[#111111] rounded-[2rem] p-8 md:p-10 text-white min-h-[500px] relative overflow-hidden">

            {/* Decorative Circle */}
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full border-[40px] border-[#FFB000]/20"></div>

            <div className="absolute right-10 top-10 w-5 h-5 bg-[#FFB000] rounded-full"></div>

            <div className="relative z-10 h-full flex flex-col justify-between">

              <div>
                <p className="text-[#FFB000] text-sm uppercase tracking-[0.2em] font-semibold">
                  Who I Am
                </p>

                <h3 className="text-3xl md:text-4xl font-bold mt-4 leading-tight">
                  Building,
                  <br />
                  learning &
                  <br />
                  creating.
                </h3>
              </div>

              {/* Profile Icon */}
              <div className="flex justify-center my-8">
                <div className="w-44 h-44 md:w-52 md:h-52 rounded-full bg-[#FFB000] flex items-center justify-center">
                  <span className="text-7xl md:text-8xl font-bold text-[#111111]">
                    N
                  </span>
                </div>
              </div>

              {/* Introduction */}
              <div>
                <p className="text-gray-400 leading-7">
                  👋 I'm Nikhil Pathak, a 2nd year B.Tech Computer
                  Science Engineering student at Invertis University,
                  passionate about Software Engineering, Web
                  Development, and problem solving.
                </p>
              </div>

            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Education */}
            <div className="bg-white rounded-[2rem] p-8 border border-black/10 min-h-[240px]">

              <div className="flex items-center justify-between">
                <span className="w-12 h-12 bg-[#FFB000] rounded-full flex items-center justify-center text-xl font-bold">
                  01
                </span>

                <span className="text-gray-400">
                  Education
                </span>
              </div>

              <h3 className="text-2xl font-bold mt-8">
                B.Tech Computer Science
              </h3>

              <p className="text-gray-500 mt-2">
                Invertis University
              </p>

              <p className="text-gray-400 text-sm mt-4">
                2025 - 2029
              </p>
            </div>

            {/* Focus Areas */}
            <div className="bg-[#FFB000] rounded-[2rem] p-8 min-h-[240px]">

              <div className="flex items-center justify-between">
                <span className="w-12 h-12 bg-[#111111] text-white rounded-full flex items-center justify-center text-xl font-bold">
                  02
                </span>

                <span className="text-black/60">
                  Focus Areas
                </span>
              </div>

              <h3 className="text-2xl font-bold mt-8">
                What I Focus On
              </h3>

              <ul className="text-black/70 mt-4 space-y-2">
                <li>• 💻 Web Development</li>
                <li>• ☕ Data Structures & Algorithms</li>
                <li>• 🔐 Cybersecurity</li>
              </ul>
            </div>

            {/* Achievements */}
            <div className="md:col-span-2 bg-white rounded-[2rem] p-8 border border-black/10 min-h-[240px]">

              <div className="flex items-center justify-between">
                <span className="w-12 h-12 bg-[#111111] text-white rounded-full flex items-center justify-center text-xl font-bold">
                  03
                </span>

                <span className="text-gray-400">
                  Achievements
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

                {/* IoT Wars */}
                <div>
                  <h3 className="text-xl font-bold">
                    🏆 Winner — IoT Wars
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Invertis University
                  </p>
                </div>

                {/* Inverthon */}
                <div>
                  <h3 className="text-xl font-bold">
                    🥇 Top 10 Finalist — Inverthon 2.0
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Worked on an IoT-based solution with my team.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Skills & Experience Description */}
        <div className="mt-6 bg-white rounded-[2rem] border border-black/10 p-8 md:p-10">

          <div className="flex flex-col md:flex-row gap-6">

            <div className="w-14 h-14 shrink-0 bg-[#FFB000] rounded-full flex items-center justify-center text-2xl">
              💻
            </div>

            <div className="space-y-5">

              <p className="text-lg md:text-xl text-gray-600 leading-8">
                I have a strong foundation in{" "}
                <span className="text-[#111111] font-semibold">
                  Java, JavaScript, HTML, CSS, and Data Structures &
                  Algorithms
                </span>
                , and I'm currently exploring{" "}
                <span className="text-[#FFB000] font-semibold">
                  React and modern web development
                </span>
                . I enjoy building practical projects and improving
                my programming skills through coding challenges and
                hands-on learning.
              </p>

              <p className="text-lg md:text-xl text-gray-600 leading-8">
                I enjoy creating websites, learning new technologies
                and building projects that solve real-world problems.
                My goal is to become a skilled{" "}
                <span className="text-[#111111] font-semibold">
                  cybersecurity expert
                </span>{" "}
                while developing secure and innovative applications.
              </p>

              <p className="text-lg md:text-xl text-gray-600 leading-8">
                🚀 I'm always excited to learn new technologies,
                build meaningful projects, collaborate with others,
                and grow as a Software Engineer.
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;