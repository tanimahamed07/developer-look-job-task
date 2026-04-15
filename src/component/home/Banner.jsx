import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bannerVedio from "../../assets/Loop Salontopper.mp4";
import bannerVedio2 from "../../assets/petrolhead-loop.mp4";

const Banner = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // Initial state-e random rotation and y-axis save korar jonno state
  const [randomStyles, setRandomStyles] = useState([
    { r: -8, y: 5 },
    { r: 6, y: -4 },
    { r: 3, y: 2 },
    { r: 9, y: -3 },
  ]);

  // Mouse shore gele random value update korar function
  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setRandomStyles(randomStyles.map(() => ({
      r: (Math.random() * 10 - 5) * 2, // -10 to 10 degree random
      y: (Math.random() * 10 - 5),      // -5 to 5 pixel random
    })));
  };

  const getSpreadValue = (index) => {
    if (hoveredIndex === null) return 0;
    if (index === hoveredIndex) return 0;
    const direction = index < hoveredIndex ? -1 : 1;
    return direction * (Math.random() * 40 + 80); // Distance ektu bariyechi spread bhalo hobar jonno
  };

  return (
    <section className="relative w-full px-6 pt-16 pb-20 bg-[#F9F6F0] overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-left">
        <h1 className="text-[60px] md:text-[95px] font-bold leading-[1] text-[#1D1D1F] tracking-tight">
          Get Hyped. Get <br /> Noticed. Get Results.
        </h1>
        <p className="mt-3 text-[18px] md:text-[24px] font-semibold text-[1D1D1F] max-w-sm">
          Klaar met gokken op content <br /> die niets oplevert?
        </p>

        <div className="flex mx-12 flex-wrap lg:flex-nowrap items-center justify-center py-12 gap-0 group">
          
          {/* Card 1: Blue */}
          <motion.div
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={handleMouseLeave}
            animate={{ 
              x: getSpreadValue(0),
              rotate: hoveredIndex === 0 ? 0 : randomStyles[0].r,
              y: hoveredIndex === 0 ? 0 : `${randomStyles[0].y}%`,
            }}
            whileHover={{ scale: 1.1, zIndex: 100 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-full sm:w-[340px] h-[460px] bg-primary rounded-[40px] p-8 flex flex-col justify-between text-white shadow-2xl relative z-10 lg:-mr-10 cursor-pointer"
          >
            <h2 className="text-[75px] leading-tight text-secondary-content font-extrabold tracking-tight">10M+</h2>
            <div className="space-y-3">
              <p className="font-extrabold text-[24px] text-black tracking-tight">Organische views</p>
              <div className="w-full h-[1.5px] bg-black opacity-80" />
              <p className="text-[17px] leading-snug font-medium text-black tracking-tight">Groei door slimme content</p>
            </div>
          </motion.div>

          {/* Card 2: Image/Video */}
          <motion.div
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={handleMouseLeave}
            animate={{ 
              x: getSpreadValue(1),
              rotate: hoveredIndex === 1 ? 0 : randomStyles[1].r,
              y: hoveredIndex === 1 ? -10 : `${randomStyles[1].y}%`,
            }}
            whileHover={{ scale: 1.1, zIndex: 100 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-full sm:w-[340px] h-[460px] bg-gray-200 rounded-[40px] overflow-hidden shadow-2xl relative z-20 lg:-mr-10 cursor-pointer"
          >
            <video src={bannerVedio} autoPlay loop muted playsInline className="w-full h-full object-cover rounded-[40px]" />
          </motion.div>

          {/* Card 3: Green */}
          <motion.div
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={handleMouseLeave}
            animate={{ 
              x: getSpreadValue(2),
              rotate: hoveredIndex === 2 ? 0 : randomStyles[2].r,
              y: hoveredIndex === 2 ? 0 : `${randomStyles[2].y}%`,
            }}
            whileHover={{ scale: 1.1, zIndex: 100 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-full sm:w-[340px] h-[460px] bg-accent rounded-[40px] p-8 flex flex-col justify-between text-[#003311] shadow-2xl relative z-30 lg:-mr-10 cursor-pointer"
          >
            <h2 className="text-[75px] leading-tight text-black font-extrabold tracking-tight">30+</h2>
            <div className="space-y-3">
              <p className="font-extrabold text-[24px] text-black tracking-tight">Merken geholpen</p>
              <div className="w-full h-[1.5px] bg-black/30" />
              <p className="text-[17px] leading-snug font-medium text-black tracking-tight">Van start-up tot multinational</p>
            </div>
          </motion.div>

          {/* Card 4: Video/Car */}
          <motion.div
            onMouseEnter={() => setHoveredIndex(3)}
            onMouseLeave={handleMouseLeave}
            animate={{ 
              x: getSpreadValue(3),
              rotate: hoveredIndex === 3 ? 0 : randomStyles[3].r,
              y: hoveredIndex === 3 ? 0 : `${randomStyles[3].y}%`,
            }}
            whileHover={{ scale: 1.1, zIndex: 100 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-full sm:w-[340px] h-[460px] bg-black rounded-[40px] overflow-hidden shadow-2xl relative z-40 cursor-pointer"
          >
            <video src={bannerVedio2} autoPlay loop muted playsInline className="w-full h-full object-cover rounded-[40px]" />
            <div className="absolute bottom-8 left-8 text-white font-bold bg-white/20 backdrop-blur-md px-5 py-2 rounded-xl text-sm uppercase tracking-widest">
              Voorzien van een
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Banner;