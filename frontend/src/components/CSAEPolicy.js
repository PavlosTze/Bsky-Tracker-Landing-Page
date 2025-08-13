import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.webp';

const CSAEPolicy = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>CSAE Policy | Bsky Tracker</title>
        <meta name="description" content="Content Safety and Abuse Enforcement Policy for Tracker - Manager for Bluesky. Learn about our content moderation and safety guidelines." />
        <link rel="canonical" href="https://blueskyapp.app/csae-policy" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blueskyapp.app/csae-policy" />
        <meta property="og:title" content="CSAE Policy | Bsky Tracker" />
        <meta property="og:description" content="Content Safety and Abuse Enforcement Policy for Tracker - Manager for Bluesky. Learn about our content moderation and safety guidelines." />
        <meta property="og:site_name" content="Bluesky Tracker" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://blueskyapp.app/csae-policy" />
        <meta property="twitter:title" content="CSAE Policy | Bsky Tracker" />
        <meta property="twitter:description" content="Content Safety and Abuse Enforcement Policy for Tracker - Manager for Bluesky. Learn about our content moderation and safety guidelines." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="relative z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/10"
                onClick={() => navigate('/')}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden">
                <img 
                  src={logo}
                  alt="Bsky Tracker Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Tracker - Manager for Bluesky</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
            <h1 className="text-4xl font-bold text-white mb-8">CSAE Policy</h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-white/80 mb-6">
                <strong>Last updated:</strong> January 2025
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-white/80 mb-4">
                This CSAE (Content Safety and Abuse Enforcement) Policy outlines our commitment to maintaining a safe and respectful environment within the Tracker - Manager for Bluesky app and its associated services.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">2. Prohibited Content</h2>
              <p className="text-white/80 mb-4">We do not tolerate the following types of content or behavior:</p>
              <ul className="text-white/80 mb-6 list-disc pl-6">
                <li>Hate speech, discrimination, or harassment</li>
                <li>Violence, threats, or incitement to violence</li>
                <li>Explicit sexual content or pornography</li>
                <li>Child exploitation or abuse content</li>
                <li>Impersonation or false identity</li>
                <li>Spam, scams, or fraudulent activities</li>
                <li>Copyright infringement or intellectual property violations</li>
                <li>Malware, phishing, or security threats</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">3. Enforcement Actions</h2>
              <p className="text-white/80 mb-4">When violations are detected, we may take the following actions:</p>
              <ul className="text-white/80 mb-6 list-disc pl-6">
                <li>Content removal or moderation</li>
                <li>Temporary account suspension</li>
                <li>Permanent account termination</li>
                <li>Reporting to relevant authorities when required by law</li>
                <li>Cooperation with Bluesky's moderation team</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">4. Reporting Violations</h2>
              <p className="text-white/80 mb-4">
                Users can report violations through multiple channels:
              </p>
              <ul className="text-white/80 mb-6 list-disc pl-6">
                <li>In-app reporting feature</li>
                <li>Email: tzegianapps@gmail.com</li>
                <li>Bluesky: @bluesky-tracker.bsky.social</li>
                <li>Direct reporting to Bluesky's moderation team</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">5. Review Process</h2>
              <p className="text-white/80 mb-4">
                All reports are reviewed by our moderation team within 24-48 hours. We consider context, intent, and severity when making enforcement decisions.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">6. Appeals Process</h2>
              <p className="text-white/80 mb-4">
                Users may appeal enforcement actions by contacting our support team. Appeals are reviewed by senior staff and decisions are communicated within 7 days.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">7. Transparency</h2>
              <p className="text-white/80 mb-4">
                We maintain transparency about our enforcement actions while respecting user privacy. Aggregate statistics may be published periodically.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">8. Cooperation with Authorities</h2>
              <p className="text-white/80 mb-4">
                We cooperate with law enforcement and regulatory authorities when required by law, including providing information about serious violations.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">9. Policy Updates</h2>
              <p className="text-white/80 mb-4">
                This CSAE Policy may be updated to reflect changes in our services, legal requirements, or community standards. Users will be notified of significant changes.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">10. Contact Information</h2>
              <p className="text-white/80 mb-4">
                For questions about this policy or to report violations:
              </p>
              <p className="text-white/80 mb-6">
                Email: tzegianapps@gmail.com<br />
                Bluesky: @bluesky-tracker.bsky.social<br />
                Emergency: For immediate threats, contact local law enforcement
              </p>

              <div className="border-t border-white/20 pt-6 mt-8">
                <p className="text-white/60 text-sm">
                  This CSAE Policy is effective as of January 2025 and will remain in effect except with respect to any changes in its provisions in the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default CSAEPolicy;
