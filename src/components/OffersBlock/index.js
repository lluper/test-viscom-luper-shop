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
                        <img src={Product1} />
                        <span className="offersBlock__card__favorites">
                            <FontAwesomeIcon icon={faHeart} className="offersBlock__favorites__icon" />
                        </span>
                    </div>
                    <div className="offersBlock__card__body">
                        <h4 className="offersBlock__card__discount">R$100</h4>

                        <div className="offersBlock__card__priceAndPercent">
                            <h3 className="offersBlock__card__price">R$1329</h3>
                            <h4 className="offersBlock__card__discountPercent">9% off</h4>
                        </div>
                        <h5 className="offersBlock__card__installmentAmount">12x R$130</h5>
                        <p className="offersBlock__card__productName">
                        Smartphone Samsung Galaxy A30s SM-A307G TV Digital 64GB
                        </p>
                    </div>
                </Link>

                <Link to="/buy" className="offersBlock__card">
                    <div className="offersBlock__card__header">
                        <img src={Product1} />
                        <span className="offersBlock__card__favorites">
                            <FontAwesomeIcon icon={faHeart} className="offersBlock__favorites__icon" />
                        </span>
                    </div>
                    <div className="offersBlock__card__body">
                        <h4 className="offersBlock__card__discount">R$100</h4>

                        <div className="offersBlock__card__priceAndPercent">
                            <h3 className="offersBlock__card__price">R$1329</h3>
                            <h4 className="offersBlock__card__discountPercent">9% off</h4>
                        </div>
                        <h5 className="offersBlock__card__installmentAmount">12x R$130</h5>
                        <p className="offersBlock__card__productName">
                        Smartphone Samsung Galaxy A30s SM-A307G TV Digital 64GB
                        </p>
                    </div>
                </Link>

                <Link to="/buy" className="offersBlock__card">
                    <div className="offersBlock__card__header">
                        <img src={Product1} />
                        <span className="offersBlock__card__favorites">
                            <FontAwesomeIcon icon={faHeart} className="offersBlock__favorites__icon" />
                        </span>
                    </div>
                    <div className="offersBlock__card__body">
                        <h4 className="offersBlock__card__discount">R$100</h4>

                        <div className="offersBlock__card__priceAndPercent">
                            <h3 className="offersBlock__card__price">R$1329</h3>
                            <h4 className="offersBlock__card__discountPercent">9% off</h4>
                        </div>
                        <h5 className="offersBlock__card__installmentAmount">12x R$130</h5>
                        <p className="offersBlock__card__productName">
                        Smartphone Samsung Galaxy A30s SM-A307G TV Digital 64GB
                        </p>
                    </div>
                </Link>

                <Link to="/buy" className="offersBlock__card">
                    <div className="offersBlock__card__header">
                        <img src={Product1} />
                        <span className="offersBlock__card__favorites">
                            <FontAwesomeIcon icon={faHeart} className="offersBlock__favorites__icon" />
                        </span>
                    </div>
                    <div className="offersBlock__card__body">
                        <h4 className="offersBlock__card__discount">R$100</h4>

                        <div className="offersBlock__card__priceAndPercent">
                            <h3 className="offersBlock__card__price">R$ 1329,00</h3>
                            <h4 className="offersBlock__card__discountPercent">9% off</h4>
                        </div>
                        <h5 className="offersBlock__card__installmentAmount">12x R$130</h5>
                        <p className="offersBlock__card__productName">
                        Smartphone Samsung Galaxy A30s SM-A307G TV Digital 64GB
                        </p>
                    </div>
                </Link>

            </div>
        </section>
    )
}
