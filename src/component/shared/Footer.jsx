import { useState, useRef } from "react";
import footerBg from "../../assets/image (13).svg";
import navLogo from "../../assets/navLogo.svg";
import footerBadge from "../../assets/684862436e2f808b7aeb86d2_GH-webclip.png";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedinIn, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";
import footerLogo1 from "../../assets/684c3415b3eecf81e4b1d9a7_gh-logo-red.svg";
import footerLogo2 from "../../assets/684c3415e192971624995445_gh-logo-green.svg";
import footerLogo3 from "../../assets/684c3415233f03ab6c1143fa_gh-logo-pink.svg";
import footerLogo4 from "../../assets/684c3415233f03ab6c1143fa_gh-logo-pink.svg";

const Footer = () => {
  const navItems = ["Expertises", "Work", "About", "Contact"];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // --- Floating Logo Logic ---
  const containerRef = useRef(null);
  const [floatingLogos, setFloatingLogos] = useState([]);
  const lastSpawnPos = useRef({ x: 0, y: 0 });
  const lastSpawnTime = useRef(0);

  const randomLogos = [
    footerLogo1,
    footerLogo2,
    footerLogo3,
    footerLogo4,
    navLogo,
  ];

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768 || !containerRef.current) return;

    const now = Date.now();
    const dx = e.clientX - lastSpawnPos.current.x;
    const dy = e.clientY - lastSpawnPos.current.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 150 || now - lastSpawnTime.current < 250) return;

    lastSpawnTime.current = now;
    lastSpawnPos.current = { x: e.clientX, y: e.clientY };

    const rect = containerRef.current.getBoundingClientRect();
    const logoIndex = Math.floor(Math.random() * randomLogos.length);
    const newLogoId = now;

    const newLogo = {
      id: newLogoId,
      src: randomLogos[logoIndex],
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      rotate: Math.random() * 40 - 20,
    };

    setFloatingLogos((prev) => [...prev, newLogo]);

    setTimeout(() => {
      setFloatingLogos((prev) => prev.filter((logo) => logo.id !== newLogoId));
    }, 1500);
  };

  return (
    <footer
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none hidden md:block overflow-hidden">
        <AnimatePresence>
          {floatingLogos.map((logo) => (
            <motion.img
              key={logo.id}
              src={logo.src}
              alt=""
              // সাইজ বাড়িয়ে w-64 করা হয়েছে (approx 256px)
              className="absolute w-64 h-auto object-contain pointer-events-none"
              style={{
                left: logo.x,
                top: logo.y,
                translateX: "-50%",
                translateY: "-50%",
              }}
              // opacity শুরুতে ১ রাখা হয়েছে (কম থেকে বেশি হওয়ার পার্ট বাদ দেওয়া হয়েছে)
              initial={{ opacity: 1, scale: 0.6, y: 0 }}
              animate={{
                opacity: [1, 1, 0], // শুরু থেকে স্পষ্ট থাকবে, শেষে ভ্যানিশ হবে
                scale: 1,
                rotate: logo.rotate,
                y: -180, // ভেসে ওঠার দূরত্ব একটু বাড়ানো হয়েছে
              }}
              exit={{
                opacity: 0,
                scale: 1.2,
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="hidden md:block text-center pt-16 md:pt-24 px-4">
          <h2 className=" text-[42px] md:text-[95px] font-[550] pt-[250px] text-[#1D1D1F] leading-[0.85] tracking-tighter mb-8 md:mb-10">
            Let's Get Hyped!
          </h2>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 relative z-10">
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
            <button className="flex items-center gap-2 px-2 py-2 bg-[#FF6B35] text-white rounded-xl font-bold text-[14px] md:text-[15px] shadow-lg hover:brightness-110 transition-all">
              Get Results{" "}
              <span className="text-[16px] md:text-[18px] bg-white px-1.5 rounded-xs">
                🔥
              </span>
            </button>
          </div>
        </div>

        <div className="relative mt-8 md:bg-transparent md:mt-0">
          <div className="absolute md:block hidden inset-x-0 bottom-0 z-0">
            <img src={footerBg} alt="" className="w-full" />
          </div>

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

          <div className="relative z-10 flex flex-col items-center text-center gap-7 pt-28 pb-10 px-[20px] md:hidden">
            <div className="w-full flex justify-center mb-2">
              <img src={navLogo} alt="Logo" className="h-auto max-w-[360px]" />
            </div>
            <button className="flex items-center justify-center gap-2 w-fit px-2 py-1 bg-[#FF4D1C] text-white rounded-xl font-bold text-[19px] shadow-lg">
              Get Hyped! Neem contact op
              <span className="text-[19px] bg-white px-2 py-1 rounded-md">
                🔥
              </span>
            </button>
            <div className="flex justify-center gap-2">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white px-5 py-2 rounded-full shadow-sm border border-black/5 text-[14px] font-bold text-[#1D1D1F]"
                >
                  {item}
                </div>
              ))}
            </div>
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
            <div className="flex flex-col gap-6 mt-2 text-[#1D1D1F]">
              <div className="flex flex-col gap-1">
                <a
                  href="mailto:info@gethyped.nl"
                  className="font-bold text-[15px]"
                >
                  info@gethyped.nl
                </a>
                <a href="tel:+31615337496" className="font-bold text-[15px]">
                  +31 6 1533 7496
                </a>
              </div>
              <p className="font-bold text-[14px] opacity-80 leading-snug">
                Beltrumsestraat 6, 7141 AL Groenlo
              </p>
            </div>
            <div className="w-full flex flex-col items-center gap-2 mt-4 pt-6 border-t border-black/5">
              <p className="text-[13px] opacity-40 underline">
                Privacyvoorwaarden
              </p>
              <div className="flex flex-col gap-1 items-center">
                <p className="opacity-30 text-[11px]">© 2026 Get Hyped</p>
                <p className="opacity-30 text-[11px]">© Design by Dylan</p>
              </div>
            </div>
          </div>

          <div className="relative z-10 hidden md:grid grid-cols-12 gap-8 items-end pb-3 pt-30 px-2">
            <div className="col-span-7 flex justify-start">
              <img
                src={navLogo}
                alt="Logo"
                className="h-28 w-auto mb-[-10px]"
              />
            </div>

            <div className="col-span-3 flex flex-col items-start gap-8">
              <div className="flex gap-2">
                {navItems.map((item, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative bg-white px-3 py-1.5 rounded-[10px] cursor-pointer shadow-sm border border-black/5 overflow-hidden group"
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
              <div className="flex w-full justify-between items-center text-[12px] opacity-60">
                <p>© 2026 Get Hyped</p>
                <p>© Design by Dylan</p>
              </div>
            </div>

            <div className="col-span-2 flex flex-col gap-3 text-[14px]">
              <div className="flex flex-col gap-0.5">
                <span className="text-[15px] font-extrabold tracking-widest mb-1 uppercase">
                  Contact
                </span>
                <a
                  href="mailto:info@gethyped.nl"
                  className="font-bold opacity-70 text-[12px] hover:text-red-500 hover:underline"
                >
                  info@gethyped.nl
                </a>
                <a
                  href="tel:+31615337496"
                  className="font-bold opacity-70 text-[12px] hover:text-red-500 hover:underline"
                >
                  +31 6 1533 7496
                </a>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[15px] font-extrabold tracking-widest mb-1 uppercase">
                  Address
                </span>
                <p className="font-bold opacity-70 text-[12px] leading-snug">
                  Beltrumsestraat 6,
                  <br />
                  7141 AL Groenlo
                </p>
              </div>
              <p className="opacity-60 text-[12px] cursor-pointer hover:underline">
                Privacyvoorwaarden
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
