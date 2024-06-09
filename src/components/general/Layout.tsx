// Layout.tsx
import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
    return (
        // Container with flex layout to place sidebar and main content side by side
        <div className='h-full w-full'>
            <Header />

            <div className="flex w-full  lg:flex-row min-h-[80vh] flex-col gap-x-4 ">

                <Sidebar />
                <main className="flex-1 p-4">
                    <Outlet />
                </main>

            </div>

            <Footer />
        </div>
    );
}

export default Layout;
