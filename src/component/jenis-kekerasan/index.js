import React from "react";

export default function JenisKekerasan() {
  return (
    <>
      <div className="w-full bg-[#EAE7FB] pt-4 pb-7">
        {/* Title */}
        <p
          className="pb-4 text-center text-[#000] text-[21px] md:text-[30px] tracking-widest"
          style={{ fontFamily: "DM Serif Display, serif" }}
        >
          Jenis Kekerasan Seksual
        </p>

        <div className="px-5 md:px-10 grid grid-cols-1 gap-4">
          {/*  Berdasarkan jenisnya, kekerasan dapat digolongkan menjadi: */}
          <div className="collapse collapse-arrow text-[#000] bg-[#E1DCFF]">
            <input type="checkbox" />
            <div className="collapse-title text-[16px] font-semibold">
              Berdasarkan jenisnya, kekerasan dapat digolongkan menjadi:
            </div>
            <div className="collapse-content">
              <ul className="list-disc ml-6">
                <li className="mb-2">Verbal</li>
                <li className="mb-2">Nonfisik</li>
                <li className="mb-2">Fisik</li>
                <li className="mb-2">
                  Daring atau melalui teknologi informasi dan komunikasi
                </li>
              </ul>
            </div>
          </div>

          {/* Jenis Kekerasan Seksual Menurut Komnas Perempuan  */}
          <div className="collapse collapse-arrow text-[#000] bg-[#E1DCFF]">
            <input type="checkbox" />
            <div className="collapse-title text-[16px] font-semibold">
              Jenis Kekerasan Seksual Menurut Komnas Perempuan
            </div>
            <div className="collapse-content">
              <ul className="list-disc ml-6">
                <li className="mb-2">Perkosaan</li>
                <li className="mb-2">
                  Intimidasi seksual termasuk ancaman atau percobaan perkosaan
                </li>
                <li className="mb-2">Pelecehan seksual</li>
                <li className="mb-2">Eksploitasi seksual</li>
                <li className="mb-2">
                  Perdagangan perempuan untuk tujuan seksual
                </li>
                <li className="mb-2">Prostitusi paksa</li>
                <li className="mb-2">Perbudakan seksual</li>
                <li className="mb-2">
                  Pemaksaan perkawinan, termasuk cerai gantung
                </li>
                <li className="mb-2">Pemaksaan kehamilan</li>
                <li className="mb-2">Pemaksaan aborsi</li>
                <li className="mb-2">Pemaksaan kontrasepsi dan sentralisasi</li>
                <li className="mb-2">Penyiksaan seksual</li>
                <li className="mb-2">
                  Penghukuman tidak manusiawi dan bernuansa seksual
                </li>
                <li className="mb-2">
                  Praktik tradisi bernuansa seksual yang membahayakan atau
                  mendiskriminasi perempuan
                </li>
                <li className="mb-2">
                  Kontrol seksual, termasuk lewat aturan diskriminatif beralasan
                  moralitas dan agama
                </li>
              </ul>
            </div>
          </div>

          {/* Contoh Kekerasan Seksual Dikutip Dari Permendikbud Nomor 30 Tahun 2021  */}
          <div className="collapse collapse-arrow text-[#000] bg-[#E1DCFF]">
            <input type="checkbox" />
            <div className="collapse-title text-[16px] font-semibold">
              Contoh Kekerasan Seksual Dikutip Dari Permendikbud Nomor 30 Tahun
              2021
            </div>
            <div className="collapse-content">
              <ul className="list-disc ml-6">
                <li className="mb-2">
                  Menyampaikan ujaran yang mendiskriminasi atau melecehkan
                  tampilan fisik, kondisi tubuh, dan/atau identitas gender
                  korban.
                </li>
                <li className="mb-2">
                  Memperlihatkan alat kelaminnya dengan sengaja tanpa
                  persetujuan korban.
                </li>
                <li className="mb-2">
                  Menyampaikan ucapan yang memuat rayuan, lelucon, dan/atau
                  siulan yang bernuansa seksual pada korban.
                </li>
                <li className="mb-2">
                  Menatap korban dengan nuansa seksual dan/atau tidak nyaman.
                </li>
                <li className="mb-2">
                  Mengirimkan pesan, lelucon, gambar, foto, audio, dan/atau
                  video bernuansa seksual kepada korban meskipun sudah dilarang
                  korban.
                </li>
                <li className="mb-2">
                  Mengambil, merekam, dan/atau mengedarkan foto dan/atau rekaman
                  audio dan/atau visual korban yang bernuansa seksual tanpa
                  persetujuan korban.
                </li>
                <li className="mb-2">
                  Mengunggah foto tubuh dan/atau informasi pribadi korban yang
                  bernuansa seksual tanpa persetujuan korban.
                </li>
                <li className="mb-2">
                  Menyebarkan informasi terkait tubuh dan/atau pribadi korban
                  yang bernuansa seksual tanpa persetujuan korban.
                </li>
                <li className="mb-2">
                  Mengintip atau dengan sengaja melihat korban yang sedang
                  melakukan kegiatan secara pribadi dan/atau pada ruang yang
                  bersifat pribadi.
                </li>
                <li className="mb-2">
                  Membujuk, menjanjikan, menawarkan sesuatu, atau mengancam
                  korban untuk melakukan transaksi atau kegiatan seksual yang
                  tidak disetujui oleh korban.
                </li>
                <li className="mb-2">
                  Memberi hukuman atau sanksi yang bernuansa seksual.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
