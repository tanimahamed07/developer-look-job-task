import React, { useState, useRef } from "react";
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

  // --- Scroll Logic ---
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // যদি নিচে স্ক্রল করা হয় এবং ২০০ পিক্সেলের বেশি নিচে নামা হয় তবে হাইড হবে
    if (latest > previous && latest > 200) {
      setHidden(true);
    } else {
      // যদি উপরে স্ক্রল করা হয় তবে শো হবে
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 w-full z-[100] bg-transparent px-6 py-4 " // bg-transparent এবং fixed করা হয়েছে
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* ১. Logo Section */}
        <div className="flex-1">
          <img
            src={navLogo}
            alt="Developer Look Logo"
            className="h-14 w-auto"
          />
        </div>

        {/* ২. Navigation Menu (Floating Pill Style) */}
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

        {/* ৩. Action Button */}
        <div className="flex-1 flex justify-end">
          <motion.button
            whileHover={{ rotate: -5, scale: 1 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "tween",
              duration: 0,
              ease: "linear",
            }}
            className="bg-[#FF6B35] hover:opacity-90 text-neutral font-bold py-1 px-1.5 rounded-[10px] flex items-center gap-2 transition-all text-[15px] shadow-sm"
          >
            Get Results
            <span className="bg-white rounded-[5px] px-2 py-1.5">🔥</span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
