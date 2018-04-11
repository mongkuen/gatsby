import React from 'react';
import Helmet from 'react-helmet';
import { siteName, themeBrandColor } from 'src/siteMetadata';

export default () => (
  <Helmet>
    <title>{siteName}</title>
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicons/apple-touch-icon.png?v=XBzW5YKM2e"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicons/favicon-32x32.png?v=XBzW5YKM2e"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicons/favicon-16x16.png?v=XBzW5YKM2e"
    />
    <link
      rel="mask-icon"
      href="/favicons/safari-pinned-tab.svg?v=XBzW5YKM2e"
      color={themeBrandColor}
    />
    <link rel="shortcut icon" href="/favicons/favicon.ico?v=XBzW5YKM2e" />
    <meta
      name="msapplication-config"
      content="/favicons/browserconfig.xml?v=XBzW5YKM2e"
    />
    <meta name="msapplication-TileColor" content={themeBrandColor} />
    <meta name="theme-color" content={themeBrandColor} />
  </Helmet>
);
