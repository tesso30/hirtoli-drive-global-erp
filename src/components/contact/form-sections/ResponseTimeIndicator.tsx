
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

interface ResponseTimeIndicatorProps {
  urgency: string;
  preferredContact: string;
}

const ResponseTimeIndicator: React.FC<ResponseTimeIndicatorProps> = ({
  urgency,
  preferredContact
}) => {
  const { t } = useLanguage();

  const getResponseTime = () => {
    switch (urgency) {
      case 'urgent':
        return t('contact.form.within_1_hour') || 'Within 1 hour';
      case 'high':
        return t('contact.form.within_4_6_hours') || 'Within 4-6 hours';
      case 'normal':
        return t('contact.form.within_24_hours') || 'Within 24 hours';
      default:
        return t('contact.form.within_3_5_days') || 'Within 3-5 days';
    }
  };

  const getContactMethod = () => {
    switch (preferredContact) {
      case 'phone':
        return ` ${t('contact.form.via_phone') || 'via phone call'}`;
      case 'whatsapp':
        return ` ${t('contact.form.via_whatsapp') || 'via WhatsApp'}`;
      case 'sms':
        return ` ${t('contact.form.via_sms') || 'via SMS'}`;
      default:
        return ` ${t('contact.form.via_email') || 'via email'}`;
    }
  };

  return (
    <div className="bg-hirtoli-green/10 border border-hirtoli-green/20 rounded-lg p-4">
      <div className="flex items-center gap-2 text-hirtoli-green">
        <CheckCircle className="w-5 h-5" aria-hidden="true" />
        <span className="font-medium">{t('contact.form.expected_response') || 'Expected Response Time'}</span>
      </div>
      <p className="text-sm text-gray-600 mt-1">
        {getResponseTime()}{getContactMethod()}
      </p>
    </div>
  );
};

export default ResponseTimeIndicator;
