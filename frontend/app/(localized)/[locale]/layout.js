import '../../../src/index.css';
import '../../../src/App.css';
import RootBody from '../../../src/layout/RootBody';
import {metadata, viewport} from '../../../src/layout/metadata';
import {defaultLocale, isSupportedLocale} from '../../../src/i18n/config';

export {metadata, viewport};

export default async function LocaleLayout({children, params}) {
  const {locale} = await params;
  const lang = isSupportedLocale(locale) ? locale : defaultLocale;

  return (
    <html lang={lang}>
      <RootBody>{children}</RootBody>
    </html>
  );
}
