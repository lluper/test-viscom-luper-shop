import React from 'react'
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCoffee,
    faCarSide,
    faKeyboard,
    faMobileAlt,
    faMouse,
    faLaptop,
    faDesktop,
    faServer,
    faMicrochip

 } from '@fortawesome/free-solid-svg-icons'

import {Link} from 'react-router-dom'


export default function index() {
    return (
        <section className="categoryBlock">
            <div className="section__header">
                <h3 className="section__header__title">Categorias populares</h3>
            </div>

            <div className="categoryBlock__body">
                <Link to="/search" className="categoryBlock__card">
                    <span className="categoryBlock__card__icon">
                        <FontAwesomeIcon icon={faCarSide} className="categoryBlock__icon" />
                    </span>
                    <h3 className="categoryBlock__card__title">Carros, motos e outro</h3>
                </Link>

                <Link to="/search" className="categoryBlock__card">
                    <span className="categoryBlock__card__icon">
                        <FontAwesomeIcon icon={faKeyboard} className="categoryBlock__icon" />
                    </span>
                    <h3 className="categoryBlock__card__title">Carros, motos e outro</h3>
                </Link>

                <Link to="/search" className="categoryBlock__card">
                    <span className="categoryBlock__card__icon">
                        <FontAwesomeIcon icon={faMobileAlt} className="categoryBlock__icon" />
                    </span>
                    <h3 className="categoryBlock__card__title">Carros, motos e outro</h3>
                </Link>

                <Link to="/search" className="categoryBlock__card">
                    <span className="categoryBlock__card__icon">
                        <FontAwesomeIcon icon={faMouse} className="categoryBlock__icon" />
                    </span>
                    <h3 className="categoryBlock__card__title">Carros, motos e outro</h3>
                </Link>

                <Link to="/search" className="categoryBlock__card">
                    <span className="categoryBlock__card__icon">
                        <FontAwesomeIcon icon={faLaptop} className="categoryBlock__icon" />
                    </span>
                    <h3 className="categoryBlock__card__title">Carros, motos e outro</h3>
                </Link>

                <Link to="/search" className="categoryBlock__card">
                    <span className="categoryBlock__card__icon">
                        <FontAwesomeIcon icon={faDesktop} className="categoryBlock__icon" />
                    </span>
                    <h3 className="categoryBlock__card__title">Carros, motos e outro</h3>
                </Link>

                <Link to="/search" className="categoryBlock__card">
                    <span className="categoryBlock__card__icon">
                        <FontAwesomeIcon icon={faServer} className="categoryBlock__icon" />
                    </span>
                    <h3 className="categoryBlock__card__title">Carros, motos e outro</h3>
                </Link>

                <Link to="/search" className="categoryBlock__card">
                    <span className="categoryBlock__card__icon">
                        <FontAwesomeIcon icon={faMicrochip} className="categoryBlock__icon" />
                    </span>
                    <h3 className="categoryBlock__card__title">Carros, motos e outro</h3>
                </Link>
            </div>
        </section>

    )
}
