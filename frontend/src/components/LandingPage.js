'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {Button} from './ui/button';
import {Card, CardContent, CardHeader, CardTitle} from './ui/card';
import {Badge} from './ui/badge';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from './ui/accordion';
import {
    ArrowRight,
    BarChart3,
    Bookmark,
    BookOpen,
    CalendarDays,
    CheckCircle,
    ExternalLink,
    Filter,
    Heart,
    History,
    List,
    Shield,
    Star,
    Target,
    Trophy,
    Users,
    Wrench
} from 'lucide-react';
import {changelogData} from '../data/changelog';
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from './ui/carousel';
import {Dialog, DialogContent} from './ui/dialog';
import Header from './Header';
import Footer from './Footer';
import {getImageSrc} from '../lib/images';
import en1 from '../assets/en/1.webp';
import en2 from '../assets/en/2.webp';
import en3 from '../assets/en/3.webp';
import en4 from '../assets/en/4.webp';
import en5 from '../assets/en/5.webp';
import en6 from '../assets/en/6.webp';
import tr1 from '../assets/tr/1.webp';
import tr2 from '../assets/tr/2.webp';
import tr3 from '../assets/tr/3.webp';
import tr4 from '../assets/tr/4.webp';
import tr5 from '../assets/tr/5.webp';
import tr6 from '../assets/tr/6.webp';
import ptBr1 from '../assets/pt-BR/1.webp';
import ptBr2 from '../assets/pt-BR/2.webp';
import ptBr3 from '../assets/pt-BR/3.webp';
import ptBr4 from '../assets/pt-BR/4.webp';
import ptBr5 from '../assets/pt-BR/5.webp';
import ptBr6 from '../assets/pt-BR/6.webp';
import ja1 from '../assets/ja/1.webp';
import ja2 from '../assets/ja/2.webp';
import ja3 from '../assets/ja/3.webp';
import ja4 from '../assets/ja/4.webp';
import ja5 from '../assets/ja/5.webp';
import ja6 from '../assets/ja/6.webp';
import playStoreButton from '../assets/play_store.webp';
import appStoreButton from '../assets/app_store.webp';
import {getMessages} from '../i18n/messages';

const screenshotSources = {
    en: [en1, en2, en3, en4, en5, en6],
    tr: [tr1, tr2, tr3, tr4, tr5, tr6],
    'pt-BR': [ptBr1, ptBr2, ptBr3, ptBr4, ptBr5, ptBr6],
    ja: [ja1, ja2, ja3, ja4, ja5, ja6],
};

const StoreButtons = ({messages}) => {
    const appStoreButtonSrc = getImageSrc(appStoreButton);
    const playStoreButtonSrc = getImageSrc(playStoreButton);
    const storeButtons = messages.storeButtons;

    return (
        <div className="flex flex-row flex-wrap items-center justify-center gap-3">
            <a href="https://apps.apple.com/us/app/tracker-manager-for-bluesky/id6740998282" target="_blank"
               rel="noopener noreferrer"
               aria-label={storeButtons.appStoreAria}
               className="block transition hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#35F27C]">
                 <img src={appStoreButtonSrc} alt={storeButtons.appStoreAlt} className="h-14 w-auto"/>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.bluesky.followers.analyzer" target="_blank"
               rel="noopener noreferrer"
               aria-label={storeButtons.playStoreAria}
               className="block transition hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#35F27C]">
                 <img src={playStoreButtonSrc} alt={storeButtons.playStoreAlt} className="h-14 w-auto"/>
            </a>
        </div>
    );
};

const LandingPage = ({locale = 'en', messages = getMessages('en')}) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [showAllReleases, setShowAllReleases] = useState(false);
    const common = messages.common;
    const landing = messages.landing;

    const featureIcons = [Users, Wrench, Shield, CalendarDays, BarChart3, Filter, List, Target, Bookmark, BarChart3, History, Heart];
    const features = landing.features.map((feature, index) => {
        const Icon = featureIcons[index];
        return {...feature, icon: <Icon className="w-6 h-6"/>};
    });

    const screenshots = (screenshotSources[locale] || screenshotSources.en).map(getImageSrc);
    const visibleChangelog = showAllReleases ? changelogData : changelogData.slice(0, 5);

    const openLightbox = (index) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
                <Header showGuides={true} showFeatures={true} locale={locale} messages={messages}/>

                {/* Hero Section */}
                <section className="relative pt-10 pb-20 overflow-hidden">
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"/>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center max-w-6xl mx-auto">
                            <Badge className="mb-6 bg-blue-500/20 text-blue-200 border-blue-400/30">
                                {landing.badge}
                            </Badge>

                            <h1 className="text-2xl font-bold text-white mb-6 leading-tight">
                                {landing.heroTitleStart} <br/>
                                <span
                                    className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent"> {landing.heroTitleBrand} </span>
                                <br/>{landing.heroTitleEnd}
                            </h1>

                            <div className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
                                {landing.heroDescription}
                            </div>

                            {/* App Screenshots */}
                            {/* Mobile: Carousel */}
                            <div className="mb-12 md:hidden flex justify-center">
                                <Carousel className="w-full max-w-sm" opts={{align: 'center', loop: true}}>
                                    <CarouselContent className="-ml-2">
                                        {screenshots.map((src, index) => (
                                            <CarouselItem key={index} className="pl-2 basis-full">
                                                <button
                                                    type="button"
                                                    className="w-full h-[300px] flex items-center justify-center bg-black/20 rounded-2xl shadow-2xl overflow-hidden"
                                                    onClick={() => openLightbox(index)}
                                                >
                                                    <img
                                                        src={src}
                                                        alt={landing.screenshotAlt.replace('{number}', index + 1)}
                                                        className="w-full h-full object-contain"
                                                        loading="lazy"
                                                        decoding="async"
                                                    />
                                                </button>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious/>
                                    <CarouselNext/>
                                </Carousel>
                            </div>

                            {/* Desktop: Single row with horizontal scroll when needed */}
                            <div
                                className="hidden md:block mb-12 relative left-1/2 w-[calc(100vw-1rem)] -translate-x-1/2 overflow-x-auto px-2 pb-4">
                                <div className="flex flex-nowrap gap-4 justify-center">
                                    {screenshots.map((src, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            className="group flex-none w-60 rounded-xl shadow-xl overflow-hidden transition-transform hover:scale-[1.01]"
                                            onClick={() => openLightbox(index)}
                                        >
                                            <img
                                                src={src}
                                                alt={landing.screenshotAlt.replace('{number}', index + 1)}
                                                className="w-full h-auto"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
                                <DialogContent className="w-[95vw] max-w-5xl bg-black/90 border-white/10 p-4">
                                    <Carousel key={lightboxIndex} className="w-full"
                                              opts={{align: 'center', loop: true, startIndex: lightboxIndex}}>
                                        <CarouselContent>
                                            {screenshots.map((src, index) => (
                                                <CarouselItem key={index} className="basis-full">
                                                    <div
                                                        className="w-full h-[70vh] flex items-center justify-center overflow-hidden">
                                                        <img
                                                            src={src}
                                                            alt={landing.screenshotAlt.replace('{number}', index + 1)}
                                                            className="max-h-full max-w-full object-contain"
                                                        />
                                                    </div>
                                                     <p className="mt-3 text-center text-white/80 text-sm">{landing.lightboxScreenshot.replace('{number}', index + 1)}</p>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <CarouselPrevious className="left-2"/>
                                        <CarouselNext className="right-2"/>
                                    </Carousel>
                                </DialogContent>
                            </Dialog>

                            <div className="mb-8">
                                <StoreButtons messages={messages}/>
                            </div>

                            <div className="flex justify-center mb-12">
                                <Button
                                    size="lg"
                                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
                                    onClick={() => window.open('https://bsky.app/profile/blueskytracker.app', '_blank')}
                                >
                                    <ExternalLink className="w-5 h-5 mr-2"/>
                                    {common.findMe}
                                </Button>
                            </div>

                            {/* Download & User Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                                {landing.stats.map((stat) => (
                                    <div key={stat.label} className="text-center">
                                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                                        <div className="text-sm text-white/70">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-xl font-bold text-white mb-4">
                                {landing.featuresTitle}
                            </h2>
                            <p className="text-lg text-white/70">
                                {landing.featuresSubtitle}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="p-6 rounded-xl border transition-all duration-300 bg-white/5 border-white/10"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="p-2 rounded-lg bg-blue-500 text-white">
                                            {feature.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                                            <p className="text-white/80 text-md">{feature.description}</p>
                                            {feature.hasGuide && (
                                                <Link
                                                    href={`/${locale}/guides/${feature.guideId}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center text-blue-300 hover:text-blue-200 text-sm mt-3 transition-colors"
                                                >
                                                    {common.learnMore} <ArrowRight className="w-3 h-3 ml-1"/>
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12">
                            <StoreButtons messages={messages}/>
                        </div>
                    </div>
                </section>

                {/* Social Proof */}
                <section className="py-20 bg-white/5">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-xl font-bold text-white mb-4">
                                {landing.reviewsTitle}
                            </h2>
                            <div className="flex items-center justify-center space-x-2 mb-8">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current"/>
                                ))}
                                <span className="text-white/70 ml-2">{landing.reviewsSummary}</span>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {landing.testimonials.slice(0, 3).map((testimonial, index) => (
                                <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-md">
                                    <CardContent className="p-6">
                                        <div className="flex items-center space-x-2 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current"/>
                                            ))}
                                        </div>
                                        <p className="text-white/80 mb-4 italic">"{testimonial}"</p>
                                        <div className="flex items-center space-x-3">
                                            <div className="text-white font-semibold">{landing.reviewAuthor}</div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                            {landing.testimonials.slice(3).map((testimonial, index) => (
                                <Card key={index + 3} className="bg-white/10 border-white/20 backdrop-blur-md">
                                    <CardContent className="p-6">
                                        <div className="flex items-center space-x-2 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current"/>
                                            ))}
                                        </div>
                                        <p className="text-white/80 mb-4 italic">"{testimonial}"</p>
                                        <div className="flex items-center space-x-3">
                                            <div className="text-white font-semibold">{landing.reviewAuthor}</div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <div className="mt-12">
                            <StoreButtons messages={messages}/>
                        </div>
                    </div>
                </section>

                {/* Learn How Section */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-xl font-bold text-white mb-4">
                                {landing.learnTitle}
                            </h2>
                            <p className="text-lg text-white/70">
                                {landing.learnSubtitle}
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="grid md:grid-cols-1 gap-8">
                                <Link href={`/${locale}/guides/clean-follows-bluesky`} target="_blank" rel="noopener noreferrer"
                                      className="block">
                                    <Card
                                        className="bg-white/10 border-white/20 backdrop-blur-md hover:bg-white/20 transition-all duration-300 cursor-pointer h-full">
                                        <CardContent className="p-6">
                                            <div className="flex items-start space-x-4">
                                                <div className="p-3 bg-blue-500/20 rounded-lg">
                                                    <Wrench className="w-6 h-6 text-blue-300"/>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-lg font-semibold text-white mb-2">{landing.guideCardTitle}</h3>
                                                    <p className="text-white/80 mb-4">{landing.guideCardDescription}</p>
                                                    <div className="flex items-center text-blue-300 text-sm">
                                                        <span>{common.viewGuide}</span>
                                                        <ArrowRight className="w-4 h-4 ml-2"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <Link href={`/${locale}/guides`} target="_blank" rel="noopener noreferrer">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
                                >
                                    <BookOpen className="w-5 h-5 mr-2"/>
                                    {common.viewAllGuides}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section id="faq" className="pb-20">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-xl font-bold text-white mb-4">
                                {landing.faqTitle}
                            </h2>
                        </div>

                        <div className="max-w-3xl mx-auto">
                            <Accordion type="single" collapsible className="space-y-4">
                                {landing.faq.map((item, index) => (
                                    <AccordionItem key={index} value={`item-${index}`}
                                                   className="bg-white/10 rounded-lg border-white/20 px-6">
                                        <AccordionTrigger className="text-white hover:text-blue-300">
                                            {item.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-white/80">
                                            <div>
                                                {item.answer}
                                                {index === 1 && (
                                                    <div className="mt-4">
                                                        <Link
                                                            href={`/${locale}/guides/clean-follows-bluesky`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center text-blue-300 hover:text-blue-200 text-sm transition-colors"
                                                        >
                                                            {landing.faqFollowingsLink} <ArrowRight
                                                            className="w-3 h-3 ml-1"/>
                                                        </Link>
                                                    </div>
                                                )}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section id="cta-section" className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
                    <div className="container mx-auto px-6 text-center">
                        <div className="max-w-3xl mx-auto">
                            <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-6"/>
                            <h2 className="text-xl font-bold text-white mb-4">
                                {landing.ctaTitle}
                            </h2>
                            <p className="text-lg text-white/80 mb-8">
                                {landing.ctaDescription}
                            </p>

                            <div className="mb-8">
                                <StoreButtons messages={messages}/>
                            </div>

                            <Badge className="bg-green-500/20 text-green-300 border-green-400/50 mb-8">
                                {common.freeBadge}
                            </Badge>

                            <div className="flex items-center justify-center flex-wrap gap-6 text-white/70 text-sm">
                                {landing.ctaBenefits.map((benefit) => (
                                    <div key={benefit} className="flex items-center space-x-2">
                                        <CheckCircle className="w-4 h-4 text-green-400"/>
                                        <span>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Changelog Section */}
                <section id="changelog" className="py-20 bg-white/5">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-xl font-bold text-white mb-4">
                                {landing.changelogTitle}
                            </h2>
                            <p className="text-lg text-white/70">
                                {landing.changelogSubtitle}
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="space-y-8">
                                {visibleChangelog.map((version, index) => (
                                    <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-md">
                                        <CardHeader>
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <CardTitle
                                                        className="text-white text-lg">{common.version} {version.version}</CardTitle>
                                                    <p className="text-white/60 text-sm mt-1">{version.date}</p>
                                                </div>
                                                {version.isLatest && (
                                                    <Badge
                                                        className="bg-blue-500/20 text-blue-200 border-blue-400/30">{common.latest}</Badge>
                                                )}
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-2 text-white/80 text-md">
                                                {version.changes.map((change, changeIndex) => (
                                                    <li key={changeIndex} className="flex items-start">
                                                        <span className="text-blue-400 mr-2">•</span>
                                                        {change}
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                            {!showAllReleases && changelogData.length > visibleChangelog.length && (
                                <div className="mt-10 text-center">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
                                        onClick={() => setShowAllReleases(true)}
                                    >
                                        {common.viewMore}
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <Footer locale={locale} messages={messages}/>
            </div>
        </>
    );
};

export default LandingPage;
