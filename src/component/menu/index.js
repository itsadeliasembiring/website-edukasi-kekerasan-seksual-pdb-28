import React from "react";

export default function MenuMobile() {
  return (
    <>
      {/* Menu Mobile*/}
      <div className="navbar bg-[#D0BBE2] fixed z-40 justify-between">
        <div className="flex justify-start">
          <a
            href="#"
            className="text-[#000] ml-8 font-semibold"
            style={{ fontFamily: "Poppins" }}
          >
            Kelompok 1 PDB 28
          </a>
        </div>
        <div className="flex justify-end">
          {/* Menu in Desktop  */}
          <div className="hidden lg:flex w-full justify-end items-center">
            {/* Desktop Navigation */}
            <ul className="hidden md:flex w-full md:flex-row justify-center items-center space-x-2 pr-10">
              <li className="nav-item">
                <a
                  href="#Definisi"
                  className="nav-link text-[#000] btn bg-transparent border-none font-normal shadow-none hover:text-[#fff]"
                >
                  Definisi
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#Penyebab"
                  className="nav-link text-[#000] btn bg-transparent border-none font-normal shadow-none hover:text-[#fff]"
                >
                  Penyebab
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#JenisKekerasan"
                  className="nav-link text-[#000] btn bg-transparent border-none font-normal shadow-none hover:text-[#fff]"
                >
                  Jenis Kekerasan
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#DampakKekerasan"
                  className="nav-link text-[#000] btn bg-transparent border-none font-normal shadow-none hover:text-[#fff]"
                >
                  Dampak
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#Pencegahan"
                  className="nav-link text-[#000] btn bg-transparent border-none font-normal shadow-none hover:text-[#fff]"
                >
                  Pencegahan & Penanganan
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#Kontak"
                  className="nav-link text-[#000] btn bg-transparent border-none font-normal shadow-none hover:text-[#fff]"
                >
                  Kontak PPKS & SAPA
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                stroke="#000"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-[#EAE7FB] text-[#424242] rounded-box w-52 ">
              <li>
                <a href="#Definisi">Definisi</a>
              </li>
              <li>
                <a href="#Penyebab">Penyebab</a>
              </li>
              <li>
                <a href="#JenisKekerasan">Jenis Kekerasan</a>
              </li>
              <li>
                <a href="#DampakKekerasan">Dampak</a>
              </li>
              <li>
                <a href="#Pencegahan">Pencegahan & Penanganan</a>
              </li>
              <li>
                <a href="#Kontak">Kontak PPKS & SAPA</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
