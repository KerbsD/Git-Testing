import React from 'react'
import NavBar from './NavBar';

function MainLayout({children}) {
    return (
        <div className='flex'>
            <NavBar></NavBar>
            <div className='flex-1 h-screen'>{children}</div>
        </div>
    );
}

export default MainLayout;