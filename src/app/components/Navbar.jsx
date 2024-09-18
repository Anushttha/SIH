"use client"


import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Icons for the menu

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-900 text-white px-6 py-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Links */}
        <div className="flex space-x-4">
          {/* Logo */}
          <Link href="/" className="text-lg font-bold">
            Menu
          </Link>

          {/* Links (Hidden on small screens) */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-yellow-300">Home</Link>
            <Link href="/title-verification" className="hover:text-yellow-300">Title Verification</Link>
            <Link href="/registration" className="hover:text-yellow-300">Registration</Link>
            <Link href="/newsprint" className="hover:text-yellow-300">Newsprint</Link>
            <Link href="/contact" className="hover:text-yellow-300">Contact Us</Link>
          </div>
        </div>

        {/* Hamburger Menu Button (Visible on small screens) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible when toggled) */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link href="/" className="block py-2 px-4 text-white hover:bg-yellow-300">Home</Link>
          <Link href="/title-verification" className="block py-2 px-4 text-white hover:bg-yellow-300">Title Verification</Link>
          <Link href="/registration" className="block py-2 px-4 text-white hover:bg-yellow-300">Registration</Link>
          <Link href="/newsprint" className="block py-2 px-4 text-white hover:bg-yellow-300">Newsprint</Link>
          <Link href="/contact" className="block py-2 px-4 text-white hover:bg-yellow-300">Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
