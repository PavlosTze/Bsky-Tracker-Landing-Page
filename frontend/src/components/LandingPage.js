import React, { useState } from 'react';
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
  Smartphone,
  Trophy,
  ExternalLink
} from 'lucide-react';
import { mockData } from '../data/mock';

const LandingPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const scrollToCTA = () => {
    document.querySelector('#cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

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
      title: "Track Your Growth",
      description: "Monitor your follower changes and understand your network dynamics",
      stats: "Real-time tracking"
    },
    {
      icon: <Eye className="w-8 h-8 text-green-500" />,
      title: "Deep Network Insights",
      description: "Understand your audience behavior and connection patterns",
      stats: "50+ data points tracked"
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: "Save Time",
      description: "Automate follower management and streamline your Bluesky experience",
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
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center overflow-hidden">
                <img 
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==" 
                  alt="Bsky Tracker"
                  className="w-full h-full object-cover"
                  style={{
                    background: 'linear-gradient(135deg, #1e90ff 0%, #0066cc 100%)',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='35' fill='none' stroke='white' stroke-width='8' opacity='0.8'/%3E%3Ccircle cx='50' cy='30' r='4' fill='white'/%3E%3Ccircle cx='30' cy='45' r='4' fill='white'/%3E%3Ccircle cx='70' cy='45' r='4' fill='white'/%3E%3Ccircle cx='35' cy='70' r='4' fill='white'/%3E%3Ccircle cx='65' cy='70' r='4' fill='white'/%3E%3C/svg%3E")`
                  }}
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Tracker - Manager for Bluesky</h1>
                <p className="text-sm text-blue-200">Real-time Bluesky Analytics</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
              <a href="#benefits" className="text-white/80 hover:text-white transition-colors">Benefits</a>
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 mr-4"
                onClick={() => window.open('https://bsky.app/profile/bluesky-tracker.bsky.social', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Find me on Bluesky
              </Button>
              <Button 
                className="bg-blue-500 hover:bg-blue-600 text-white"
                onClick={scrollToCTA}
              >
                <Download className="w-4 h-4 mr-2" />
                Download for Free
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
              ✨ 10K+ downloads • 4.7⭐ rating • Privacy-first
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Track & Manage Your 
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Bluesky</span>
              <br />Network in Real-Time
            </h1>
            
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              The ultimate tool to track followers, unfollowers, blocks, and post analytics on Bluesky. 
              Real-time insights that help you understand your network better.
            </p>

            {/* Mobile App Screenshots */}
            <div className="mb-12">
              <div className="relative max-w-4xl mx-auto">
                <img 
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                  alt="Tracker - Manager for Bluesky App Screenshots"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)',
                    aspectRatio: '16/9',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Crect x='50' y='50' width='140' height='280' rx='20' fill='%23ffffff' fill-opacity='0.1'/%3E%3Crect x='200' y='50' width='140' height='280' rx='20' fill='%23ffffff' fill-opacity='0.1'/%3E%3Crect x='350' y='50' width='140' height='280' rx='20' fill='%23ffffff' fill-opacity='0.1'/%3E%3Crect x='500' y='50' width='140' height='280' rx='20' fill='%23ffffff' fill-opacity='0.1'/%3E%3Crect x='650' y='50' width='140' height='280' rx='20' fill='%23ffffff' fill-opacity='0.1'/%3E%3Ctext x='400' y='400' text-anchor='middle' fill='white' font-size='20' font-family='Arial'%3EApp Interface Preview%3C/text%3E%3C/svg%3E")`
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Smartphone className="w-16 h-16 mx-auto mb-4 opacity-60" />
                    <p className="text-lg font-medium">5 Mobile App Screens</p>
                    <p className="text-sm opacity-75">Real app interface preview</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg">
                <Download className="w-5 h-5 mr-2" />
                Download for Free
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
                <div className="text-2xl font-bold text-white">4.7⭐</div>
                <div className="text-sm text-white/60">App Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">450+</div>
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
              Essential Tool for Bluesky Users
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Join thousands of users who rely on Bsky Tracker to manage their Bluesky presence effectively
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
              Everything you need to understand your Bluesky network
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
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
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Real Reviews from App Stores
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
              <span className="text-white/70 ml-2">4.7/5 from 450+ reviews</span>
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
                  <p className="text-white/80 mb-4 italic">"{testimonial.content}"</p>
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
              Ready to Master Your Bluesky Network?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join 10,000+ users who trust Bsky Tracker to track and manage their Bluesky presence. 
              Download now and see results immediately.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bluesky.followers.analyzer', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Download for Free
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
                onClick={() => window.open('https://apps.apple.com/us/app/tracker-manager-for-bluesky/id6740998282', '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                App Store
              </Button>
            </div>

            <Badge className="bg-green-500/20 text-green-300 border-green-400/50 mb-8">
              ✓ Free forever • No credit card required
            </Badge>

            <div className="flex items-center justify-center flex-wrap gap-6 text-white/60 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Privacy-first</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Real-time tracking</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Bulk/Mass actions</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Advanced Filters for your network</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
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
                <span className="text-white font-semibold">Bsky Tracker</span>
              </div>
              <p className="text-white/60 text-sm">
                The ultimate Bluesky management tool for tracking and managing your network.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="#features" className="hover:text-white">Features</a></li>
                <li><a href="#benefits" className="hover:text-white">Benefits</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="mailto:tzegianapps@gmail.com" className="hover:text-white">Contact</a></li>
                <li><a href="https://github.com/PavlosTze/Bluesky-Followers-Analyzer-Privacy-Policy/blob/main/Privacy-Policy.md" target="_blank" rel="noopener noreferrer" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="https://bsky.app/profile/bluesky-tracker.bsky.social" target="_blank" rel="noopener noreferrer" className="hover:text-white">Find us on Bluesky</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Download</h4>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full border-white/30 text-white hover:bg-white/10"
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bluesky.followers.analyzer', '_blank')}
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  Google Play
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-white/30 text-white hover:bg-white/10"
                  onClick={() => window.open('https://apps.apple.com/us/app/tracker-manager-for-bluesky/id6740998282', '_blank')}
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  App Store
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