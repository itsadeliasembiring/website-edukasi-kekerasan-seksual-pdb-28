import React from "react";
import boy from "../../assets/boy.png";
import girl from "../../assets/girl.png";

export default function Penyebab() {
  return (
    <>
      <div className="w-full bg-[#FEF3E1]">
        {/* Title */}
        <p
          className="pt-4 text-center text-[#000] text-[21px] md:text-[30px] tracking-widest"
          style={{ fontFamily: "DM Serif Display, serif" }}
        >
          Penyebab Kekerasan Seksual
        </p>

        {/* Card Desktop & Tablet */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-20 py-4 bg-[#FEF3E1]">
          {/* Card 1: Hawa Nafsu */}
          <div className="bg-[#EAE7FB] border-2 border-[#000]">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-[#000]">
                Hawa Nafsu
              </h3>
              <p className="text-gray-700 text-[14px] md:text-[18px]">
                Terdapat hasrat sex yang tidak bisa disalurkan dapat menjadi
                salah satu faktor penyebab pelecehan seksual dimana pelaku
                menyalurkan nafsunya tersebut dengan melakukan pelecehan
                seksual.
              </p>
            </div>
          </div>
          {/* Card 2: Penggunaan kekuasaan atas orang lain */}
          <div className="bg-[#BBEDC7] border-2 border-[#000]">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-[#000]">
                Penggunaan Kekuasaan atas Orang Lain
              </h3>
              <p className="text-gray-700 text-[14px] md:text-[18px]">
                Pelaku memiliki otoritas atas korban. Contohnya, pelaku
                merupakan atasan korban.
              </p>
            </div>
          </div>
          {/* Card 3: Sistem patriarki di masyarakat */}
          <div className="bg-[#FFDAC8] border-2 border-[#000]">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-[#000]">
                Sistem Patriarki di Masyarakat
              </h3>
              <p className="text-gray-700 text-[14px] md:text-[18px]">
                Melekatnya sistem patriarki yang kuat dalam diri masyarakat
                Indonesia menyebabkan masyarakat mewajarkan tindakan kekerasan
                seksual ataupun pelecehan seksual dan justru menuduh korban atau
                playing victim.
              </p>
            </div>
          </div>
          {/* Card 4: Kebiasaan menonton konten porno */}
          <div className="bg-[#C6EBFF] border-2 border-[#000]">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-[#000]">
                Kebiasaan Menonton Konten Porno
              </h3>
              <p className="text-gray-700 text-[14px] md:text-[18px]">
                Hal ini memicu adanya fantasi seksual, dan apabila tidak
                disalurkan dengan baik maka bisa saja berujung pada pelecehan
                seksual.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="px-4 py-4 md:px-0 md:py-0">
          <div className="w-full h-auto carousel border-2 border-[#000] md:hidden">
            {/* Slide 1 */}
            <div className="carousel-item w-full bg-[#EAE7FB]">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-[#000]">
                  Hawa Nafsu
                </h3>
                <p className="text-gray-700 text-[14px] md:text-[18px]">
                  Terdapat hasrat sex yang tidak bisa disalurkan dapat menjadi
                  salah satu faktor penyebab pelecehan seksual dimana pelaku
                  menyalurkan nafsunya tersebut dengan melakukan pelecehan
                  seksual.
                </p>
              </div>
            </div>
            {/* Slide 2 */}
            <div className="carousel-item w-full bg-[#BBEDC7]">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-[#000]">
                  Penggunaan Kekuasaan atas Orang Lain
                </h3>
                <p className="text-gray-700 text-[14px] md:text-[18px]">
                  Pelaku memiliki otoritas atas korban. Contohnya, pelaku
                  merupakan atasan korban.
                </p>
              </div>
            </div>
            {/* Slide 3 */}
            <div className="carousel-item w-full bg-[#FFDAC8]">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-[#000]">
                  Sistem Patriarki di Masyarakat
                </h3>
                <p className="text-gray-700 text-[14px] md:text-[18px]">
                  Melekatnya sistem patriarki yang kuat dalam diri masyarakat
                  Indonesia menyebabkan masyarakat mewajarkan tindakan kekerasan
                  seksual ataupun pelecehan seksual dan justru menuduh korban
                  atau playing victim.
                </p>
              </div>
            </div>
            {/* Slide 4 */}
            <div className="carousel-item w-full bg-[#C6EBFF]">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-[#000]">
                  Kebiasaan Menonton Konten Porno
                </h3>
                <p className="text-[14px] md:text-[18px] text-gray-700">
                  Hal ini memicu adanya fantasi seksual, dan apabila tidak
                  disalurkan dengan baik maka bisa saja berujung pada pelecehan
                  seksual.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-[14px] md:text-[18px] text-center text-[#000] px-5 pb-4 md:px-20 italic leading-1">
          Kekerasan seksual bukan soal sex, tapi soal kekuasaan dan kontrol.
          <br></br>Tindakan pelecehan seksual berakar dari tindakan yang
          dinormalisasi berdasarkan sikap dan keyakinan yang menindas.
        </p>
      </div>
    </>
  );
}
