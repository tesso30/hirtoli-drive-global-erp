
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { ArrowLeft, Calendar, User, Clock, Share2, Heart, MessageCircle } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();

  // Mock blog post data (in real app, this would come from an API)
  const blogPost = {
    id: 1,
    title: "Essential Defensive Driving Techniques for Ethiopian Roads",
    content: `
      <p>Driving on Ethiopian roads presents unique challenges that require specialized defensive driving techniques. Whether you're navigating the busy streets of Addis Ababa or traveling through rural areas, these essential skills will help keep you safe.</p>

      <h2>Understanding the Road Environment</h2>
      <p>Ethiopian roads are diverse, ranging from modern highways to traditional rural paths. Each environment requires different approaches:</p>
      <ul>
        <li>Urban areas with heavy traffic and pedestrians</li>
        <li>Rural roads with varying surface conditions</li>
        <li>Mountain roads with elevation changes</li>
        <li>Weather-affected routes during rainy seasons</li>
      </ul>

      <h2>Key Defensive Driving Principles</h2>
      <p>Defensive driving is about anticipating potential hazards and being prepared to react safely. Here are the fundamental principles:</p>

      <h3>1. Maintain Safe Following Distance</h3>
      <p>Always keep at least a 3-second following distance from the vehicle ahead. In wet conditions or heavy traffic, increase this to 4-5 seconds. This gives you enough time to react to sudden changes.</p>

      <h3>2. Stay Alert and Scan Continuously</h3>
      <p>Constantly scan the road ahead, check your mirrors every 5-8 seconds, and be aware of your blind spots. Look for:</p>
      <ul>
        <li>Pedestrians stepping into traffic</li>
        <li>Vehicles changing lanes suddenly</li>
        <li>Road hazards like potholes or debris</li>
        <li>Animals on rural roads</li>
      </ul>

      <h3>3. Control Your Speed</h3>
      <p>Drive according to conditions, not just the speed limit. Factors to consider:</p>
      <ul>
        <li>Weather conditions (rain, fog, dust)</li>
        <li>Traffic density</li>
        <li>Road surface quality</li>
        <li>Visibility conditions</li>
      </ul>

      <h2>Ethiopian-Specific Challenges</h2>
      <p>Our roads present unique situations that require special attention:</p>

      <h3>Mixed Traffic</h3>
      <p>Ethiopian roads often feature a mix of vehicles, pedestrians, and animals. Be prepared for:</p>
      <ul>
        <li>Buses stopping frequently for passengers</li>
        <li>Motorcycles weaving through traffic</li>
        <li>Pedestrians crossing unexpectedly</li>
        <li>Livestock on rural roads</li>
      </ul>

      <h3>Road Conditions</h3>
      <p>Road quality can vary significantly. Always be prepared for:</p>
      <ul>
        <li>Sudden potholes or road damage</li>
        <li>Construction zones</li>
        <li>Unpaved sections</li>
        <li>Steep grades in mountainous areas</li>
      </ul>

      <h2>Practical Tips for Daily Driving</h2>
      <p>Implement these practical strategies in your daily driving:</p>

      <h3>Before You Drive</h3>
      <ul>
        <li>Check your vehicle's condition (tires, brakes, lights)</li>
        <li>Plan your route and check traffic conditions</li>
        <li>Ensure you're well-rested and alert</li>
        <li>Have emergency supplies (water, first aid kit)</li>
      </ul>

      <h3>While Driving</h3>
      <ul>
        <li>Use your indicators early and clearly</li>
        <li>Avoid aggressive drivers - let them pass</li>
        <li>Stay in your lane and avoid unnecessary lane changes</li>
        <li>Be patient with slower traffic</li>
      </ul>

      <h3>In Challenging Situations</h3>
      <ul>
        <li>Reduce speed in bad weather</li>
        <li>Increase following distance in poor visibility</li>
        <li>Pull over safely if conditions become dangerous</li>
        <li>Use hazard lights when appropriate</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Defensive driving is a mindset that prioritizes safety over speed or convenience. By practicing these techniques consistently, you'll become a safer, more confident driver on Ethiopian roads. Remember, the goal is not just to reach your destination, but to arrive safely.</p>

      <p>At Hirtoli Driving School, we emphasize these defensive driving techniques in all our courses. Our experienced instructors provide hands-on training to help you master these essential skills.</p>
    `,
    category: "driving-tips",
    author: "Instructor Bekele Teferi",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["safety", "defensive-driving", "tips", "ethiopian-roads"],
    image: "/lovable-uploads/41e35a55-854e-4382-855f-00cd01714172.png"
  };

  const relatedPosts = [
    {
      id: 2,
      title: "Rainy Season Driving: Tips for Safe Navigation",
      excerpt: "Master the art of driving during Ethiopia's rainy season.",
      image: "/lovable-uploads/41e35a55-854e-4382-855f-00cd01714172.png"
    },
    {
      id: 3,
      title: "Understanding Vehicle Maintenance: A Driver's Guide",
      excerpt: "Learn basic vehicle maintenance that every driver should know.",
      image: "/lovable-uploads/41e35a55-854e-4382-855f-00cd01714172.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/blog')}
            className="mb-4"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                <div className="relative">
                  <img 
                    src={blogPost.image} 
                    alt={blogPost.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-hirtoli-green">
                    Driving Tips
                  </Badge>
                </div>
                
                <CardContent className="p-8">
                  <h1 className="text-3xl md:text-4xl font-bold mb-6">{blogPost.title}</h1>
                  
                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{blogPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{new Date(blogPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{blogPost.readTime}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {blogPost.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Separator className="mb-8" />

                  {/* Content */}
                  <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: blogPost.content }}
                  />

                  <Separator className="my-8" />

                  {/* Share Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Button variant="outline" size="sm">
                        <Heart size={16} className="mr-2" />
                        Like
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageCircle size={16} className="mr-2" />
                        Comment
                      </Button>
                    </div>
                    <Button variant="outline" size="sm">
                      <Share2 size={16} className="mr-2" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">About the Author</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-hirtoli-green rounded-full flex items-center justify-center">
                    <User className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">{blogPost.author}</h4>
                    <p className="text-sm text-gray-600">Senior Driving Instructor</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  With over 15 years of experience teaching defensive driving techniques, 
                  Bekele has helped thousands of students become safer drivers on Ethiopian roads.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((post) => (
                    <div 
                      key={post.id}
                      className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
                      onClick={() => navigate(`/blog/${post.id}`)}
                    >
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <h4 className="font-medium text-sm line-clamp-2 mb-1">{post.title}</h4>
                        <p className="text-xs text-gray-600 line-clamp-2">{post.excerpt}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full mt-4 bg-hirtoli-red hover:bg-opacity-90"
                  onClick={() => navigate('/blog')}
                >
                  View All Articles
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
