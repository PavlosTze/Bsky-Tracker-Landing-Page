import React from 'react';
import { Button } from './ui/button';
import { Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';

const Footer = () => {
  return (
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
              <li><Link to="/#features" className="hover:text-white">Features</Link></li>
              <li><Link to="/guides" className="hover:text-white">Guides & Tutorials</Link></li>
              <li><Link to="/#faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="https://bsky.app/profile/blueskytracker.app" target="_blank" rel="noopener noreferrer" className="hover:text-white">Find me on Bluesky</a></li>
              <li><Link to="/guides" className="hover:text-white">Guides & Tutorials</Link></li>
              <li><a href="mailto:tzegianapps@gmail.com" className="hover:text-white">Contact</a></li>
              <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/csae-policy" className="hover:text-white">CSAE Policy</Link></li>
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
  );
};

export default Footer;
