import React from "react";
import illustration from "../../assets/stop.png";

export default function Banner() {
  return (
    <>
      <div className="bg-[#D0BBE2] w-full h-auto flex flex-col align-center justify-center pt-20 sm:flex-row">
        {/* Konten Teks */}
        <div className="text-center px-6 sm:px-0 sm:text-left sm:pl-10 text-[#000] font-DM Serif Display">
          <div className="text-[22px] sm:text-[31px] lg:text-[45px]">
            {/* Headline */}
            <p style={{ fontFamily: "DM Serif Display, serif" }}>
              Bersama Lawan Kekerasan Seksual
            </p>
            <p style={{ fontFamily: "DM Serif Display, serif" }}>
              Mewujudkan Pendidikan Indonesia yang Aman Untuk Semua
            </p>
          </div>

          {/* Ajakan */}
          <p
            style={{ fontFamily: "Poppins" }}
            className="mt-4 text-[15px] sm:text-[16px] lg:text-[18px] sm:pb-6 lg:pb-0"
          >
            Yuk, kenali apa itu kekerasan seksual! Mengenali dan memahami
            tanda-tanda serta dampak dari kekerasan seksual adalah langkah
            pertama dalam melindungi diri sendiri dan orang-orang di sekitar
            kita.
          </p>
        </div>

        {/* Gambar Ilustrasi */}
        <div className="mt-2 sm:mt-0 mb-0 flex items-center justify-center">
          <img
            src={illustration}
            className="w-[80%] h-[80%] sm:w-[100%] sm:h-[100%]"
            alt="Illustration"
          ></img>
        </div>
      </div>
    </>
  );
}
