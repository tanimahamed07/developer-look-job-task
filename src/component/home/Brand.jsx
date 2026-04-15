import { motion } from "framer-motion";
import brandLogo1 from "../../assets/68c194e6d1b186563459b107_morssinkhof.svg";
import brandLogo2 from "../../assets/68c1952f22281ee50d3620b5_zclv.svg";
import brandLogo3 from "../../assets/6849d81e72e08110e3fd1a17_knltb.svg";
import brandLogo4 from "../../assets/684b062ebc242028ca4b3ea1_tho.svg";
import brandLogo5 from "../../assets/6849d86cd6ba384af3c14e58_graafschap-college.svg";
import brandLogo6 from "../../assets/6849d88f755388cc2c74ecff_salontopper.svg";
import brandLogo7 from "../../assets/6849d838fc5735f090bd9843_SRHK.svg";
import brandLogo8 from "../../assets/6849d880bed5996600cbc586_seesing-flex.svg";
import brandLogo9 from "../../assets/6849d85341bf0d7476e56a8c_fides.svg";
import brandLogo10 from "../../assets/69241146b4df63c4ca966552_Bullit Digital.svg";

const Brand = () => {
  const logos = [
    brandLogo1,
    brandLogo2,
    brandLogo3,
    brandLogo4,
    brandLogo5,
    brandLogo6,
    brandLogo7,
    brandLogo8,
    brandLogo9,
    brandLogo10,
  ];

  // ইনফিনিট লুপের জন্য ডুপ্লিকেট করা হয়েছে
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-30 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 mb-16">
        <h2 className="text-[40px] md:text-[60px] font-bold text-[#1D1D1F] leading-[1] tracking-tight">
          These brands <br /> got hyped.
        </h2>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 10,
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              // mx-1 ব্যবহার করে গ্যাপ কমানো হয়েছে
              className="flex-shrink-0 flex items-center justify-center w-[150px] h-[150px] md:w-[290px] md:h-[290px] mx-4 md:mx-2 bg-[#F5F1EB] rounded-xl border border-black/5 p-6 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={logo}
                alt={`Brand ${index}`}
                className="w-auto max-w-full"
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 mt-20">
        <hr className="border-t border-black/10" />
      </div>
    </section>
  );
};

export default Brand;
