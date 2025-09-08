import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { 
  Bookmark, 
  ArrowLeft, 
  CheckCircle,
  AlertCircle,
  Shield,
  Database
} from 'lucide-react';
import { Link } from 'react-router-dom';
import openBookmarksScreen from '../assets/open_bookmarks_screen.webp';
import copyLinkToPost from '../assets/copy_link_to_post.webp';
import startBokomarkAdd from '../assets/start_bokomark_add.webp';
import pasteLink from '../assets/paste_link.webp';
import addBookmark from '../assets/add_bookmark.webp';
import Header from './Header';
import Footer from './Footer';
import DownloadDialog from './DownloadDialog';

const GuideBookmarks = () => {
  const [downloadDialogOpen, setDownloadDialogOpen] = useState(false);

  const steps = [
    {
      id: 1,
      title: "Access the Bookmarks Feature",
      description: "Open the app and navigate to the bookmarks section in the home screen.",
      details: "The bookmarks feature is located in the contents tab in the home screen. Tap on the bookmarks card to access your saved posts.",
      image: openBookmarksScreen,
      imageAlt: "Screenshot showing the bookmarks screen in Bsky Tracker app"
    },
    {
      id: 2,
      title: "Share the Post from Bluesky",
      description: "In the official Bluesky app, find the post you want to bookmark and tap the share button.",
      details: "While browsing posts in the official Bluesky app, tap the share button on the post you want to save. Then select 'Copy link to post' to copy the post's URL to your clipboard.",
      image: copyLinkToPost,
      imageAlt: "Screenshot showing share button and copy link option in Bluesky app"
    },
    {
      id: 3,
      title: "Open Add Bookmark Dialog",
      description: "Go to the Bookmarks screen in Bsky Tracker and tap the 'Add Bookmark' button.",
      details: "Navigate to the Bookmarks screen in your Bsky Tracker app. You'll see an 'Add Bookmark' button - tap on it to open the bookmark creation dialog.",
      image: startBokomarkAdd,
      imageAlt: "Screenshot of Bookmarks screen with Add Bookmark button"
    },
    {
      id: 4,
      title: "Paste the Post Link",
      description: "In the bottom sheet dialog, paste the copied post link into the input field.",
      details: "A bottom sheet dialog will slide up from the bottom of the screen. In the input field provided, paste the post link you copied from the Bluesky app.",
      image: pasteLink,
      imageAlt: "Screenshot of bottom sheet dialog with input field for pasting post link"
    },
    {
      id: 5,
      title: "Save the Bookmark",
      description: "Tap the 'Add Bookmark' button to add the post to your bookmarks.",
      details: "After pasting the post link, tap the 'Add Bookmark' button. The dialog will close and the post will be added to your bookmarks list, where you can view and manage it later.",
      image: addBookmark,
      imageAlt: "Screenshot showing Add Bookmark button and confirmation"
    }
  ];

  const handleDownloadClick = () => {
    setDownloadDialogOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>How to Have Bookmarks on Bluesky | Bsky Tracker</title>
        <meta name="description" content="Learn how to create and manage bookmarks for your favorite posts on Bluesky using Bsky Tracker. Step-by-step guide with tips and tricks." />
        <meta name="keywords" content="bluesky bookmarks, bluesky save posts, bsky tracker bookmarks, bluesky tips" />
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
                  <Bookmark className="w-8 h-8 text-blue-300" />
                </div>
              </div>
              <h1 className="text-2xl md:text-6xl font-bold text-white mb-6 leading-tight">
                How to Have <br />
                <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Bookmarks</span>
                <br /> on Bluesky
              </h1>
              <div className="text-lg text-white/80 max-w-2xl mx-auto">
                Learn how to save and organize your favorite posts on Bluesky using Bsky Tracker. 
                Never lose important content again with our comprehensive & 100% private bookmarking system.
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
                      <Shield className="w-6 h-6 text-blue-300" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-xl">Before You Start</CardTitle>
                      <p className="text-white/80 mt-1">Important information about privacy and data safety.</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <Database className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="text-blue-200 font-medium mb-2">Local Storage Only</h4>
                          <p className="text-blue-200 text-sm leading-relaxed">
                            Your bookmarks are stored locally on your device only. This means they are not synced to any cloud service or server, ensuring complete privacy and control over your data.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="text-yellow-200 font-medium mb-2">Backup Your Bookmarks</h4>
                          <p className="text-yellow-200 text-sm leading-relaxed">
                            Since bookmarks are stored locally, it's important to regularly backup your data to prevent loss. Use the <strong>"Import / Export Data"</strong> feature in the app settings to create backups of your bookmarks.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="text-green-200 font-medium mb-2">100% Private Solution</h4>
                          <p className="text-green-200 text-sm leading-relaxed">
                            This local storage approach achieves a 100% private bookmarking system. Your bookmarks never leave your device unless you explicitly choose to export them and share them with others, giving you complete control over your data.
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
                        <p className="text-white leading-relaxed text-md">{step.details}</p>
                        
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

export default GuideBookmarks;
