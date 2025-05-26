import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    branch: 'chiro',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        role: 'student' as const,
        branch: formData.branch,
      });
      
      toast({
        title: "Registration Successful",
        description: "Welcome to Hirtoli Driving School!",
      });
      
      navigate('/student-dashboard');
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "Please check your information and try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-8 space-y-4">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Create an Account</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="branch">Select Branch</Label>
              <Select
                value={formData.branch}
                onValueChange={(value) => handleSelectChange('branch', value)}
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
            <Button type="submit" className="w-full">Register</Button>
          </form>
          <div className="text-sm text-gray-500 text-center">
            Already have an account? <a href="/login" className="text-hirtoli-green hover:underline">Login</a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
