import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import backgroundImage from './assets/d.png';
import Body from "./Body";
import Support from "./Support";

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
      <nav className="flex flex-col lg:flex-row justify-between items-center text-black py-4 shadow-md bg-gray-200 px-5 md:px-12">
        <div className="flex items-center space-x-4">
          <img src={backgroundImage} className="h-auto w-12" alt="Logo" />
          <p className="font-extrabold italic text-2xl">
            <span className="ml-2">Habuu</span>
          </p>
          <div className="w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={handleSearchChange}
              className="border border-gray-400 rounded w-full sm:w-48 md:w-64 py-2 px-3 text-sm sm:text-base"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {/* Responsive dropdown */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer lg:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={toggleDropdown}
          >
            {isDropdownOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
          {/* Dropdown menu */}
          <ul
            className={`${isDropdownOpen ? "" : "hidden "}lg:flex lg:items-center lg:space-x-4`}
          >
            <li>
              <Link to="/" className="text-lg hover:text-yellow-600 duration-300 ease-in-out">Home</Link>
            </li>
            <li>
              <Link to="/cart" className="text-lg hover:text-yellow-600 duration-300 ease-in-out">Cart</Link>
            </li>
            <li>
              <Link to="/p" className="text-lg hover:text-yellow-600 duration-300 ease-in-out">Pro</Link>
            </li>
            <li>
              <Link to="/contact" className="text-lg hover:text-yellow-600 duration-300 ease-in-out">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="flex justify-center mt-4">
        <Link to="/signin" className="text-lg mr-4 hover:text-yellow-600 duration-300 ease-in-out">signin</Link>
        <Link to="/signup" className="text-lg mr-4 hover:text-yellow-600 duration-300 ease-in-out">signup</Link>
        <Link to="/contact" className="text-lg mr-4 hover:text-yellow-600 duration-300 ease-in-out">kl</Link>
        <Link to="/blog" className="text-lg hover:text-yellow-600 duration-300 ease-in-out">Blog</Link>
      </div>
    </div>
  );
}