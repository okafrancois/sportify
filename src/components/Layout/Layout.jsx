import React from 'react';
import PropTypes from 'prop-types';
import './layout.scss'
import Header from "../Header/Header.jsx";
import SideBar from "../SideBar/SideBar.jsx";

/**
 * A layout component which wrap the components in a header and a sidebar.
 *
 * @param {JSX.Element} children - The page content.
 * @return {JSX.Element}
 * @constructor
 */
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

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout;
