import personImg from "../../assets/6894757aa6dd3f84f6e463a2_Anniek Bril-p-500.webp";
import introductionVideo from "../../assets/new-reach-loop.mp4";

const IntroSection = () => {
  return (
    <section className="w-full bg-[#F9F6F0] px-6 pt-10 pb-16 md:pt-20 md:pb-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Big Headline */}
        <h2 className="text-[28px] leading-[1.1] md:text-[40px] lg:text-[60px] font-bold md:leading-[0.95] text-[#1D1D1F] tracking-[-0.03em] max-w-[1180px] mx-auto">
          Wij maken content die opvalt. Die
          <br className="hidden lg:block" /> blijft hangen. Die jouw doelgroep
          <br className="hidden lg:block" /> raakt en jouw merk in beweging
          <br className="hidden lg:block" /> brengt. Snel, krachtig en energiek.
        </h2>

        {/* Bottom Row */}
        {/* Gap komiye mt-8 kora hoyeche mobile-e height bachanur jonno */}
        <div className="mt-8 md:mt-18 flex flex-col md:flex-row items-start gap-8 md:gap-24">
          {/* Media Container */}
          <div className="w-full md:w-[235px] md:h-[313px] flex-shrink-0 flex justify-center md:justify-start">
            {/* Video: Mobile version with Tilt */}
            {/* Max-width ektu komano hoyeche height save korte */}
            <div className="block md:hidden w-full max-w-[260px] rotate-2">
              <video
                src={introductionVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[4/5] object-cover rounded-[20px] shadow-sm"
              />
            </div>

            <div className="hidden md:block w-full h-full">
              <img
                src={personImg}
                alt="Team member"
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
          </div>

          <div className="flex flex-col md:mt-20 md:ml-33 w-full">
            <p className="text-[17px] md:text-[24px] text-[#1D1D1F] leading-[1.4] font-bold tracking-tight">
              We stoppen niet bij mooie plaatjes en{" "}
              <br className="hidden md:block" />
              vette beelden. We maken het meetbaar.
              <br className="hidden md:block" />
              Zo weet je precies what werkt en wat niet.
              <br className="hidden md:block" />
              Nooit meer content zonder strategie.
              <br className="hidden md:block" />
              Nooit meer content zonder resultaat.
            </p>

            <div className="mt-6 md:mt-10 flex justify-start">
              <button className="group flex items-center justify-between gap-4 border border-[#1D1D1F] rounded-xl pl-6 pr-2 py-2 text-[16px] font-bold text-[#1D1D1F] hover:bg-[#1D1D1F] hover:text-white transition-all duration-300 min-w-[200px] md:min-w-0">
                Leer ons kennen
                <span className="w-9 h-9 bg-[#1D1D1F] text-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-[#1D1D1F] transition-colors">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <div className="hidden md:flex ml-auto mt-auto mr-28">
            <button className="w-10 h-10 border border-gray-700 rounded-xl flex items-center justify-center text-orange-600 hover:border-[#1D1D1F] transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
