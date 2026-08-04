import '../../src/index.css';
import '../../src/App.css';
import RootBody from '../../src/layout/RootBody';
import {metadata, viewport} from '../../src/layout/metadata';

export {metadata, viewport};

export default function DefaultLayout({children}) {
  return (
    <html lang="en">
      <RootBody>{children}</RootBody>
    </html>
  );
}
