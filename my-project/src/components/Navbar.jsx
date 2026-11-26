import { useState, useEffect } from "react";
import { FaBars, FaXmark, FaArrowDown, FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Milestones", href: "#milestones" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 pt-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <nav
          className={`flex items-center justify-between px-5 md:px-7 py-3.5 rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-[#0d0f15]/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/60"
              : "bg-[#12141c]/60 backdrop-blur-md border border-white/10 shadow-lg"
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#e63900] via-[#ff5722] to-[#ff7a00] flex items-center justify-center font-extrabold text-white text-base shadow-md shadow-[#ff5722]/30 group-hover:scale-105 transition-transform duration-300">
              N
            </div>
            <span className="text-white text-lg font-bold tracking-tight">
              Nikhil<span className="text-[#ff5722]">.</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-full hover:bg-white/5 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/TechbyNikhil"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#ff5722] hover:bg-[#ff5722]/10 transition-all duration-200"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/nikhilpathak09/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#ff5722] hover:bg-[#ff5722]/10 transition-all duration-200"
            >
              <FaLinkedinIn size={15} />
            </a>
            <a
              href="/Nikhil_Pathak_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ff5722] hover:bg-[#ff6b35] text-white text-xs lg:text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-md shadow-[#ff5722]/30 hover:shadow-lg hover:shadow-[#ff5722]/50 hover:-translate-y-0.5"
            >
              Resume <FaArrowDown size={11} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-gray-200 hover:text-white hover:border-white/30 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FaXmark size={18} /> : <FaBars size={17} />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 p-5 rounded-3xl bg-[#0e1017]/95 backdrop-blur-2xl border border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-white/10 flex items-center gap-3">
                <a
                  href="/Nikhil_Pathak_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#ff5722] text-white text-sm font-semibold py-3 rounded-xl shadow-md shadow-[#ff5722]/30"
                >
                  Download Resume <FaArrowDown size={12} />
                </a>
                <a
                  href="https://github.com/TechbyNikhil"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-11 h-11 rounded-xl border border-white/15 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#ff5722]"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/nikhilpathak09/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-xl border border-white/15 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#ff5722]"
                >
                  <FaLinkedinIn size={17} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;