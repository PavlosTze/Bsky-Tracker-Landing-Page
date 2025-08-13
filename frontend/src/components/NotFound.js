import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import logo from '../assets/logo.webp';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Bsky Tracker</title>
        <meta name="description" content="The page you're looking for could not be found. Return to the Bsky Tracker homepage." />
        <link rel="canonical" href="https://blueskyapp.app/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blueskyapp.app/" />
        <meta property="og:title" content="Page Not Found | Bsky Tracker" />
        <meta property="og:description" content="The page you're looking for could not be found. Return to the Bsky Tracker homepage." />
        <meta property="og:site_name" content="Bluesky Tracker" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://blueskyapp.app/" />
        <meta property="twitter:title" content="Page Not Found | Bsky Tracker" />
        <meta property="twitter:description" content="The page you're looking for could not be found. Return to the Bsky Tracker homepage." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto mb-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-white">404</span>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
              Page Not Found
            </CardTitle>
            <CardDescription className="text-gray-600 text-base">
              Oops! The page you're looking for seems to have flown away like a lost post on Bluesky.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-gray-500">
                Don't worry, you can always find your way back to the main page.
              </p>
            </div>
            
                         <div className="flex flex-col sm:flex-row gap-3 justify-center">
               <Button asChild className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105">
                 <Link to="/" className="flex items-center gap-2">
                   <img src={logo} alt="Bsky Tracker Logo" className="w-5 h-5" />
                   Go Home
                 </Link>
               </Button>
              
              <Button 
                variant="outline" 
                onClick={() => window.history.back()}
                className="border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-6 py-2 rounded-lg transition-all duration-200"
              >
                ← Go Back
              </Button>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-400">
                Need help? Check out our{' '}
                <Link to="/privacy-policy" className="text-blue-500 hover:text-blue-600 underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-5 w-8 h-8 bg-blue-300 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-1/3 right-8 w-6 h-6 bg-purple-300 rounded-full opacity-30 animate-bounce delay-500">        </div>
      </div>
      </div>
    </>
  );
};

export default NotFound;
