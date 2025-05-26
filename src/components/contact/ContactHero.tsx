
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useBranch } from '../../contexts/BranchContext';
import { Phone, Mail, MessageSquare } from 'lucide-react';

const ContactHero = () => {
  const { t } = useLanguage();
  const { branch } = useBranch();

  const branchInfo = {
    'chiro': {
      phone: '+251 911 123 456',
      email: 'chiro@hirtoli.com',
      whatsapp: '+251 911 123 456',
    },
    'harar': {
      phone: '+251 922 123 456',
      email: 'harar@hirtoli.com',
      whatsapp: '+251 922 123 456',
    }
  };

  const currentBranchInfo = branchInfo[branch as keyof typeof branchInfo];

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      description: "Call us during business hours",
      value: currentBranchInfo.phone,
      action: `tel:${currentBranchInfo.phone}`,
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "WhatsApp",
      description: "Quick messages and inquiries",
      value: currentBranchInfo.whatsapp,
      action: `https://wa.me/${currentBranchInfo.whatsapp.replace(/\+|\s/g, '')}`,
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "Detailed inquiries and documentation",
      value: currentBranchInfo.email,
      action: `mailto:${currentBranchInfo.email}`,
    },
  ];

  return (
    <section className="bg-gradient-to-r from-hirtoli-red to-hirtoli-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('nav.contact')}</h1>
          <p className="text-xl mb-8">
            Get in touch with us for course inquiries, enrollment, or any questions about driver training
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-all"
              >
                <div className="text-hirtoli-green mb-3">{method.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                <p className="text-sm opacity-90 mb-2">{method.description}</p>
                <p className="font-medium">{method.value}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
