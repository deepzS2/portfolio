import React from 'react';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { ColorModeContextProvider } from '../styles';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

const clientEmotionCache = createCache({ key: 'css' });

function MyApp({ Component, pageProps, emotionCache = clientEmotionCache }) {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>Alan Ramos Developer</title>
      </Head>
      <ColorModeContextProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </ColorModeContextProvider>
    </CacheProvider>
  );
}

export default MyApp;
