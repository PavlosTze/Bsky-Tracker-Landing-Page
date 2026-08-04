import {notFound} from 'next/navigation';
import LandingPage from '../../../src/components/LandingPage';
import {getAlternates, isSupportedLocale, locales, ogLocales} from '../../../src/i18n/config';
import {getMessages} from '../../../src/i18n/messages';

const siteUrl = 'https://blueskytracker.app';

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}) {
  const {locale} = await params;
  if (!isSupportedLocale(locale)) {
    return {};
  }

  const messages = getMessages(locale);
  const meta = messages.landing.meta;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: getAlternates('/'),
    },
    openGraph: {
      type: 'website',
      url: `/${locale}`,
      title: meta.ogTitle,
      description: meta.ogDescription,
      siteName: 'Bluesky Tracker',
      locale: ogLocales[locale],
      images: [{url: '/banner.png', width: 1200, height: 630, alt: meta.imageAlt}],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.ogTitle,
      description: meta.ogDescription,
      images: [{url: '/banner.png', alt: meta.imageAlt}],
    },
  };
}

export default async function Page({params}) {
  const {locale} = await params;
  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const messages = getMessages(locale);
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: messages.common.appName,
    description: messages.landing.structuredDataDescription,
    applicationCategory: 'SocialNetworkingApplication',
    operatingSystem: 'Android, iOS',
    inLanguage: locale,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      ratingCount: '450',
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Organization',
      name: 'Bsky Tracker',
    },
    downloadUrl: [
      'https://play.google.com/store/apps/details?id=com.bluesky.followers.analyzer',
      'https://apps.apple.com/us/app/tracker-manager-for-bluesky/id6740998282',
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}} />
      <LandingPage locale={locale} messages={messages} />
    </>
  );
}
