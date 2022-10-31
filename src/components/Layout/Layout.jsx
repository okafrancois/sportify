import React from 'react';
import './layout.scss'
import Header from "../Header/Header.jsx";
import SideBar from "../SideBar/SideBar.jsx";

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <main className={"content"}>
                {children}
            </main>
            <SideBar />
        </>
    );
};

export default Layout;
