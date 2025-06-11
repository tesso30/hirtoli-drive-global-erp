
import React, { useState } from 'react';
import { useToast } from '../../hooks/use-toast';
import { useBranch } from '../../contexts/BranchContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { MessageSquare, Mail } from 'lucide-react';
import PersonalInfoSection from './form-sections/PersonalInfoSection';
import ContactPreferencesSection from './form-sections/ContactPreferencesSection';
import MessageSection from './form-sections/MessageSection';
import ResponseTimeIndicator from './form-sections/ResponseTimeIndicator';

const ContactForm = () => {
  const { branch } = useBranch();
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    selectedBranch: branch,
    inquiryType: 'general',
    preferredContact: 'email',
    urgency: 'normal'
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!form.name.trim()) newErrors.name = t('contact.form.name_required') || 'Full name is required';
    if (!form.email.trim()) newErrors.email = t('contact.form.email_required') || 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = t('contact.form.email_invalid') || 'Email is invalid';
    if (!form.phone.trim()) newErrors.phone = t('contact.form.phone_required') || 'Phone number is required';
    else if (!/^\+?[\d\s-()]+$/.test(form.phone)) newErrors.phone = t('contact.form.phone_invalid') || 'Phone number is invalid';
    if (!form.subject.trim()) newErrors.subject = t('contact.form.subject_required') || 'Subject is required';
    if (!form.message.trim()) newErrors.message = t('contact.form.message_required') || 'Message is required';
    else if (form.message.length < 10) newErrors.message = t('contact.form.message_too_short') || 'Message must be at least 10 characters';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: t('contact.form.validation_error') || "Validation Error",
        description: t('contact.form.fix_errors') || "Please fix the errors in the form",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', form);
      
      toast({
        title: t('contact.form.success_title') || "Message Sent Successfully",
        description: t('contact.form.success_message') || `Thank you ${form.name}! We'll respond to your ${form.inquiryType} inquiry within ${form.urgency === 'urgent' ? '1 hour' : '24 hours'}.`,
      });
      
      setForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        selectedBranch: branch,
        inquiryType: 'general',
        preferredContact: 'email',
        urgency: 'normal'
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <MessageSquare className="w-8 h-8 text-hirtoli-green" aria-hidden="true" />
        <h2 className="text-2xl font-bold">{t('contact.form.title') || 'Send Us a Message'}</h2>
      </div>
      
      <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <PersonalInfoSection
            form={{ name: form.name, email: form.email, phone: form.phone }}
            errors={errors}
            onChange={handleChange}
          />

          <ContactPreferencesSection
            form={{
              inquiryType: form.inquiryType,
              preferredContact: form.preferredContact,
              urgency: form.urgency,
              selectedBranch: form.selectedBranch
            }}
            onSelectChange={handleSelectChange}
          />

          <MessageSection
            form={{ subject: form.subject, message: form.message }}
            errors={errors}
            onChange={handleChange}
          />
          
          <ResponseTimeIndicator
            urgency={form.urgency}
            preferredContact={form.preferredContact}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-hirtoli-green hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
            aria-describedby="submit-status"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true"></div>
                <span>{t('contact.form.sending') || 'Sending Message...'}</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>{t('contact.form.send_message') || 'Send Message'}</span>
              </div>
            )}
          </Button>
          
          {isSubmitting && (
            <p id="submit-status" className="text-center text-sm text-gray-600" role="status" aria-live="polite">
              {t('contact.form.please_wait') || 'Please wait while we send your message...'}
            </p>
          )}
        </form>
      </Card>
    </div>
  );
};

export default ContactForm;
