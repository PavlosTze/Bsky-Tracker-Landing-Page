import {notFound} from 'next/navigation';
import GuideArticle from '../../../../src/components/GuideArticle';
import {getGuideArticle, guideSlugs} from '../../../../src/data/guideArticles';
import {getMessages} from '../../../../src/i18n/messages';

export function generateStaticParams() {
  return guideSlugs.map((slug) => ({slug}));
}

export async function generateMetadata({params}) {
  const {slug} = await params;
  const guide = getGuideArticle(slug);

  if (!guide) {
    return {};
  }

  const canonical = `/en/guides/${guide.slug}`;

  return {
    title: guide.title,
    description: guide.description,
    keywords: guide.keywords,
    alternates: {canonical, languages: {en: canonical}},
    robots: {index: false, follow: true},
  };
}

export default async function Page({params}) {
  const {slug} = await params;
  const guide = getGuideArticle(slug);

  if (!guide) {
    notFound();
  }

  return <GuideArticle guide={guide} locale="en" messages={getMessages('en')} />;
}
