
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';

interface NavbarMobileMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  mobileMenuRef: React.RefObject<HTMLDivElement>;
}

const NavbarMobileMenu: React.FC<NavbarMobileMenuProps> = ({ 
  mobileMenuOpen, 
  setMobileMenuOpen,
  mobileMenuRef
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
        aria-label="Toggle mobile menu"
      >
        {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Mobile menu */}
          <div 
            ref={mobileMenuRef}
            className="fixed top-16 left-0 right-0 bg-white shadow-lg z-50 md:hidden transform transition-transform duration-300 ease-in-out"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-2">
                <Link 
                  to="/" 
                  className="text-gray-700 hover:text-hirtoli-green transition-colors px-4 py-3 rounded-lg hover:bg-gray-50 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.home')}
                </Link>
                <Link 
                  to="/about" 
                  className="text-gray-700 hover:text-hirtoli-green transition-colors px-4 py-3 rounded-lg hover:bg-gray-50 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.about')}
                </Link>
                <Link 
                  to="/services" 
                  className="text-gray-700 hover:text-hirtoli-green transition-colors px-4 py-3 rounded-lg hover:bg-gray-50 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.services')}
                </Link>
                <Link 
                  to="/contact" 
                  className="text-gray-700 hover:text-hirtoli-green transition-colors px-4 py-3 rounded-lg hover:bg-gray-50 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.contact')}
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default NavbarMobileMenu;
