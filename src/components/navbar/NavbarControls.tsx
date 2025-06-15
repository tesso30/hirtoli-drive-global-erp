
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useBranch } from '../../contexts/BranchContext';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Globe, MapPin } from 'lucide-react';

const NavbarControls = () => {
  const { t, language, setLanguage } = useLanguage();
  const { branch, setBranch } = useBranch();
  const navigate = useNavigate();

  return (
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

      {/* Contact Us Button */}
      <div className="hidden md:flex items-center space-x-2">
        <Button onClick={() => navigate('/contact')}>
          {t('nav.contact')}
        </Button>
      </div>
    </div>
  );
};

export default NavbarControls;
