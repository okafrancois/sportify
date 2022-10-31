import React from 'react';
import './home.scss';

const Home = () => {
    return (
        <div className={"home-view container"}>
            <div className="greets">
                <h1 className={"greets__title"}>Bonjour <span className={"username"}>User</span></h1>
                <p className={"greets__subtitle"}>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
        </div>
    );
};

export default Home;
