
import React from 'react';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { Label } from '../../ui/label';
import { Mail } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

interface MessageSectionProps {
  form: {
    subject: string;
    message: string;
  };
  errors: Record<string, string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const MessageSection: React.FC<MessageSectionProps> = ({
  form,
  errors,
  onChange
}) => {
  const { t } = useLanguage();

  return (
    <fieldset className="space-y-4">
      <legend className="text-lg font-semibold text-hirtoli-green mb-4 flex items-center gap-2">
        <Mail className="w-5 h-5" aria-hidden="true" />
        {t('contact.form.your_message') || 'Your Message'}
      </legend>
      
      <div className="space-y-2">
        <Label htmlFor="subject" className="required">
          {t('contact.form.subject') || 'Subject'} *
        </Label>
        <Input
          id="subject"
          name="subject"
          placeholder={t('contact.form.subject_placeholder') || "Brief subject of your message"}
          value={form.subject}
          onChange={onChange}
          required
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className={errors.subject ? "border-red-500" : ""}
        />
        {errors.subject && (
          <p id="subject-error" className="text-red-500 text-sm" role="alert">
            {errors.subject}
          </p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message" className="required">
          {t('contact.form.message') || 'Message'} *
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder={t('contact.form.message_placeholder') || "Please provide details about your inquiry... (minimum 10 characters)"}
          rows={6}
          value={form.message}
          onChange={onChange}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : `message-count`}
          className={errors.message ? "border-red-500" : ""}
        />
        <div className="flex justify-between items-center">
          {errors.message ? (
            <p id="message-error" className="text-red-500 text-sm" role="alert">
              {errors.message}
            </p>
          ) : (
            <p id="message-count" className="text-gray-500 text-sm">
              {form.message.length} {t('contact.form.characters') || 'characters'} ({t('contact.form.minimum_10') || 'minimum 10'})
            </p>
          )}
        </div>
      </div>
    </fieldset>
  );
};

export default MessageSection;
