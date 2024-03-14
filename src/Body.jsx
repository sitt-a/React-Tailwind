import { useState } from "react";
import backgroundImage from './assets/p.jpg';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

export default function Body() {

  return (
    <div className="flex items-center justify-center">
    <div className="w-[85%] h-[600px] flex flex-col justify-between  relative ">
      {/* Search bar */}

      <div className="grid grid-cols-1 md:grid-cols-2 m-auto max-w-[3000px] relative">
        <div className="bg-contain bg-center flex flex-col justify-center items-start w-full px-6 ml-8 md:ml-12 ">
          <h1 className="font-bold text-3xl py-3 md:text-4xl ">Lorem ipsum dolor</h1>
          <p className="text-xl md:text-2xl">Loremdor, ipsumdolor Loremipsum.</p>

          <button className="border text-black font-bold hover:bg-gray-700 rounded 
          rounded-5 px-4 py-2 sm:w-[45%] my-4 hover:text-white border-gray-700
          hover:shadow-md duration-300 ease-in-out mb-6">Get Started</button>
        </div>
        <div className="ml-0">
          <img className="w-[90%] lg:w-full ml-6 lg:mt-8" src={backgroundImage} alt="Background" />
        </div>
        <div className="absolute flex flex-col w-[75%] py-2 px-3 md:py-3 md:px-4 w-70% bottom-[-15%] md:bottom-[-10%] lg:bottom-[-1px] left-1/2 transform -translate-x-1/2 bg-zinc-300 rounded-xl shadow-xl text-center justify-center md:mt-0 max-w-[90%]">
          <p className="text-base md:text-lg font-bold text-center">Data services</p>
          <div className="flex flex-wrap justify-center md:justify-evenly">
            <p className="flex py-1 text-xs md:text-base md:w-auto"><CheckOutlinedIcon className="text-yellow-700" />icon service</p>
            <p className="flex py-1 text-xs md:text-base md:w-auto"><CheckOutlinedIcon className="text-yellow-700" />icon service</p>
            <p className="flex py-1 text-xs md:text-base md:w-auto"><CheckOutlinedIcon className="text-yellow-700" />icon service</p>
            <p className="flex py-1 text-xs md:text-base md:w-auto"><CheckOutlinedIcon className="text-yellow-700" />icon service</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}