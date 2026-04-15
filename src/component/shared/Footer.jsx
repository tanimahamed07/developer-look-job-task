import React, { useState } from "react";
import footerBg from "../../assets/image (13).svg";
import navLogo from "../../assets/navLogo.svg";
import footerBadge from "../../assets/684862436e2f808b7aeb86d2_GH-webclip.png";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedinIn, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const navItems = ["Expertises", "Work", "About", "Contact"];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <footer className="relative w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* --- Top Section (Hidden on Mobile) --- */}
        <div className="hidden md:block text-center pt-16 md:pt-24 px-4">
          <h2 className="text-[42px] md:text-[95px] font-[550] text-[#1D1D1F] leading-[0.85] tracking-tighter mb-8 md:mb-10">
            Let's Get Hyped!
          </h2>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 relative z-10">
            {/* Mail Button */}
            <button className="flex items-center gap-3 px-2 border border-black rounded-xl font-extrabold text-[14px] md:text-[15px] hover:bg-black hover:text-white transition-all group shadow-sm">
              Mail ons direct
              <span className="bg-black text-white rounded-md p-2 group-hover:bg-white group-hover:text-black transition-colors">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
            </button>
            {/* Get Results Button */}
            <button className="flex items-center gap-2 px-2 py-2 bg-[#FF6B35] text-white rounded-xl font-bold text-[14px] md:text-[15px] shadow-lg hover:brightness-110 transition-all">
              Get Results{" "}
              <span className="text-[16px] md:text-[18px] bg-white px-1.5 rounded-xs">
                🔥
              </span>
            </button>
          </div>
        </div>

        {/* --- Bottom Content Area --- */}
        <div className="relative mt-8 md:mt-0">
          {/* Background SVG Shape - Updated for Mobile height */}
          <div className="absolute inset-x-0 bottom-0 z-0">
            <img 
              src={footerBg} 
              alt="" 
              className="w-full object-cover min-h-[750px] md:min-h-0 object-bottom" 
            />
          </div>

          {/* Rotating Circular Badge (Hidden on Mobile) */}
          <div className="hidden md:block absolute top-5 right-4 md:right-24 z-30 -translate-y-1/2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="w-20 h-20 md:w-28 md:h-28"
            >
              <img
                src={footerBadge}
                alt="Badge"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>

          {/* ── MOBILE LAYOUT (UPDATED) ── */}
          <div className="relative z-10 flex flex-col items-center text-center gap-7 pt-28 pb-10 px-[20px] md:hidden">
            {/* Logo - Large centered according to screenshot */}
            <div className="w-full flex justify-center mb-2">
              <img
                src={navLogo}
                alt="Logo"
                className="w-[85%] h-auto max-w-[320px]"
              />
            </div>

            {/* Orange Button - Full rounded and focused */}
            <button className="flex items-center justify-center gap-2 w-fit px-6 py-3 bg-[#FF4D1C] text-white rounded-full font-bold text-[15px] shadow-lg">
              Get Hyped! Neem contact op
              <span className="text-[18px] bg-white/20 px-1 rounded-md">
                🔥
              </span>
            </button>

            {/* Nav Pills - Pills shape */}
            <div className="flex flex-wrap justify-center gap-2">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white px-5 py-2 rounded-full shadow-sm border border-black/5 text-[14px] font-bold text-[#1D1D1F]"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-3">
              {[FaLinkedinIn, FaTiktok, FaInstagram, FaYoutube].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="w-11 h-11 bg-white rounded-full flex items-center justify-center border border-black/5 shadow-sm"
                  >
                    <Icon size={18} />
                  </div>
                ),
              )}
            </div>

            {/* Contact Details - Stacked centered */}
            <div className="flex flex-col gap-6 mt-2">
              <div className="flex flex-col gap-1">
                <a
                  href="mailto:info@gethyped.nl"
                  className="font-bold text-[15px] text-[#1D1D1F]"
                >
                  info@gethyped.nl
                </a>
                <a
                  href="tel:+31615337496"
                  className="font-bold text-[15px] text-[#1D1D1F]"
                >
                  +31 6 1533 7496
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-[14px] text-[#1D1D1F] opacity-80 leading-snug">
                  Beltrumsestraat 6, 7141 AL Groenlo
                </p>
              </div>
            </div>

            {/* Bottom Links */}
            <div className="w-full flex flex-col items-center gap-2 mt-4 pt-6 border-t border-black/5">
              <p className="text-[13px] opacity-40 underline">
                Privacyvoorwaarden
              </p>
              <div className="flex flex-col gap-1 items-center">
                <p className="opacity-30 text-[11px]">© 2025 Get Hyped</p>
                <p className="opacity-30 text-[11px]">© Design by Dylan</p>
              </div>
            </div>
          </div>

          {/* ── DESKTOP LAYOUT (unchanged) ── */}
          <div className="relative z-10 hidden md:grid grid-cols-12 gap-8 items-end pb-3 pt-30 px-2">
            {/* 1. Left: Logo */}
            <div className="col-span-7 flex justify-start">
              <img
                src={navLogo}
                alt="Logo"
                className="h-28 w-auto mb-[-10px]"
              />
            </div>

            {/* 2. Middle: Navigation & Socials */}
            <div className="col-span-3 flex flex-col items-start gap-8">
              <div className="flex gap-2">
                {navItems.map((item, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative bg-white px-2 py-1 rounded-[10px] cursor-pointer shadow-sm border border-black/5 overflow-hidden group"
                  >
                    <span
                      className={`relative z-20 text-[14px] font-bold transition-colors duration-300 ${hoveredIndex === index ? "text-white" : "text-[#1D1D1F]"}`}
                    >
                      {item}
                    </span>
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.div
                          className="absolute inset-0 bg-black z-10"
                          initial={{ y: "100%" }}
                          animate={{ y: 0 }}
                          exit={{ y: "100%" }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 35,
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-5">
                <span className="text-[11px] font-black uppercase opacity-60 tracking-widest">
                  Follow us
                </span>
                <div className="flex gap-2.5">
                  {[FaLinkedinIn, FaTiktok, FaInstagram, FaYoutube].map(
                    (Icon, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-black/5 cursor-pointer hover:bg-black hover:text-white transition-all shadow-sm"
                      >
                        <Icon size={16} />
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="flex w-full justify-between items-center">
                <p className="opacity-60 text-[12px]">© 2025 Get Hyped</p>
                <p className="opacity-60 text-[12px]">© Design by Dylan</p>
              </div>
            </div>

            {/* 3. Right: Contact Info */}
            <div className="col-span-2 flex flex-col gap-3 text-[14px]">
              <div className="flex flex-col gap-0.5">
                <span className="text-[15px] font-extrabold tracking-widest mb-1">
                  Contact
                </span>
                <a
                  href="mailto:info@gethyped.nl"
                  className="font-bold opacity-70 text-[12px] hover:text-red-500 text-[#1D1D1F] hover:underline"
                >
                  info@gethyped.nl
                </a>
                <a
                  href="tel:+31615337496"
                  className="font-bold opacity-70 text-[12px] hover:text-red-500 text-[#1D1D1F] hover:underline"
                >
                  +31 6 1533 7496
                </a>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[15px] font-extrabold tracking-widest mb-1">
                  Address
                </span>
                <p className="font-bold opacity-70 text-[12px] text-[#1D1D1F] leading-snug">
                  Beltrumsestraat 6,
                  <br />
                  7141 AL Groenlo
                </p>
              </div>
              <div>
                <p className="opacity-60 text-[12px]">Privacyvoorwaarden</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;