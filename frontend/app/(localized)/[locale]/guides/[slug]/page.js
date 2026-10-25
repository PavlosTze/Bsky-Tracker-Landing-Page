import {notFound} from 'next/navigation';
import GuideArticle from '../../../../../src/components/GuideArticle';
import {getGuideArticle, guideSlugs} from '../../../../../src/data/guideArticles';
import {getAlternates, isSupportedLocale, locales, ogLocales} from '../../../../../src/i18n/config';
import {getMessages} from '../../../../../src/i18n/messages';

const siteUrl = 'https://blueskytracker.app';

export function generateStaticParams() {
  return locales.flatMap((locale) => guideSlugs.map((slug) => ({locale, slug})));
}

export async function generateMetadata({params}) {
  const {locale, slug} = await params;
  const guide = getGuideArticle(slug, locale);

  if (!isSupportedLocale(locale) || !guide) {
    return {};
  }

  const path = `/${locale}/guides/${guide.slug}`;

  return {
    title: guide.title,
    description: guide.description,
    keywords: guide.keywords,
    alternates: {
      canonical: path,
      languages: getAlternates(`/guides/${guide.slug}`),
    },
    openGraph: {
      type: 'article',
      url: path,
      title: `${guide.title} | Bsky Tracker`,
      description: guide.description,
      siteName: 'Bluesky Tracker',
      locale: ogLocales[locale],
      images: [{url: '/banner.png', width: 1200, height: 630, alt: guide.title}],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${guide.title} | Bsky Tracker`,
      description: guide.description,
      images: [{url: '/banner.png', alt: guide.title}],
    },
  };
}

export default async function Page({params}) {
  const {locale, slug} = await params;
  const guide = getGuideArticle(slug, locale);

  if (!isSupportedLocale(locale) || !guide) {
    notFound();
  }

  const messages = getMessages(locale);
  const pageUrl = `${siteUrl}/${locale}/guides/${guide.slug}`;
  const articleData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    url: pageUrl,
    inLanguage: locale,
    datePublished: '2026-10-26',
    dateModified: '2026-10-26',
    articleSection: guide.eyebrow,
    image: guide.steps.map((step) => `${siteUrl}${step.image}`),
    author: {
      '@type': 'Organization',
      name: 'Bsky Tracker',
      url: `${siteUrl}/`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bsky Tracker',
      url: `${siteUrl}/`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
  };
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {'@type': 'ListItem', position: 1, name: messages.fixGuide.breadcrumbHome, item: `${siteUrl}/${locale}`},
      {'@type': 'ListItem', position: 2, name: messages.common.guides, item: `${siteUrl}/${locale}/guides`},
      {'@type': 'ListItem', position: 3, name: guide.title, item: pageUrl},
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(articleData)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbData)}} />
      <GuideArticle guide={guide} locale={locale} messages={messages} />
    </>
  );
}
