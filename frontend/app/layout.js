import Script from 'next/script';
import {headers} from 'next/headers';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '../src/index.css';
import '../src/App.css';
import {defaultLocale} from '../src/i18n/config';

const siteUrl = 'https://blueskytracker.app';
const siteName = 'Bluesky Tracker';
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

export default async function RootLayout({ children }) {
  const headersList = await headers();
  const locale = headersList.get('x-bsky-locale') || defaultLocale;

  return (
    <html lang={locale}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-18212419723" strategy="afterInteractive" />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18212419723');
          `}
        </Script>
        <Script id="posthog" strategy="afterInteractive">
          {`
            !(function (t, e) {
              var o, n, p, r;
              e.__SV ||
                ((window.posthog = e),
                (e._i = []),
                (e.init = function (i, s, a) {
                  function g(t, e) {
                    var o = e.split('.');
                    2 == o.length && ((t = t[o[0]]), (e = o[1])),
                      (t[e] = function () {
                        t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
                      });
                  }
                  ((p = t.createElement('script')).type = 'text/javascript'),
                    (p.crossOrigin = 'anonymous'),
                    (p.async = !0),
                    (p.src = s.api_host.replace('.i.posthog.com', '-assets.i.posthog.com') + '/static/array.js'),
                    (r = t.getElementsByTagName('script')[0]).parentNode.insertBefore(p, r);
                  var u = e;
                  for (
                    void 0 !== a ? (u = e[a] = []) : (a = 'posthog'),
                      u.people = u.people || [],
                      u.toString = function (t) {
                        var e = 'posthog';
                        return 'posthog' !== a && (e += '.' + a), t || (e += ' (stub)'), e;
                      },
                      u.people.toString = function () {
                        return u.toString(1) + '.people (stub)';
                      },
                      o = 'init me ws ys ps bs capture je Di ks register register_once register_for_session unregister unregister_for_session Ps getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id getSessionReplayUrl alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty Es $s createPersonProfile Is opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing Ss debug xs getPageViewId captureTraceFeedback captureTraceMetric'.split(' '),
                      n = 0;
                    n < o.length;
                    n++
                  )
                    g(u, o[n]);
                  e._i.push([i, s, a]);
                }),
                (e.__SV = 1));
            })(document, window.posthog || []);
            posthog.init('phc_yJW1VjHGGwmCbbrtczfqqNxgBDbhlhOWcdzcIJEOTFE', {
              api_host: 'https://us.i.posthog.com',
              person_profiles: 'identified_only',
            });
          `}
        </Script>
      </body>
    </html>
  );
}
