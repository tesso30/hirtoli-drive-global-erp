
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const NavbarLogo = () => {
  const { t } = useLanguage();

  return (
    <Link to="/" className="flex items-center space-x-3">
      <img 
        src="/lovable-uploads/41e35a55-854e-4382-855f-00cd01714172.png" 
        alt="Hirtoli Driving School" 
        className="h-10 w-10 rounded-full"
      />
      <span className="text-xl font-bold text-hirtoli-red">{t('app.title')}</span>
    </Link>
  );
};

export default NavbarLogo;
