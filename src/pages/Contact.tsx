
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useBranch } from '../contexts/BranchContext';
import { useToast } from '../hooks/use-toast';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { MapPin, Phone, Mail, Clock, MessageSquare, Users, Calendar, HelpCircle } from 'lucide-react';

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
    inquiryType: 'general',
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
    
    console.log('Form submitted:', form);
    
    toast({
      title: "Message Sent Successfully",
      description: `Thank you ${form.name}! We'll respond to your ${form.inquiryType} inquiry within 24 hours.`,
    });
    
    setForm({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      selectedBranch: branch,
      inquiryType: 'general',
    });
  };

  const branchInfo = {
    'addis-ababa': {
      address: 'Bole Road, Next to Millennium Hall, Addis Ababa',
      phone: '+251 911 123 456',
      email: 'addis@hirtoli.com',
      whatsapp: '+251 911 123 456',
      manager: 'Bekele Teferi',
      mapUrl: 'https://maps.google.com/?q=8.9806,38.7578',
      facilities: ['15 Training Vehicles', '8 Classrooms', 'Simulation Center', 'Cafeteria'],
      specialties: ['All License Types', 'Advanced Driving', 'Defensive Driving'],
    },
    'adama': {
      address: 'Main Street, Near Adama University, Adama',
      phone: '+251 922 123 456',
      email: 'adama@hirtoli.com',
      whatsapp: '+251 922 123 456',
      manager: 'Meron Alemu',
      mapUrl: 'https://maps.google.com/?q=8.5373,39.2700',
      facilities: ['12 Training Vehicles', '5 Classrooms', 'Rural Training Course'],
      specialties: ['Commercial Licenses', 'Agricultural Vehicles', 'Heavy Machinery'],
    },
    'bahir-dar': {
      address: 'Lake Tana Road, Near Kuriftu Resort, Bahir Dar',
      phone: '+251 933 123 456',
      email: 'bahirdar@hirtoli.com',
      whatsapp: '+251 933 123 456',
      manager: 'Tariku Desta',
      mapUrl: 'https://maps.google.com/?q=11.5742,37.3614',
      facilities: ['10 Training Vehicles', '4 Classrooms', 'Tourism Training Center'],
      specialties: ['Tourism Transport', 'Boat Safety', 'Mountain Driving'],
    }
  };

  const currentBranchInfo = branchInfo[branch as keyof typeof branchInfo];

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
    <div className="min-h-screen">
      {/* Hero Section */}
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
                {/* Contact Form */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <Card className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your full name"
                            value={form.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="+251 9XX XXX XXX"
                            value={form.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
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

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="inquiryType">Inquiry Type</Label>
                          <Select
                            value={form.inquiryType}
                            onValueChange={(value) => handleSelectChange('inquiryType', value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General Information</SelectItem>
                              <SelectItem value="enrollment">Course Enrollment</SelectItem>
                              <SelectItem value="pricing">Pricing & Payment</SelectItem>
                              <SelectItem value="schedule">Schedule & Timing</SelectItem>
                              <SelectItem value="support">Technical Support</SelectItem>
                              <SelectItem value="complaint">Complaint</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="branch">Preferred Branch</Label>
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
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="Brief subject of your message"
                          value={form.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Please provide details about your inquiry..."
                          rows={6}
                          value={form.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <Button type="submit" className="w-full bg-hirtoli-green hover:bg-opacity-90">
                        <Mail className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </Card>
                </div>

                {/* Quick Info */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Quick Information</h2>
                  
                  <Card className="p-6 mb-6">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="flex items-center">
                        <MapPin className="mr-2 text-hirtoli-red" />
                        {currentBranchInfo.address.split(',')[0]} Branch
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-0">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-1">Branch Manager</h4>
                          <p className="text-gray-600">{currentBranchInfo.manager}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Facilities</h4>
                          <ul className="text-gray-600 space-y-1">
                            {currentBranchInfo.facilities.map((facility, index) => (
                              <li key={index}>• {facility}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Specialties</h4>
                          <ul className="text-gray-600 space-y-1">
                            {currentBranchInfo.specialties.map((specialty, index) => (
                              <li key={index}>• {specialty}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="p-6">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="flex items-center">
                        <Clock className="mr-2 text-hirtoli-green" />
                        Business Hours
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-0">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center border-b pb-2">
                          <span className="font-medium">Monday - Friday</span>
                          <span className="text-hirtoli-green">8:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center border-b pb-2">
                          <span className="font-medium">Saturday</span>
                          <span className="text-hirtoli-green">9:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Sunday</span>
                          <span className="text-red-500">Closed</span>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800">
                          <strong>Note:</strong> Emergency support available 24/7 for enrolled students
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="locations" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {Object.entries(branchInfo).map(([key, info]) => (
                  <Card key={key} className="overflow-hidden">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MapPin className="mr-2 text-hirtoli-red" />
                        {key === 'addis-ababa' ? 'Addis Ababa' : key === 'adama' ? 'Adama' : 'Bahir Dar'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-1">Address</h4>
                          <p className="text-gray-600 text-sm">{info.address}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Contact</h4>
                          <p className="text-gray-600 text-sm">Phone: {info.phone}</p>
                          <p className="text-gray-600 text-sm">Email: {info.email}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Manager</h4>
                          <p className="text-gray-600 text-sm">{info.manager}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" asChild>
                            <a href={info.mapUrl} target="_blank" rel="noopener noreferrer">
                              View Map
                            </a>
                          </Button>
                          <Button size="sm" asChild>
                            <a href={`tel:${info.phone}`}>Call Now</a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="faq" className="mt-8">
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
            </TabsContent>

            <TabsContent value="support" className="mt-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-8 text-center">Student Support Services</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="p-6">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="flex items-center">
                        <Users className="mr-2 text-hirtoli-green" />
                        Academic Support
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-0">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-hirtoli-red mr-2">•</span>
                          <span>One-on-one tutoring sessions</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-hirtoli-red mr-2">•</span>
                          <span>Extra practice sessions for struggling students</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-hirtoli-red mr-2">•</span>
                          <span>Study materials and online resources</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-hirtoli-red mr-2">•</span>
                          <span>Mock tests and progress tracking</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="p-6">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="flex items-center">
                        <Calendar className="mr-2 text-hirtoli-green" />
                        Scheduling Support
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-0">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-hirtoli-red mr-2">•</span>
                          <span>Flexible scheduling options</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-hirtoli-red mr-2">•</span>
                          <span>Make-up sessions for missed classes</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-hirtoli-red mr-2">•</span>
                          <span>Weekend and evening slots available</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-hirtoli-red mr-2">•</span>
                          <span>Holiday scheduling accommodations</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card className="p-6 mt-8">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle>Emergency Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="px-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">24/7 Student Hotline</h4>
                        <p className="text-hirtoli-green font-medium">+251 900 000 000</p>
                        <p className="text-sm text-gray-600">For enrolled students only</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Emergency Email</h4>
                        <p className="text-hirtoli-green font-medium">emergency@hirtoli.com</p>
                        <p className="text-sm text-gray-600">Response within 1 hour</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">WhatsApp Support</h4>
                        <p className="text-hirtoli-green font-medium">+251 911 000 000</p>
                        <p className="text-sm text-gray-600">Quick responses</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Contact;
