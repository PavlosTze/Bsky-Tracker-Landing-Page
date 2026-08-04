import {NextResponse} from 'next/server';
import {defaultLocale, getLocaleFromPathname, isSupportedLocale, localeCookieName, matchLocale} from './src/i18n/config';

const PUBLIC_FILE = /\.[^/]+$/;
const unlocalizedRoutes = ['/privacy-policy', '/csae-policy'];

function getPreferredLocale(request) {
  const cookieLocale = request.cookies.get(localeCookieName)?.value;
  if (isSupportedLocale(cookieLocale)) {
    return cookieLocale;
  }

  return matchLocale(request.headers.get('accept-language') || '') || defaultLocale;
}

export function middleware(request) {
  const {pathname, search} = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/favicon.ico' ||
    pathname === '/site.webmanifest' ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const requestHeaders = new Headers(request.headers);
  const pathLocale = getLocaleFromPathname(pathname);

  if (pathLocale) {
    requestHeaders.set('x-bsky-locale', pathLocale);
    return NextResponse.next({request: {headers: requestHeaders}});
  }

  requestHeaders.set('x-bsky-locale', defaultLocale);

  if (unlocalizedRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`))) {
    return NextResponse.next({request: {headers: requestHeaders}});
  }

  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`;
  url.search = search;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
