import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import backgroundImage from './assets/d.png';
import Body from "./Body";
import ReviewPage from "./ReviewPage";

export default function Nav() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="shadow-md">
      <nav className="flex flex-col lg:flex-row justify-between items-center text-black py-3 shadow-md bg-gray-800 px-5 md:px-12">
        <div className="flex items-center space-x-4">
         
          <p className="font-extrabold italic text-2xl">
            <span className="ml-2 text-white">Habuu</span>
          </p>
        </div>
        <div className="flex items-center justify-center flex-grow">
          {/* Dropdown menu */}
          <ul className="flex items-center space-x-4">
            <li>
              <Link
                to="/"
                className="text-lg text-white hover:text-yellow-600 duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="text-lg text-white hover:text-yellow-600 duration-300 ease-in-out"
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                to="/p"
                className="text-lg text-white hover:text-yellow-600 duration-300 ease-in-out"
              >
                Pro
              </Link>
            </li>
            <li>
              <Link
                to="/A"
                className="text-lg text-white hover:text-yellow-600 duration-300 ease-in-out"
              >
                About
              </Link>
             
            </li>
            <Link
                to="/C"
                className="text-lg text-white hover:text-yellow-600 duration-300 ease-in-out"
              >
                Contact
              </Link>
              <Link
                to="/R"
                className="text-lg text-white hover:text-yellow-600 duration-300 ease-in-out"
              >
               Review
              </Link>
          </ul>
        </div>
        <div className="flex items-center">
          <div className="w-full sm:w-auto ml-auto">
            <input
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={handleSearchChange}
              className="border border-gray-400 rounded w-full sm:w-48 md:w-64 py-1 px-3 text-sm sm:text-base"
            />
          </div>
        </div>
      </nav>

      
    </div>
  );
}