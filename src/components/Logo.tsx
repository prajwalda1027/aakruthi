import React from 'react';
// @ts-ignore
import logoImg from '../assets/images/aakruthi_logo_transparent.png';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className = '', iconOnly = false }: LogoProps) {
  const sizeClass = iconOnly 
    ? "h-10 aspect-[1.47]" 
    : "h-14 sm:h-16 aspect-[1.47]";

  if (iconOnly) {
    return (
      <div className={`inline-flex items-center justify-center select-none ${className}`} id="brand-logo-icon">
        <div className={`flex items-center justify-center overflow-hidden shrink-0 ${sizeClass} transition-all duration-300`}>
          <img
            src={logoImg}
            alt="Aakruthi Constructions Official Logo"
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center select-none ${className}`} id="brand-logo-container">
      {/* Background-removed Logo Frame */}
      <div className={`flex items-center justify-center overflow-hidden shrink-0 ${sizeClass} transition-all duration-300`}>
        <img
          src={logoImg}
          alt="Aakruthi Constructions Official Brand Logo"
          className="h-full w-auto object-contain"
        />
      </div>
    </div>
  );
}
