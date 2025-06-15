
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';

interface NavbarMobileMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const NavbarMobileMenu: React.FC<NavbarMobileMenuProps> = ({ 
  mobileMenuOpen, 
  setMobileMenuOpen 
}) => {
  const { t } = useLanguage();

  return (
    <>
      {/* Mobile menu button */}
      <Button 
        variant="outline" 
        size="icon" 
        className="md:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <Menu />
      </Button>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-hirtoli-green transition px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-hirtoli-green transition px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.about')}
            </Link>
            <Link 
              to="/services" 
              className="text-gray-700 hover:text-hirtoli-green transition px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.services')}
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-hirtoli-green transition px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarMobileMenu;
