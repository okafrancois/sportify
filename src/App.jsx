import './app.scss'
import React, {useEffect} from 'react';
import Layout from "./components/Layout/Layout.jsx";
import Home from "./views/home/Home.jsx";
import useFetch from "./lib/useFetch.js";

const App = () => {
    const {data, isPending, error} = useFetch('http://localhost:3000/user/12');

    return (
        <Layout>
            <Home userData={data}/>
        </Layout>
    );
};

export default App
