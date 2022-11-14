import './app.scss'
import Layout from "./components/Layout/Layout.jsx";
import {Route,Routes} from "react-router-dom";
import Home from "./views/home/Home.jsx";

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route exact path="/:id" element={<Home />} />
                <Route exact path="/" element={<Home />} />
            </Routes>
        </Layout>
    );
};

export default App
