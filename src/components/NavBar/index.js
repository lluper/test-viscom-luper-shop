import React from 'react';
import Logo from '../../images/logo/logo-pt__large_plus.png';
import MenuPicture from '../../images/menu-picture.png'
import './index.css';
import InputSearch from '../NavBar__InputSearch';
import {Link} from 'react-router-dom'
export default function NavBar() {
    return (
        <nav>
            <ul className="navMenu navMenuRow">
                <li className="navmenu__item">
                    <Link to="/" href="#" className="navMenu__link">
                        <img src={Logo} className="navMenu__logo" />
                    </Link>
                </li>
                <li className="navmenu__item">
                    <InputSearch />
                </li>
                <li className="navmenu__item">
                    <a href="#" className="navMenu__link">
                        <img src={MenuPicture} className="navMenu__picture" />
                    </a>
                </li>
            </ul>

            <ul className="navMenu navMenuRow">
                <div className="inputCep">
                    <a href="#">Informe seu cep</a>
                </div>

                <ul className="navMenu_category">
                    <li className="navmenu__item"><a href="#" className="navMenu__link">Categorias</a></li>
                    <li className="navmenu__item"><a href="#" className="navMenu__link">ofertas</a></li>
                    <li className="navmenu__item"><a href="#" className="navMenu__link">Historico</a></li>
                    <li className="navmenu__item"><a href="#" className="navMenu__link">Supermercado</a></li>
                    <li className="navmenu__item"><a href="#" className="navMenu__link">Lojas Oficiais</a></li>
                    <li className="navmenu__item"><a href="#" className="navMenu__link">Vender</a></li>
                </ul>

                <ul className="navMenu_account">
                    <li className="navmenu__item"><a href="#" className="navMenu__link">Crie sua conta</a></li>
                    <li className="navmenu__item"><a href="#" className="navMenu__link">Entrar</a></li>
                    <li className="navmenu__item"><a href="#" className="navMenu__link">Compras</a></li>
                    </ul>
            </ul>
        </nav>
    )
}
