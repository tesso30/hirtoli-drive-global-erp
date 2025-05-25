import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../hooks/use-toast';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const Register = () => {
  const { t } = useLanguage();
  const { register } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    branch: 'chiro',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords do not match.",
        description: "Please make sure your password and confirm password fields match.",
        variant: "destructive",
      });
      return;
    }

    try {
      await register(formData.name, formData.email, formData.password, formData.branch);
      toast({
        title: "Registration Successful",
        description: "You have successfully registered. Redirecting...",
      });
      navigate('/');
    } catch (error: any) {
      toast({
        title: "Registration Failed",
        description: error.message || "An error occurred during registration.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md p-8 space-y-4">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">{t('register.title')}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t('register.name')}</Label>
              <Input
                id="name"
                name="name"
                placeholder={t('register.namePlaceholder')}
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t('register.email')}</Label>
              <Input
                id="email"
                name="email"
                placeholder={t('register.emailPlaceholder')}
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">{t('register.password')}</Label>
              <Input
                id="password"
                name="password"
                placeholder={t('register.passwordPlaceholder')}
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">{t('register.confirmPassword')}</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                placeholder={t('register.confirmPasswordPlaceholder')}
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

          <div className="space-y-2">
            <Label htmlFor="branch">Preferred Branch</Label>
            <Select onValueChange={(value) => setFormData(prev => ({ ...prev, branch: value as 'chiro' | 'harar' }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select your preferred branch" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="chiro">Chiro</SelectItem>
                <SelectItem value="harar">Harar</SelectItem>
              </SelectContent>
            </Select>
          </div>

            <Button type="submit" className="w-full">
              {t('register.submit')}
            </Button>
          </form>
          <div className="text-center mt-4">
            <p>
              {t('register.alreadyHaveAccount')}{' '}
              <Button variant="link" onClick={() => navigate('/login')}>
                {t('register.login')}
              </Button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
