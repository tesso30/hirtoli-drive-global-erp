
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useBranch } from '../contexts/BranchContext';
import { useAuth, Role } from '../contexts/AuthContext';
import { useToast } from '../hooks/use-toast';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Label } from '../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Checkbox } from '../components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Award, Car, Check, Clock, Info, User, UserPlus } from 'lucide-react';

type BranchType = 'addis-ababa' | 'adama' | 'bahir-dar';
type PreferredCourse = 'beginner' | 'advanced' | 'commercial' | 'refresher' | 'defensive' | 'test-prep' | 'professional' | 'international';
type PreferredSchedule = 'weekday-morning' | 'weekday-afternoon' | 'weekend' | 'evening' | 'flexible';

const Register = () => {
  const { t } = useLanguage();
  const { branch, setBranch } = useBranch();
  const { register } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Basic Info State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState<Role>('student');
  const [selectedBranch, setSelectedBranch] = useState<BranchType>(branch as BranchType);
  
  // Additional Info State
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('');
  const [preferredCourse, setPreferredCourse] = useState<PreferredCourse>('beginner');
  const [preferredSchedule, setPreferredSchedule] = useState<PreferredSchedule>('flexible');
  const [hasPriorExperience, setHasPriorExperience] = useState(false);
  const [yearsOfExperience, setYearsOfExperience] = useState('');
  const [specialRequirements, setSpecialRequirements] = useState('');
  
  // Form state
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('basic-info');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);

  // Password strength indicator
  const getPasswordStrength = () => {
    if (!password) return { strength: 0, text: '', color: 'bg-gray-200' };
    
    // Check password strength
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isLongEnough = password.length >= 8;
    
    const criteria = [hasUpperCase, hasLowerCase, hasNumbers, hasSpecialChar, isLongEnough];
    const metCriteria = criteria.filter(Boolean).length;
    
    if (metCriteria <= 2) return { strength: 20, text: 'Weak', color: 'bg-red-500' };
    if (metCriteria <= 4) return { strength: 60, text: 'Medium', color: 'bg-yellow-500' };
    return { strength: 100, text: 'Strong', color: 'bg-green-500' };
  };
  
  const passwordStrength = getPasswordStrength();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !email || !phone || !password || !confirmPassword) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields',
        variant: 'destructive',
      });
      return;
    }
    
    if (password !== confirmPassword) {
      toast({
        title: 'Error',
        description: 'Passwords do not match',
        variant: 'destructive',
      });
      return;
    }
    
    if (!agreedToTerms) {
      toast({
        title: 'Error',
        description: 'You must agree to the terms and conditions',
        variant: 'destructive',
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Additional registration data to include in the register call
      const additionalData = {
        dateOfBirth,
        gender,
        address,
        emergencyContact,
        emergencyPhone,
        preferredCourse,
        preferredSchedule,
        hasPriorExperience,
        yearsOfExperience: hasPriorExperience ? yearsOfExperience : '0',
        specialRequirements,
        marketingConsent
      };
      
      await register({
        name,
        email,
        phone,
        password,
        role,
        branch: selectedBranch as BranchType,
        ...additionalData
      });
      
      // Fixed type issue here - explicitly cast to BranchType
      setBranch(selectedBranch as BranchType);
      
      toast({
        title: 'Success',
        description: 'Your account has been created successfully',
      });
      
      navigate('/');
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to register',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const courseOptions = [
    { value: 'beginner', label: 'Beginner Driver Course' },
    { value: 'advanced', label: 'Advanced Driving Skills' },
    { value: 'commercial', label: 'Commercial Driver License' },
    { value: 'refresher', label: 'Refresher Course' },
    { value: 'defensive', label: 'Defensive Driving Course' },
    { value: 'test-prep', label: 'Driver\'s License Test Preparation' },
    { value: 'professional', label: 'Professional Driver Training' },
    { value: 'international', label: 'International Driving Permit Course' }
  ];

  const scheduleOptions = [
    { value: 'weekday-morning', label: 'Weekday Mornings' },
    { value: 'weekday-afternoon', label: 'Weekday Afternoons' },
    { value: 'weekend', label: 'Weekends' },
    { value: 'evening', label: 'Evenings' },
    { value: 'flexible', label: 'Flexible (No Preference)' }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-2xl animate-fade-in">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-2">
            <UserPlus className="h-10 w-10 text-hirtoli-red" />
          </div>
          <CardTitle className="text-2xl font-bold text-center">{t('register.title')}</CardTitle>
          <CardDescription className="text-center">
            Create an account to access Hirtoli Driving School services
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleRegister} className="space-y-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="basic-info" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Basic Information
                </TabsTrigger>
                <TabsTrigger value="additional-info" className="flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  Additional Details
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="basic-info" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    {t('register.name')} <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">
                    {t('register.email')} <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    {t('register.phone')} <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="e.g., +251 91 234 5678"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">
                    {t('register.password')} <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="password" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {password && (
                    <div className="mt-2">
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${passwordStrength.color}`} 
                          style={{ width: `${passwordStrength.strength}%` }}
                        ></div>
                      </div>
                      <div className="text-xs mt-1 text-gray-600">
                        Password strength: {passwordStrength.text}
                      </div>
                      <div className="text-xs mt-2 text-gray-600">
                        <ul className="list-disc pl-4 space-y-1">
                          <li className={password.length >= 8 ? 'text-green-600' : ''}>
                            At least 8 characters
                          </li>
                          <li className={/[A-Z]/.test(password) ? 'text-green-600' : ''}>
                            At least one uppercase letter
                          </li>
                          <li className={/[0-9]/.test(password) ? 'text-green-600' : ''}>
                            At least one number
                          </li>
                          <li className={/[!@#$%^&*(),.?":{}|<>]/.test(password) ? 'text-green-600' : ''}>
                            At least one special character
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">
                    {t('register.confirmPassword')} <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="confirmPassword" 
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  {password && confirmPassword && (
                    <div className="text-xs mt-1">
                      {password === confirmPassword ? (
                        <span className="text-green-600 flex items-center gap-1">
                          <Check className="w-3 h-3" /> Passwords match
                        </span>
                      ) : (
                        <span className="text-red-600">Passwords do not match</span>
                      )}
                    </div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label>{t('register.role')}</Label>
                  <RadioGroup 
                    value={role} 
                    onValueChange={(value) => setRole(value as Role)}
                    className="flex space-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="student" id="student" />
                      <Label htmlFor="student">{t('register.role.student')}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="instructor" id="instructor" />
                      <Label htmlFor="instructor">{t('register.role.instructor')}</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="branch">
                    {t('branch.select')} <span className="text-red-500">*</span>
                  </Label>
                  <Select 
                    value={selectedBranch} 
                    onValueChange={(value: string) => setSelectedBranch(value as BranchType)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t('branch.select')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="addis-ababa">{t('branch.addisAbaba')}</SelectItem>
                      <SelectItem value="adama">{t('branch.adama')}</SelectItem>
                      <SelectItem value="bahir-dar">{t('branch.bahirDar')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-4 flex justify-end">
                  <Button 
                    type="button" 
                    onClick={() => setActiveTab('additional-info')}
                    className="bg-hirtoli-green"
                  >
                    Next: Additional Details
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="additional-info" className="space-y-4 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input 
                      id="dateOfBirth" 
                      type="date" 
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Select 
                      value={gender} 
                      onValueChange={setGender}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input 
                    id="address" 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Your residential address"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
                    <Input 
                      id="emergencyContact" 
                      value={emergencyContact}
                      onChange={(e) => setEmergencyContact(e.target.value)}
                      placeholder="Name of emergency contact person"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="emergencyPhone">Emergency Contact Number</Label>
                    <Input 
                      id="emergencyPhone" 
                      type="tel"
                      value={emergencyPhone}
                      onChange={(e) => setEmergencyPhone(e.target.value)}
                      placeholder="Phone number of emergency contact"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="preferredCourse">Preferred Course</Label>
                  <Select 
                    value={preferredCourse} 
                    onValueChange={(value: string) => setPreferredCourse(value as PreferredCourse)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      {courseOptions.map(option => (
                        <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="preferredSchedule">Preferred Schedule</Label>
                  <Select 
                    value={preferredSchedule} 
                    onValueChange={(value: string) => setPreferredSchedule(value as PreferredSchedule)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select preferred schedule" />
                    </SelectTrigger>
                    <SelectContent>
                      {scheduleOptions.map(option => (
                        <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="hasPriorExperience" 
                      checked={hasPriorExperience} 
                      onCheckedChange={(checked) => setHasPriorExperience(checked as boolean)}
                    />
                    <Label htmlFor="hasPriorExperience">I have prior driving experience</Label>
                  </div>
                  
                  {hasPriorExperience && (
                    <div className="pl-6 pt-2">
                      <Label htmlFor="yearsOfExperience">Years of Experience</Label>
                      <Input 
                        id="yearsOfExperience" 
                        type="number"
                        value={yearsOfExperience}
                        onChange={(e) => setYearsOfExperience(e.target.value)}
                        placeholder="Enter number of years"
                        min="0"
                        step="0.5"
                      />
                    </div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="specialRequirements">Any Special Requirements or Health Concerns</Label>
                  <Input 
                    id="specialRequirements" 
                    value={specialRequirements}
                    onChange={(e) => setSpecialRequirements(e.target.value)}
                    placeholder="Any information we should know about to provide you with the best training experience"
                  />
                </div>
                
                <div className="space-y-4 pt-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="agreedToTerms" 
                      checked={agreedToTerms} 
                      onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                      required
                    />
                    <Label htmlFor="agreedToTerms" className="text-sm leading-tight">
                      I agree to the <Link to="/terms" className="text-hirtoli-green hover:underline">Terms and Conditions</Link> and <Link to="/privacy" className="text-hirtoli-green hover:underline">Privacy Policy</Link>. <span className="text-red-500">*</span>
                    </Label>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="marketingConsent" 
                      checked={marketingConsent} 
                      onCheckedChange={(checked) => setMarketingConsent(checked as boolean)}
                    />
                    <Label htmlFor="marketingConsent" className="text-sm leading-tight">
                      I would like to receive updates, special offers, and newsletters from Hirtoli Driving School.
                    </Label>
                  </div>
                </div>
                
                <div className="pt-4 flex justify-between">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => setActiveTab('basic-info')}
                  >
                    Back to Basic Info
                  </Button>
                  <Button type="submit" className="bg-hirtoli-red" disabled={isLoading}>
                    {isLoading ? (
                      <span className="flex items-center">
                        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-b-transparent"></span>
                        Processing...
                      </span>
                    ) : (
                      t('register.submit')
                    )}
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </form>
        </CardContent>

        <CardFooter>
          <p className="text-center text-sm text-gray-600 mt-2 w-full">
            {t('register.hasAccount')}{' '}
            <Link to="/login" className="text-hirtoli-green hover:underline">
              {t('register.login')}
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
