import React from "react";
import MenuMobile from "../../component/menu-mobile/index";
import Banner from "../../component/banner/index";
import Definisi from "../../component/definisi/index";
import Penyebab from "../../component/penyebab/index";
import JenisKekerasan from "../../component/jenis-kekerasan/index";
import DampakKekerasan from "../../component/dampak/index";
import Pencegahan from "../../component/pencegahan/index";
import Kontak from "../../component/kontak-ppks";

export default function Main() {
  return (
    <>
      {/* Menu Mobile*/}
      <MenuMobile />
      <Banner />
      <Definisi />
      <Penyebab />
      <JenisKekerasan />
      <DampakKekerasan />
      <Pencegahan />
      <Kontak />
    </>
  );
}
