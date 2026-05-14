import { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo512.png.ico';
import { Link } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-100 shadow-md">
      <div className="max-w-6xl mx-auto p-3">

        {/* Top Row */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/">
           <h1 className="font-bold flex items-center gap-1">
  <img
    src={logo}
    alt="logo"
    className="w-8 h-8 sm:w-10 sm:h-10 object-cover"
  />

  <span className="text-sky-400 text-base sm:text-lg md:text-xl lg:text-2xl">
    Stay
  </span>
  <span className="text-blue-500 text-base sm:text-lg md:text-xl lg:text-2xl">
    Space
  </span>
</h1>
          </Link>

          {/* Mobile Search (CENTER) */}
          <form className="flex sm:hidden bg-slate-100 px-2 py-1 rounded-lg items-center w-32">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent focus:outline-none text-sm w-full"
            />
            <FaSearch className="text-blue-500 text-sm" />
          </form>

          {/* Desktop Search */}
          <form className="hidden sm:flex bg-slate-100 p-2 rounded-lg items-center">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none w-40 lg:w-64"
            />
            <FaSearch className="text-blue-500" />
          </form>

          {/* Desktop Nav */}
         <ul className="hidden sm:flex items-center gap-6">
  <li>
    <Link
      to="/"
      className="text-gray-700 text-sm md:text-base font-medium hover:text-blue-600 transition duration-200"
    >
      Home
    </Link>
  </li>

  <li>
    <Link
      to="/about"
      className="text-gray-700 text-sm md:text-base font-medium hover:text-blue-600 transition duration-200"
    >
      About
    </Link>
  </li>

  <li>
    <Link
  to="/sign-in"
  className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-blue-500 text-white text-sm md:text-base font-medium hover:bg-blue-600 transition duration-200"
>
  <FaSignInAlt className="text-sm" />
  Sign In
</Link>
  </li>
</ul>

          {/* Mobile Menu Icon */}
          <div className="sm:hidden">
            {menuOpen ? (
  <FaTimes
    className="text-blue-500 text-xl cursor-pointer hover:text-blue-700 transition duration-200"
    onClick={() => setMenuOpen(false)}
  />
) : (
  <FaBars
    className="text-blue-500 text-xl cursor-pointer hover:text-blue-700 transition duration-200"
    onClick={() => setMenuOpen(true)}
  />
)}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="flex flex-col mt-3 gap-2 sm:hidden bg-white p-3 rounded-lg shadow">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)} className="text-blue-500 font-bold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)} className="text-blue-500 font-bold">
                About
              </Link>
            </li>
            <li>
              <Link to="/sign-in" onClick={() => setMenuOpen(false)} className="text-blue-500 font-bold">
                Sign-in
              </Link>
            </li>
          </ul>
        )}

      </div>
    </header>
  );
}