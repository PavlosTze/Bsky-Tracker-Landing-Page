import React from 'react';
import {CheckCircle} from 'lucide-react';
import appStoreButton from '../assets/app_store.webp';
import playStoreButton from '../assets/play_store.webp';
import {getImageSrc} from '../lib/images';

const GuideDownloadCTA = ({messages}) => {
  const common = messages.common;
  const landing = messages.landing;

  return (
    <section
      id="cta-section"
      className="scroll-mt-24 rounded-2xl border border-white/15 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-5 py-8 text-center sm:px-8 sm:py-10"
    >
      <h2 className="text-2xl font-bold text-white">{landing.ctaTitle}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-white/90">{landing.ctaDescription}</p>

      <div className="mt-7 flex flex-row flex-wrap items-center justify-center gap-3">
        <a
          href="https://apps.apple.com/us/app/tracker-manager-for-bluesky/id6740998282"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={messages.storeButtons.appStoreAria}
          className="block transition hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#35F27C]"
        >
          <img
            src={getImageSrc(appStoreButton)}
            alt={messages.storeButtons.appStoreAlt}
            className="h-12 w-auto sm:h-14"
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.bluesky.followers.analyzer"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={messages.storeButtons.playStoreAria}
          className="block transition hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#35F27C]"
        >
          <img
            src={getImageSrc(playStoreButton)}
            alt={messages.storeButtons.playStoreAlt}
            className="h-12 w-auto sm:h-14"
          />
        </a>
      </div>

      <div className="mt-7 inline-flex rounded-lg border border-green-400/50 bg-green-500/15 px-4 py-2 text-sm font-medium text-green-300">
        {common.freeBadge}
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/70">
        {landing.ctaBenefits.map((benefit) => (
          <div key={benefit} className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 flex-none text-green-400" aria-hidden="true" />
            <span>{benefit}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GuideDownloadCTA;
