import React from 'react';
import {NavLink} from 'react-router-dom'
import './MainPage.css';

export const MainPage = () => {
    return(
        <nav >
            <ul className="MainPage">
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/registr">Registration</NavLink></li>
                <li><NavLink to="/author">Authorization</NavLink></li>
            </ul>
        </nav>
    )
}