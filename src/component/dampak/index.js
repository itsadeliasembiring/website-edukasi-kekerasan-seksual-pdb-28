import React from "react";

export default function DampakKekerasan() {
  return (
    <>
      <div className="w-full bg-[#F1E1FE] py-4">
        {/* Title */}
        <p
          className="pb-4 text-center text-[#000] text-[21px] md:text-[30px] tracking-widest"
          style={{ fontFamily: "DM Serif Display, serif" }}
        >
          Dampak Kekerasan Seksual
        </p>
        {/* Laptop & Tab */}
        <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-3 gap-4 px-4 md:px-20 py-4">
          {/* Card 1: Dampak Fisiologis */}
          <div className="bg-[#FEF3E1] border-2 border-[#000]">
            <div className="p-4">
              <h3 className="text-[18px] sm:text-lg font-semibold mb-2 text-[#000]">
                Dampak Fisiologis
              </h3>
              <p className="text-gray-700 text-[16px] md:text-[18px]">
                Dampak secara fisiologis berupa luka fisik, kesulitan tidur juga
                makan, kehamilan yang tidak diinginkan, tertular penyakit
                seksual, dan lain-lain.
              </p>
            </div>
          </div>

          {/* Card 2: Dampak Emosional */}
          <div className="bg-[#E1DCFF] border-2 border-[#000]">
            <div className="p-4">
              <h3 className="text-[18px] sm:text-lg font-semibold mb-2 text-[#000]">
                Dampak Emosional
              </h3>
              <p className="text-gray-700 text-[16px] md:text-[18px]">
                Dampak secara emosional berupa perasaan bersalah dan menyalahkan
                diri sendiri, perasaan malu, penyangkalan, dan lain-lain.
              </p>
            </div>
          </div>

          {/* Card 3: Dampak Psikologis */}
          <div className="bg-[#FFDAC8] border-2 border-[#000]">
            <div className="p-4">
              <h3 className="text-[18px] sm:text-lg font-semibold mb-2 text-[#000]">
                Dampak Psikologis
              </h3>
              <p className="text-gray-700 text-[16px] md:text-[18px]">
                Dampak secara psikologis berupa posttraumatic stress disorder
                (PTSD), depresi, kecemasan, penurunan self-esteem, simtom
                obsesif-kompulsif, dan masih banyak lagi.
              </p>
            </div>
          </div>
        </div>

        {/* HP */}
        {/* Mobile */}
        <div className="px-4 md:px-0 md:py-0">
          <div className="w-full h-auto carousel border-2 border-[#000] md:hidden">
            {/* Slide 1 */}
            <div className="carousel-item w-full bg-[#FEF3E1]">
              <div className="p-4">
                <h3 className="text-[18px] sm:text-lg font-semibold mb-2 text-[#000]">
                  Dampak Fisiologis
                </h3>
                <p className="text-gray-700 text-[16px] md:text-[18px]">
                  Dampak secara fisiologis berupa luka fisik, kesulitan tidur
                  juga makan, kehamilan yang tidak diinginkan, tertular penyakit
                  seksual, dan lain-lain.
                </p>
              </div>
            </div>
            {/* Slide 2 */}
            <div className="carousel-item w-full bg-[#E1DCFF]">
              <div className="p-4">
                <h3 className="text-[18px] sm:text-lg font-semibold mb-2 text-[#000]">
                  Dampak Emosional
                </h3>
                <p className="text-gray-700 text-[16px] md:text-[18px]">
                  Dampak secara emosional berupa perasaan bersalah dan
                  menyalahkan diri sendiri, perasaan malu, penyangkalan, dan
                  lain-lain.
                </p>
              </div>
            </div>
            {/* Slide 3 */}
            <div className="carousel-item w-full bg-[#FFDAC8]">
              <div className="p-4">
                <h3 className="text-[18px] sm:text-lg font-semibold mb-2 text-[#000]">
                  Dampak Psikologis
                </h3>
                <p className="text-gray-700 text-[16px] md:text-[18px]">
                  Dampak secara psikologis berupa posttraumatic stress disorder
                  (PTSD), depresi, kecemasan, penurunan self-esteem, simtom
                  obsesif-kompulsif, dan masih banyak lagi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
