"use client";
import React, { useState } from 'react';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (<>
    <div className="w-full  text-center py-2 text-black text-sm" style={{
        fontFamily: 'Cardo, serif',
        fontWeight: 700,
        fontSize: '30px',
        lineHeight: '100%',
        letterSpacing: 0,
        color: 'black',
        height: '73px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e3e41a',
      }}>
      15% OFF on all tyres
    </div>
    <nav className="bg-[#221F5A] w-full flex items-center justify-between px-4 md:px-8 h-[136px] relative" style={{ fontFamily: 'Racing Sans One, sans-serif', fontWeight: 400, fontSize: '20px', lineHeight: '100%', letterSpacing: 0, color: '#D1D2D4', fontStyle: 'italic' }}>
      {/* Logo */}
      <div className="flex items-center">
    
        <img src="/images/logos/tyrelogo.svg" alt="logo"  />
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMenu}
        className="md:hidden text-white p-2"
        aria-label="Toggle menu"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Navigation Links - Desktop */}
      <ul className="hidden md:flex space-x-8 mx-auto">
        {['Home', 'About Us', 'Tyres', '4x4 Tyres', 'Car Tyres', 'All Seasonal Tyres', 'FAQs'].map((item) => (
          <li key={item}>
            <a
              href="#"
              className="font-semibold italic hover:text-[#FFE600] transition-colors duration-200"
              style={{ color: '#D1D2D4', fontFamily: 'Racing Sans One, sans-serif', fontSize: '20px', letterSpacing: 0, lineHeight: '100%' }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Cart Icon */}
      <div className="hidden md:flex items-center">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFE600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#221F5A] transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <ul className="flex flex-col py-4">
          {['Home', 'About Us', 'Tyres', '4x4 Tyres', 'Car Tyres', 'All Seasonal Tyres', 'FAQs'].map((item) => (
            <li key={item} className="px-4 py-2">
              <a 
                href="#" 
                className="font-semibold italic hover:text-[#FFE600] transition-colors duration-200"
                style={{ color: '#D1D2D4', fontFamily: 'Racing Sans One, sans-serif', fontSize: '20px', letterSpacing: 0, lineHeight: '100%' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
          <li className="px-4 py-2">
            <div className="flex items-center text-[#FFE600]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 </>0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <span className="m">Cart</span>
            </div>
          </li>
        </ul>
      </div>
    </nav></>
  );
} 