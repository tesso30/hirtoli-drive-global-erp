
import React, { useState } from 'react';
import NavbarLogo from './navbar/NavbarLogo';
import NavbarDesktopMenu from './navbar/NavbarDesktopMenu';
import NavbarControls from './navbar/NavbarControls';
import NavbarMobileMenu from './navbar/NavbarMobileMenu';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <NavbarLogo />
          <NavbarDesktopMenu />
          <div className="flex items-center space-x-4">
            <NavbarControls />
            <NavbarMobileMenu 
              mobileMenuOpen={mobileMenuOpen}
              setMobileMenuOpen={setMobileMenuOpen}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
