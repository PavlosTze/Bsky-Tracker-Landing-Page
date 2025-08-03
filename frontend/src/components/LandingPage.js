import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { 
  TrendingUp, 
  Users, 
  Shield, 
  Activity, 
  Eye, 
  Filter, 
  BarChart3, 
  Clock, 
  Star,
  Download,
  CheckCircle,
  Zap,
  Target,
  Globe,
  Lock,
  UserPlus,
  UserMinus,
  Heart,
  MessageCircle,
  Repeat2,
  ChevronRight,
  PlayCircle,
  Smartphone,
  Trophy
} from 'lucide-react';
import { mockData } from '../data/mock';

const LandingPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [stats, setStats] = useState(mockData.stats);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        downloads: prev.downloads + Math.floor(Math.random() * 3),
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 5)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Real-time Follower Tracking",
      description: "Instantly see when someone follows or unfollows you with live updates"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Block & Mute Management", 
      description: "See who has blocked you and manage your blocking lists effectively"
    },
    {
      icon: <Filter className="w-6 h-6" />,
      title: "Advanced Filtering",
      description: "Filter users based on keywords, follower count, engagement, and activity level"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Post Analytics",
      description: "Detailed metrics for any user's posts including reach, replies, and engagement"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Bulk Actions",
      description: "Follow or unfollow users in bulk to efficiently manage your network"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Relationship History",
      description: "Track when you followed someone and when they followed you back"
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      title: "Grow Your Audience",
      description: "Identify and connect with the right people to expand your network strategically",
      stats: "+127% avg. follower growth"
    },
    {
      icon: <Eye className="w-8 h-8 text-green-500" />,
      title: "Deep Insights",
      description: "Understand your audience behavior and optimize your content strategy",
      stats: "50+ data points tracked"
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: "Save Time",
      description: "Automate follower management and focus on creating great content",
      stats: "5+ hours saved weekly"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="relative z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Tracker</h1>
                <p className="text-sm text-blue-200">Manager for Bluesky</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
              <a href="#benefits" className="text-white/80 hover:text-white transition-colors">Benefits</a>
              <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                <Download className="w-4 h-4 mr-2" />
                Download App
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-500/20 text-blue-200 border-blue-400/30">
              ✨ 5K+ downloads • 4.6⭐ rating • Privacy-first
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Master Your 
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Bluesky</span>
              <br />Network Like a Pro
            </h1>
            
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Track followers, analyze engagement, and grow your audience with the most powerful 
              Bluesky management tool. Real-time insights that actually matter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg">
                <Download className="w-5 h-5 mr-2" />
                Download Free App
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg">
                <PlayCircle className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Live Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{stats.downloads.toLocaleString()}+</div>
                <div className="text-sm text-white/60">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{stats.activeUsers.toLocaleString()}+</div>
                <div className="text-sm text-white/60">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.6⭐</div>
                <div className="text-sm text-white/60">App Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">347</div>
                <div className="text-sm text-white/60">Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Creators Choose Tracker
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Join thousands of influencers and content creators who use Tracker to grow their Bluesky presence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-md hover:bg-white/15 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/10 rounded-xl group-hover:scale-110 transition-transform">
                      {benefit.icon}
                    </div>
                    <div>
                      <CardTitle className="text-white">{benefit.title}</CardTitle>
                      <Badge variant="outline" className="mt-1 text-xs border-green-400/50 text-green-300">
                        {benefit.stats}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Features That Deliver Results
            </h2>
            <p className="text-xl text-white/70">
              Everything you need to dominate Bluesky in one app
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                    activeFeature === index 
                      ? 'bg-blue-500/20 border-blue-400/50' 
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-lg ${
                      activeFeature === index ? 'bg-blue-500' : 'bg-white/10'
                    }`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-white/70">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-md border border-white/10">
                <div className="bg-white/10 rounded-xl p-6 mb-6">
                  <h4 className="text-white font-semibold mb-4">Live Dashboard Preview</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">New Followers Today</span>
                      <Badge className="bg-green-500/20 text-green-300">+23</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Unfollowers Today</span>
                      <Badge className="bg-red-500/20 text-red-300">-5</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Engagement Rate</span>
                      <Badge className="bg-blue-500/20 text-blue-300">8.7%</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <Smartphone className="w-24 h-24 text-white/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Loved by Creators Worldwide
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
              <span className="text-white/70 ml-2">4.6/5 from 347 reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mockData.testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-md">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/80 mb-4">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-white/60 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {mockData.faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white/10 rounded-lg border-white/20 px-6">
                  <AccordionTrigger className="text-white hover:text-blue-300">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Dominate Bluesky?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join 5,000+ creators who trust Tracker to grow their Bluesky presence. 
              Download now and see results in 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg">
                <Download className="w-5 h-5 mr-2" />
                Download Free App
              </Button>
              <Badge className="bg-green-500/20 text-green-300 border-green-400/50">
                ✓ Free forever • No credit card required
              </Badge>
            </div>

            <div className="flex items-center justify-center space-x-6 text-white/60">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Privacy-first</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Real-time tracking</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>24/7 support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-md border-t border-white/10">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-semibold">Tracker</span>
              </div>
              <p className="text-white/60 text-sm">
                The ultimate Bluesky management tool for creators and influencers.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Download</h4>
              <div className="space-y-3">
                <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Google Play
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-white/60 text-sm">
              © 2025 Tracker - Manager for Bluesky. Not affiliated with Bluesky Social.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;