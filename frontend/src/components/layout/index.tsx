import React from 'react';
import Head from 'next/head';
import Header from './components/Header';
interface LayoutProps {
    children: React.ReactNode;
    title: string;
}

const Layout: React.FC<LayoutProps> = ({children, title}) => {
    return (
        <>
        <Head>
            <title>FaT | {title}</title>
            <meta name="description" content="ACME" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className='flex h-full w-full p-5'>
            {children}
        </main>
        </>
    );
};

export default Layout;
