import React from "react";
import Link from "next/link";

export default function SideMenu() {
  const rumahsakit = {
    name: "RUMAH SAKIT HARAPAN",
    ruang: "ICU",
  };

  return (
    <div className="p-5 min-h-screen  bg-white rounded-br-lg">
      <div className="pb-5">
        <h1 className="text-[12px] flex-wrap break-words"> {rumahsakit.name} </h1>
      </div>

      <h2> Ruang </h2>
      <h1 className="text-3xl flex-wrap break-words"> {rumahsakit.ruang} </h1>

      <div className="mt-2">
        <button class="btn_sidemenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 51 51"
            fill="none"
          >
            <path
              d="M17 22.5L26 15.5L35 22.5V33.5C35 34.0304 34.7893 34.5391 34.4142 34.9142C34.0391 35.2893 33.5304 35.5 33 35.5H19C18.4696 35.5 17.9609 35.2893 17.5858 34.9142C17.2107 34.5391 17 34.0304 17 33.5V22.5Z"
              stroke="#50ABE4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M23 35.5V25.5H29V35.5"
              stroke="#50ABE4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h1 className="font-normal"> Dashboard </h1>
        </button>

        <button class="btn_sidemenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 51 51"
            fill="none"
          >
            <path
              d="M31 34.5V32.5C31 31.4391 30.5786 30.4217 29.8284 29.6716C29.0783 28.9214 28.0609 28.5 27 28.5H19C17.9391 28.5 16.9217 28.9214 16.1716 29.6716C15.4214 30.4217 15 31.4391 15 32.5V34.5"
              stroke="#50ABE4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M23 24.5C25.2091 24.5 27 22.7091 27 20.5C27 18.2909 25.2091 16.5 23 16.5C20.7909 16.5 19 18.2909 19 20.5C19 22.7091 20.7909 24.5 23 24.5Z"
              stroke="#50ABE4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M37 34.4999V32.4999C36.9993 31.6136 36.7044 30.7527 36.1614 30.0522C35.6184 29.3517 34.8581 28.8515 34 28.6299"
              stroke="#50ABE4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M30 16.6299C30.8604 16.8502 31.623 17.3506 32.1676 18.0522C32.7122 18.7538 33.0078 19.6167 33.0078 20.5049C33.0078 21.3931 32.7122 22.256 32.1676 22.9576C31.623 23.6592 30.8604 24.1596 30 24.3799"
              stroke="#50ABE4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h1 className="font-normal"> Daftar Pasien </h1>
        </button>

        <button class="btn_sidemenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 51 51"
            fill="none"
          >
            <path
              d="M23.3565 16.6348C23.1398 16.6348 22.9319 16.7209 22.7786 16.8742C22.6253 17.0275 22.5392 17.2354 22.5392 17.4522V21.1305C22.5392 21.3472 22.453 21.5552 22.2997 21.7084C22.1465 21.8617 21.9385 21.9479 21.7218 21.9479H18.4522C18.2354 21.9479 18.0275 22.034 17.8742 22.1873C17.7209 22.3405 17.6348 22.5485 17.6348 22.7652V27.6451C17.6348 27.8619 17.7209 28.0698 17.8742 28.2231C18.0275 28.3764 18.2354 28.4625 18.4522 28.4625H21.7218C21.9385 28.4625 22.1465 28.5486 22.2997 28.7019C22.453 28.8552 22.5392 29.0631 22.5392 29.2799V32.5495C22.5392 32.7662 22.6253 32.9741 22.7786 33.1274C22.9319 33.2807 23.1398 33.3668 23.3565 33.3668H28.2609C28.4777 33.3668 28.6856 33.2807 28.8389 33.1274C28.9922 32.9741 29.0783 32.7662 29.0783 32.5495V29.2799C29.0783 29.0631 29.1644 28.8552 29.3177 28.7019C29.471 28.5486 29.6789 28.4625 29.8957 28.4625H33.1653C33.3821 28.4625 33.59 28.3764 33.7433 28.2231C33.8966 28.0698 33.9827 27.8619 33.9827 27.6451V22.7407C33.9827 22.5239 33.8966 22.316 33.7433 22.1627C33.59 22.0094 33.3821 21.9233 33.1653 21.9233H29.8957C29.6789 21.9233 29.471 21.8372 29.3177 21.6839C29.1644 21.5306 29.0783 21.3227 29.0783 21.1059V17.4522C29.0783 17.2354 28.9922 17.0275 28.8389 16.8742C28.6856 16.7209 28.4777 16.6348 28.2609 16.6348H23.3565ZM20.9044 17.4522C20.9044 16.8018 21.1627 16.1781 21.6226 15.7182C22.0825 15.2584 22.7062 15 23.3565 15H28.2609C28.9113 15 29.535 15.2584 29.9949 15.7182C30.4547 16.1781 30.7131 16.8018 30.7131 17.4522V20.2869H33.1653C33.8156 20.2869 34.4394 20.5453 34.8992 21.0051C35.3591 21.465 35.6175 22.0887 35.6175 22.7391V27.6435C35.6175 28.2938 35.3591 28.9175 34.8992 29.3774C34.4394 29.8373 33.8156 30.0956 33.1653 30.0956H30.7131V32.5478C30.7131 33.1982 30.4547 33.8219 29.9949 34.2818C29.535 34.7416 28.9113 35 28.2609 35H23.3565C22.7062 35 22.0825 34.7416 21.6226 34.2818C21.1627 33.8219 20.9044 33.1982 20.9044 32.5478V30.0956H18.4522C17.8018 30.0956 17.1781 29.8373 16.7182 29.3774C16.2584 28.9175 16 28.2938 16 27.6435V22.7669C16 22.1165 16.2584 21.4928 16.7182 21.0329C17.1781 20.5731 17.8018 20.3147 18.4522 20.3147H20.9044V17.4522Z"
              fill="#50ABE4"
            />
          </svg>
          <h1 className="font-normal"> Daftar Dokter </h1>
        </button>
      </div>
    </div>
  );
}