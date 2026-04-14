import React from "react";
import { motion } from "framer-motion";
import bannerVedio from "../../assets/Loop Salontopper.mp4";
import bannerVedio2 from "../../assets/petrolhead-loop.mp4";

const Banner = () => {
  return (
    <section className="relative w-full px-6 pt-16 pb-20 bg-[#F9F6F0] overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-left">
        {" "}
        {/* Title Section */}
        <h1 className="text-[60px] md:text-[95px] font-bold leading-[1] text-[#1D1D1F] tracking-tight">
          Get Hyped. Get <br /> Noticed. Get Results.
        </h1>
        <p className="mt-3 text-[18px] md:text-[24px] font-semibold text-[1D1D1F] max-w-sm">
          Klaar met gokken op content <br /> die niets oplevert?
        </p>
        {/* Floating Cards Section */}
        <div className="flex mx-12 flex-wrap lg:flex-nowrap items-center justify-center py-6 gap-0">
          {/* Card 1: Blue */}
          <motion.div
            initial={{
              rotate: Math.random() * -5 - 5,
              y: `${Math.random() * 4 + 2}%`,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              zIndex: 50,
              x: -20, // বামে সরে যাবে
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full sm:w-[340px] h-[460px] bg-primary rounded-[40px] p-8 flex flex-col justify-between text-white shadow-2xl relative z-10 lg:-mr-10 cursor-pointer"
          >
            <h2 className="text-[75px] leading-tight text-secondary-content font-extrabold tracking-tight">
              10M+
            </h2>
            <div className="space-y-3">
              <p className="font-extrabold text-[24px] text-black tracking-tight">
                Organische views
              </p>
              <div className="w-full h-[1.5px] bg-black opacity-80" />
              <p className="text-[17px] leading-snug font-medium text-black tracking-tight">
                Groei door slimme content
              </p>
            </div>
          </motion.div>

          {/* Card 2: Image/Video Card */}
          <motion.div
            initial={{
              rotate: Math.random() * 5 + 5,
              y: `${Math.random() * -3 - 3}%`,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              zIndex: 50,
              y: -10, // একটু উপরে উঠবে
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full sm:w-[340px] h-[460px] bg-gray-200 rounded-[40px] overflow-hidden shadow-2xl relative z-20 lg:-mr-10 cursor-pointer"
          >
            <video
              src={bannerVedio}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-[40px]"
            />
          </motion.div>

          {/* Card 3: Green */}
          <motion.div
            initial={{
              rotate: Math.random() * 4 + 2,
              y: `${Math.random() * 3 + 1}%`,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              zIndex: 50,
              x: 20, // ডানে সরে যাবে
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full sm:w-[340px] h-[460px] bg-accent rounded-[40px] p-8 flex flex-col justify-between text-[#003311] shadow-2xl relative z-30 lg:-mr-10 cursor-pointer"
          >
            <h2 className="text-[75px] leading-tight text-black font-extrabold tracking-tight">
              30+
            </h2>
            <div className="space-y-3">
              <p className="font-extrabold text-[24px] text-black tracking-tight">
                Merken geholpen
              </p>
              <div className="w-full h-[1.5px] bg-black/30" />
              <p className="text-[17px] leading-snug font-medium text-black tracking-tight">
                Van start-up tot multinational
              </p>
            </div>
          </motion.div>

          {/* Card 4: Video/Car Image Card */}
          <motion.div
            initial={{
              rotate: Math.random() * 6 + 4,
              y: `${Math.random() * -3 - 2}%`,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              zIndex: 50,
              x: 40, // আরও ডানে সরে যাবে
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full sm:w-[340px] h-[460px] bg-black rounded-[40px] overflow-hidden shadow-2xl relative z-40 cursor-pointer"
          >
            <video
              src={bannerVedio2}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-[40px]"
            />
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
