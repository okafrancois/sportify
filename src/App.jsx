import './app.scss'
import React, {useEffect} from 'react';
import Layout from "./components/Layout/Layout.jsx";
import Home from "./views/home/Home.jsx";
import useFetch from "./lib/useFetch.js";

const App = () => {
    const {data: userData, isPending, error} = useFetch('http://localhost:3000/user/12');
    const {data: userActivity, isPending: activityLoading, error: activityError} = useFetch('http://localhost:3000/user/12/activity');


    return (
        <Layout>
            <Home userData={userData} activityData={userActivity}/>
        </Layout>
    );
};

export default App
