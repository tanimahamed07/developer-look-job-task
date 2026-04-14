import React from "react";
import personImg from "../../assets/6894757aa6dd3f84f6e463a2_Anniek Bril-p-500.webp";

const IntroSection = () => {
  return (
    <section className="w-full bg-[#F9F6F0] px-6 pt-20 pb-32">
      <div className="max-w-[1400px] mx-auto">
        {/* Big Headline - Line breaks and tracking updated */}
        <h2 className="text-[48px] md:text-[40px] pl lg:text-[60px] font-bold leading-[0.95] text-[#1D1D1F] tracking-[-0.03em] max-w-[1180px] mx-auto">
          Wij maken content die opvalt. Die
          <br className="hidden lg:block" />
          blijft hangen. Die jouw doelgroep
          <br className="hidden lg:block" />
          raakt en jouw merk in beweging
          <br className="hidden lg:block" />
          brengt. Snel, krachtig en energiek.
        </h2>

        {/* Bottom Row: Image + Text */}
        <div className="mt-18 flex flex-col md:flex-row items-start gap-12 md:gap-24">
          {/* Person Image */}
          <div className="w-[220px] md:w-[235px] md:h-[313px] flex-shrink-0">
            <img
              src={personImg}
              alt="Team member"
              className="w-full aspect-[4/5] object-cover rounded-[16px]"
            />
          </div>

          {/* Right Text + Button - Shifted slightly right with md:ml-12 */}
          <div className="flex flex-col md:mt-20 md:ml-33">
            <p className="text-[18px] md:text-[24px]  text-[#1D1D1F] leading-[1.4] font-bold tracking-tight">
              We stoppen niet bij mooie plaatjes en <br />vette beelden. We maken het
              meetbaar.<br />Zo weet je precies wat werkt en wat niet.<br /> Nooit meer
              content zonder strategie.<br />Nooit meer content zonder resultaat.
            </p>

            <div className="mt-10">
              <button className="group flex items-center gap-4 border border-[#1D1D1F] rounded-full pl-6 pr-2 py-2 text-[16px] font-bold text-[#1D1D1F] hover:bg-[#1D1D1F] hover:text-white transition-all duration-300">
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

          {/* Down Arrow - Styled to match image */}
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
