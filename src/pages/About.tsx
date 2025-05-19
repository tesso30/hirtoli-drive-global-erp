
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useBranch } from '../contexts/BranchContext';

const About = () => {
  const { t } = useLanguage();
  const { branch } = useBranch();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">{t('nav.about')}</h1>
            <p className="text-lg text-gray-600">
              Learn about our mission, history, and dedication to driver education
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Our Story</h2>
            <p className="mb-6">
              Hirtoli Driving School was established in 2010 with a mission to provide high-quality driver education
              to all Ethiopians. Starting with a single location in Addis Ababa, we have grown to multiple branches
              across the country.
            </p>
            <p className="mb-6">
              Our name "Hirtoli" represents our commitment to creating safe, confident, and skilled drivers who
              contribute to road safety in Ethiopia and beyond.
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-12">Our Mission</h2>
            <p className="mb-6">
              At Hirtoli Driving School, our mission is to train safe, responsible, and confident drivers through
              comprehensive education, practical training, and modern teaching methods. We aim to contribute to
              reducing road accidents and promoting road safety culture across Ethiopia.
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4 text-hirtoli-red">🛡️</div>
                <h3 className="text-xl font-semibold mb-2">Safety First</h3>
                <p className="text-gray-600">
                  Safety is our top priority in everything we do, from classroom instruction to on-road training.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4 text-hirtoli-green">🎓</div>
                <h3 className="text-xl font-semibold mb-2">Quality Education</h3>
                <p className="text-gray-600">
                  We are committed to providing the highest quality driver education with experienced instructors.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4 text-hirtoli-red">🌍</div>
                <h3 className="text-xl font-semibold mb-2">Inclusivity</h3>
                <p className="text-gray-600">
                  We welcome students from all backgrounds and provide instruction in multiple languages.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 mt-12">Our Team</h2>
            <p className="mb-6">
              Our team consists of certified driving instructors with years of experience in driver education
              and road safety. All our instructors undergo regular professional development to stay updated
              with the latest teaching methods and safety standards.
            </p>

            {/* Branch-specific content */}
            <h2 className="text-2xl font-bold mb-6 mt-12">Our {branch === 'addis-ababa' ? 'Addis Ababa' : branch === 'adama' ? 'Adama' : 'Bahir Dar'} Branch</h2>
            {branch === 'addis-ababa' && (
              <div>
                <p className="mb-6">
                  Our flagship branch in Addis Ababa was established in 2010 and serves as our headquarters.
                  Located in the heart of the city, this branch offers all our services with state-of-the-art
                  facilities and the largest team of instructors.
                </p>
                <p>
                  Address: Bole Road, Next to Millennium Hall<br />
                  Contact: +251 911 123 456
                </p>
              </div>
            )}
            {branch === 'adama' && (
              <div>
                <p className="mb-6">
                  Our Adama branch was opened in 2015 to serve the growing demand in the Oromia region.
                  This location specializes in both personal and commercial driver training.
                </p>
                <p>
                  Address: Main Street, Near Adama University<br />
                  Contact: +251 922 123 456
                </p>
              </div>
            )}
            {branch === 'bahir-dar' && (
              <div>
                <p className="mb-6">
                  Established in 2018, our Bahir Dar branch serves the Amhara region with specialized
                  training for tourism and transport sectors, taking advantage of the beautiful Lake Tana
                  surroundings.
                </p>
                <p>
                  Address: Lake Tana Road, Near Kuriftu Resort<br />
                  Contact: +251 933 123 456
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
