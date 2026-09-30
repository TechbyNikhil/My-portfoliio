import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#111111] text-white px-6 pt-16 pb-6">
      <div className="max-w-7xl mx-auto">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">

          {/* About / Logo */}
          <div>
            <a
              href="#home"
              className="flex items-center gap-3 w-fit"
            >
              <div className="w-11 h-11 rounded-full bg-[#FFB000] flex items-center justify-center text-[#111111] text-xl font-bold">
                N
              </div>

              <span className="text-2xl font-bold">
                Nikhil<span className="text-[#FFB000]">.</span>
              </span>
            </a>

            <p className="text-gray-400 leading-7 mt-6 max-w-sm">
              B.Tech Computer Science student passionate about
              Software Engineering, Web Development and
              Cybersecurity.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">

              {/* GitHub */}
              <a
                href="https://github.com/TechbyNikhil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-gray-300 hover:bg-[#FFB000] hover:text-[#111111] hover:border-[#FFB000] transition duration-300"
              >
                <FaGithub size={20} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/nikhilpathak09/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-gray-300 hover:bg-[#FFB000] hover:text-[#111111] hover:border-[#FFB000] transition duration-300"
              >
                <FaLinkedinIn size={19} />
              </a>

              {/* Twitter / X */}
              <a
                href="https://x.com/nikhilpathak09"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-gray-300 hover:bg-[#FFB000] hover:text-[#111111] hover:border-[#FFB000] transition duration-300"
              >
                <FaTwitter size={19} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/hey.itsnikhil/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-gray-300 hover:bg-[#FFB000] hover:text-[#111111] hover:border-[#FFB000] transition duration-300"
              >
                <FaInstagram size={20} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4 max-w-xs">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-[#FFB000] transition duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">
              Let's Connect
            </h3>

            <p className="text-gray-400 leading-7 mb-5">
              Have an idea, project or opportunity? Feel free to
              reach out.
            </p>

            {/* Email */}
            <a
              href="mailto:nikhilpathak0099@gmail.com"
              className="flex items-center gap-3 text-gray-300 hover:text-[#FFB000] transition duration-300 break-all"
            >
              <span className="w-10 h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center">
                ✉
              </span>

              nikhilpathak0099@gmail.com
            </a>

            {/* Twitter */}
            <a
              href="https://x.com/nikhilpathak09"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-[#FFB000] transition duration-300 mt-4"
            >
              <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                <FaTwitter size={18} />
              </span>

              @nikhilpathak09
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/hey.itsnikhil/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-[#FFB000] transition duration-300 mt-4"
            >
              <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                <FaInstagram size={19} />
              </span>

              @hey.itsnikhil
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10"></div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-center text-center py-7">

          <p className="text-gray-400 text-sm">
            Made with{" "}
            <span className="text-red-500">❤️</span>{" "}
            by{" "}
            <span className="text-white font-semibold">
              Nikhil Pathak
            </span>
          </p>

          <p className="text-gray-600 text-xs mt-2">
            © {new Date().getFullYear()} Nikhil Pathak. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;