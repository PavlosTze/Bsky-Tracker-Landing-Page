import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { 
  Wrench, 
  ArrowLeft, 
  CheckCircle,
  Lightbulb,
  Users,
  XCircle,
  AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import openFixFollowings from '../assets/open_fix_followings.webp';
import fixFollowingsScreen from '../assets/fix_followings_screen.webp';
import Header from './Header';
import Footer from './Footer';
import DownloadDialog from './DownloadDialog';

const GuideFixFollowings = () => {
  const [downloadDialogOpen, setDownloadDialogOpen] = useState(false);

  const steps = [
    {
      id: 1,
      title: "Access the Fix Followings Feature",
      description: "Open the app and navigate to the Fix Followings section in the home screen.",
      details: "The Fix Followings feature is located in menu at the top right corner of the home screen. Tap on the 'Fix Followings to access the feature that helps you correct inaccurate following counts.",
      image: openFixFollowings,
      imageAlt: "Screenshot showing the Fix Followings screen access in Bluesky Tracker app"
    },
    {
      id: 2,
      title: "Start Fixing Your Followings",
      description: "On the Fix Followings screen, tap the 'Fix Now' button to begin the process.",
      details: "Once you're on the Fix Followings screen, you'll see a 'Fix Now' button. Tap on it to begin the process of identifying, removing deleted, suspended, or blocked accounts from your following list and clean your follows.",
      image: fixFollowingsScreen,
      imageAlt: "Screenshot of Fix Followings screen with Start Fixing button"
    }
  ];

  const handleDownloadClick = () => {
    setDownloadDialogOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>How to Fix Following Count on Bluesky | Bsky Tracker</title>
        <meta name="description" content="Learn how to fix inaccurate following counts on Bluesky using Bsky Tracker. Remove deleted, suspended, and blocked accounts to get accurate numbers. A cleanfollow alternative." />
        <meta name="keywords" content="bluesky fix followings, cleanfollow, bluesky cleanfollow, bluesky following count, bsky tracker fix followings, bluesky deleted accounts" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header 
          showGuides={true} 
          showFeatures={false} 
          onDownloadClick={handleDownloadClick}
        />

        {/* Hero Section */}
        <section className="relative pt-10 pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-blue-500/20 rounded-full">
                  <Wrench className="w-8 h-8 text-blue-300" />
                </div>
              </div>
              <h1 className="text-2xl md:text-6xl font-bold text-white mb-6 leading-tight">
                How to Fix <br />
                <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Following</span>
                <br /> Count on Bluesky
              </h1>
              <div className="text-lg text-white/80 max-w-2xl mx-auto">
                Learn how to correct your inaccurate following count on Bluesky by removing deleted, suspended, and blocked accounts. 
                Get accurate numbers that match reality with our automated fixing tool and clean your follows in Bluesky.
              </div>
            </div>
          </div>
        </section>

        {/* Before You Start Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border-white/20 backdrop-blur-md">
                <CardHeader className="border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-500/30 rounded-lg">
                      <AlertTriangle className="w-6 h-6 text-blue-300" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-xl">Before You Start</CardTitle>
                      <p className="text-white/80 mt-1">Understanding the Bluesky following count bug and how our app helps clean your follows.</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="text-red-200 font-medium mb-2">The Bluesky Bug</h4>
                          <p className="text-red-200 text-sm leading-relaxed">
                            Bluesky has a known bug where deleted, suspended, and blocked accounts are still counted in the total number of followings shown in their official apps. This creates inaccurate following counts that don't reflect reality.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="text-green-200 font-medium mb-2">Our Solution</h4>
                          <p className="text-green-200 text-sm leading-relaxed">
                            Bluesky Tracker provides accurate following counts by filtering out these problematic accounts. Our "Fix Followings" feature automatically identifies and helps you remove deleted, suspended, and blocked accounts from your following list and clean it up.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <Users className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="text-blue-200 font-medium mb-2">Community Reports</h4>
                                                     <p className="text-blue-200 text-sm leading-relaxed">
                             This issue has been widely reported by the Bluesky community. You can find discussions about it on <a href="https://www.reddit.com/r/BlueskySocial/comments/1h10jl2/why_are_blocked_accounts_still_in_your_follower/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">Reddit</a> and multiple <a href="https://github.com/bluesky-social/social-app/issues/7370" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">GitHub issues</a> in the official Bluesky repository, including <a href="https://github.com/bluesky-social/social-app/issues/7189" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">issue #7189</a> which documents the inconsistency between ATP follow records and the displayed following count.
                           </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {steps.map((step) => (
                  <Card key={step.id} className="bg-white/10 border-white/20 backdrop-blur-md">
                    <CardHeader className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border-b border-white/10">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {step.id}
                        </div>
                        <div>
                          <CardTitle className="text-white text-xl">{step.title}</CardTitle>
                          <p className="text-white/80 mt-1 text-md">{step.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <p className="text-white leading-relaxed">{step.details}</p>
                        
                        <div className="bg-black/20 border border-white/10 rounded-lg p-4">
                          <div className="flex justify-center">
                            <img 
                              src={step.image} 
                              alt={step.imageAlt} 
                              className="max-w-full h-auto rounded-lg shadow-lg max-h-96 object-contain" 
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white/10 border-white/20 backdrop-blur-md">
                <CardHeader className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-500/30 rounded-lg">
                      <Lightbulb className="w-6 h-6 text-green-300" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-xl">How It Works</CardTitle>
                      <p className="text-white/80 mt-1">Understanding the fixing process and what happens next.</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-500/10 border border-green-400/20 rounded-lg p-4">
                        <h4 className="text-green-200 font-medium mb-2">Automatic Detection</h4>
                        <p className="text-green-200 text-sm">
                          The app automatically scans your following list to identify accounts that are deleted, suspended, or have blocked you.
                        </p>
                      </div>
                      <div className="bg-blue-500/10 border border-blue-400/20 rounded-lg p-4">
                        <h4 className="text-blue-200 font-medium mb-2">Safe Removal</h4>
                        <p className="text-blue-200 text-sm">
                          You can safely unfollow these accounts since they're no longer active or accessible, which will correct your following count.
                        </p>
                      </div>
                      <div className="bg-purple-500/10 border border-purple-400/20 rounded-lg p-4">
                        <h4 className="text-purple-200 font-medium mb-2">Accurate Numbers</h4>
                        <p className="text-purple-200 text-sm">
                          After fixing, your following count in the Bluesky app will match the actual number of active accounts you follow.
                        </p>
                      </div>
                      <div className="bg-yellow-500/10 border border-yellow-400/20 rounded-lg p-4">
                        <h4 className="text-yellow-200 font-medium mb-2">Regular Maintenance</h4>
                        <p className="text-yellow-200 text-sm">
                          Run this feature periodically to keep your following count accurate as accounts get deleted or suspended over time.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/10 rounded-lg border border-white/20 backdrop-blur-md p-6">
                <h3 className="text-white text-center text-lg font-semibold mb-4">Ready to explore more guides?</h3>
                <div className="flex justify-center">
                  <Link to="/guides">
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to All Guides
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />

        <DownloadDialog 
          isOpen={downloadDialogOpen} 
          onClose={() => setDownloadDialogOpen(false)} 
        />
      </div>
    </>
  );
};

export default GuideFixFollowings;
