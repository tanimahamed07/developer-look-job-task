import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import carouselVideo from "../../assets/MD Loop Schaken.mp4";

const Card = ({ item, index, progress, range, targetScale }) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-5 md:top-10 w-full mb-10 flex items-center justify-center h-[95vh] md:h-[90vh]"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${index * 25}px)`,
        }}
        className={`max-w-[1400px] w-full mx-auto ${item.bgColor} rounded-[30px] md:rounded-[40px] p-6 md:p-14 shadow-2xl flex flex-col justify-between min-h-[85vh] md:min-h-[80vh] relative overflow-hidden`}
      >
        <div className="flex justify-between items-start">
          <div className="flex flex-col items-start">
            <span
              className={`${item.tagBg} text-[#1D1D1F] px-3 py-1 md:px-4 md:py-2 rounded-lg text-[12px] md:text-[18px] font-bold uppercase`}
            >
              {item.tag}
            </span>
            <h2 className="text-[40px] md:text-[110px] font-bold text-[#1D1D1F] leading-[0.9] mt-4 md:mt-8 tracking-tighter max-w-[200px] md:max-w-none">
              {item.title}
            </h2>
          </div>
          <span
            className={`text-[45px] md:text-[120px] font-black ${item.numColor} leading-none mt-2 md:mt-0`}
          >
            {item.id}
          </span>
        </div>

        {/* Middle/Bottom Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-8 mt-4 md:mt-10 h-full">
          {/* Video Container: Positioned in middle for mobile, end for desktop */}
          <div
            className={`relative w-[180px] md:w-[320px] aspect-[3/4] p-1.5 md:p-2 border-[4px] md:border-[6px] ${item.videoBorder} rounded-[25px] md:rounded-[45px] overflow-hidden rotate-[3deg] md:rotate-[4deg] shadow-xl order-2 md:order-2`}
          >
            <video
              className="w-full h-full object-cover rounded-[20px] md:rounded-[38px]"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={carouselVideo} type="video/mp4" />
            </video>
          </div>

          <div className="w-full md:max-w-[450px] flex flex-col items-start order-3 md:order-1 text-left">
            <h3 className="text-[20px] md:text-[30px] font-bold text-[#1D1D1F] mb-2 md:mb-4">
              {item.description}
            </h3>
            <p className="text-[14px] md:text-[19px] text-[#1D1D1F] font-medium leading-snug md:leading-relaxed mb-6 md:mb-10 whitespace-pre-line opacity-90">
              {item.details}
            </p>

            <button
              className={`${item.btnColor} text-black pl-5 pr-1.5 py-1.5 md:pl-7 md:pr-2 md:py-2 rounded-[10px] font-bold flex items-center justify-between gap-4 md:gap-5 hover:scale-105 hover:-rotate-3 transition-transform w-fit`}
            >
              <span className="text-[13px] md:text-[16px] whitespace-nowrap">
                Meer over {item.title.toLowerCase()}
              </span>
              <span className="bg-black text-white w-8 h-8 md:w-10 md:h-10 rounded-[10px] flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  md:width="20"
                  md:height="20"
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
        "We maken content die opvalt. Blijft hangen.\nEn jouw doelgroep raakt. Creatief, snel\nen energiek. Altijd met het doel voor ogen.",
      bgColor: "bg-[#f2a1d3]",
      btnColor: "bg-white",
      numColor: "text-[#e589c3]",
      tagBg: "bg-white",
      videoBorder: "border-white",
    },
    {
      id: "03",
      title: "Activation",
      tag: "Expertise",
      description: "Zichtbaar waar it counts.",
      details:
        "De juiste content verdient het om gezien te\nworden. We verspreiden de content...",
      bgColor: "bg-[#3cb685]",
      btnColor: "bg-white",
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
      btnColor: "bg-white",
      numColor: "text-[#0a78db]",
      tagBg: "bg-white",
      videoBorder: "border-white",
    },
  ];

  return (
    <section
      id="services-section" // এই ID টি যোগ করুন
      ref={container}
      className="bg-[#F9F6F0] px-2 md:px-10 md:pb-20 relative"
    >
      {servicesData.map((item, index) => {
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
