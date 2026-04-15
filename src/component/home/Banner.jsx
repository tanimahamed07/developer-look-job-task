import React, { useState } from "react";
import { motion } from "framer-motion";
import bannerVedio from "../../assets/Loop Salontopper.mp4";
import bannerVedio2 from "../../assets/petrolhead-loop.mp4";

const Banner = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [randomStyles, setRandomStyles] = useState([
    { r: -8, y: 5 },
    { r: 6, y: -4 },
    { r: 3, y: 2 },
    { r: 9, y: -3 },
  ]);

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setRandomStyles(
      randomStyles.map(() => ({
        r: (Math.random() * 10 - 5) * 2,
        y: Math.random() * 10 - 5,
      })),
    );
  };

  const getSpreadValue = (index) => {
    if (hoveredIndex === null) return 0;
    if (index === hoveredIndex) return 0;
    const direction = index < hoveredIndex ? -1 : 1;
    return direction * (Math.random() * 40 + 80);
  };

  return (
    <section className="relative w-full px-6 pt-2 md:pt-16 md:pb-20 bg-[#F9F6F0] overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-left">
        
        {/* Headline Fix: Mobile-e md:block use korle break hobe na */}
        <h1 className="text-[48px] md:text-[95px] font-bold leading-[1.1]  md:leading-[1] text-[#1D1D1F] tracking-tight">
          Get Hyped. Get <br className="hidden md:block" /> Noticed. Get Results.
        </h1>

        {/* Paragraph Fix: Mobile-e max-w-none dile text break hobe na */}
        <p className="mt-4 text-[18px] md:text-[24px] font-semibold text-[#1D1D1F] max-w-none md:max-w-sm">
          Klaar met gokken op content <br className="hidden md:block" /> die niets oplevert?
        </p>

        {/* Desktop Container (Unchanged) */}
        <div className="hidden md:flex mx-12 flex-nowrap items-center justify-center py-12 gap-0 group">
          {[0, 1, 2, 3].map((idx) => (
            <motion.div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={handleMouseLeave}
              animate={{
                x: getSpreadValue(idx),
                rotate: hoveredIndex === idx ? 0 : randomStyles[idx].r,
                y: hoveredIndex === idx ? 0 : `${randomStyles[idx].y}%`,
              }}
              whileHover={{ scale: 1.1, zIndex: 100 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className={`w-[340px] h-[460px] rounded-[40px] shadow-2xl relative cursor-pointer lg:-mr-10 overflow-hidden
                ${idx === 0 ? "bg-primary p-8 flex flex-col justify-between text-white z-10" : ""}
                ${idx === 1 ? "bg-gray-200 z-20" : ""}
                ${idx === 2 ? "bg-accent p-8 flex flex-col justify-between text-[#003311] z-30" : ""}
                ${idx === 3 ? "bg-black z-40 lg:mr-0" : ""}
              `}
            >
              {idx === 0 && (
                <>
                  <h2 className="text-[75px] leading-tight font-extrabold tracking-tight">10M+</h2>
                  <div className="space-y-3">
                    <p className="font-extrabold text-[24px] text-black">Organische views</p>
                    <div className="w-full h-[1.5px] bg-black opacity-80" />
                    <p className="text-[17px] font-medium text-black">Groei door slimme content</p>
                  </div>
                </>
              )}
              {idx === 1 && (
                <video src={bannerVedio} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              )}
              {idx === 2 && (
                <>
                  <h2 className="text-[75px] leading-tight font-extrabold tracking-tight text-black">30+</h2>
                  <div className="space-y-3">
                    <p className="font-extrabold text-[24px] text-black">Merken geholpen</p>
                    <div className="w-full h-[1.5px] bg-black/30" />
                    <p className="text-[17px] font-medium text-black">Van start-up tot multinational</p>
                  </div>
                </>
              )}
              {idx === 3 && (
                <video src={bannerVedio2} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Updated Mobile Container - Exact as Screenshot */}
        <div className="flex md:hidden relative h-[320px] mt-2">
          <div className="absolute left-0 top-10 z-10 w-[180px] h-[240px] bg-primary rounded-[25px] p-6 flex flex-col justify-between shadow-lg -rotate-[8deg]">
            <h2 className="text-[38px] leading-tight font-extrabold text-white">10M+</h2>
            <div className="mt-auto">
              <p className="text-[13px] font-bold text-black leading-tight">Organische views</p>
              <div className="w-full h-[1px] bg-black/20 my-2" />
              <p className="text-[11px] font-medium text-black">Groei door slimme content</p>
            </div>
          </div>

          <div className="absolute left-[110px] top-0 z-20 w-[185px] h-[250px] bg-gray-200 rounded-[25px] overflow-hidden shadow-2xl rotate-[2deg]">
            <video
              src={bannerVedio}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;