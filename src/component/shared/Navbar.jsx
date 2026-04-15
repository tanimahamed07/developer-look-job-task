import { useState, useEffect } from "react";
import navLogo from "../../assets/navLogo.svg";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

const Navbar = () => {
  const navItems = ["Expertises", "Work", "About", "Contact"];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // --- Scroll Logic ---
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 200 && !isOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 w-full z-[100] bg-transparent px-6 py-4"
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between relative">
        {/* ১. Logo Section */}

        <div className="flex-1 z-[70]">
          <img
            src={navLogo}
            alt="Developer Look Logo"
            className="h-14 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex bg-white rounded-xl p-1 relative shadow-sm">
          <ul
            className="flex items-center text-[14px] font-semibold text-neutral relative"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {navItems.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                className="relative px-3 py-2 cursor-pointer z-10 overflow-hidden rounded-xl"
              >
                <span
                  className={`relative z-30 transition-colors duration-300 ${hoveredIndex === index ? "text-white" : "text-neutral"}`}
                >
                  {item}
                </span>

                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-0 bg-black z-10"
                      initial={{ y: "100%", skewY: 5 }}
                      animate={{ y: 0, skewY: 0 }}
                      exit={{ y: "100%", skewY: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                      style={{ originY: 1 }}
                    >
                      <div className="absolute top-0 left-0 w-full h-[2px] bg-red-600" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Button & Hamburger */}
        <div className="flex-1 flex justify-end items-center  gap-4">
          <motion.button
            whileHover={{ rotate: -5, scale: 1 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex bg-[#f7bbf3] hover:opacity-90 text-neutral font-bold py-1 px-1.5 rounded-[10px] items-center gap-2 transition-all text-[15px] shadow-sm z-50"
          >
            Get Results{" "}
            <span className="bg-white rounded-[5px] px-2 py-1.5">🔥</span>
          </motion.button>

          {/* Hamburger Menu Icon - Background changes based on isOpen state */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden flex flex-col gap-1.5 z-[60] p-3 rounded-md shadow-sm transition-colors duration-300 ${
              isOpen ? "bg-white" : "bg-[#FCD7F1]"
            }`}
          >
            <span
              className={`h-0.5 w-6 bg-black transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-black transition-all ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-black transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Sidebar Menu (Top to Bottom) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: "-100%", opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: "-100%", opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              // 'fixed' এর বদলে 'inset-4' ব্যবহার করা হয়েছে যাতে চারপাশ থেকে গ্যাপ তৈরি হয়
              className="fixed inset-4 bg-[#fcb8f9] z-[50] flex flex-col items-center justify-center lg:hidden rounded-xl shadow-2xl border border-white/20"
            >
              <ul className="flex flex-col items-center gap-4 w-full px-10">
                {navItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.2 + index * 0.1,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    onClick={() => setIsOpen(false)}
                    className="w-full max-w-[220px] text-center bg-white py-4 rounded-2xl shadow-sm text-xl font-bold text-black cursor-pointer active:scale-95 transition-transform"
                  >
                    {item}
                  </motion.li>
                ))}

                {/* Mobile Bottom Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="mt-8 bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-2 font-bold shadow-lg"
                >
                  Get Results{" "}
                  <span className="bg-white rounded-md px-1">🔥</span>
                </motion.button>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
