
import React, { useState } from 'react';
import { useToast } from '../../hooks/use-toast';
import { useBranch } from '../../contexts/BranchContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Card } from '../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Label } from '../ui/label';
import { Mail, Phone, User, MessageSquare, Clock, CheckCircle } from 'lucide-react';

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
          {/* Personal Information Section */}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                onChange={handleChange}
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

          {/* Contact Preferences Section */}
          <fieldset className="space-y-4">
            <legend className="text-lg font-semibold text-hirtoli-green mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5" aria-hidden="true" />
              {t('contact.form.preferences') || 'Contact Preferences'}
            </legend>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="inquiryType">
                  {t('contact.form.inquiry_type') || 'Inquiry Type'}
                </Label>
                <Select
                  value={form.inquiryType}
                  onValueChange={(value) => handleSelectChange('inquiryType', value)}
                >
                  <SelectTrigger id="inquiryType">
                    <SelectValue placeholder={t('contact.form.select_inquiry') || "Select inquiry type"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">{t('contact.form.general_info') || 'General Information'}</SelectItem>
                    <SelectItem value="enrollment">{t('contact.form.course_enrollment') || 'Course Enrollment'}</SelectItem>
                    <SelectItem value="pricing">{t('contact.form.pricing_payment') || 'Pricing & Payment'}</SelectItem>
                    <SelectItem value="schedule">{t('contact.form.schedule_timing') || 'Schedule & Timing'}</SelectItem>
                    <SelectItem value="support">{t('contact.form.tech_support') || 'Technical Support'}</SelectItem>
                    <SelectItem value="complaint">{t('contact.form.complaint') || 'Complaint'}</SelectItem>
                    <SelectItem value="partnership">{t('contact.form.partnership') || 'Partnership'}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="preferredContact">
                  {t('contact.form.preferred_contact') || 'Preferred Contact Method'}
                </Label>
                <Select
                  value={form.preferredContact}
                  onValueChange={(value) => handleSelectChange('preferredContact', value)}
                >
                  <SelectTrigger id="preferredContact">
                    <SelectValue placeholder={t('contact.form.select_contact') || "Select contact method"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email">{t('contact.form.email') || 'Email'}</SelectItem>
                    <SelectItem value="phone">{t('contact.form.phone_call') || 'Phone Call'}</SelectItem>
                    <SelectItem value="whatsapp">{t('contact.form.whatsapp') || 'WhatsApp'}</SelectItem>
                    <SelectItem value="sms">{t('contact.form.sms') || 'SMS'}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="urgency" className="flex items-center gap-2">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  {t('contact.form.urgency') || 'Urgency Level'}
                </Label>
                <Select
                  value={form.urgency}
                  onValueChange={(value) => handleSelectChange('urgency', value)}
                >
                  <SelectTrigger id="urgency">
                    <SelectValue placeholder={t('contact.form.select_urgency') || "Select urgency"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">{t('contact.form.low_urgency') || 'Low (3-5 days)'}</SelectItem>
                    <SelectItem value="normal">{t('contact.form.normal_urgency') || 'Normal (24 hours)'}</SelectItem>
                    <SelectItem value="high">{t('contact.form.high_urgency') || 'High (4-6 hours)'}</SelectItem>
                    <SelectItem value="urgent">{t('contact.form.urgent') || 'Urgent (1 hour)'}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="branch">
                {t('contact.form.preferred_branch') || 'Preferred Branch'}
              </Label>
              <Select
                value={form.selectedBranch}
                onValueChange={(value) => handleSelectChange('selectedBranch', value)}
              >
                <SelectTrigger id="branch">
                  <SelectValue placeholder={t('contact.form.select_branch') || "Select branch"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="chiro">{t('contact.form.chiro_branch') || 'Chiro Branch'}</SelectItem>
                  <SelectItem value="harar">{t('contact.form.harar_branch') || 'Harar Branch'}</SelectItem>
                  <SelectItem value="any">{t('contact.form.any_branch') || 'Any Branch'}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </fieldset>

          {/* Message Section */}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
          
          {/* Response Time Indicator */}
          <div className="bg-hirtoli-green/10 border border-hirtoli-green/20 rounded-lg p-4">
            <div className="flex items-center gap-2 text-hirtoli-green">
              <CheckCircle className="w-5 h-5" aria-hidden="true" />
              <span className="font-medium">{t('contact.form.expected_response') || 'Expected Response Time'}</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              {form.urgency === 'urgent' ? t('contact.form.within_1_hour') || 'Within 1 hour' : 
               form.urgency === 'high' ? t('contact.form.within_4_6_hours') || 'Within 4-6 hours' :
               form.urgency === 'normal' ? t('contact.form.within_24_hours') || 'Within 24 hours' : t('contact.form.within_3_5_days') || 'Within 3-5 days'}
              {form.preferredContact === 'phone' ? ` ${t('contact.form.via_phone') || 'via phone call'}` : 
               form.preferredContact === 'whatsapp' ? ` ${t('contact.form.via_whatsapp') || 'via WhatsApp'}` :
               form.preferredContact === 'sms' ? ` ${t('contact.form.via_sms') || 'via SMS'}` : ` ${t('contact.form.via_email') || 'via email'}`}
            </p>
          </div>
          
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
