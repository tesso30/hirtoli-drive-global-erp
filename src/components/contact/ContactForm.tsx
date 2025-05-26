
import React, { useState } from 'react';
import { useToast } from '../../hooks/use-toast';
import { useBranch } from '../../contexts/BranchContext';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Card } from '../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Label } from '../ui/label';
import { Mail } from 'lucide-react';

const ContactForm = () => {
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

  return (
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
                  <SelectItem value="chiro">Chiro</SelectItem>
                  <SelectItem value="harar">Harar</SelectItem>
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
  );
};

export default ContactForm;
