import React from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
    const location = useLocation();

    return (
        <div id="top-header">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;