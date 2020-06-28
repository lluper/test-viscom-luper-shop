import React, { useState } from 'react';
import LogoSmall from '../../images/logo/logo__small@2x.png';
import './index.css';
import InputSearch from '../NavBar__InputSearch';
import NavMenuItems from './NavMenuItems';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBars,
    faTimes
} from '@fortawesome/free-solid-svg-icons'
export default function NavBar() {
    const [isVisible, setIsVisible] = useState(false);
    function toogleIsvisible() {
        setIsVisible(!isVisible);
    }

    return (
        <nav className="navMobile">
            <ul className="navMenuBar navMenuRow">
                <li className="navMenu__item">
                    <Link to="/" className="navMenu__link">
                        <img src={LogoSmall} className="navMenu__logo" />
                    </Link>
                </li>
                <li className="navMenu__item">
                    <InputSearch />
                </li>
                <li className="navMenu__item">
                    <span className="navMenu__hamburguer" onClick={toogleIsvisible}>
                        {!isVisible && <FontAwesomeIcon icon={faBars} className="navMenu__hamburguer__icon" />}
                        {isVisible && <FontAwesomeIcon icon={faTimes} className="navMenu__hamburguer__icon" />}
                    </span>
                </li>
            </ul>
            {isVisible && <NavMenuItems />}

        </nav>
    )
}
