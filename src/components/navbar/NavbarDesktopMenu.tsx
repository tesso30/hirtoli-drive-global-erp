
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const NavbarDesktopMenu = () => {
  const { t } = useLanguage();

  return (
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
  );
};

export default NavbarDesktopMenu;
