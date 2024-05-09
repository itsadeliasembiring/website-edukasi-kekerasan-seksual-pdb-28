import React from "react";

export default function DampakKekerasan() {
  return (
    <>
      <div className="w-full bg-[#DCFFE5] py-4">
        {/* Title */}
        <p
          className="pb-4 text-center text-[#000] text-[21px] md:text-[30px] tracking-widest"
          style={{ fontFamily: "DM Serif Display, serif" }}
        >
          Dampak Kekerasan Seksual
        </p>

        <div className="px-5 md:px-10 grid grid-cols-1 gap-4">
          {/*  Dampak secara fisiologis */}
          <div className="collapse collapse-arrow text-[#000] bg-[#BBEDC7]">
            <input type="checkbox" />
            <div className="collapse-title text-[16px] font-semibold">
              Dampak secara fisiologis
            </div>
            <div className="collapse-content">
              <p>
                Dampak secara fisiologis berupa luka fisik, kesulitan tidur juga
                makan, kehamilan yang tidak diinginkan, tertular penyakit
                seksual, dan lain-lain.
              </p>
            </div>
          </div>

          {/*  Dampak secara emosional */}
          <div className="collapse collapse-arrow text-[#000] bg-[#BBEDC7]">
            <input type="checkbox" />
            <div className="collapse-title text-[16px] font-semibold">
              Dampak secara emosional
            </div>
            <div className="collapse-content">
              <p>
                Dampak secara emosional berupa perasaan bersalah dan menyalahkan
                diri sendiri, perasaan malu, penyangkalan, dan lain-lain.
              </p>
            </div>
          </div>

          {/*  Dampak secara psikologis */}
          <div className="collapse collapse-arrow text-[#000] bg-[#BBEDC7]">
            <input type="checkbox" />
            <div className="collapse-title text-[16px] font-semibold">
              Dampak secara psikologis
            </div>
            <div className="collapse-content">
              <p>
                Dampak secara psikologis berupa posttraumatic stress disorder
                (PTSD), depresi, kecemasan, penurunan self-esteem, simtom
                obsesif-kompulsif, dan masih banyak lagi.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div role="tablist" className="tabs tabs-lifted px-10 text-[#000] h-auto">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab [--tab-bg:#BBEDC7] [--tab-border-color:#BBEDC7] text-[#000]"
          aria-label="Dampak fisiologis"
        />
        <a role="tab" className="tab" name="my_tabs_2"></a>

        <div
          role="tabpanel"
          className="tab-content bg-[#BBEDC7] rounded-box pl-6 pr-3 py-6"
        >
          <p className="text-[14px] md:text-[16px]">
            Dampak secara fisiologis berupa luka fisik, kesulitan tidur juga
            makan, kehamilan yang tidak diinginkan, tertular penyakit seksual,
            dan lain-lain.
          </p>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab [--tab-bg:#BBEDC7] [--tab-border-color:#BBEDC7] text-[#000]"
          aria-label="Dampak secara emosional"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-[#BBEDC7] rounded-box pl-6 pr-3 py-6 w-full h-full"
        >
          <div>
            <p className="text-[14px] md:text-[16px]">
              Dampak secara emosional berupa perasaan bersalah dan menyalahkan
              diri sendiri, perasaan malu, penyangkalan, dan lain-lain.
            </p>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab [--tab-bg:#BBEDC7] [--tab-border-color:#BBEDC7] text-[#000]"
          aria-label="Dampak secara psikologis"
        />
        <div
          role="tabpanel"
          className="tab-content bg-[#BBEDC7] rounded-box pl-6 pr-3 py-6"
        >
          <p className="text-[14px] md:text-[16px]">
            Dampak secara psikologis berupa posttraumatic stress disorder
            (PTSD), depresi, kecemasan, penurunan self-esteem, simtom
            obsesif-kompulsif, dan masih banyak lagi.
          </p>
        </div>
      </div>

      <div role="tablist" className="tabs tabs-bordered">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Tab 1"
        />
        <div role="tabpanel" className="tab-content p-10">
          <p className="text-[14px] md:text-[16px]">
            Dampak secara fisiologis berupa luka fisik, kesulitan tidur juga
            makan, kehamilan yang tidak diinginkan, tertular penyakit seksual,
            dan lain-lain.
          </p>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Tab 2"
          checked
        />
        <div role="tabpanel" className="tab-content p-10">
          <p className="text-[14px] md:text-[16px]">
            Dampak secara emosional berupa perasaan bersalah dan menyalahkan
            diri sendiri, perasaan malu, penyangkalan, dan lain-lain.
          </p>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Tab 3"
        />
        <div role="tabpanel" className="tab-content p-10">
          <p className="text-[14px] md:text-[16px]">
            Dampak secara psikologis berupa posttraumatic stress disorder
            (PTSD), depresi, kecemasan, penurunan self-esteem, simtom
            obsesif-kompulsif, dan masih banyak lagi.
          </p>
        </div>
      </div>
    </>
  );
}
