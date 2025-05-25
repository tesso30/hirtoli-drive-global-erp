
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Search, Calendar, User, ArrowRight, TrendingUp, BookOpen, AlertTriangle } from 'lucide-react';

const Blog = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "Essential Defensive Driving Techniques for Ethiopian Roads",
      excerpt: "Learn crucial defensive driving skills that can save your life on busy Ethiopian roads. From dealing with unpredictable traffic to weather conditions.",
      category: "driving-tips",
      author: "Instructor Bekele",
      date: "2024-01-15",
      image: "/lovable-uploads/41e35a55-854e-4382-855f-00cd01714172.png",
      readTime: "5 min read",
      tags: ["safety", "defensive-driving", "tips"]
    },
    {
      id: 2,
      title: "New Traffic Regulations in Addis Ababa - What You Need to Know",
      excerpt: "Stay updated with the latest traffic regulations implemented in Addis Ababa. Important changes that affect all drivers in the capital.",
      category: "traffic-updates",
      author: "Traffic Expert Meron",
      date: "2024-01-12",
      image: "/lovable-uploads/41e35a55-854e-4382-855f-00cd01714172.png",
      readTime: "3 min read",
      tags: ["regulations", "addis-ababa", "updates"]
    },
    {
      id: 3,
      title: "Hirtoli Driving School Wins Excellence Award 2024",
      excerpt: "We're proud to announce that Hirtoli Driving School has been recognized as the Best Driving School in Ethiopia for 2024.",
      category: "school-news",
      author: "Admin Team",
      date: "2024-01-10",
      image: "/lovable-uploads/41e35a55-854e-4382-855f-00cd01714172.png",
      readTime: "2 min read",
      tags: ["award", "achievement", "recognition"]
    },
    {
      id: 4,
      title: "Rainy Season Driving: Tips for Safe Navigation",
      excerpt: "Master the art of driving during Ethiopia's rainy season. Essential tips for maintaining control and safety during wet conditions.",
      category: "driving-tips",
      author: "Instructor Tariku",
      date: "2024-01-08",
      image: "/lovable-uploads/41e35a55-854e-4382-855f-00cd01714172.png",
      readTime: "4 min read",
      tags: ["rainy-season", "safety", "weather"]
    },
    {
      id: 5,
      title: "Understanding Vehicle Maintenance: A Driver's Guide",
      excerpt: "Learn basic vehicle maintenance that every driver should know. From checking tire pressure to understanding engine warning signs.",
      category: "vehicle-care",
      author: "Mechanic Expert Alemayehu",
      date: "2024-01-05",
      image: "/lovable-uploads/41e35a55-854e-4382-855f-00cd01714172.png",
      readTime: "6 min read",
      tags: ["maintenance", "vehicle-care", "tips"]
    },
    {
      id: 6,
      title: "Road Safety Awareness Campaign Launch",
      excerpt: "Join our community-wide road safety campaign. Together, we can make Ethiopian roads safer for everyone.",
      category: "school-news",
      author: "Community Outreach Team",
      date: "2024-01-03",
      image: "/lovable-uploads/41e35a55-854e-4382-855f-00cd01714172.png",
      readTime: "3 min read",
      tags: ["campaign", "safety", "community"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', icon: BookOpen },
    { id: 'driving-tips', name: 'Driving Tips', icon: TrendingUp },
    { id: 'traffic-updates', name: 'Traffic Updates', icon: AlertTriangle },
    { id: 'school-news', name: 'School News', icon: User },
    { id: 'vehicle-care', name: 'Vehicle Care', icon: TrendingUp }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-hirtoli-red to-hirtoli-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Driving Knowledge Hub</h1>
            <p className="text-xl mb-8">
              Stay informed with the latest driving tips, traffic updates, and road safety news from Ethiopia's leading driving school
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 text-black"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  <category.icon size={16} />
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory}>
              {/* Featured Post */}
              {selectedCategory === 'all' && (
                <div className="mb-16">
                  <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/2">
                        <img 
                          src={featuredPost.image} 
                          alt={featuredPost.title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-1/2 p-8">
                        <Badge className="mb-4 bg-hirtoli-green">
                          {categories.find(c => c.id === featuredPost.category)?.name}
                        </Badge>
                        <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                        <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <User size={14} />
                              {featuredPost.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar size={14} />
                              {new Date(featuredPost.date).toLocaleDateString()}
                            </span>
                          </div>
                          <span>{featuredPost.readTime}</span>
                        </div>
                        <Button 
                          onClick={() => navigate(`/blog/${featuredPost.id}`)}
                          className="bg-hirtoli-red hover:bg-opacity-90"
                        >
                          Read More <ArrowRight size={16} className="ml-2" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              )}

              {/* Blog Posts Grid */}
              <div>
                <h2 className="text-2xl font-bold mb-8">
                  {selectedCategory === 'all' ? 'Recent Articles' : categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                          onClick={() => navigate(`/blog/${post.id}`)}>
                      <div className="relative">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-48 object-cover"
                        />
                        <Badge className="absolute top-4 left-4 bg-hirtoli-green">
                          {categories.find(c => c.id === post.category)?.name}
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <span className="flex items-center gap-1">
                            <User size={14} />
                            {post.author}
                          </span>
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1 text-sm text-gray-500">
                            <Calendar size={14} />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <ArrowRight size={16} className="text-hirtoli-red" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Blog;
