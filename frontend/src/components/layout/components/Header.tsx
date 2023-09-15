import React from 'react';
import { useRouter } from 'next/router';
import Nav from './Nav';

const Header: React.FC = () => {
    const router = useRouter();
    const isMain = router.pathname === '/';

    return (
        <header className={`${isMain ? 'fixed' : 'block'} w-full z-50`}>
            <Nav />
        </header>
    );
};

export default Header;
