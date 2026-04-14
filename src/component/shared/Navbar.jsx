import React, { useState } from "react";
import navLogo from "../../assets/navLogo.svg";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const navItems = ["Expertises", "Work", "About", "Contact"];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <nav className="w-full bg-base-100 px-6 py-4">
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
        <div className="hidden lg:flex bg-white rounded-xl p-1 relative">
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
                {/* টেক্সট: হোভার হলে কালার চেঞ্জ হবে */}
                <span
                  className={`relative z-30 transition-colors duration-300 ${hoveredIndex === index ? "text-white" : "text-neutral"}`}
                >
                  {item}
                </span>

                {/* হোভার ব্যাকগ্রাউন্ড অ্যানিমেশন */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      // layoutId সরিয়ে দেওয়া হয়েছে যাতে সবসময় নিচ থেকেই অ্যানিমেশন শুরু হয়
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
                      {/* লাল টপ বর্ডার */}
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
            whileHover={{ rotate: -5, scale: 1 }} // স্কেল বাড়িয়ে ১.১৫ করা হয়েছে যাতে আরও বড় দেখায়
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "tween",
              duration: 0, // ডিউরেশন ০ করায় এটি সাথে সাথে (Instant) হবে
              ease: "linear",
            }}
            className="bg-secondary hover:opacity-90 text-neutral font-bold py-1 px-1.5 rounded-[10px] flex items-center gap-2 transition-all text-[15px] shadow-sm"
          >
            Get Results
            <span className="bg-white rounded-[5px] px-2 py-1.5">🔥</span>
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
