import {notFound} from 'next/navigation';
import Guides from '../../../src/components/Guides';
import {getAlternates, isSupportedLocale, locales, ogLocales} from '../../../src/i18n/config';
import {getMessages} from '../../../src/i18n/messages';

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}) {
  const {locale} = await params;
  if (!isSupportedLocale(locale)) {
    return {};
  }

  const messages = getMessages(locale);
  const meta = messages.guides.meta;

  return {
    title: meta.title,
    description: meta.description,
    keywords: ['bluesky guides', 'bluesky tutorials', 'bsky tracker help', 'bluesky tips'],
    alternates: {
      canonical: `/${locale}/guides`,
      languages: getAlternates('/guides'),
    },
    openGraph: {
      type: 'website',
      url: `/${locale}/guides`,
      title: `${meta.title} | Bsky Tracker`,
      description: meta.description,
      siteName: 'Bluesky Tracker',
      locale: ogLocales[locale],
      images: [{url: '/banner.png', width: 1200, height: 630, alt: meta.imageAlt}],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${meta.title} | Bsky Tracker`,
      description: meta.description,
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
    '@type': 'CollectionPage',
    name: messages.guides.meta.title,
    description: messages.guides.meta.description,
    url: `https://blueskytracker.app/${locale}/guides`,
    inLanguage: locale,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Bsky Tracker',
      url: 'https://blueskytracker.app/',
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: messages.guides.items.map((guide, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: guide.title,
        description: guide.description,
        url: `https://blueskytracker.app/${locale}/guides/${guide.id}`,
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}} />
      <Guides locale={locale} messages={messages} />
    </>
  );
}
