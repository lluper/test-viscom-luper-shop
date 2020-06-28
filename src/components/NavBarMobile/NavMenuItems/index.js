import React from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser,
    faHome,
    faPercent,
    faTags,
    faHistory,
    faList,
    faShoppingBasket,
    faStoreAlt
} from '@fortawesome/free-solid-svg-icons'

export default function index() {
    return (
        <React.Fragment>
            <ul className="navMenuItems navMenuItemsRow">
                <div className="inputCep">
                    <a href="#">Informe seu cep</a>
                </div>

                <ul className="navMenuItems__account">
                    <li className="navMenuItems__item account">
                        <FontAwesomeIcon icon={faUser} className="navMenuItems__account__icon" />
                        
                        <div className="navMenuItems__item__links">
                            <a href="#" className="navMenuItems__link">
                                Crie sua conta
                            </a>
                            <a href="#" className="navMenuItems__link">
                                Entrar
                            </a>
                        </div>
                    </li>
                </ul>

                <ul className="navMenuItems__category">
                    <li className="navMenuItems__item">
                        <a href="#" className="navMenuItems__link">
                            <FontAwesomeIcon icon={faHome} className="navMenuItems__icon" />
                            Inicio
                        </a>
                    </li>
                    <li className="navMenuItems__item">
                        <a href="#" className="navMenuItems__link">
                            <FontAwesomeIcon icon={faPercent} className="navMenuItems__icon" />
                            Ofertas
                        </a>
                    </li>
                    <li className="navMenuItems__item">
                        <a href="#" className="navMenuItems__link">
                            <FontAwesomeIcon icon={faHistory} className="navMenuItems__icon" />
                            Historico
                        </a>
                    </li>
                    <li className="navMenuItems__item">
                        <a href="#" className="navMenuItems__link">
                            <FontAwesomeIcon icon={faTags} className="navMenuItems__icon" />
                            Vender
                        </a>
                    </li>
                </ul>
                <ul className="navMenuItems__category">
                    <li className="navMenuItems__item">
                        <a href="#" className="navMenuItems__link">
                            <FontAwesomeIcon icon={faList} className="navMenuItems__icon" />
                            Categorias
                        </a>
                    </li>
                    <li className="navMenuItems__item">
                        <a href="#" className="navMenuItems__link">
                            <FontAwesomeIcon icon={faShoppingBasket} className="navMenuItems__icon" />
                            Supermercado
                        </a>
                    </li>
                    <li className="navMenuItems__item">
                        <a href="#" className="navMenuItems__link">
                            <FontAwesomeIcon icon={faStoreAlt} className="navMenuItems__icon" />
                            Lojas Oficiais
                        </a>
                    </li>
                </ul>


            </ul>
        </React.Fragment>
    )
}
