'use client';

import React, { useState } from 'react';
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
import Link from 'next/link';
import openFixFollowings from '../assets/open_fix_followings.webp';
import fixFollowingsScreen from '../assets/fix_followings_screen.webp';
import Header from './Header';
import Footer from './Footer';
import DownloadDialog from './DownloadDialog';
import { getImageSrc } from '../lib/images';
import {getMessages} from '../i18n/messages';

const GuideFixFollowings = ({locale = 'en', messages = getMessages('en')}) => {
  const [downloadDialogOpen, setDownloadDialogOpen] = useState(false);
  const guide = messages.fixGuide;

  const stepImages = [getImageSrc(openFixFollowings), getImageSrc(fixFollowingsScreen)];
  const steps = guide.steps.map((step, index) => ({...step, image: stepImages[index]}));

  const handleDownloadClick = () => {
    setDownloadDialogOpen(true);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header 
          showGuides={true} 
          showFeatures={false} 
          onDownloadClick={handleDownloadClick}
          locale={locale}
          messages={messages}
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
                {guide.heroTitleStart} <br />
                <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">{guide.heroTitleAccent}</span>
                <br /> {guide.heroTitleEnd}
              </h1>
              <div className="text-lg text-white/80 max-w-2xl mx-auto">
                {guide.heroDescription}
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
                      <CardTitle className="text-white text-xl">{guide.beforeTitle}</CardTitle>
                      <p className="text-white/80 mt-1">{guide.beforeDescription}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="text-red-200 font-medium mb-2">{guide.bugTitle}</h4>
                          <p className="text-red-200 text-sm leading-relaxed">
                            {guide.bugDescription}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="text-green-200 font-medium mb-2">{guide.solutionTitle}</h4>
                          <p className="text-green-200 text-sm leading-relaxed">
                            {guide.solutionDescription}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <Users className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="text-blue-200 font-medium mb-2">{guide.reportsTitle}</h4>
                                                     <p className="text-blue-200 text-sm leading-relaxed">
                             {guide.reportsIntro} <a href="https://www.reddit.com/r/BlueskySocial/comments/1h10jl2/why_are_blocked_accounts_still_in_your_follower/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">{guide.reddit}</a> {guide.reportsMiddle} <a href="https://github.com/bluesky-social/social-app/issues/7370" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">{guide.githubIssues}</a> {guide.reportsOutro} <a href="https://github.com/bluesky-social/social-app/issues/7189" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">{guide.issue7189}</a> {guide.reportsEnd}
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
                      <CardTitle className="text-white text-xl">{guide.howItWorksTitle}</CardTitle>
                      <p className="text-white/80 mt-1">{guide.howItWorksDescription}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-500/10 border border-green-400/20 rounded-lg p-4">
                        <h4 className="text-green-200 font-medium mb-2">{guide.howItWorks[0].title}</h4>
                        <p className="text-green-200 text-sm">{guide.howItWorks[0].description}</p>
                      </div>
                      <div className="bg-blue-500/10 border border-blue-400/20 rounded-lg p-4">
                        <h4 className="text-blue-200 font-medium mb-2">{guide.howItWorks[1].title}</h4>
                        <p className="text-blue-200 text-sm">{guide.howItWorks[1].description}</p>
                      </div>
                      <div className="bg-purple-500/10 border border-purple-400/20 rounded-lg p-4">
                        <h4 className="text-purple-200 font-medium mb-2">{guide.howItWorks[2].title}</h4>
                        <p className="text-purple-200 text-sm">{guide.howItWorks[2].description}</p>
                      </div>
                      <div className="bg-yellow-500/10 border border-yellow-400/20 rounded-lg p-4">
                        <h4 className="text-yellow-200 font-medium mb-2">{guide.howItWorks[3].title}</h4>
                        <p className="text-yellow-200 text-sm">{guide.howItWorks[3].description}</p>
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
                <h3 className="text-white text-center text-lg font-semibold mb-4">{guide.moreGuidesTitle}</h3>
                <div className="flex justify-center">
                  <Link href={`/${locale}/guides`}>
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      {messages.common.backToAllGuides}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer locale={locale} messages={messages} />

        <DownloadDialog 
          isOpen={downloadDialogOpen} 
          onClose={() => setDownloadDialogOpen(false)} 
          messages={messages}
        />
      </div>
    </>
  );
};

export default GuideFixFollowings;
