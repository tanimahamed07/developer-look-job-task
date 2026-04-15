import { useRef } from "react";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import contentVideo from "../../assets/loco-bites-loop.mp4";
import contentVideo1 from "../../assets/roasta-loop.mp4";
import contentVideo2 from "../../assets/Bullit _ Loop.mp4";

const Content = () => {
  const cards = [
    {
      id: 1,
      title: "Van nul naar vol, binnen 3 weken",
      tag: "Bullit",
      video: contentVideo2,
      bgColor: "bg-[#FF5C35]",
      borderColor: "border-[#FF5C35]",
    },
    {
      id: 2,
      title: "Zacht in smaak, sterk in beeld",
      tag: "Roasta",
      video: contentVideo1,
      bgColor: "bg-[#0085FF]",
      borderColor: "border-[#0085FF]",
    },
    {
      id: 3,
      title: "Content die écht smaakt (en raakt)",
      tag: "Loco",
      video: contentVideo,
      bgColor: "bg-[#33C38F]",
      borderColor: "border-[#33C38F]",
    },
  ];

  return (
    <section className="bg-[#FAF6F1] md:py-14 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1300px] mx-auto">
        <div className="max-w-xl md:ml-16">
          <h1 className="text-[50px] md:text-[90px] font-bold leading-[1] text-[#1D1D1F] pr-4 mb-5">
            Content <br /> dat scoort.
          </h1>
          <p className="text-[22px] md:text-[24px] font-semibold text-[#1D1D1F] leading-snug mb-4">
            Wij vertellen jouw verhaal. Op <br /> een manier die écht past bij
            jouw <br /> doelgroep. Met creatieve content <br /> die werkt och
            het verschil maakt.
          </p>
          <button className="flex transform hover:-rotate-4 items-center gap-2 md:mb-0 mb-22 px-2 py-1 border border-black rounded-[10px] font-bold text-[16px] transition-all duration-300">
            Bekijk al ons werk
            <div className="bg-black text-white rounded-[6px] p-2">
              <FiArrowRight size={20} />
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-start">
          {cards.map((card, index) => {
            const videoRef = useRef(null);

            return (
              <div
                key={card.id}
                onMouseEnter={() => videoRef.current?.play()}
                onMouseLeave={() => videoRef.current?.pause()}
                className={`relative group rounded-[40px] overflow-hidden border-[7px] ${card.borderColor} 
                w-full md:w-[360px] h-[500px] mx-auto transition-all duration-500 ease-in-out
                hover:-rotate-2 hover:scale-[1.01] 
                ${
                  index === 0
                    ? "md:mt-32"
                    : index === 1
                      ? "md:mt-16"
                      : "md:mt-0"
                }`}
              >
                <video
                  ref={videoRef}
                  src={card.video}
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />

                <div
                  className={`absolute bottom-3 left-3 right-3 ${card.bgColor} p-6 rounded-[28px] text-white flex flex-col justify-between min-h-[140px] transition-transform duration-500 group-hover:scale-[0.98]`}
                >
                  <div className="absolute top-4 right-4 bg-white text-black rounded-full h-10 w-10 flex items-center justify-center shadow-lg overflow-hidden group">
                    <div className="relative h-5 w-5 flex items-center justify-center transition-all duration-500 ease-in-out">
                      <FiArrowUpRight
                        size={24}
                        className="font-extrabold absolute transition-transform duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10"
                      />

                      <FiArrowUpRight
                        size={24}
                        className="absolute font-bold -translate-x-10 translate-y-10 transition-transform duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0"
                      />
                    </div>
                  </div>

                  <h3 className="text-[22px] font-extrabold leading-[1.2] mb-4 pr-10">
                    {card.title}
                  </h3>

                  <div className="mt-auto">
                    <span className="inline-block px-4 py-1.5 rounded-xl bg-white/20 text-[13px] font-bold backdrop-blur-sm">
                      {card.tag}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Content;
