
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';

const CallToActionSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-hirtoli-black text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Driving Journey?</h2>
        <p className="mb-8 max-w-xl mx-auto">Join thousands of successful graduates who have learned to drive with confidence at Hirtoli Driving School</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-hirtoli-red hover:bg-opacity-90"
            onClick={() => navigate('/register')}
          >
            Register Now
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-hirtoli-black"
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
