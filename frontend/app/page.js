import LandingPage from '../src/components/LandingPage';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'Tracker - Manager for Bluesky',
  description: 'The must-have Bluesky followers tracker and network management app with real-time analytics, bulk actions, and advanced filtering.',
  applicationCategory: 'SocialNetworkingApplication',
  operatingSystem: 'Android, iOS',
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

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <LandingPage />
    </>
  );
}
