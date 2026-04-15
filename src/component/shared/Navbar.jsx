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
        <div className="flex-1">
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

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col gap-1.5 z-[60] bg-white p-2 rounded-md shadow-sm"
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
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-[#FCD7F1] z-[50] flex flex-col items-center justify-center lg:hidden"
            >
              <ul className="flex flex-col items-center gap-4 w-full px-10">
                {navItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    onClick={() => setIsOpen(false)}
                    className="w-full max-w-[200px] text-center bg-white py-3 rounded-xl shadow-sm text-xl font-bold text-black cursor-pointer active:scale-95 transition-transform"
                  >
                    {item}
                  </motion.li>
                ))}

                {/* Mobile Bottom Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="mt-10 bg-black text-white px-6 py-3 rounded-xl flex items-center gap-2 font-bold"
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
