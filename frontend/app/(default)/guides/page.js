import Guides from '../../../src/components/Guides';

const title = 'Guides & Tutorials';
const description = 'Learn how to use Bsky Tracker effectively with Bluesky guides and tutorials for fixing followings, cleaning your network, and managing your account.';

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
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'How to Fix Following Count on Bluesky',
        description: 'Learn how to correct your inaccurate following count by removing deleted, suspended, and blocked accounts.',
        url: 'https://blueskytracker.app/guides/clean-follows-bluesky',
      },
    ],
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
