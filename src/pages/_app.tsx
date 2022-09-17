import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

import { AppProvider } from 'providers/app';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <AppProvider>{page}</AppProvider>);

  return getLayout(
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
