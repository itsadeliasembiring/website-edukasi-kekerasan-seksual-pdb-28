import React from "react";

export default function Pencegahan() {
  return (
    <>
      <div className="w-full bg-[#F1E1FE] py-4">
        {/* Title */}
        <p
          className="pb-4 text-center text-[#000] text-[21px] md:text-[30px] tracking-widest"
          style={{ fontFamily: "DM Serif Display, serif" }}
          id="Pencegahan"
        >
          Apa Yang Dapat Kita Lakukan?
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 md:px-20 pb-4">
          {/* Card 1: Pencegahan */}
          <div className="bg-[#FEF3E1] border-2 border-[#000]">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-[#000]">
                Pencegahan Kekerasan Seksual
              </h3>
              <p className="text-gray-700 text-[14px] md:text-[14px] mb-3">
                Menurut World Health Organization (WHO) ada beberapa cara untuk
                mencegah terjadinya kekerasan seksual, antara lain:
              </p>

              <div className="grid grid-cols-1 gap-4">
                {/*  Pendekatan Individu*/}
                <div className="collapse collapse-arrow text-[#000] bg-[#EBE3D7]">
                  <input type="checkbox" />
                  <div className="collapse-title text-[16px] font-semibold">
                    Pendekatan Individu
                  </div>
                  <div className="collapse-content">
                    <ul className="list-disc ml-6">
                      <li className="mb-2">
                        Merancang program bagi pelaku kekerasan seksual dimana
                        pelaku harus bertanggung jawab terhadap perbuatannya
                        seperti menetapkan hukuman yang pantas bagi pelaku
                        kekerasan seksual.
                      </li>
                      <li className="mb-2">
                        Memberikan pendidikan untuk pencegahan kekerasan seksual
                        seperti pendidikan kesehatan reproduksi, sosialisasi
                        mengenai penyakit menular seksual, dan pendidikan
                        perlindungan diri dari kekerasan seksual.{" "}
                      </li>
                    </ul>
                  </div>
                </div>

                {/*   Pendekatan Perkembangan*/}
                <div className="collapse collapse-arrow text-[#000] bg-[#EBE3D7]">
                  <input type="checkbox" />
                  <div className="collapse-title text-[16px] font-semibold">
                    Pendekatan Perkembangan
                  </div>
                  <div className="collapse-content">
                    <p className="mb-2">
                      Pendekatan perkembangan yaitu mencegah kekerasan seksual
                      dengan cara menanamkan pendidikan pada anak-anak sejak
                      usia dini, seperti:
                    </p>
                    <ul className="list-disc ml-6">
                      <li className="mb-2">Pendidikan mengenai gender.</li>
                      <li className="mb-2">
                        Memperkenalkan pada anak tentang pelecehan seksual dan
                        risiko dari kekerasan seksual.
                      </li>
                      <li className="mb-2">
                        Mengajarkan anak cara untuk menghindari kekerasan
                        seksual.
                      </li>
                      <li className="mb-2">
                        Mengajarkan batasan untuk bagian tubuh yang bersifat
                        pribadi pada anak.
                      </li>
                      <li className="mb-2">
                        Mengajarkan batasan aktivitas seksual yang dilakukan
                        pada masa perkembangan anak.
                      </li>
                    </ul>
                  </div>
                </div>
                {/*   Pencegahan Sosial Komunitas */}
                <div className="collapse collapse-arrow text-[#000] bg-[#EBE3D7]">
                  <input type="checkbox" />
                  <div className="collapse-title text-[16px] font-semibold">
                    Pencegahan Sosial Komunitas
                  </div>
                  <div className="collapse-content">
                    <ul className="list-disc ml-6">
                      <li className="mb-2">
                        Mengadakan kampanye anti kekerasan seksual.
                      </li>
                      <li className="mb-2">
                        Memberikan pendidikan seksual di lingkungan sosial.
                      </li>
                      <li className="mb-2">
                        Mensosialisasikan pencegahan kekerasan seksual di
                        lingkungan sosial.
                      </li>
                    </ul>
                  </div>
                </div>

                {/*   Pendekatan Tenaga Kesehatan */}
                <div className="collapse collapse-arrow text-[#000] bg-[#EBE3D7]">
                  <input type="checkbox" />
                  <div className="collapse-title text-[16px] font-semibold">
                    Pendekatan Tenaga Kesehatan
                  </div>
                  <div className="collapse-content">
                    <ul className="list-disc ml-6">
                      <li className="mb-2">
                        Tenaga Kesehatan memberikan Layanan Dokumen Kesehatan
                        yang mempunyai peran sebagai alat bukti medis korban
                        yang mengalami kekerasan seksual.
                      </li>
                      <li className="mb-2">
                        Tenaga Kesehatan memberikan pelatihan kesehatan mengenai
                        kekerasan seksual dalam rangka mendeteksi secara dini
                        kekerasan seksual.
                      </li>
                      <li className="mb-2">
                        Tenaga Kesehatan memberikan perlindungan dan pencegahan
                        terhadap penyakit HIV.
                      </li>
                      <li className="mb-2">
                        Tenaga Kesehatan menyediakan tempat perawatan dan
                        perlindungan terhadap korban kekerasan seksual.
                      </li>
                    </ul>
                  </div>
                </div>
                {/*   Pendekatan Hukum dan Kebijakan Mengenai Kekerasan Seksual */}
                <div className="collapse collapse-arrow text-[#000] bg-[#EBE3D7]">
                  <input type="checkbox" />
                  <div className="collapse-title text-[16px] font-semibold">
                    Pendekatan Hukum dan Kebijakan Mengenai Kekerasan Seksual
                  </div>
                  <div className="collapse-content">
                    <ul className="list-disc ml-6">
                      <li className="mb-2">
                        Menyediakan tempat pelaporan dan penanganan terhadap
                        tindak kekerasan seksual.
                      </li>
                      <li className="mb-2">
                        Menyediakan peraturan legal mengenai tindak kekerasan
                        seksual dan hukuman bagi pelaku sebagai perlindungan
                        terhadap korban kekerasan seksual.
                      </li>
                      <li className="mb-2">
                        Mengadakan perjanjian internasional untuk standar hukum
                        terhadap tindak kekerasan seksual.
                      </li>
                      <li className="mb-2">
                        Mengadakan kampanye anti kekerasan seksual.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 Penanganan*/}
          <div className="bg-[#FEF3E1] border-2 border-[#000]">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-[#000]">
                Penanganan Kekerasan Seksual
              </h3>
              <p className="text-gray-700 text-[14px] md:text-[14px] mb-3">
                Mengutip permendikbud no 30 Tahun 2021 ada beberapa cara
                penanganan kekerasan seksual diantaranya :
              </p>

              <div className="grid grid-cols-1 gap-4">
                {/*  Pendampingan */}
                <div className="collapse collapse-arrow text-[#000] bg-[#EBE3D7]">
                  <input type="checkbox" />
                  <div className="collapse-title text-[16px] font-semibold">
                    Pendampingan
                  </div>
                  <div className="collapse-content">
                    <p>
                      Baik melalui konseling, layanan kesehatan, bantuan hukum,
                      advokasi, ataupun bimbingan sosial dan rohani.
                    </p>
                  </div>
                </div>
                {/*  Perlindungan  */}
                <div className="collapse collapse-arrow text-[#000] bg-[#EBE3D7]">
                  <input type="checkbox" />
                  <div className="collapse-title text-[16px] font-semibold">
                    Perlindungan
                  </div>
                  <div className="collapse-content">
                    <p>
                      Dengan memberikan jaminan keberlanjutan pendidikan atau
                      pekerjaan, penyediaan rumah aman serta korban atau saksi
                      bebas dari ancaman berkaitan dengan kesaksian yang
                      diberikan.
                    </p>
                  </div>
                </div>

                {/*  Pengenaan sanksi administratif */}
                <div className="collapse collapse-arrow text-[#000] bg-[#EBE3D7]">
                  <input type="checkbox" />
                  <div className="collapse-title text-[16px] font-semibold">
                    Pengenaan sanksi administratif
                  </div>
                  <div className="collapse-content">
                    <p>
                      Dengan pengenaan sanksi ringan, sedang, dan berat dan juga
                      tidak mengesampingkan peraturan lain.
                    </p>
                  </div>
                </div>

                {/*  Pemulihan korban  */}
                <div className="collapse collapse-arrow text-[#000] bg-[#EBE3D7]">
                  <input type="checkbox" />
                  <div className="collapse-title text-[16px] font-semibold">
                    Pemulihan korban
                  </div>
                  <div className="collapse-content">
                    <p>
                      Dengan melibatkan psikolog, tenaga medis, pemuka agama,
                      atau melalui organisasi pendamping korban.
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
