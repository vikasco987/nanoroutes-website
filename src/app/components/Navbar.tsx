// // src/components/Navbar.tsx
// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { Menu, X } from 'lucide-react';

// const navLinks = [
//   { label: 'Home', href: '#' },
//   { label: 'About', href: '#about' },
//   { label: 'Services', href: '#services' },
//   { label: 'Portfolio', href: '#portfolio' },
//   { label: 'Contact', href: '#contact' },
// ];

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all ${
//         isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <Link href="/" className="text-xl font-bold text-black">
//           Fashway
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center space-x-8">
//           {navLinks.map((link) => (
//             <Link
//               key={link.label}
//               href={link.href}
//               className="text-gray-700 hover:text-black transition"
//             >
//               {link.label}
//             </Link>
//           ))}
//           <Link
//             href="#contact"
//             className="ml-4 px-4 py-2 rounded-full bg-black text-white hover:bg-gray-900 transition"
//           >
//             Get in touch
//           </Link>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
//           className="md:hidden text-black"
//         >
//           {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-white px-4 py-4 space-y-4">
//           {navLinks.map((link) => (
//             <Link
//               key={link.label}
//               href={link.href}
//               onClick={() => setMobileMenuOpen(false)}
//               className="block text-gray-800 hover:text-black transition"
//             >
//               {link.label}
//             </Link>
//           ))}
//           <Link
//             href="#contact"
//             className="inline-block w-full text-center px-4 py-2 rounded-full bg-black text-white hover:bg-gray-900 transition"
//           >
//             Get in touch
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// }















// "use client";

// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import Link from "next/link";

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "#about" },
//   { name: "Services", href: "#services" },
//   { name: "Projects", href: "#projects" },
//   { name: "Contact", href: "#contact" },
// ];

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link href="/" className="text-2xl font-bold text-gray-900">
//             Nano<span className="text-primary">Routes</span>
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className="text-gray-700 hover:text-primary transition font-medium"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Mobile Toggle */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="md:hidden p-2 text-gray-700"
//           >
//             {menuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white shadow-md">
//           <nav className="flex flex-col space-y-4 px-6 py-4">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className="text-gray-700 hover:text-primary transition font-medium"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }
















// // src/components/Navbar.tsx

// "use client";

// import { useState } from "react";
// import { Menu, X } from "lucide-react"; // You can use Heroicons or any other icon library

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
//       <div className="container mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <div className="text-2xl font-bold text-gray-900 tracking-wide">
//           Fashway
//         </div>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
//           <a href="#home" className="hover:text-black">Home</a>
//           <a href="#about" className="hover:text-black">About</a>
//           <a href="#services" className="hover:text-black">Services</a>
//           <a href="#projects" className="hover:text-black">Projects</a>
//           <a href="#contact" className="hover:text-black">Contact</a>
//         </nav>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu}>
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-md px-6 pb-4">
//           <nav className="flex flex-col space-y-4 text-sm font-medium text-gray-700">
//             <a href="#home" onClick={toggleMenu}>Home</a>
//             <a href="#about" onClick={toggleMenu}>About</a>
//             <a href="#services" onClick={toggleMenu}>Services</a>
//             <a href="#projects" onClick={toggleMenu}>Projects</a>
//             <a href="#contact" onClick={toggleMenu}>Contact</a>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }






// // src/components/Navbar.tsx

// "use client";

// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
//       <div className="container mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <div className="text-2xl font-bold text-black tracking-wide">
//           Nanoroutes
//         </div>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex space-x-8 text-sm font-medium text-black">
//           <a href="#home" className="hover:text-gray-700">Home</a>
//           <a href="#about" className="hover:text-gray-700">About</a>
//           <a href="#services" className="hover:text-gray-700">Services</a>
//           <a href="#projects" className="hover:text-gray-700">Projects</a>
//           <a href="#contact" className="hover:text-gray-700">Contact</a>
//         </nav>

//         {/* Mobile Menu Icon */}
//         <div className="md:hidden text-black">
//           <button onClick={toggleMenu}>
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isOpen && (
//         <div className="md:hidden bg-white/90 backdrop-blur-md px-6 pb-4 shadow-md">
//           <nav className="flex flex-col space-y-4 text-sm font-medium text-black">
//             <a href="#home" onClick={toggleMenu}>Home</a>
//             <a href="#about" onClick={toggleMenu}>About</a>
//             <a href="#services" onClick={toggleMenu}>Services</a>
//             <a href="#projects" onClick={toggleMenu}>Projects</a>
//             <a href="#contact" onClick={toggleMenu}>Contact</a>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }

















// src/components/Navbar.tsx

"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-black tracking-wide">Nanoroutes</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-black">
          <a href="#home" className="hover:text-gray-700">Home</a>
          <a href="#about" className="hover:text-gray-700">About</a>
          <a href="#services" className="hover:text-gray-700">Services</a>
          <a href="#projects" className="hover:text-gray-700">Projects</a>
          <a href="#contact" className="hover:text-gray-700">Contact</a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-black">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md px-6 pb-4 shadow-md">
          <nav className="flex flex-col space-y-4 text-sm font-medium text-black">
            <a href="#home" onClick={toggleMenu}>Home</a>
            <a href="#about" onClick={toggleMenu}>About</a>
            <a href="#services" onClick={toggleMenu}>Services</a>
            <a href="#projects" onClick={toggleMenu}>Projects</a>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}
