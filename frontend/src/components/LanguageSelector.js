'use client';

import React from 'react';
import {usePathname, useRouter} from 'next/navigation';
import {getLocalizedPath, localeCookieName, localeLabels, locales} from '../i18n/config';

const LanguageSelector = ({locale, label}) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (event) => {
    const nextLocale = event.target.value;
    document.cookie = `${localeCookieName}=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.push(getLocalizedPath(pathname, nextLocale));
  };

  return (
    <label className="inline-flex items-center gap-2 text-white/80 text-sm">
      <span className="sr-only">{label}</span>
      <select
        value={locale}
        onChange={handleChange}
        aria-label={label}
        className="rounded-md border border-white/20 bg-slate-900/80 px-2 py-1 text-white outline-none hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-blue-300"
      >
        {locales.map((availableLocale) => (
          <option key={availableLocale} value={availableLocale}>
            {localeLabels[availableLocale]}
          </option>
        ))}
      </select>
    </label>
  );
};

export default LanguageSelector;
