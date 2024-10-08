// React
import React from "react";
import { useNavigate } from 'react-router-dom';

// Resource
import Lampu from "/assets/lampu.png";
import Cursor from "/assets/click.png";
import Osis from "/assets/osis.png";
import Mpk from "/assets/mpk.png";

const Landpage: React.FC = () => {
  const navigate = useNavigate();

  const pilih = (kemana: string) => {
    navigate(`/listkandidat/${kemana}`);
  };

  return (
    <>
      <div className="overflow-hidden">
        <div className="w-screen h-screen p-24 flex flex-col justify-center relative overflow-hidden max-md:p-4">
          <div className="absolute inset-0 flex flex-col justify-center items-stretch z-[-1] pointer-events-none gap-32">
            <div className="flex justify-start absolute top-10 max-md:top-24">
              <h1 className="text-[15rem] text-putih-putih opacity-10 font-extrabold max-md:text-[13rem] max-md:animate-slideR">
                PENUS
              </h1>
            </div>

            <div className="flex justify-end w-full absolute -bottom-12 max-md:bottom-28">
              <h1 className="text-[15rem] text-putih-putih opacity-10 font-extrabold max-md:text-[13rem] text-nowrap max-md:animate-slideL">
                E-VOTING
              </h1>
            </div>
          </div>
          {/* Main content */}
          <div className="w-full relative z-10 flex flex-col items-center justify-center md:items-start">
            <h1 className="text-merah-penus text-8xl font-extrabold mb-4 max-md:text-5xl">
              PENUS
            </h1>
            <h1 className="text-putih-putih text-8xl font-extrabold mb-4 max-md:text-5xl">
              E-VOTING
            </h1>
            <p className="text-putih-putih mb-6 w-1/2 text-wrap max-md:text-center max-md:w-full text-sm">
              Selamat datang ke dalam program e-voting Penus. Silahkan geser kebawah untuk memilih kandidat MPK dan OSIS favorit anda atau klik tombol dibawah ini.
            </p>
            <a href="#vote">
              <button className="bg-merah-penus px-12 py-4 rounded-3xl text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_60%)] transition-all duration-300 hover:drop-shadow-merah-penus-bayangan hover:scale-105 max-md:text-xs">
                <span>Saya Ingin Voting Sekarang</span>
              </button>
            </a>
          </div>
        </div>

        <div
          id="bijak"
          className="h-screen w-screen flex justify-center items-center p-72 max-md:p-6 max-md:h-1/2 max-md:my-10"
        >
          <div className="relative">
            <h1 className="text-white text-4xl font-bold text-center max-md:text-sm ">
              Pilih-lah Dengan Cerdas
            </h1>
            <div className="absolute md:-top-10 right-4 rotate-[32deg] max-md:right-0 -top-8">
              <img
                src={Lampu}
                alt="lampu"
                className="w-32 duration-200 hover:drop-shadow-kuning-lampu hover:scale-105 max-md:w-14"
              />
            </div>
            <p className="text-white text-3xl text-center font-normal mt-20 max-md:text-sm">
              <i>
                “Tentukan pilihan Anda dengan bijaksana. Suara Anda adalah
                kontribusi penting dalam memilih pemimpin yang akan membawa
                perubahan positif.”
              </i>
            </p>
            <p className="text-white text-center text-3xl mt-16 max-md:text-sm max-md:mt-10">
              ~ The Wise Man
            </p>
          </div>
        </div>

        <div id="vote" className="w-screen h-screen max-md:h-1/2 max-md:my-28">
          <div className="flex items-center justify-center h-full flex-col">
            <div className="flex items-center text-white">
              <div className="h-px w-20 bg-white max-md:w-16"></div>
              <span className="mx-2 text-lg max-md:text-xs">Silahkan Klik Gambar Dibawah</span>
              <img src={Cursor} alt="mouse" className="w-6 mr-4 max-md:mr-2" />
              <div className="h-px w-20 bg-white max-md:w-16"></div>
            </div>

            <div className="flex justify-center items-center mt-14">
              <div className="flex gap-32 max-md:gap-8 ">
                <div
                  onClick={() => pilih("OSIS")}
                  className="flex flex-col items-center p-4 rounded-lg shadow-osis bg-yellow-300 w-64 h-80 duration-300 hover:drop-shadow-kuning-osis hover:scale-105 cursor-pointer max-md:w-32 max-md:h-40"
                >
                  <h3 className="text-xl font-bold text-center">OSIS</h3>
                  <img src={Osis} alt="osis" className="w-full" />
                </div>
                <div
                  onClick={() => pilih("MPK")}
                  className="flex flex-col items-center p-4 rounded-lg shadow-mpk bg-blue-300 w-64 h-80 duration-300 hover:drop-shadow-biru-mpk hover:scale-105 cursor-pointer max-md:w-32 max-md:h-40"
                >
                  <h3 className="text-xl font-bold text-center">MPK</h3>
                  <img src={Mpk} alt="mpk" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landpage;
