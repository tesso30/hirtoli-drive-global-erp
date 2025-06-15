
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and about */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/41e35a55-854e-4382-855f-00cd01714172.png" 
                alt="Hirtoli Driving School" 
                className="h-10 w-10 rounded-full"
              />
              <span className="text-xl font-bold text-hirtoli-red">{t('app.title')}</span>
            </div>
            <p className="text-gray-300 mb-4">{t('app.tagline')}</p>
          </div>

          {/* Quick links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">{t('footer.quick_links')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-hirtoli-green transition">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-hirtoli-green transition">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-hirtoli-green transition">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-hirtoli-green transition">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact information */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>{t('footer.address')}</p>
              <p>{t('footer.email')}</p>
              <p>{t('footer.phone')}</p>
            </address>
          </div>

          {/* Branch offices */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">{t('branches.title')}</h3>
            <ul className="text-gray-300 space-y-2">
              <li>{t('branches.chiro.title')}</li>
              <li>{t('branches.harar.title')}</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} {t('app.title')}. {t('footer.rights')}
          </div>
          <div className="flex space-x-4">
            <Link to="/privacy" className="text-gray-400 hover:text-hirtoli-green transition">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-hirtoli-green transition">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
