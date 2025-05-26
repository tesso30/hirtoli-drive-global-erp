
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import BranchInfo from '../components/contact/BranchInfo';
import ContactLocations from '../components/contact/ContactLocations';
import ContactFAQ from '../components/contact/ContactFAQ';
import ContactSupport from '../components/contact/ContactSupport';
import LiveChat from '../components/contact/LiveChat';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <ContactHero />

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="contact" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="contact">Contact Form</TabsTrigger>
              <TabsTrigger value="locations">Our Locations</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>

            <TabsContent value="contact" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <ContactForm />
                <BranchInfo />
              </div>
            </TabsContent>

            <TabsContent value="locations" className="mt-8">
              <ContactLocations />
            </TabsContent>

            <TabsContent value="faq" className="mt-8">
              <ContactFAQ />
            </TabsContent>

            <TabsContent value="support" className="mt-8">
              <ContactSupport />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <LiveChat />
    </div>
  );
};

export default Contact;
