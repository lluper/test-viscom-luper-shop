import React, { useState } from 'react';
import LogoSmall from '../../images/logo/logo__small@2x.png';
import MenuPicture from '../../images/menu-picture.png'
import './index.css';
import InputSearch from '../NavBar__InputSearch';
import NavMenuItems from './NavMenuItems';
export default function NavBar() {
    const [isVisible, setIsVisible] = useState(false);
    function toogleIsvisible() {
        setIsVisible(!isVisible);
    }

    return (
        <nav className="navMobile">
            <ul className="navMenuBar navMenuRow">
                <li className="navMenu__item">
                    <a href="#" className="navMenu__link">
                        <img src={LogoSmall} className="navMenu__logo" />
                    </a>
                </li>
                <li className="navMenu__item">
                    <InputSearch />
                </li>
                <li className="navMenu__item">
                    <span className="navMenu__hamburguer" onClick={toogleIsvisible}>H</span>
                </li>
            </ul>
            {isVisible && <NavMenuItems />}

        </nav>
    )
}
