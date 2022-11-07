import './app.scss'
import React, {useEffect} from 'react';
import Layout from "./components/Layout/Layout.jsx";
import Home from "./views/home/Home.jsx";
import {useFetch} from "./lib/func.js";

const App = () => {
    const {data: userData, isPending, error} = useFetch('http://localhost:3000/user/12');
    const {data: userActivity, isPending: activityLoading, error: activityError} = useFetch('http://localhost:3000/user/12/activity');
    const {data: performanceData, isPending: performanceLoading, error: performanceError} = useFetch('http://localhost:3000/user/12/performance');
    const {data: sessionsAverageData, isPending: sessionsAverageLoading, error: sessionsAverageError} = useFetch('http://localhost:3000/user/12/average-sessions');

    return (
        <Layout>
            <Home userData={userData} activityData={userActivity} performanceData={performanceData} sessionData={sessionsAverageData}/>
        </Layout>
    );
};

export default App
