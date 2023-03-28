import React from 'react';
import { Outlet } from "react-router-dom";
import Header from './Header';

const Layout = () => {
    return (
        <div id="top-header">
            <Header />
            <Outlet />
        </div>
    );
}

export default Layout;