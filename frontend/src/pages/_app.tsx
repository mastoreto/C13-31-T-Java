"use client"
import '@styles/globals.css';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { AppType } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';

const App: AppType<{ session: Session | null }> = ({ Component, pageProps }) => {


    return (
        <SessionProvider
            session={pageProps.session}
            refetchInterval={5 * 60}
            refetchOnWindowFocus={true}>
            <NextUIProvider>
                <Component {...pageProps} />
            </NextUIProvider>
        </SessionProvider>
    );
};

export default App;
