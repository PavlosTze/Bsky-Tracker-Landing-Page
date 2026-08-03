import CSAEPolicy from '../../src/components/CSAEPolicy';

const description = 'Content Safety and Abuse Enforcement Policy for Tracker - Manager for Bluesky. Learn about our content moderation and safety guidelines.';

export const metadata = {
  title: 'CSAE Policy',
  description,
  alternates: {
    canonical: '/csae-policy',
  },
  openGraph: {
    type: 'website',
    url: '/csae-policy',
    title: 'CSAE Policy | Bsky Tracker',
    description,
    siteName: 'Bluesky Tracker',
  },
  twitter: {
    card: 'summary',
    title: 'CSAE Policy | Bsky Tracker',
    description,
  },
};

export default function Page() {
  return <CSAEPolicy />;
}
