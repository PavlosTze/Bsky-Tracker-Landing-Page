'use client';

import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import logo from '../assets/logo.webp';
import {getImageSrc} from '../lib/images';
import appStoreButton from "@/assets/app_store.webp";
import playStoreButton from "@/assets/play_store.webp";
import {getMessages} from '../i18n/messages';

const StoreButtons = ({messages}) => {
    const appStoreButtonSrc = getImageSrc(appStoreButton);
    const playStoreButtonSrc = getImageSrc(playStoreButton);
    const storeButtons = messages.storeButtons;

    return (
        <div className="flex flex-row flex-wrap gap-3">
            <a href="https://apps.apple.com/us/app/tracker-manager-for-bluesky/id6740998282" target="_blank"
               rel="noopener noreferrer"
               aria-label={storeButtons.appStoreAria}
               className="block transition hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#35F27C]">
                <img src={appStoreButtonSrc} alt={storeButtons.appStoreAlt} className="h-10 w-auto"/>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.bluesky.followers.analyzer" target="_blank"
               rel="noopener noreferrer"
               aria-label={storeButtons.playStoreAria}
               className="block transition hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#35F27C]">
                <img src={playStoreButtonSrc} alt={storeButtons.playStoreAlt} className="h-10 w-auto"/>
            </a>
        </div>
    );
};

const Footer = ({locale = 'en', messages = getMessages('en')}) => {
    const router = useRouter();
    const logoSrc = getImageSrc(logo);
    const common = messages.common;

    const handleFeaturesClick = () => {
        router.push(`/${locale}`);
        // Use setTimeout to ensure the page has loaded before scrolling
        setTimeout(() => {
            // Temporarily enable smooth scrolling for this specific scroll
            const htmlElement = document.documentElement;
            const originalScrollBehavior = htmlElement.style.scrollBehavior;
            htmlElement.style.scrollBehavior = 'smooth';

            document.querySelector('#features')?.scrollIntoView({behavior: 'smooth'});

            // Restore original scroll behavior after scrolling
            setTimeout(() => {
                htmlElement.style.scrollBehavior = originalScrollBehavior;
            }, 1000);
        }, 1000);
    };

    const handleFAQClick = () => {
        router.push(`/${locale}`);
        // Use setTimeout to ensure the page has loaded before scrolling
        setTimeout(() => {
            // Temporarily enable smooth scrolling for this specific scroll
            const htmlElement = document.documentElement;
            const originalScrollBehavior = htmlElement.style.scrollBehavior;
            htmlElement.style.scrollBehavior = 'smooth';

            document.querySelector('#faq')?.scrollIntoView({behavior: 'smooth'});

            // Restore original scroll behavior after scrolling
            setTimeout(() => {
                htmlElement.style.scrollBehavior = originalScrollBehavior;
            }, 1000);
        }, 1000);
    };

    return (
        <footer className="bg-black/20 backdrop-blur-md border-t border-white/10">
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-8 h-8 rounded-lg overflow-hidden">
                                <img
                                    src={logoSrc}
                                    alt={common.shortName}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="text-white font-semibold">{common.appName}</span>
                        </div>
                        <p className="text-white/70 text-sm">
                            {messages.footer.description}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">{common.product}</h4>
                        <ul className="space-y-2 text-white/70 text-sm">
                            <li>
                                <button onClick={handleFeaturesClick} className="hover:text-white text-left">{common.features}
                                </button>
                            </li>
                            <li><Link href={`/${locale}/guides`} target="_blank" rel="noopener noreferrer"
                                      className="hover:text-white">{common.guidesTutorials}</Link></li>
                            <li>
                                <button onClick={handleFAQClick} className="hover:text-white text-left">{common.faq}</button>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">{common.support}</h4>
                        <ul className="space-y-2 text-white/70 text-sm">
                            <li><a href="https://bsky.app/profile/blueskytracker.app" target="_blank"
                                   rel="noopener noreferrer" className="hover:text-white">{common.findMe}</a></li>
                            <li><Link href={`/${locale}/guides`} target="_blank" rel="noopener noreferrer"
                                      className="hover:text-white">{common.guidesTutorials}</Link></li>
                            <li><a href="mailto:tzegianapps@gmail.com" className="hover:text-white">{common.contact}</a></li>
                            <li><Link href="/privacy-policy" target="_blank" rel="noopener noreferrer"
                                      className="hover:text-white">{common.privacyPolicy}</Link></li>
                            <li><Link href="/csae-policy" target="_blank" rel="noopener noreferrer"
                                      className="hover:text-white">{common.csaePolicy}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">{common.download}</h4>
                        <div className="mt-4">
                            <StoreButtons messages={messages}/>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-8 pt-8 text-center">
                    <p className="text-white/60 text-sm">
                        {messages.footer.copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
