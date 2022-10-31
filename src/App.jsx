import './app.scss'
import React from 'react';
import Layout from "./components/Layout/Layout.jsx";
import Home from "./views/home/Home.jsx";

const App = () => {
    return (
        <Layout>
            <Home/>
        </Layout>
    );
};

export default App
