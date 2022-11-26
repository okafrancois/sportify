import './app.scss'
import Layout from "./components/Layout/Layout.jsx";
import {Route,Routes} from "react-router-dom";
import Home from "./views/home/Home.jsx";
import Login from "./views/login/Login.jsx";

const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/:id" element={<Layout><Home /></Layout>} />
        </Routes>
    );
};

export default App
