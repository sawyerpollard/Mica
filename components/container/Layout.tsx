import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
