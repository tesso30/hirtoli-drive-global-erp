
import React from 'react';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { User } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

interface PersonalInfoSectionProps {
  form: {
    name: string;
    email: string;
    phone: string;
  };
  errors: Record<string, string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({
  form,
  errors,
  onChange
}) => {
  const { t } = useLanguage();

  return (
    <fieldset className="space-y-4">
      <legend className="text-lg font-semibold text-hirtoli-green mb-4 flex items-center gap-2">
        <User className="w-5 h-5" aria-hidden="true" />
        {t('contact.form.personal_info') || 'Personal Information'}
      </legend>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="required">
            {t('contact.form.name') || 'Full Name'} *
          </Label>
          <Input
            id="name"
            name="name"
            placeholder={t('contact.form.name_placeholder') || "Enter your full name"}
            value={form.name}
            onChange={onChange}
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && (
            <p id="name-error" className="text-red-500 text-sm" role="alert">
              {errors.name}
            </p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone" className="required">
            {t('contact.form.phone') || 'Phone Number'} *
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder={t('contact.form.phone_placeholder') || "+251 9XX XXX XXX"}
            value={form.phone}
            onChange={onChange}
            required
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={errors.phone ? "border-red-500" : ""}
          />
          {errors.phone && (
            <p id="phone-error" className="text-red-500 text-sm" role="alert">
              {errors.phone}
            </p>
          )}
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email" className="required">
          {t('contact.form.email') || 'Email Address'} *
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder={t('contact.form.email_placeholder') || "your.email@example.com"}
          value={form.email}
          onChange={onChange}
          required
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 text-sm" role="alert">
            {errors.email}
          </p>
        )}
      </div>
    </fieldset>
  );
};

export default PersonalInfoSection;
