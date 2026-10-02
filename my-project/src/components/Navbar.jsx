import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-5 left-0 w-full z-50 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Navbar Container */}
        <nav className="bg-[#111111] rounded-full px-6 py-4 shadow-2xl">

          <div className="flex items-center justify-between">

            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-[#FFB000] flex items-center justify-center font-bold text-black">
                N
              </div>

              <span className="text-white text-xl font-bold">
                Nikhil<span className="text-[#FFB000]">.</span>
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-2">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-5 py-2 text-gray-300 rounded-full hover:bg-[#FFB000] hover:text-black transition duration-300"
                >
                  {link.name}
                </a>
              ))}

            </div>

            {/* Resume Button */}
            <div className="hidden lg:block">
              <a
  href="/Nikhil_Pathak_Resume.pdf"
  download="Nikhil_Pathak_Resume.pdf"
  className="bg-[#FFB000] text-[#111111] px-7 py-3.5 rounded-full font-semibold hover:bg-white transition duration-300"
>
  Resume ↓
</a>
            </div>

            {/* Mobile Button */}
            <button
              className="lg:hidden text-white text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "✕" : "☰"}
            </button>

          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden mt-6 border-t border-white/10 pt-6">

              <div className="flex flex-col gap-3">

                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-[#FFB000] transition"
                  >
                    {link.name}
                  </a>
                ))}

                <a
                  href="/Nikhil_Pathak_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FFB000] text-black px-5 py-3 rounded-full text-center mt-3"
                >
                  Resume
                </a>

              </div>

            </div>
          )}

        </nav>
      </div>
    </header>
  );
};

export default Navbar;