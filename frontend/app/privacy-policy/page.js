import PrivacyPolicy from '../../src/components/PrivacyPolicy';

const description = 'Privacy Policy for Tracker - Manager for Bluesky. Learn how we collect, use, and protect your data.';

export const metadata = {
  title: 'Privacy Policy',
  description,
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    type: 'website',
    url: '/privacy-policy',
    title: 'Privacy Policy | Bsky Tracker',
    description,
    siteName: 'Bluesky Tracker',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | Bsky Tracker',
    description,
  },
};

export default function Page() {
  return <PrivacyPolicy />;
}
