import React from 'react';
import './login.scss';
import logo from '../../assets/img/logo.png';
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className={"login-view container"}>
            <img className={"login-view__logo"} src={logo} alt="page logo"/>

            <h1 className={"login-view__title"}>Bienvenue sur SportSee</h1>
            <p className={"login-view__subtitle"}>Connectez-vous pour accéder à votre espace personnel</p>

            <div className={"login-view__form"}>
                <p>Se connecter en tant que :</p>
                <div className={"login-view__buttons"}>
                    <Link className={"login-view__form__buttons__button"} to={'/12'}>Karl</Link>
                    <Link className={"login-view__form__buttons__button"} to={'/18'}>Cecilia</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
