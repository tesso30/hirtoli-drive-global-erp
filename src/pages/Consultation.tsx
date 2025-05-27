
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Calendar, Clock, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Consultation = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    branch: '',
    experience: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Consultation Booked!",
        description: "We'll contact you within 24 hours to confirm your appointment.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferredDate: '',
        preferredTime: '',
        branch: '',
        experience: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Booking Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-hirtoli-red to-hirtoli-green bg-clip-text text-transparent">
            Book Your Free Consultation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get personalized advice from our expert instructors and find the perfect driving course for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Consultation Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Schedule Your Consultation</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="preferredDate">Preferred Date</Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <Label htmlFor="preferredTime">Preferred Time</Label>
                    <Select onValueChange={(value) => handleInputChange('preferredTime', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (9:00 - 12:00)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12:00 - 17:00)</SelectItem>
                        <SelectItem value="evening">Evening (17:00 - 19:00)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="branch">Preferred Branch</Label>
                    <Select onValueChange={(value) => handleInputChange('branch', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select branch" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="chiro">Chiro</SelectItem>
                        <SelectItem value="harar">Harar</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="experience">Driving Experience</Label>
                    <Select onValueChange={(value) => handleInputChange('experience', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Complete Beginner</SelectItem>
                        <SelectItem value="some">Some Experience</SelectItem>
                        <SelectItem value="experienced">Experienced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your specific needs or questions..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-hirtoli-red to-red-600 hover:from-red-600 hover:to-hirtoli-red"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Booking...' : 'Book Free Consultation'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Benefits and Info */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-hirtoli-green" />
                  What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-hirtoli-green rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Personalized Assessment</h4>
                    <p className="text-gray-600">We'll evaluate your current skills and recommend the best course for you.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-hirtoli-green rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Course Recommendations</h4>
                    <p className="text-gray-600">Get expert advice on which training program suits your needs and goals.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-hirtoli-green rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Schedule Planning</h4>
                    <p className="text-gray-600">We'll help you create a learning schedule that fits your lifestyle.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-hirtoli-green rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Questions & Answers</h4>
                    <p className="text-gray-600">Get all your questions answered by our experienced instructors.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-6 h-6 text-hirtoli-red" />
                  Consultation Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-hirtoli-green" />
                  <span>Duration: 30-45 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-hirtoli-green" />
                  <span>Available at both branches</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-hirtoli-green" />
                  <span>Phone or in-person options</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-hirtoli-green" />
                  <span>Follow-up recommendations via email</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-hirtoli-green to-green-600 text-white shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Need Immediate Help?</h3>
                <p className="mb-4">Call us directly for urgent questions</p>
                <div className="space-y-2">
                  <p className="font-semibold">Chiro: +251 925 123 456</p>
                  <p className="font-semibold">Harar: +251 925 123 457</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
