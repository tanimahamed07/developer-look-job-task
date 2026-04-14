import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import carouselVideo from "../../assets/MD Loop Schaken.mp4";

// আলাদা একটি কম্পোনেন্ট যাতে প্রতিটি কার্ডের জন্য আলাদা স্ক্রল লজিক থাকে
const Card = ({ item, index, progress, range, targetScale }) => {
  const container = useRef(null);

  // কার্ডটি স্ক্রল করার সাথে সাথে স্কেল (ছোট হওয়া) এবং অপাসিটি কন্ট্রোল করবে
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-10 w-full mb-10 flex items-center justify-center h-[90vh]"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${index * 25}px)`, // পেছনের কার্ডগুলো একটু গ্যাপ রেখে স্ট্যাক হবে
        }}
        className={`max-w-[1400px] w-full mx-auto ${item.bgColor} rounded-[40px] p-8 md:p-14 shadow-2xl flex flex-col justify-between min-h-[80vh] relative overflow-hidden`}
      >
        {/* Top Section */}
        <div className="flex justify-between items-start">
          <div>
            <span
              className={`${item.tagBg} text-[#1D1D1F] px-4 py-2 rounded-lg text-[14px] md:text-[18px] font-bold uppercase`}
            >
              {item.tag}
            </span>
            <h2 className="text-[50px] md:text-[110px] font-bold text-[#1D1D1F] leading-[0.85] mt-8 tracking-tighter">
              {item.title}
            </h2>
          </div>
          <span
            className={`text-[60px] md:text-[120px] font-black ${item.numColor} leading-none`}
          >
            {item.id}
          </span>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mt-10">
          <div className="max-w-[450px]">
            <h3 className="text-[24px] md:text-[30px] font-bold text-[#1D1D1F] mb-4">
              {item.description}
            </h3>
            <p className="text-[17px] md:text-[19px] text-[#1D1D1F] font-medium leading-relaxed mb-10 whitespace-pre-line">
              {item.details}
            </p>

            <button
              className={`${item.btnColor} text-white pl-7 pr-2 py-2 rounded-full font-bold flex items-center gap-5 hover:scale-105 transition-transform`}
            >
              <span className="text-[16px]">
                Meer over {item.title.toLowerCase()}
              </span>
              <span className="bg-white text-black w-10 h-10 rounded-full flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </button>
          </div>

          <div
            className={`relative w-[240px] md:w-[320px] aspect-[3/4] p-2 border-[6px] ${item.videoBorder} rounded-[45px] overflow-hidden rotate-[4deg] shadow-2xl self-center md:self-end`}
          >
            <video
              className="w-full h-full object-cover rounded-[38px]"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={carouselVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Service = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const servicesData = [
    {
      id: "01",
      title: "Social strategy",
      tag: "Expertise",
      description: "Slimme strategie. Sterke start.",
      details:
        "We duiken diep in jouw merk, doelgrouep en\ndoelen. En vertalen data naar een duidelijk\nplan...",
      bgColor: "bg-white",
      btnColor: "bg-[#f75625]",
      numColor: "text-[#eee5d3]",
      tagBg: "bg-[#eee5d3]",
      videoBorder: "border-[#FF6337]",
    },
    {
      id: "02",
      title: "Content creation",
      tag: "Expertise",
      description: "Content die opvalt en raakt.",
      details:
        "We maken content die opvalt. Blijft hangen.\nEn jouw doelgroep raakt. Creatief, snel...",
      bgColor: "bg-[#f2a1d3]",
      btnColor: "bg-black",
      numColor: "text-[#e589c3]",
      tagBg: "bg-white",
      videoBorder: "border-white",
    },
    {
      id: "03",
      title: "Activation",
      tag: "Expertise",
      description: "Zichtbaar waar এবং কখন it counts.",
      details:
        "De juiste content verdient het om gezien te\nworden. We verspreiden de content...",
      bgColor: "bg-[#3cb685]",
      btnColor: "bg-black",
      numColor: "text-[#34a377]",
      tagBg: "bg-white",
      videoBorder: "border-white",
    },
    {
      id: "04",
      title: "Data",
      tag: "Expertise",
      description: "Inzichten die impact maken.",
      details:
        "We duiken in de cijfers om te snappen wat\nécht werkt. En sturen jouw content scherp bij.",
      bgColor: "bg-[#0b85f2]",
      btnColor: "bg-black",
      numColor: "text-[#0a78db]",
      tagBg: "bg-white",
      videoBorder: "border-white",
    },
  ];

  return (
    <section
      ref={container}
      className="bg-[#F9F6F0] px-4 md:px-10 pb-20 relative"
    >
      {servicesData.map((item, index) => {
        // প্রতিটি কার্ডের জন্য আলাদা স্ক্রল রেঞ্জ তৈরি করা হচ্ছে
        const targetScale = 1 - (servicesData.length - index) * 0.05;
        return (
          <Card
            key={item.id}
            item={item}
            index={index}
            progress={scrollYProgress}
            range={[index * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
};

export default Service;
