import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
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
  Trophy,
  ExternalLink,
  History,
  Heart,
  Bookmark,
  Wrench,
  BookOpen,
  ArrowRight,
  List
} from 'lucide-react';
import { mockData } from '../data/mock';
import { changelogData } from '../data/changelog';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel';
import { Dialog, DialogContent } from './ui/dialog';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ss1 from '../assets/1.webp';
import ss2 from '../assets/2.webp';
import ss3 from '../assets/3.webp';
import ss4 from '../assets/4.webp';
import ss5 from '../assets/5.webp';

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
      icon: <Wrench className="w-6 h-6" />,
      title: "Fix Followings",
      description: "Automatically remove deleted, suspended, or blocked accounts to correct inaccurate Bluesky following counts.",
      hasGuide: true,
      guideId: "clean-follows-bluesky"
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
      icon: <List className="w-6 h-6" />,
      title: "Lists & Starter Packs",
      description: "View lists that have blocked you and discover starter packs you're included in or lists you are blocking/muting to better understand your Bluesky presence."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Bulk Follow & Unfollow",
      description: "Follow or unfollow users in bulk to efficiently manage your Bluesky network."
    },
    {
      icon: <Bookmark className="w-6 h-6" />,
      title: "Bookmarks Support & Search",
      description: "View your saved posts in Bluesky and easily search for those posts by keywords or author."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Post Analytics",
      description: "Detailed metrics for any user's posts including reach, replies, and engagement."
    },
    {
      icon: <History className="w-6 h-6" />,
      title: "Account & Relationship History",
      description: "Track when you followed someone and when they followed you back, plus check past usernames for any account to verify identity and name changes."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Likes Timeline",
      description: "See posts liked by any user on Bluesky, including yourself, to explore interests and engagement patterns."
    }
  ];

  const screenshots = [ss1, ss2, ss3, ss4, ss5];
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Bluesky Followers Tracker & Manager | Bsky Tracker</title>
        <meta name="description" content="The must-have Bluesky follower tracker and network management app. Real-time analytics, bulk actions, and advanced filtering to grow your Bluesky presence. Free download for iOS & Android." />
        <link rel="canonical" href="https://blueskytracker.app/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blueskytracker.app/" />
        <meta property="og:title" content="Bsky Tracker - The must-have Bluesky Followers Analytics & Network Manager" />
        <meta property="og:description" content="Track followers, analyze engagement, and manage your Bluesky network with real-time insights. Free app with advanced filtering and bulk actions for iOS & Android." />
        <meta property="og:image" content="https://blueskytracker.app/banner.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Bluesky Tracker" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://blueskytracker.app/" />
        <meta property="twitter:title" content="Bsky Tracker - The must-have Bluesky Followers Analytics & Network Manager" />
        <meta property="twitter:description" content="Track followers, analyze engagement, and manage your Bluesky network with real-time insights. Free app with advanced filtering and bulk actions for iOS & Android." />
        <meta property="twitter:image" content="https://blueskytracker.app/banner.png" />
        <meta property="twitter:image:alt" content="Bluesky Tracker Banner" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header showGuides={true} showFeatures={true} />

        {/* Hero Section */}
        <section className="relative pt-10 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-6xl mx-auto">
              <Badge className="mb-6 bg-blue-500/20 text-blue-200 border-blue-400/30">
                15K+ downloads • 4.7⭐ rating
              </Badge>

              <h1 className="text-2xl font-bold text-white mb-6 leading-tight">
                Track & Manage Your <br />
                <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent"> Bluesky </span>
                <br />Network in Real-Time
              </h1>

              <div className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
                The must-have companion app for Bluesky. Real-time insights that help you understand your network better.
              </div>

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
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
                  onClick={scrollToCTA}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Now
                </Button>
              </div>
              
              <div className="flex justify-center mb-12">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
                  onClick={() => window.open('https://bsky.app/profile/blueskytracker.app', '_blank')}
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Find me on Bluesky
                </Button>
              </div>

              {/* Download & User Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">15,000+</div>
                  <div className="text-sm text-white/70">Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4,500+</div>
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
              <h2 className="text-xl font-bold text-white mb-4">
                Powerful Features That Deliver Results
              </h2>
              <p className="text-lg text-white/70">
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
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                        <p className="text-white/80 text-md">{feature.description}</p>
                          {feature.hasGuide && (
                           <Link 
                             to={`/guides/${feature.guideId}`}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="inline-flex items-center text-blue-300 hover:text-blue-200 text-sm mt-3 transition-colors"
                             onClick={(e) => e.stopPropagation()}
                           >
                             Learn More <ArrowRight className="w-3 h-3 ml-1" />
                           </Link>
                         )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
                onClick={scrollToCTA}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Now
              </Button>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-xl font-bold text-white mb-4">
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
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
                onClick={scrollToCTA}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Now
              </Button>
            </div>
          </div>
        </section>

        {/* Learn How Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-xl font-bold text-white mb-4">
                Learn How to Use the Bluesky Tracker
              </h2>
              <p className="text-lg text-white/70">
                Get the most out of your Bluesky experience with our step-by-step guides
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-1 gap-8">
                  <Link to="/guides/clean-follows-bluesky" target="_blank" rel="noopener noreferrer" className="block">
                   <Card className="bg-white/10 border-white/20 backdrop-blur-md hover:bg-white/20 transition-all duration-300 cursor-pointer h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-blue-500/20 rounded-lg">
                          <Wrench className="w-6 h-6 text-blue-300" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-2">How to Clean your Follows on Bluesky</h3>
                          <p className="text-white/80 mb-4">Learn how to correct your inaccurate following count by removing deleted, suspended, and blocked accounts and clean your follows.</p>
                          <div className="flex items-center text-blue-300 text-sm">
                            <span>View Guide</span>
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>

            <div className="text-center mt-12">
                <Link to="/guides" target="_blank" rel="noopener noreferrer">
                 <Button
                   size="lg"
                   variant="outline"
                   className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
                 >
                   <BookOpen className="w-5 h-5 mr-2" />
                   View All Guides
                 </Button>
               </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="pb-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-xl font-bold text-white mb-4">
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
                      <div>
                        {item.answer}
                                                 {item.question.includes("following") && (
                           <div className="mt-4">
                             <Link 
                               to="/guides/clean-follows-bluesky"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="inline-flex items-center text-blue-300 hover:text-blue-200 text-sm transition-colors"
                             >
                               Learn how to fix following counts <ArrowRight className="w-3 h-3 ml-1" />
                             </Link>
                           </div>
                         )}
                      </div>
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
              <h2 className="text-xl font-bold text-white mb-4">
                Ready to Master Your Bluesky Network?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Join 15,000+ users who trust Tracker - Manager for Bluesky to track and manage their Bluesky presence. 
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

        {/* Changelog Section */}
        <section id="changelog" className="py-20 bg-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-xl font-bold text-white mb-4">
                What's New
              </h2>
              <p className="text-lg text-white/70">
                Track our journey of continuous improvements and new features
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
               <div className="space-y-8">
                 {changelogData.map((version, index) => (
                   <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-md">
                     <CardHeader>
                       <div className="flex items-center justify-between">
                         <div>
                           <CardTitle className="text-white text-lg">Version {version.version}</CardTitle>
                           <p className="text-white/60 text-sm mt-1">{version.date}</p>
                         </div>
                         {version.isLatest && (
                           <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30">Latest</Badge>
                         )}
                       </div>
                     </CardHeader>
                     <CardContent>
                      <ul className="space-y-2 text-white/80 text-md">
                        {version.changes.map((change, changeIndex) => (
                          <li key={changeIndex} className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            {change}
                          </li>
                        ))}
                      </ul>
                     </CardContent>
                   </Card>
                 ))}
               </div>
             </div>
         </div>
       </section>

       <Footer />
      </div>
    </>
  );
};

export default LandingPage;