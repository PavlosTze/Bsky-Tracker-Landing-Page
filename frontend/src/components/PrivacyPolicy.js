import React from 'react';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
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
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center overflow-hidden">
                <img 
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==" 
                  alt="Bsky Tracker"
                  className="w-full h-full object-cover"
                  style={{
                    background: 'linear-gradient(135deg, #1e90ff 0%, #0066cc 100%)',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='35' fill='none' stroke='white' stroke-width='8' opacity='0.8'/%3E%3Ccircle cx='50' cy='30' r='4' fill='white'/%3E%3Ccircle cx='30' cy='45' r='4' fill='white'/%3E%3Ccircle cx='70' cy='45' r='4' fill='white'/%3E%3Ccircle cx='35' cy='70' r='4' fill='white'/%3E%3Ccircle cx='65' cy='70' r='4' fill='white'/%3E%3C/svg%3E")`
                  }}
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
            <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-white/80 mb-6">
                <strong>Last updated:</strong> January 2025
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="text-white/80 mb-4">
                Tracker - Manager for Bluesky ("we," "our," or "us") collects information to provide and improve our services. We collect:
              </p>
              <ul className="text-white/80 mb-6 list-disc pl-6">
                <li>Account information (username, display name, profile picture)</li>
                <li>Follower and following data</li>
                <li>Post content and engagement metrics</li>
                <li>App usage statistics and preferences</li>
                <li>Device information and analytics</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-white/80 mb-4">We use the collected information to:</p>
              <ul className="text-white/80 mb-6 list-disc pl-6">
                <li>Provide real-time follower tracking and analytics</li>
                <li>Generate insights about your Bluesky network</li>
                <li>Improve app functionality and user experience</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Ensure app security and prevent abuse</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">3. Data Storage and Security</h2>
              <p className="text-white/80 mb-4">
                Your data is stored securely using industry-standard encryption. We implement appropriate security measures to protect your information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">4. Data Sharing</h2>
              <p className="text-white/80 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or to protect our rights and safety.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Services</h2>
              <p className="text-white/80 mb-4">
                Our app integrates with Bluesky's API and may use third-party analytics services. These services have their own privacy policies, and we encourage you to review them.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
              <p className="text-white/80 mb-4">You have the right to:</p>
              <ul className="text-white/80 mb-6 list-disc pl-6">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of data collection</li>
                <li>Export your data</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">7. Data Retention</h2>
              <p className="text-white/80 mb-4">
                We retain your data only as long as necessary to provide our services and comply with legal obligations. You can request data deletion at any time.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">8. Children's Privacy</h2>
              <p className="text-white/80 mb-4">
                Our app is not intended for children under 13. We do not knowingly collect personal information from children under 13.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Policy</h2>
              <p className="text-white/80 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
              <p className="text-white/80 mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-white/80 mb-6">
                Email: tzegianapps@gmail.com<br />
                Bluesky: @bluesky-tracker.bsky.social
              </p>

              <div className="border-t border-white/20 pt-6 mt-8">
                <p className="text-white/60 text-sm">
                  This Privacy Policy is effective as of January 2025 and will remain in effect except with respect to any changes in its provisions in the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
