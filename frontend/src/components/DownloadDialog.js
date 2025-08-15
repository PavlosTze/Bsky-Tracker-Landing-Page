import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Download,
  CheckCircle,
  X
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

const DownloadDialog = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-2xl bg-slate-900/95 border-white/10 p-0 overflow-hidden [&>button]:hidden">
        <DialogHeader className="p-6 pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-white">
              Download Options
            </DialogTitle>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </DialogHeader>
        
        <div className="px-6 pb-6">
          <div className="text-center mb-6">
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
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

            <Badge className="bg-green-500/20 text-green-300 border-green-400/50 mb-6">
              ✓ 100% Free forever • No credit card required
            </Badge>

            <div className="flex items-center justify-center flex-wrap gap-4 text-white/70 text-sm">
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
                <span>Advanced Filters</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadDialog;
