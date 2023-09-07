import '@styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <SessionProvider session={pageProps.session}>
            <NextUIProvider>
                <Component {...pageProps} />
            </NextUIProvider>
        </SessionProvider>
    );
};

export default App;
