import React from 'react';
import './header.scss';
import logo from '../../assets/img/logo.png';

const Header = () => {
    return (
        <header className={"header"}>
            <a href="#" className={"logo"}>
                <img className={"logo__image"} src={logo} alt="logo"/>
                <span className={"logo__text"}>SportSee</span>
            </a>

            <nav className={"header__menu"}>
                <a href="#">Accueil</a>
                <a href="#">Profil</a>
                <a href="#">Réglage</a>
                <a href="#">Communauté</a>
            </nav>

        </header>
    );
};

export default Header;
