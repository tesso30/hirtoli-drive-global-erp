
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { HelpCircle } from 'lucide-react';

const ContactFAQ = () => {
  const faqs = [
    {
      question: "How long does it take to complete the driving course?",
      answer: "Our standard course takes 4-6 weeks depending on your schedule and learning pace. We offer flexible timing to accommodate working students."
    },
    {
      question: "What documents do I need to enroll?",
      answer: "You need a valid ID card, passport-size photos, medical certificate, and proof of address. We'll guide you through the entire documentation process."
    },
    {
      question: "Do you provide vehicles for the driving test?",
      answer: "Yes, we provide well-maintained vehicles for your official driving test and our instructors will accompany you for support."
    },
    {
      question: "What are your payment options?",
      answer: "We accept cash, bank transfer, mobile money (Telebirr, M-Birr), and installment payments. We also offer student discounts."
    },
    {
      question: "Can I switch branches during my course?",
      answer: "Yes, you can transfer between our branches if needed. We'll coordinate your progress and schedule across locations."
    },
    {
      question: "Do you offer refresher courses?",
      answer: "Absolutely! We have specialized refresher courses for those who haven't driven for a while or want to improve their skills."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              <span className="flex items-center">
                <HelpCircle className="mr-2 text-hirtoli-green" size={20} />
                {faq.question}
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600 pl-7">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ContactFAQ;
