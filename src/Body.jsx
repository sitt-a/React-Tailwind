import { useState } from "react";
import backgroundImage from './assets/p.jpg';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

export default function Body() {

  return (
    <div className="w-full h-[600px] flex flex-col justify-between relative ">
      {/* Search bar */}



      <div className="grid grid-cols-1 md:grid-cols-2 m-auto max-w-[3000px] relative">
        <div className="bg-contain bg-center flex flex-col justify-center items-start w-full px-6 ml-8 md:ml-12 ">
          <h1 className="font-bold text-3xl py-3 md:text-4xl ">Lorem ipsum dolor</h1>
          <p className="text-xl md:text-2xl">Loremdor, ipsumdolor Loremipsum.</p>

          <button className="font-bold bg-gray-800 rounded rounded-5 px-6 py-3 sm:w-[45%] my-4 text-white hover:bg-yellow-800 
          hover:shadow-md duration-300 ease-in-out mb-6">Get Started</button>
        </div>
        <div className="ml-0">
          <img className="w-[85%] lg:w-full ml-6 lg:mt-8" src={backgroundImage} alt="Background" />
        </div>
        <div className="absolute flex flex-col py-3 px-4 md:py-5 md:px-0 w-full bottom-[-15%] md:bottom-[-20%] lg:bottom-[-5%] left-0 right-0 bg-zinc-200 rounded-xl shadow-xl text-center justify-center md:mt-0">
          <p className="text-lg md:text-xl font-bold text-center">Data services</p>
          <div className="flex flex-wrap justify-center md:justify-evenly">
            <p className="flex py-1 text-sm md:text-lg md:w-auto"><CheckOutlinedIcon className="text-yellow-700" />icon service</p>
            <p className="flex py-1 text-sm md:text-lg md:w-auto"><CheckOutlinedIcon className="text-yellow-700" />icon service</p>
            <p className="flex py-1 text-sm md:text-lg md:w-auto"><CheckOutlinedIcon className="text-yellow-700" />icon service</p>
            <p className="flex py-1 text-sm md:text-lg md:w-auto"><CheckOutlinedIcon className="text-yellow-700" />icon service</p>
          </div>
        </div>

      </div>
    </div>
  );
}
