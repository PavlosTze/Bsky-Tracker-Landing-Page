export const siteUrl = 'https://blueskytracker.app';
export const siteName = 'Bluesky Tracker';

const defaultTitle = 'Bluesky Followers Tracker & Manager | Bsky Tracker';
const defaultDescription = 'The must-have Bluesky follower tracker and network management app. Real-time analytics, bulk actions, and advanced filtering to grow your Bluesky presence. Free download for iOS & Android.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: 'Tracker - Manager for Bluesky',
  title: {
    default: defaultTitle,
    template: '%s | Bsky Tracker',
  },
  description: defaultDescription,
  keywords: [
    'Bluesky follower tracker',
    'Bluesky analytics',
    'social media management',
    'Bluesky app',
    'follower analytics',
    'network management',
    'Bluesky tools',
    'social media tracker',
    'Bluesky stats',
    'follower monitoring',
    'bulk follow unfollow',
    'Bluesky network optimization',
  ],
  authors: [{ name: 'Tracker - Manager for Bluesky' }],
  creator: 'Bsky Tracker',
  publisher: 'Bsky Tracker',
  manifest: '/site.webmanifest',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Bsky Tracker - The must-have Bluesky Followers Analytics & Network Manager',
    description: 'Track followers, analyze engagement, and manage your Bluesky network with real-time insights. Free app with advanced filtering and bulk actions for iOS & Android.',
    siteName,
    locale: 'en_US',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'Bluesky Tracker Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bsky Tracker - The must-have Bluesky Followers Analytics & Network Manager',
    description: 'Track followers, analyze engagement, and manage your Bluesky network with real-time insights. Free app with advanced filtering and bulk actions for iOS & Android.',
    images: [
      {
        url: '/banner.png',
        alt: 'Bluesky Tracker Banner',
      },
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};
