import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaArrowUp,
  FaHeart,
  FaEnvelope,
} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Milestones", href: "#milestones" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#0b0c10] border-t border-white/5 pt-16 pb-8 px-4 md:px-8 text-white">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#e63900] via-[#ff5722] to-[#ff7a00] flex items-center justify-center font-extrabold text-white text-base shadow-md shadow-[#ff5722]/30">
                N
              </div>
              <span className="text-white text-xl font-bold tracking-tight">
                Nikhil Pathak<span className="text-[#ff5722]">.</span>
              </span>
            </a>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Computer Science student at Invertis University, Full Stack Developer, and passionate problem solver building clean web applications and secure software.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://github.com/TechbyNikhil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#ff5722] hover:bg-[#ff5722]/10 transition-colors"
              >
                <FaGithub size={15} />
              </a>
              <a
                href="https://www.linkedin.com/in/nikhilpathak09/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#ff5722] hover:bg-[#ff5722]/10 transition-colors"
              >
                <FaLinkedinIn size={14} />
              </a>
              <a
                href="https://leetcode.com/u/nikhilpathak09/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#ff5722] hover:bg-[#ff5722]/10 transition-colors"
              >
                <SiLeetcode size={14} />
              </a>
              <a
                href="https://x.com/nikhilpathak09"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#ff5722] hover:bg-[#ff5722]/10 transition-colors"
              >
                <FaXTwitter size={14} />
              </a>
              <a
                href="https://www.instagram.com/hey.itsnikhil/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#ff5722] hover:bg-[#ff5722]/10 transition-colors"
              >
                <FaInstagram size={14} />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#ff5722]">
              Quick Navigation
            </p>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Direct Connect & Resume */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#ff5722]">
              Direct Contact
            </p>
            <a
              href="mailto:nikhilpathak0099@gmail.com"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-300 hover:text-[#ff5722] transition-colors break-all"
            >
              <FaEnvelope size={13} className="text-[#ff5722] shrink-0" />
              nikhilpathak0099@gmail.com
            </a>
            <p className="text-xs text-gray-500">
              Bareilly, Uttar Pradesh, India
            </p>
            <div className="pt-2">
              <a
                href="/Nikhil_Pathak_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.05] border border-white/10 hover:border-[#ff5722] text-xs font-semibold text-gray-200 hover:text-white transition-colors"
              >
                Download PDF Resume ↓
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <span>Crafted with</span>
            <FaHeart size={12} className="text-[#ff5722]" />
            <span>by Nikhil Pathak © {new Date().getFullYear()}</span>
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <span className="w-7 h-7 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:bg-[#ff5722] group-hover:border-[#ff5722] group-hover:text-white transition-all">
              <FaArrowUp size={11} />
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;