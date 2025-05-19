
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useBranch } from '../contexts/BranchContext';
import { useToast } from '../hooks/use-toast';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Label } from '../components/ui/label';
import { MapPin } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const { branch } = useBranch();
  const { toast } = useToast();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    selectedBranch: branch,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, send this to an API
    console.log('Form submitted:', form);
    
    // Show success message
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon.",
    });
    
    // Reset form
    setForm({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      selectedBranch: branch,
    });
  };

  // Branch-specific contact information
  const branchInfo = {
    'addis-ababa': {
      address: 'Bole Road, Next to Millennium Hall',
      phone: '+251 911 123 456',
      email: 'addis@hirtoli.com',
      mapUrl: 'https://maps.google.com/?q=8.9806,38.7578',
    },
    'adama': {
      address: 'Main Street, Near Adama University',
      phone: '+251 922 123 456',
      email: 'adama@hirtoli.com',
      mapUrl: 'https://maps.google.com/?q=8.5373,39.2700',
    },
    'bahir-dar': {
      address: 'Lake Tana Road, Near Kuriftu Resort',
      phone: '+251 933 123 456',
      email: 'bahirdar@hirtoli.com',
      mapUrl: 'https://maps.google.com/?q=11.5742,37.3614',
    }
  };

  const currentBranchInfo = branchInfo[branch as keyof typeof branchInfo];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">{t('nav.contact')}</h1>
            <p className="text-lg text-gray-600">
              Get in touch with us for inquiries, feedback, or to enroll in our courses
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <Card className="p-6 mb-8">
                <div className="flex items-start mb-6">
                  <MapPin className="mr-4 text-hirtoli-red mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {branch === 'addis-ababa' ? 'Addis Ababa' : branch === 'adama' ? 'Adama' : 'Bahir Dar'} Branch
                    </h3>
                    <p className="text-gray-600">{currentBranchInfo.address}</p>
                    <a 
                      href={currentBranchInfo.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-hirtoli-green hover:underline mt-1 inline-block"
                    >
                      View on map
                    </a>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">{currentBranchInfo.phone}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">{currentBranchInfo.email}</p>
                </div>
              </Card>
              
              <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
              <Card className="p-6">
                <div className="space-y-3">
                  <div className="flex justify-between border-b pb-2">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Saturday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <Card className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Your phone number"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="branch">Branch</Label>
                    <Select
                      value={form.selectedBranch}
                      onValueChange={(value) => handleSelectChange('selectedBranch', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select branch" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="addis-ababa">{t('branch.addisAbaba')}</SelectItem>
                        <SelectItem value="adama">{t('branch.adama')}</SelectItem>
                        <SelectItem value="bahir-dar">{t('branch.bahirDar')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
