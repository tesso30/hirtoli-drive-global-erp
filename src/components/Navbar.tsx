
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useBranch } from '../contexts/BranchContext';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';
import { Menu, Globe, MapPin } from 'lucide-react';

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const { branch, setBranch } = useBranch();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/41e35a55-854e-4382-855f-00cd01714172.png" 
              alt="Hirtoli Driving School" 
              className="h-10 w-10 rounded-full"
            />
            <span className="text-xl font-bold text-hirtoli-red">{t('app.title')}</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-hirtoli-green transition">
              {t('nav.home')}
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-hirtoli-green transition">
              {t('nav.about')}
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-hirtoli-green transition">
              {t('nav.services')}
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-hirtoli-green transition">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-hirtoli-green transition">
              {t('nav.contact')}
            </Link>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Language selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Globe size={18} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  <span className={language === 'en' ? 'font-bold' : ''}>
                    {t('lang.english')}
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('am')}>
                  <span className={`${language === 'am' ? 'font-bold' : ''} amharic`}>
                    {t('lang.amharic')}
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('om')}>
                  <span className={`${language === 'om' ? 'font-bold' : ''} oromo`}>
                    {t('lang.oromo')}
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Branch selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <MapPin size={18} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setBranch('chiro')}>
                  <span className={branch === 'chiro' ? 'font-bold' : ''}>
                    Chiro
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setBranch('harar')}>
                  <span className={branch === 'harar' ? 'font-bold' : ''}>
                    Harar
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Auth buttons */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    {user.name}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => navigate(`/${user.role}-dashboard`)}>
                    {t('dashboard.overview')}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    {t('dashboard.logout')}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                <Button variant="outline" onClick={() => navigate('/login')}>
                  {t('nav.login')}
                </Button>
                <Button onClick={() => navigate('/register')}>
                  {t('nav.register')}
                </Button>
              </div>
            )}

            {/* Mobile menu button */}
            <Button 
              variant="outline" 
              size="icon" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu />
            </Button>
          </div>
        </div>

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
      </div>
    </nav>
  );
};

export default Navbar;
