
import React from 'react';
import { Label } from '../../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { Phone, Clock } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

interface ContactPreferencesSectionProps {
  form: {
    inquiryType: string;
    preferredContact: string;
    urgency: string;
    selectedBranch: string;
  };
  onSelectChange: (name: string, value: string) => void;
}

const ContactPreferencesSection: React.FC<ContactPreferencesSectionProps> = ({
  form,
  onSelectChange
}) => {
  const { t } = useLanguage();

  return (
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
            onValueChange={(value) => onSelectChange('inquiryType', value)}
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
            onValueChange={(value) => onSelectChange('preferredContact', value)}
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
            onValueChange={(value) => onSelectChange('urgency', value)}
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
          onValueChange={(value) => onSelectChange('selectedBranch', value)}
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
  );
};

export default ContactPreferencesSection;
