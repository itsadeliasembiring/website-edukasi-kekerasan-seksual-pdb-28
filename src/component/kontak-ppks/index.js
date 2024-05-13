import React from "react";
import illustration from "../../assets/sexual-harasment.png";

export default function Kontak() {
  return (
    <>
      <div className="bg-[#D0BBE2] w-full h-auto flex flex-col align-center justify-center pt-8 sm:flex-row">
        {/* Gambar Ilustrasi */}
        <div className="mt-2 sm:mt-0  flex items-center justify-center">
          <img
            src={illustration}
            className="w-[80%] h-[80%] sm:w-[80%] sm:h-[80%]"
            alt="Illustration"
          ></img>
        </div>

        {/* Konten Teks */}
        <div className="px-6 sm:text-left sm:pl-10 text-[#000] font-DM Serif Display">
          <div>
            {/* Headline */}
            <p
              className="text-center text-[25px] sm:text-[31px] lg:text-[40px]"
              style={{ fontFamily: "DM Serif Display, serif" }}
            >
              Korban Kekerasan Seksual Tidak Pernah Salah!
            </p>
          </div>
          {/* Ajakan */}
          <p
            style={{ fontFamily: "Poppins" }}
            className="mt-4 text-left text-[15px] sm:text-[16px] lg:text-[18px]"
          >
            Seseorang tidak boleh melakukan pelecehan seksual atau kekerasan
            seksual terhadap orang lain dengan alasan :
          </p>
          <ul className="list-disc ml-7 mt-1 text-[15px]">
            <li className="mb-2">"Minum alkohol terlalu banyak"</li>
            <li className="mb-2">"Hanya bersenang-senang"</li>
            <li className="mb-2">"Pakaian yang orang lain kenakan</li>
            <li className="mb-2">
              "Jenis hubungan yang seperti apa yang orang lain miliki"
            </li>
          </ul>
          <p
            style={{ fontFamily: "Poppins" }}
            className="mt-4 text-[15px] sm:text-[16px] lg:text-[18px]"
          >
            Melanggar norma hukum adalah <b> pilihan dari si pelaku</b>.
          </p>
          <p
            style={{ fontFamily: "Poppins" }}
            className="mt-1 text-[15px] sm:text-[16px] lg:text-[18px]"
          >
            Tidak ada penyebab kekerasan seksual yang berasal dari korban
            kekerasan seksual.
          </p>
        </div>
      </div>

      {/* Kontak */}
      <div class="w-full flex flex-col pt-4 pb-10 px-6 bg-[#D0BBE2] text-[#000] items-center justify-center">
        <div className="text-[28px] leading-2 sm:text-[31px] lg:text-[45px]">
          {/* Headline */}
          <p style={{ fontFamily: "DM Serif Display, serif" }} id="Kontak">
            Kamu butuh bantuan?
          </p>
        </div>
        <div>
          <p
            style={{ fontFamily: "Poppins" }}
            className="text-center text-[16px] sm:text-[16px] lg:text-[18px]"
          >
            Kamu tidak sendirian! Kami siap membantu dan melindungimu!
          </p>
        </div>
        <div className="mt-3 flex flex-row space-x-2">
          <a
            href="https://linktr.ee/satgasppksunair"
            target="_blank"
            className="btn btn-sm md:btn-md lg:btn-lg bg-[#191919] text-[#fff] rounded-none"
          >
            Satgas PPKS UNAIR
          </a>
          <a
            href="https://wa.me/08111129129"
            target="_blank"
            className="btn btn-sm md:btn-md lg:btn-lg bg-[#191919] text-[#fff] rounded-none"
          >
            Hotline SAPA 129
          </a>
        </div>
      </div>
    </>
  );
}
