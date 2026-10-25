import Guides from '../../../src/components/Guides';
import {getMessages} from '../../../src/i18n/messages';

const title = 'Guides & Tutorials';
const description = 'Practical Bluesky guides for tracking unfollowers, checking follow-backs, finding inactive accounts, managing blocks, and cleaning your network.';
const guideItems = getMessages('en').guides.items;

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: title,
  description,
  url: 'https://blueskytracker.app/guides',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Bsky Tracker',
    url: 'https://blueskytracker.app/',
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: guideItems.map((guide, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: guide.title,
      description: guide.description,
      url: `https://blueskytracker.app/en/guides/${guide.id}`,
    })),
  },
};

export const metadata = {
  title,
  description,
  keywords: ['bluesky guides', 'bluesky tutorials', 'bsky tracker help', 'bluesky tips'],
  alternates: {
    canonical: '/guides',
  },
  openGraph: {
    type: 'website',
    url: '/guides',
    title: `${title} | Bsky Tracker`,
    description,
    siteName: 'Bluesky Tracker',
    locale: 'en_US',
    images: [{ url: '/banner.png', width: 1200, height: 630, alt: 'Bluesky Tracker guides and tutorials' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | Bsky Tracker`,
    description,
    images: [{ url: '/banner.png', alt: 'Bluesky Tracker guides and tutorials' }],
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Guides />
    </>
  );
}
