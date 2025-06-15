
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useBranch } from '../contexts/BranchContext';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../hooks/use-toast';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Label } from '../components/ui/label';

const Login = () => {
  const { t } = useLanguage();
  const { branch } = useBranch();
  const { login } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive',
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      await login(email, password);
      toast({
        title: 'Success',
        description: 'You have successfully logged in',
      });
      
      // The navigation will be handled by the useEffect in App.tsx or by checking user role here
      // We'll let the auth context handle the redirect
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to login',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Demo credentials tooltip
  const showDemoCredentials = () => {
    toast({
      title: 'Demo Credentials',
      description: 
        'Student: student@example.com / password123\n' +
        'Instructor: instructor@example.com / password123\n' +
        'Admin: admin@example.com / password123',
      duration: 10000,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md animate-fade-in">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">{t('login.title')}</CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">{t('login.email')}</Label>
              <Input 
                id="email" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">{t('login.password')}</Label>
                <Link 
                  to="/forgot-password" 
                  className="text-sm text-hirtoli-green hover:underline"
                >
                  {t('login.forgot')}
                </Link>
              </div>
              <Input 
                id="password" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full bg-hirtoli-red hover:bg-hirtoli-red/90 text-white font-semibold py-2 rounded transition-colors duration-300">
              {isLoading ? (
                <span className="flex items-center">
                  <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-b-transparent"></span>
                  {t('loading') || 'Loading...'}
                </span>
              ) : (
                t('login.submit')
              )}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <button 
              type="button" 
              onClick={showDemoCredentials}
              className="text-sm text-hirtoli-red hover:underline"
            >
              Show demo credentials
            </button>
          </div>
        </CardContent>

        <CardFooter>
          <p className="text-center text-sm text-gray-600 mt-2 w-full">
            {t('login.noAccount')}{' '}
            <Link to="/register" className="text-hirtoli-green hover:underline">
              {t('login.register')}
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
