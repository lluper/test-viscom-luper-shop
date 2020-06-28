import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {Link} from 'react-router-dom'

import Product1 from '../../images/products/product-1.jpg';
import Product2 from '../../images/products/product-2.jpg';
import Product3 from '../../images/products/product-3.jpg';
import Product4 from '../../images/products/product-4.jpg';

export default function index() {
    return (
        <section className="offersBlock">
            <div className="section__header">
                <h3 className="section__header__title">ofertas</h3>
                <a href="#" className="section__header__viewAll">ver todas</a>
            </div>

            <div className="offersBlock__cardsContainer">
                <Link to="/buy" className="offersBlock__card">
                    <div className="offersBlock__card__header">
                        <img src={Product1} className="offersBlock__card__productImage" />
                        <span className="offersBlock__card__favorites">
                            <FontAwesomeIcon icon={faHeart} className="offersBlock__favorites__icon" />
                        </span>
                    </div>
                    <div className="offersBlock__card__body">
                        <h4 className="offersBlock__card__discount">R$100</h4>

                        <div className="offersBlock__card__priceAndPercent">
                            <h3 className="offersBlock__card__price">R$96</h3>
                            <h4 className="offersBlock__card__discountPercent">9% off</h4>
                        </div>
                        <h5 className="offersBlock__card__installmentAmount">12x R$10</h5>
                        <p className="offersBlock__card__productName">
                            Samsung Galaxy A20s Dual SIM 32 GB Azul 3 GB RAM
                        </p>
                    </div>
                </Link>

                <div className="offersBlock__card">
                    <div className="offersBlock__card__header">
                        <img src={Product2} className="offersBlock__card__productImage" />
                        <span className="offersBlock__card__favorites">
                            <FontAwesomeIcon icon={faHeart} className="offersBlock__favorites__icon" />
                        </span>
                    </div>
                    <div className="offersBlock__card__body">
                        <h4 className="offersBlock__card__discount">R$100</h4>

                        <div className="offersBlock__card__priceAndPercent">
                            <h3 className="offersBlock__card__price">R$96</h3>
                            <h4 className="offersBlock__card__discountPercent">9% off</h4>
                        </div>
                        <h5 className="offersBlock__card__installmentAmount">12x R$10</h5>
                        <p className="offersBlock__card__productName">
                            Samsung Galaxy A20s Dual SIM 32 GB Azul 3 GB RAM
                        </p>
                    </div>
                </div>

                <div className="offersBlock__card">
                    <div className="offersBlock__card__header">
                        <img src={Product3} className="offersBlock__card__productImage" />
                        <span className="offersBlock__card__favorites">
                            <FontAwesomeIcon icon={faHeart} className="offersBlock__favorites__icon" />
                        </span>
                    </div>
                    <div className="offersBlock__card__body">
                        <h4 className="offersBlock__card__discount">R$100</h4>

                        <div className="offersBlock__card__priceAndPercent">
                            <h3 className="offersBlock__card__price">R$96</h3>
                            <h4 className="offersBlock__card__discountPercent">9% off</h4>
                        </div>
                        <h5 className="offersBlock__card__installmentAmount">12x R$10</h5>
                        <p className="offersBlock__card__productName">
                            Samsung Galaxy A20s Dual SIM 32 GB Azul 3 GB RAM
                        </p>
                    </div>
                </div>

                <div className="offersBlock__card">
                    <div className="offersBlock__card__header">
                        <img src={Product4} className="offersBlock__card__productImage" />
                        <span className="offersBlock__card__favorites">
                            <FontAwesomeIcon icon={faHeart} className="offersBlock__favorites__icon" />
                        </span>
                    </div>
                    <div className="offersBlock__card__body">
                        <h4 className="offersBlock__card__discount">R$100</h4>

                        <div className="offersBlock__card__priceAndPercent">
                            <h3 className="offersBlock__card__price">R$96</h3>
                            <h4 className="offersBlock__card__discountPercent">9% off</h4>
                        </div>
                        <h5 className="offersBlock__card__installmentAmount">12x R$10</h5>
                        <p className="offersBlock__card__productName">
                            Samsung Galaxy A20s Dual SIM 32 GB Azul 3 GB RAM
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}
