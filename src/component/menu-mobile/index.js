import React from "react";

export default function MenuMobile() {
  return (
    <>
      {/* Menu Mobile*/}
      <div className="navbar bg-[#D0BBE2]">
        <div className="navbar-start">
          <a
            href="#"
            className="text-[#000] ml-8 font-semibold"
            style={{ fontFamily: "Poppins" }}
          >
            Kelompok 1 PDB 28
          </a>
        </div>
        <div className="navbar-end">
          {/* Menu in Mobile  */}
          <div className="dropdown dropdown-end">
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
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#EAE7FB] text-[#424242] rounded-box w-52">
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
