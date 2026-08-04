'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { 
  ExternalLink,
  Download,
  Menu
} from 'lucide-react';
import logo from '../assets/logo.webp';
import { getImageSrc } from '../lib/images';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from './ui/sheet';
import LanguageSelector from './LanguageSelector';
import {getMessages} from '../i18n/messages';

const Header = ({ showGuides = true, showFeatures = true, onDownloadClick, locale = 'en', messages = getMessages('en') }) => {
  const logoSrc = getImageSrc(logo);
  const common = messages.common;

  const scrollToCTA = () => {
    document.querySelector('#cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadClick = () => {
    if (onDownloadClick) {
      onDownloadClick();
    } else {
      // Default behavior for landing page
      scrollToCTA();
    }
  };

  return (
    <header className="relative z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-3">
            <Link href={`/${locale}`} className="block">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl overflow-hidden">
                <img
                  src={logoSrc}
                  alt="Bsky Tracker"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            <Link href={`/${locale}`} className="block">
              <span className="text-base lg:text-lg font-bold text-white leading-tight hover:text-blue-300 transition-colors">{common.appName}</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {showFeatures && (
              <button 
                onClick={scrollToFeatures}
                className="text-white/80 hover:text-white transition-colors"
              >
                {common.features}
              </button>
            )}
            {showGuides && (
              <a href={`/${locale}/guides`} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">{common.guides}</a>
            )}
            <LanguageSelector locale={locale} label={common.language} />
            <Button 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 mr-4"
              onClick={() => window.open('https://bsky.app/profile/blueskytracker.app', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              {common.findMe}
            </Button>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={handleDownloadClick}
            >
              <Download className="w-4 h-4 mr-2" />
              {common.downloadNow}
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
                  {showFeatures && (
                    <SheetClose asChild>
                      <button
                        type="button"
                        className="text-white text-lg text-left"
                        onClick={scrollToFeatures}
                      >
                        {common.features}
                      </button>
                    </SheetClose>
                  )}
                  {showGuides && (
                    <SheetClose asChild>
                      <a href={`/${locale}/guides`} target="_blank" rel="noopener noreferrer" className="text-white text-lg text-left">
                        {common.guides}
                      </a>
                    </SheetClose>
                  )}
                  <SheetClose asChild>
                    <button
                      type="button"
                      className="text-white text-lg text-left"
                      onClick={() => window.open('https://bsky.app/profile/blueskytracker.app', '_blank')}
                    >
                      {common.findMe}
                    </button>
                  </SheetClose>
                  <LanguageSelector locale={locale} label={common.language} />
                  <SheetClose asChild>
                    <Button 
                      className="bg-green-600 hover:bg-green-700 text-white" 
                      onClick={handleDownloadClick}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      {common.downloadNow}
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
