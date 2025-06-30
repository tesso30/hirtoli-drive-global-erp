import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-16">
      <div className="max-w-md w-full">
        <Card className="text-center shadow-lg">
          <CardHeader className="space-y-4">
            <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-red-600">404</span>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              {t('common.page_not_found', 'Page Not Found')}
            </CardTitle>
            <CardDescription className="text-gray-600">
              {t('common.page_not_found_description', 'Sorry, the page you are looking for does not exist or has been moved.')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                onClick={() => navigate('/')}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                {t('common.go_home', 'Go Home')}
              </Button>
              <Button 
                variant="outline"
                onClick={() => navigate(-1)}
              >
                {t('common.go_back', 'Go Back')}
              </Button>
            </div>
            <div className="text-sm text-gray-500">
              {t('common.need_help', 'Need help?')}{' '}
              <button 
                onClick={() => navigate('/contact')}
                className="text-blue-600 hover:text-blue-700 underline"
              >
                {t('common.contact_support', 'Contact Support')}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound; 