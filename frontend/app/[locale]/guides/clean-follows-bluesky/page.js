import {notFound} from 'next/navigation';
import GuideFixFollowings from '../../../../src/components/GuideFixFollowings';
import {getAlternates, isSupportedLocale, locales, ogLocales} from '../../../../src/i18n/config';
import {getMessages} from '../../../../src/i18n/messages';

const guidePath = '/guides/clean-follows-bluesky';

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}) {
  const {locale} = await params;
  if (!isSupportedLocale(locale)) {
    return {};
  }

  const messages = getMessages(locale);
  const meta = messages.fixGuide.meta;

  return {
    title: meta.title,
    description: meta.description,
    keywords: ['bluesky fix followings', 'cleanfollow', 'bluesky cleanfollow', 'bluesky following count', 'bsky tracker fix followings', 'bluesky deleted accounts'],
    alternates: {
      canonical: `/${locale}${guidePath}`,
      languages: getAlternates(guidePath),
    },
    openGraph: {
      type: 'article',
      url: `/${locale}${guidePath}`,
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
  const pageUrl = `https://blueskytracker.app/${locale}${guidePath}`;
  const howToData = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: messages.fixGuide.meta.title,
    description: messages.fixGuide.meta.description,
    url: pageUrl,
    image: 'https://blueskytracker.app/banner.png',
    inLanguage: locale,
    publisher: {
      '@type': 'Organization',
      name: 'Bsky Tracker',
      url: 'https://blueskytracker.app/',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
    step: messages.fixGuide.steps.map((step) => ({
      '@type': 'HowToStep',
      position: step.id,
      name: step.title,
      text: `${step.description} ${step.details}`,
    })),
  };
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {'@type': 'ListItem', position: 1, name: messages.fixGuide.breadcrumbHome, item: `https://blueskytracker.app/${locale}`},
      {'@type': 'ListItem', position: 2, name: messages.common.guides, item: `https://blueskytracker.app/${locale}/guides`},
      {'@type': 'ListItem', position: 3, name: messages.fixGuide.meta.title, item: pageUrl},
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(howToData)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbData)}} />
      <GuideFixFollowings locale={locale} messages={messages} />
    </>
  );
}
