export const defaultLocale = 'en';

export const locales = ['en', 'tr', 'pt-BR', 'ja'];

export const localeCookieName = 'NEXT_LOCALE';

export const localeNames = {
  en: 'English',
  tr: 'Turkish',
  'pt-BR': 'Portuguese (Brazil)',
  ja: 'Japanese',
};

export const localeLabels = {
  en: 'English',
  tr: 'Türkçe',
  'pt-BR': 'Português (BR)',
  ja: '日本語',
};

export const ogLocales = {
  en: 'en_US',
  tr: 'tr_TR',
  'pt-BR': 'pt_BR',
  ja: 'ja_JP',
};

export function isSupportedLocale(locale) {
  return locales.includes(locale);
}

export function getLocaleFromPathname(pathname) {
  const segment = pathname.split('/')[1];
  return isSupportedLocale(segment) ? segment : null;
}

export function stripLocaleFromPathname(pathname) {
  const locale = getLocaleFromPathname(pathname);
  if (!locale) {
    return pathname || '/';
  }

  const stripped = pathname.slice(locale.length + 1);
  return stripped || '/';
}

export function getLocalizedPath(pathname, locale) {
  const pathWithoutLocale = stripLocaleFromPathname(pathname);
  return pathWithoutLocale === '/' ? `/${locale}` : `/${locale}${pathWithoutLocale}`;
}

export function matchLocale(acceptLanguage = '') {
  const requestedLocales = acceptLanguage
    .split(',')
    .map((part) => {
      const [tag, qValue] = part.trim().split(';q=');
      return {
        tag,
        score: qValue ? Number(qValue) : 1,
      };
    })
    .filter(({tag}) => tag)
    .sort((a, b) => b.score - a.score)
    .map(({tag}) => tag);

  for (const requestedLocale of requestedLocales) {
    const normalized = requestedLocale.toLowerCase();

    if (normalized === 'pt-br') {
      return 'pt-BR';
    }

    const exactLocale = locales.find((locale) => locale.toLowerCase() === normalized);
    if (exactLocale) {
      return exactLocale;
    }

    const baseLocale = normalized.split('-')[0];
    const matchedLocale = locales.find((locale) => locale.toLowerCase().split('-')[0] === baseLocale);
    if (matchedLocale) {
      return matchedLocale;
    }
  }

  return defaultLocale;
}

export function getAlternates(pathname) {
  return locales.reduce((alternates, locale) => {
    alternates[locale] = getLocalizedPath(pathname, locale);
    return alternates;
  }, {});
}
