
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
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
  const { user } = useAuth();
  const navigate = useNavigate();

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
              to="/blog" 
              className="text-gray-700 hover:text-hirtoli-green transition px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-hirtoli-green transition px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>
            {!user && (
              <div className="flex flex-col space-y-2 px-4 py-2">
                <Button variant="outline" onClick={() => {
                  navigate('/login');
                  setMobileMenuOpen(false);
                }}>
                  {t('nav.login')}
                </Button>
                <Button onClick={() => {
                  navigate('/register');
                  setMobileMenuOpen(false);
                }}>
                  {t('nav.register')}
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarMobileMenu;
