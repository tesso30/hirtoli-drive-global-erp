
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useBranch } from '../contexts/BranchContext';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Shield, Award, Users, GraduationCap, Car, Globe } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();
  const { branch } = useBranch();
  const navigate = useNavigate();

  const milestones = [
    {
      year: 2010,
      title: "Foundation",
      description: "Hirtoli Driving School was established in Addis Ababa with 5 vehicles and 3 instructors."
    },
    {
      year: 2013,
      title: "Expansion",
      description: "Fleet expanded to 15 vehicles and introduction of advanced driving courses."
    },
    {
      year: 2015,
      title: "New Branch",
      description: "Opened our second branch in Adama to serve the Oromia region."
    },
    {
      year: 2018,
      title: "Further Growth",
      description: "Established our third branch in Bahir Dar and introduced specialized tourism vehicle training."
    },
    {
      year: 2020,
      title: "Innovation",
      description: "Introduced digital learning materials and online registration system."
    },
    {
      year: 2023,
      title: "Recognition",
      description: "Awarded 'Best Driving School in Ethiopia' by the National Road Safety Association."
    }
  ];

  const teamMembers = [
    {
      name: "Bekele Teferi",
      role: "Founder & CEO",
      description: "Former professional driver with 25+ years experience in transportation safety.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3"
    },
    {
      name: "Meron Alemu",
      role: "Head Instructor",
      description: "Certified master instructor with expertise in defensive driving techniques.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3"
    },
    {
      name: "Tariku Desta",
      role: "Operations Manager",
      description: "Manages our fleet of training vehicles and scheduling across all branches.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3"
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-10 h-10 text-hirtoli-red" />,
      title: "Award-Winning Training",
      description: "Multiple recognitions for excellence in driver education"
    },
    {
      icon: <Users className="w-10 h-10 text-hirtoli-green" />,
      title: "15,000+ Graduates",
      description: "Thousands of successful drivers trained since 2010"
    },
    {
      icon: <Car className="w-10 h-10 text-hirtoli-black" />,
      title: "Modern Fleet",
      description: "Training conducted on well-maintained, current model vehicles"
    },
    {
      icon: <Shield className="w-10 h-10 text-hirtoli-red" />,
      title: "Safety Focus",
      description: "Emphasis on defensive driving and accident prevention"
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-hirtoli-green" />,
      title: "Certified Instructors",
      description: "All instructors are certified and regularly updated on skills"
    },
    {
      icon: <Globe className="w-10 h-10 text-hirtoli-black" />,
      title: "Multilingual Instruction",
      description: "Training available in Amharic, Oromo, and English"
    }
  ];

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
              contribute to road safety in Ethiopia and beyond. The word combines "Hirta" (guidance) and "Oli" (path),
              symbolizing our role in guiding drivers safely on their journey.
            </p>
            <p className="mb-10">
              Over the years, we have continually updated our teaching methods, facilities, and vehicle fleet to 
              ensure we provide the most relevant and effective driver education possible. Our instructors undergo 
              regular training and certification to maintain the highest standards of instruction.
            </p>

            {/* Timeline/Milestones */}
            <h2 className="text-2xl font-bold mb-6">Our Journey</h2>
            <div className="relative border-l-2 border-hirtoli-red pl-8 pb-6 mb-10">
              {milestones.map((milestone, index) => (
                <div key={index} className="mb-8 relative">
                  <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-hirtoli-red"></div>
                  <div className="mb-1 text-xl font-semibold text-hirtoli-black">{milestone.year}: {milestone.title}</div>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-6 mt-12">Our Mission</h2>
            <p className="mb-6">
              At Hirtoli Driving School, our mission is to train safe, responsible, and confident drivers through
              comprehensive education, practical training, and modern teaching methods. We aim to contribute to
              reducing road accidents and promoting road safety culture across Ethiopia.
            </p>
            <p className="mb-10">
              We believe that safe driving is not just about passing a test but developing a mindset of responsibility 
              and awareness. We instill these values in all our students, ensuring they become drivers who prioritize 
              safety for themselves and others on the road.
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4 text-hirtoli-red">🛡️</div>
                <h3 className="text-xl font-semibold mb-2">Safety First</h3>
                <p className="text-gray-600">
                  Safety is our top priority in everything we do, from classroom instruction to on-road training.
                  We emphasize defensive driving techniques that help our students anticipate and avoid hazards.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4 text-hirtoli-green">🎓</div>
                <h3 className="text-xl font-semibold mb-2">Quality Education</h3>
                <p className="text-gray-600">
                  We are committed to providing the highest quality driver education with experienced instructors
                  who use modern teaching methods and up-to-date materials to ensure effective learning.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4 text-hirtoli-red">🌍</div>
                <h3 className="text-xl font-semibold mb-2">Inclusivity</h3>
                <p className="text-gray-600">
                  We welcome students from all backgrounds and provide instruction in multiple languages.
                  Our facilities are accessible and our courses can be adapted to various learning needs.
                </p>
              </div>
            </div>

            {/* Achievements Section */}
            <h2 className="text-2xl font-bold mb-6 mt-12">Our Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="shrink-0">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Section */}
            <h2 className="text-2xl font-bold mb-6 mt-12">Our Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
                  <CardContent className="pt-4">
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <div className="text-hirtoli-red font-medium mb-2">{member.role}</div>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Branch-specific content */}
            <h2 className="text-2xl font-bold mb-6 mt-12">Our {branch === 'addis-ababa' ? 'Addis Ababa' : branch === 'adama' ? 'Adama' : 'Bahir Dar'} Branch</h2>
            {branch === 'addis-ababa' && (
              <div>
                <p className="mb-6">
                  Our flagship branch in Addis Ababa was established in 2010 and serves as our headquarters.
                  Located in the heart of the city, this branch offers all our services with state-of-the-art
                  facilities and the largest team of instructors.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold mb-2">Facilities include:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>8 modern classrooms with multimedia equipment</li>
                      <li>Digital simulation center with 12 driving simulators</li>
                      <li>Fleet of 25 training vehicles of various types</li>
                      <li>Dedicated practice area for basic vehicle handling skills</li>
                      <li>Student lounge and refreshment area</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Staff:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>15 full-time certified driving instructors</li>
                      <li>5 classroom theory instructors</li>
                      <li>3 vehicle maintenance technicians</li>
                      <li>Administrative and customer service team</li>
                    </ul>
                  </div>
                </div>
                <p>
                  Address: Bole Road, Next to Millennium Hall<br />
                  Contact: +251 911 123 456<br />
                  Email: addis@hirtoli.com
                </p>
              </div>
            )}
            {branch === 'adama' && (
              <div>
                <p className="mb-6">
                  Our Adama branch was opened in 2015 to serve the growing demand in the Oromia region.
                  This location specializes in both personal and commercial driver training, with particular
                  focus on agricultural vehicle operation to serve the region's farming community.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold mb-2">Facilities include:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>5 modern classrooms with multimedia equipment</li>
                      <li>Fleet of 15 training vehicles including trucks and agricultural vehicles</li>
                      <li>Rural driving course for specific terrain training</li>
                      <li>Student computer lab for online learning resources</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Staff:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>10 full-time certified driving instructors</li>
                      <li>3 specialized commercial vehicle instructors</li>
                      <li>2 vehicle maintenance technicians</li>
                      <li>Administrative and customer service team</li>
                    </ul>
                  </div>
                </div>
                <p>
                  Address: Main Street, Near Adama University<br />
                  Contact: +251 922 123 456<br />
                  Email: adama@hirtoli.com
                </p>
              </div>
            )}
            {branch === 'bahir-dar' && (
              <div>
                <p className="mb-6">
                  Established in 2018, our Bahir Dar branch serves the Amhara region with specialized
                  training for tourism and transport sectors, taking advantage of the beautiful Lake Tana
                  surroundings for real-world driving scenarios.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold mb-2">Facilities include:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>4 modern classrooms with multimedia equipment</li>
                      <li>Tourism vehicle training center</li>
                      <li>Fleet of 12 training vehicles including tourism minibuses</li>
                      <li>Boat safety training center at Lake Tana</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Staff:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>8 certified driving instructors</li>
                      <li>3 tourism transportation specialists</li>
                      <li>2 boat safety instructors</li>
                      <li>Administrative and customer service team</li>
                    </ul>
                  </div>
                </div>
                <p>
                  Address: Lake Tana Road, Near Kuriftu Resort<br />
                  Contact: +251 933 123 456<br />
                  Email: bahirdar@hirtoli.com
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-hirtoli-green bg-opacity-10 py-12 mb-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Visit Our School</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            We invite you to visit our facilities, meet our instructors, and learn more about our 
            courses. Schedule a visit today or contact us with any questions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button onClick={() => navigate('/contact')}>Schedule a Visit</Button>
            <Button variant="outline" onClick={() => navigate('/services')}>Explore Our Courses</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
