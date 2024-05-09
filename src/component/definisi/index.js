import React from "react";
import boy from "../../assets/boy.png";
import girl from "../../assets/girl.png";

export default function Definisi() {
  return (
    <>
      <div className="w-full bg-[#F1E1FE] py-7 px-7 md:px-20">
        {/* Title */}
        <p
          className="text-center text-[#000] text-[22px] md:text-[30px] tracking-widest mb-4"
          style={{ fontFamily: "DM Serif Display, serif" }}
        >
          Definisi Kekerasan Seksual
        </p>
        {/* Content */}
        <div>
          {/* Apa itu kekerasan seksual? */}
          <div className="text-[#000] sm:text-[14px] md:text-[16px] lg:text-[18px]">
            {/* Konten Tablet & Dekstop */}
            <div className="w-full h-[400px] carousel rounded-box hidden md:flex md:flex-row">
              {/* Slide 1 */}
              <div className="carousel-item w-full bg-[#BBEDC7] justify-center items-center">
                <img
                  src={boy}
                  className="lg:w-full lg:h-full md:w-[65%] md:h-[65%]"
                />
                <div className="px-7">
                  <p>
                    <strong>Kekerasan seksual didefinisikan sebagai </strong>
                    serangan yang bersifat <b>seksual</b>, baik terjadi hubungan
                    seksual maupun tidak, terlepas dari hubungan korban dengan
                    pelaku. <b>Menurut World Health Organization (WHO, 2017)</b>
                    , kekerasan seksual merupakan semua tindakan yang dilakukan
                    dengan tujuan untuk memperoleh tindakan seksual atau
                    tindakan lain yang diarahkan pada seksualitas seseorang
                    dengan menggunakan paksaan tanpa memandang status
                    hubungannya dengan korban.
                  </p>
                </div>
              </div>
              {/* Slide 2 */}
              <div className="carousel-item w-full bg-[#FFDAC8] justify-center items-center flex flex-col md:flex-row">
                <div className="px-7">
                  <p>
                    <strong>
                      Menurut Permendikbud Riset nomor 30 tahun 2021, pasal 1
                    </strong>
                  </p>
                  <p>
                    Kekerasan seksual adalah setiap perbuatan merendahkan,
                    menghina, melecehkan, dan/atau menyerang tubuh, dan/atau
                    reproduksi seseorang, karena ketimpangan relasi kuasa
                    dan/atau gender yang berakibat atau dapat berakibat
                    penderitaan psikis dan/atau fisik termasuk yang mengganggu
                    kesehatan reproduksi seseorang dan hilang kesempatan
                    melaksanakan pendidikan tinggi dengan aman dan optimal.
                  </p>
                </div>
                <img
                  src={girl}
                  className="lg:w-full lg:h-full md:w-[65%] md:h-[65%]"
                />
              </div>
            </div>

            {/* Mobile */}
            <div className="w-full h-auto carousel rounded-box md:hidden">
              {/* Slide 1 */}
              <div className="carousel-item w-full bg-[#BBEDC7] justify-center items-center">
                <div className="flex flex-col pb-7">
                  <div className="flex justify-start">
                    <img src={boy} className="w-[70%] h-[70%]" />
                  </div>

                  <div
                    className="text-[13px] px-4 mt-3"
                    style={{ fontFamily: "Poppins" }}
                  >
                    <p>
                      <strong>Kekerasan seksual didefinisikan sebagai </strong>
                      serangan yang bersifat <b>seksual</b>, baik terjadi
                      hubungan seksual maupun tidak, terlepas dari hubungan
                      korban dengan pelaku.
                    </p>
                    <p className="mt-1">
                      <b>Menurut World Health Organization (WHO, 2017)</b>,
                      kekerasan seksual merupakan semua tindakan yang dilakukan
                      dengan tujuan untuk memperoleh tindakan seksual atau
                      tindakan lain yang diarahkan pada seksualitas seseorang
                      dengan menggunakan paksaan tanpa memandang status
                      hubungannya dengan korban.
                    </p>
                  </div>
                </div>
              </div>
              {/* Slide 2 */}
              <div className="carousel-item w-full bg-[#FFDAC8] justify-center items-center">
                <div className="flex flex-col pb-7">
                  <div className="flex justify-end">
                    <img src={girl} className="w-[70%] h-[70%]" />
                  </div>

                  <div
                    className="text-[13px] px-4"
                    style={{ fontFamily: "Poppins" }}
                  >
                    <p>
                      <strong>
                        Menurut Permendikbud Riset nomor 30 tahun 2021, pasal 1
                      </strong>
                    </p>
                    <p>
                      Kekerasan seksual adalah setiap perbuatan merendahkan,
                      menghina, melecehkan, dan/atau menyerang tubuh, dan/atau
                      reproduksi seseorang, karena ketimpangan relasi kuasa
                      dan/atau gender yang berakibat atau dapat berakibat
                      penderitaan psikis dan/atau fisik termasuk yang mengganggu
                      kesehatan reproduksi seseorang dan hilang kesempatan
                      melaksanakan pendidikan tinggi dengan aman dan optimal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
