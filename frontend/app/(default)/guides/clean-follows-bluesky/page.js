import GuideFixFollowings from '../../../../src/components/GuideFixFollowings';

const title = 'How to Fix Following Count on Bluesky';
const description = 'Learn how to fix inaccurate following counts on Bluesky using Bsky Tracker. Remove deleted, suspended, deactivated, and blocked accounts to clean your follows.';
const pageUrl = 'https://blueskytracker.app/guides/clean-follows-bluesky';

const steps = [
  {
    position: 1,
    name: 'Access the Fix Followings Feature',
    text: 'Open the app and navigate to the Fix Followings section in the home screen. The Fix Followings feature is located in menu at the top right corner of the home screen.',
  },
  {
    position: 2,
    name: 'Start Fixing Your Followings',
    text: 'On the Fix Followings screen, tap the Fix Now button to begin identifying and removing deleted, suspended, deactivated, or blocked accounts from your following list.',
  },
];

const howToData = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Fix Following Count on Bluesky',
  description,
  url: pageUrl,
  image: 'https://blueskytracker.app/banner.png',
  publisher: {
    '@type': 'Organization',
    name: 'Bsky Tracker',
    url: 'https://blueskytracker.app/',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': pageUrl,
  },
  step: steps.map((step) => ({
    '@type': 'HowToStep',
    position: step.position,
    name: step.name,
    text: step.text,
  })),
};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://blueskytracker.app/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Guides',
      item: 'https://blueskytracker.app/guides',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'How to Fix Following Count on Bluesky',
      item: pageUrl,
    },
  ],
};

export const metadata = {
  title,
  description,
  keywords: ['bluesky fix followings', 'cleanfollow', 'bluesky cleanfollow', 'bluesky following count', 'bsky tracker fix followings', 'bluesky deleted accounts'],
  alternates: {
    canonical: '/guides/clean-follows-bluesky',
  },
  openGraph: {
    type: 'article',
    url: '/guides/clean-follows-bluesky',
    title: `${title} | Bsky Tracker`,
    description,
    siteName: 'Bluesky Tracker',
    locale: 'en_US',
    images: [{ url: '/banner.png', width: 1200, height: 630, alt: 'How to fix following count on Bluesky with Bsky Tracker' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | Bsky Tracker`,
    description,
    images: [{ url: '/banner.png', alt: 'How to fix following count on Bluesky with Bsky Tracker' }],
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <GuideFixFollowings />
    </>
  );
}
