import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaArrowRight,
  FaCheck,
  FaCopy,
} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Internship / Opportunity",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("nikhilpathak0099@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    // Simulate sending
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5722]/15 border border-[#ff5722]/30 text-[#ff5722] text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#ff5722]"></span>
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
            Let's Build Something <span className="text-[#ff5722]">Together.</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            I'm currently seeking Software Engineering internships, project collaborations, and full-stack opportunities. Drop a message or reach out through social platforms.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Card with Glowing Accents */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-[#11131a] border border-white/10 space-y-8 shadow-2xl relative overflow-hidden">
            
            {/* Luminous accent corner */}
            <div className="absolute -top-24 -right-24 w-52 h-52 bg-[#ff5722]/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff7a00]">
                Contact Info
              </span>
              <h3 className="text-2xl font-black text-white">
                Direct Communication
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Whether you have an internship position, freelance idea, or technical question, my inbox is always open.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              
              {/* Email */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#ff5722]/10 border border-[#ff5722]/30 flex items-center justify-center text-[#ff5722] shrink-0">
                    <FaEnvelope size={16} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Email</p>
                    <a
                      href="mailto:nikhilpathak0099@gmail.com"
                      className="text-xs sm:text-sm font-bold text-white hover:text-[#ff5722] transition-colors truncate block"
                    >
                      nikhilpathak0099@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-[#ff5722] text-xs font-semibold text-gray-300 hover:text-white transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <FaCheck size={11} className="text-white" />
                      <span className="text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <FaCopy size={11} />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                  <FaPhone size={15} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Phone / WhatsApp</p>
                  <a
                    href="tel:+918273238460"
                    className="text-xs sm:text-sm font-bold text-white hover:text-[#ff5722] transition-colors"
                  >
                    +91 8273238460
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <FaLocationDot size={16} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Location</p>
                  <p className="text-xs sm:text-sm font-bold text-white">
                    Bareilly, Uttar Pradesh, India
                  </p>
                </div>
              </div>

            </div>

            {/* Social Grid */}
            <div className="space-y-3 pt-2">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Connect Across Platforms
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                <a
                  href="https://github.com/TechbyNikhil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#ff5722] hover:text-white text-gray-300 text-xs font-semibold transition-all"
                >
                  <FaGithub size={15} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/nikhilpathak09/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#ff5722] hover:text-white text-gray-300 text-xs font-semibold transition-all"
                >
                  <FaLinkedinIn size={14} className="text-[#0a66c2]" /> LinkedIn
                </a>
                <a
                  href="https://leetcode.com/u/nikhilpathak09/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#ff5722] hover:text-white text-gray-300 text-xs font-semibold transition-all"
                >
                  <SiLeetcode size={14} className="text-[#ffa116]" /> LeetCode
                </a>
                <a
                  href="https://x.com/nikhilpathak09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#ff5722] hover:text-white text-gray-300 text-xs font-semibold transition-all"
                >
                  <FaXTwitter size={14} /> Twitter / X
                </a>
                <a
                  href="https://www.instagram.com/hey.itsnikhil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#ff5722] hover:text-white text-gray-300 text-xs font-semibold transition-all col-span-2 sm:col-span-1"
                >
                  <FaInstagram size={14} className="text-[#e4405f]" /> Instagram
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#11131a] border border-white/10 shadow-2xl">
            <div className="space-y-2 mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff5722]">
                Send a Note
              </span>
              <h3 className="text-2xl font-black text-white">
                Send a Message
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Fill out the form below and I'll respond within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#ff5722]/10 border border-[#ff5722]/30 text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-[#ff5722] flex items-center justify-center text-white mx-auto text-2xl shadow-lg shadow-[#ff5722]/30">
                  <FaCheck />
                </div>
                <h4 className="text-xl font-bold text-white">
                  Message Sent Successfully!
                </h4>
                <p className="text-gray-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out, {formData.name}. I'll review your note and get back to you shortly at {formData.email}.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "Internship / Opportunity", message: "" });
                  }}
                  className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-orange-100 transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-semibold text-gray-300">
                      Your Name <span className="text-[#ff5722]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#ff5722] focus:ring-2 focus:ring-[#ff5722]/20 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-semibold text-gray-300">
                      Email Address <span className="text-[#ff5722]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#ff5722] focus:ring-2 focus:ring-[#ff5722]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Subject Selector */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-semibold text-gray-300">
                    Subject / Discussion Topic
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#141620] border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff5722] focus:ring-2 focus:ring-[#ff5722]/20 transition-all"
                  >
                    <option value="Internship / Opportunity">Software Engineering Internship</option>
                    <option value="Web Project">Web Development Project</option>
                    <option value="Collaboration">Hackathon / Collaboration</option>
                    <option value="General Inquiry">General Networking / Coffee Chat</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold text-gray-300">
                    Your Message <span className="text-[#ff5722]">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell me about the role, project, or idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#ff5722] focus:ring-2 focus:ring-[#ff5722]/20 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#ff5722] hover:bg-[#ff6b35] text-white font-bold text-sm py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-[#ff5722]/30 hover:shadow-2xl hover:shadow-[#ff5722]/50 hover:-translate-y-0.5 cursor-pointer"
                >
                  Send Message <FaArrowRight size={13} />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;