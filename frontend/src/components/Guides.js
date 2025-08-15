import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { BookOpen, Bookmark, ArrowRight } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import DownloadDialog from './DownloadDialog';

const Guides = () => {
  const [downloadDialogOpen, setDownloadDialogOpen] = useState(false);

  const guides = [
    {
      id: 'bookmarks',
      title: "How to Have Bookmarks on Bluesky",
      description: "Learn how to create and manage bookmarks for your favorite posts on Bluesky using the app.",
      icon: <Bookmark className="w-6 h-6" />
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadClick = () => {
    setDownloadDialogOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Guides & Tutorials | Bsky Tracker</title>
        <meta name="description" content="Learn how to use the Bsky Tracker effectively with our comprehensive guides and tutorials. From basic features to advanced tips." />
        <meta name="keywords" content="bluesky guides, bluesky tutorials, bsky tracker help, bluesky tips" />
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
            <div className="text-center max-w-6xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-blue-500/20 rounded-full">
                  <BookOpen className="w-8 h-8 text-blue-300" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Guides & <br />
                <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Tutorials</span>
              </h1>
              <div className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Optimize your Bluesky experience with our comprehensive guides. From basic features to advanced tips, 
                learn everything you need to get the most out of your Bluesky experience using Bsky Tracker.
              </div>
            </div>
          </div>
        </section>

        {/* All Guides */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 gap-6">
                {guides.map((guide) => (
                  <Link key={guide.id} to={`/guides/${guide.id}`} className="block">
                    <Card className="bg-white/10 border-white/20 backdrop-blur-md hover:bg-white/20 transition-all duration-300 cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4">
                            <div className="p-2 bg-blue-500/20 rounded-lg text-white">
                              {guide.icon}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-white mb-2">{guide.title}</h3>
                              <p className="text-white/80">{guide.description}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 text-white/60">
                            <span className="text-sm">View</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
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

export default Guides;
