const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#F7F5EF] text-[#111111] px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFB000] px-4 py-2 rounded-full text-sm font-semibold mb-5">
            <span className="w-2 h-2 bg-black rounded-full"></span>
            Contact Me
          </div>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
            Let's turn your
            <span className="text-[#FFB000]"> ideas </span>
            into reality.
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mt-6 leading-8">
            Have a project in mind, an internship opportunity, or
            just want to connect? Send me a message and let's
            create something amazing together.
          </p>
        </div>

        {/* Contact Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left Card */}
          <div className="bg-[#111111] text-white rounded-[2rem] p-8 md:p-10">

            <p className="text-[#FFB000] text-sm font-semibold uppercase tracking-wider">
              Get in touch
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mt-3">
              Let's talk.
            </h3>

            <p className="text-gray-400 mt-5 leading-7">
              I'm always interested in discussing new projects,
              collaborations, internships and creative ideas.
            </p>

            {/* Email */}
            <div className="mt-10">
              <p className="text-gray-500 text-sm mb-2">
                Email
              </p>

              <a
                href="mailto:nikhilpathak0099@gmail.com"
                className="text-lg md:text-xl font-medium hover:text-[#FFB000] transition"
              >
                nikhilpathak0099@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <p className="text-gray-500 text-sm mb-4">
                Find me online
              </p>

              <div className="flex flex-wrap gap-3">

                <a
                  href="https://github.com/TechbyNikhil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 border border-white/20 rounded-full hover:bg-[#FFB000] hover:text-black hover:border-[#FFB000] transition"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/nikhilpathak09/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 border border-white/20 rounded-full hover:bg-[#FFB000] hover:text-black hover:border-[#FFB000] transition"
                >
                  LinkedIn ↗
                </a>

                <a
                  href="https://x.com/nikhilpathak09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 border border-white/20 rounded-full hover:bg-[#FFB000] hover:text-black hover:border-[#FFB000] transition"
                >
                  X / Twitter ↗
                </a>

                <a
                  href="https://leetcode.com/u/nikhilpathak09/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 border border-white/20 rounded-full hover:bg-[#FFB000] hover:text-black hover:border-[#FFB000] transition"
                >
                  LeetCode ↗
                </a>

              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-black/10">

            <h3 className="text-3xl font-bold">
              Send a message
            </h3>

            <p className="text-gray-500 mt-2 mb-8">
              Fill out the form and I'll get back to you soon.
            </p>

            <form className="space-y-6">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full bg-[#F7F5EF] border border-black/10 rounded-xl px-4 py-3.5 outline-none focus:border-[#FFB000] focus:ring-2 focus:ring-[#FFB000]/20 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full bg-[#F7F5EF] border border-black/10 rounded-xl px-4 py-3.5 outline-none focus:border-[#FFB000] focus:ring-2 focus:ring-[#FFB000]/20 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full bg-[#F7F5EF] border border-black/10 rounded-xl px-4 py-3.5 outline-none focus:border-[#FFB000] focus:ring-2 focus:ring-[#FFB000]/20 transition resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-[#111111] text-white py-4 rounded-full font-semibold hover:bg-[#FFB000] hover:text-black transition duration-300"
              >
                Send Message →
              </button>

            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 bg-[#FFB000] rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider">
              Have an idea?
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mt-2">
              Let's build something together.
            </h3>
          </div>

          <a
            href="mailto:nikhilpathak0099@gmail.com"
            className="bg-[#111111] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white hover:text-black transition whitespace-nowrap"
          >
            Email Me ↗
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;