import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { 
  Users, 
  Shield, 
  Filter, 
  BarChart3, 
  Clock, 
  Star,
  Download,
  CheckCircle,
  Target,
  Smartphone,
  Trophy,
  ExternalLink,
  Menu
} from 'lucide-react';
import { mockData } from '../data/mock';
import logo from '../assets/logo.png';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel';
import { Dialog, DialogContent } from './ui/dialog';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from './ui/sheet';
import ss1 from '../assets/1.png';
import ss2 from '../assets/2.png';
import ss3 from '../assets/3.png';
import ss4 from '../assets/4.png';
import ss5 from '../assets/5.png';

const LandingPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const scrollToCTA = () => {
    document.querySelector('#cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Real-time Follower Tracking",
      description: "Instantly see when someone follows or unfollows you with live updates."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Block & Mute Management", 
      description: "See who has blocked you and manage your blocks and mutes effectively."
    },
    {
      icon: <Filter className="w-6 h-6" />,
      title: "Advanced Filtering",
      description: "Filter users based on keywords, followers count, follower-to-following ratio, engagement, and activity level."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Bulk Follow & Unfollow",
      description: "Follow or unfollow users in bulk to efficiently manage your Bluesky network."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Post Analytics",
      description: "Detailed metrics for any user's posts including reach, replies, and engagement."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Relationship History",
      description: "Track when you followed someone and when they followed you back."
    }
  ];

  const screenshots = [ss1, ss2, ss3, ss4, ss5];
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="relative z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 md:space-x-3">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); scrollToTop(); }}
                className="block"
                aria-label="Scroll to top"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl overflow-hidden">
                  <img
                    src={logo}
                    alt="Bsky Tracker"
                    className="w-full h-full object-contain"
                  />
                </div>
              </a>
              <div>
                <span className="text-base lg:text-lg font-bold text-white leading-tight">Tracker - Manager for Bluesky</span>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
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
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button type="button" aria-label="Open menu" className="p-2 rounded-lg border border-white/20 text-white hover:bg-white/10">
                    <Menu className="w-5 h-5" />
                  </button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="bg-slate-900/95 border-l border-white/10 w-80"
                  onOpenAutoFocus={(e) => e.preventDefault()}
                  onCloseAutoFocus={(e) => e.preventDefault()}
                >
                  <div className="mt-6 flex flex-col gap-4">
                    <SheetClose asChild>
                      <button
                        type="button"
                        className="text-white text-lg text-left"
                        onClick={() => document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Features
                      </button>
                    </SheetClose>
                    <SheetClose asChild>
                      <button
                        type="button"
                        className="text-white text-lg text-left"
                        onClick={() => window.open('https://bsky.app/profile/bluesky-tracker.bsky.social', '_blank')}
                      >
                        Find me on Bluesky
                      </button>
                    </SheetClose>
                    <SheetClose asChild>
                      <Button className="bg-blue-500 hover:bg-blue-600 text-white" onClick={scrollToCTA}>
                        <Download className="w-4 h-4 mr-2" />
                        Download for Free
                      </Button>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            <Badge className="mb-6 bg-blue-500/20 text-blue-200 border-blue-400/30">
              13K+ downloads • 4.7⭐ rating
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Track & Manage Your <br />
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent"> Bluesky</span>
              <br />Network in Real-Time
            </h1>
            
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              The must-have companion app for Bluesky. Real-time insights that help you understand your network better.
            </p>

            {/* App Screenshots */}
            {/* Mobile: Carousel */}
            <div className="mb-12 md:hidden flex justify-center">
              <Carousel className="w-full max-w-sm" opts={{ align: 'center', loop: true }}>
                <CarouselContent className="-ml-2">
                  {screenshots.map((src, index) => (
                    <CarouselItem key={index} className="pl-2 basis-full">
                      <button
                        type="button"
                        className="w-full h-72 flex items-center justify-center bg-black/20 rounded-2xl shadow-2xl overflow-hidden"
                        onClick={() => openLightbox(index)}
                      >
                        <img
                          src={src}
                          alt={`Bluesky App screenshot ${index + 1}`}
                          className="w-full h-full object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      </button>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            {/* Desktop: Grid side-by-side */}
            <div className="hidden md:block mb-12">
              <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
                {screenshots.map((src, index) => (
                  <button
                    key={index}
                    type="button"
                    className="group w-full rounded-xl shadow-xl overflow-hidden transition-transform hover:scale-[1.01]"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={src}
                      alt={`Bluesky App screenshot ${index + 1}`}
                      className="w-full h-auto"
                      loading="lazy"
                      decoding="async"
                    />
                  </button>
                ))}
              </div>
            </div>

            <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
              <DialogContent className="w-[95vw] max-w-5xl bg-black/90 border-white/10 p-4">
                <Carousel key={lightboxIndex} className="w-full" opts={{ align: 'center', loop: true, startIndex: lightboxIndex }}>
                  <CarouselContent>
                    {screenshots.map((src, index) => (
                      <CarouselItem key={index} className="basis-full">
                        <div className="w-full h-[70vh] flex items-center justify-center overflow-hidden">
                          <img
                            src={src}
                            alt={`App screenshot ${index + 1}`}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                        <p className="mt-3 text-center text-white/80 text-sm">Screenshot {index + 1}</p>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </DialogContent>
            </Dialog>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg"
                onClick={scrollToCTA}
              >
                <Download className="w-5 h-5 mr-2" />
                Download for Free
              </Button>
            </div>
            
            <div className="flex justify-center mb-12">
              <Button 
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
                onClick={() => window.open('https://bsky.app/profile/bluesky-tracker.bsky.social', '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Find me on Bluesky
              </Button>
            </div>

            {/* Download & User Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">13,000+</div>
                <div className="text-sm text-white/70">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4,000+</div>
                <div className="text-sm text-white/70">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.7⭐</div>
                <div className="text-sm text-white/70">App Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">450+</div>
                <div className="text-sm text-white/70">Reviews</div>
              </div>
            </div>
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
              Everything you need to take control of your Bluesky network
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
                      <p className="text-white/80">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg"
              onClick={scrollToCTA}
            >
              <Download className="w-5 h-5 mr-2" />
              Download for Free
            </Button>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.testimonials.slice(0, 3).map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-md">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/80 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="text-white font-semibold">A happy Bluesky user</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {mockData.testimonials.slice(3).map((testimonial, index) => (
              <Card key={index + 3} className="bg-white/10 border-white/20 backdrop-blur-md">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/80 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="text-white font-semibold">A happy Bluesky user</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg"
              onClick={scrollToCTA}
            >
              <Download className="w-5 h-5 mr-2" />
              Download for Free
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
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
                  <AccordionContent className="text-white/80">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Master Your Bluesky Network?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join 13,000+ users who trust Bsky Tracker to track and manage their Bluesky presence. 
              Download now and see results immediately.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bluesky.followers.analyzer', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Android
              </Button>
              <Button 
                size="lg" 
                className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 text-lg"
                onClick={() => window.open('https://apps.apple.com/us/app/tracker-manager-for-bluesky/id6740998282', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                iOS
              </Button>
            </div>

            <Badge className="bg-green-500/20 text-green-300 border-green-400/50 mb-8">
              ✓ 100% Free forever • No credit card required
            </Badge>

            <div className="flex items-center justify-center flex-wrap gap-6 text-white/70 text-sm">
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
                <span>Advanced Filters for your network</span>
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
                <div className="w-8 h-8 rounded-lg overflow-hidden">
                  <img
                    src={logo}
                    alt="Bsky Tracker"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-white font-semibold">Tracker - Manager for Bluesky</span>
              </div>
              <p className="text-white/70 text-sm">
                The ultimate Bluesky companion app for tracking and managing your network.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#features" className="hover:text-white">Features</a></li>
                <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            
              <div>
                <h4 className="text-white font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="https://bsky.app/profile/bluesky-tracker.bsky.social" target="_blank" rel="noopener noreferrer" className="hover:text-white">Find me on Bluesky</a></li>
                  <li><a href="mailto:tzegianapps@gmail.com" className="hover:text-white">Contact</a></li>
                  <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
                  <li><a href="/csae-policy" className="hover:text-white">CSAE Policy</a></li>
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