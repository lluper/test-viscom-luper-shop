import React from 'react'
import './index.css';

import Product1 from '../../images/products/product-1.jpg';

export default function index() {
    return (
        <section className="historyBlock">
        <div className="section__header">
            <h3 className="section__header__title">historico</h3>
            <a href="#" className="section__header__viewAll">ver todo o historico</a>
        </div>

        <div className="historyBlock__body">
            <div className="historyBlock__card">
                <div className="historyBlock__card__image">
                    <img src={Product1} className="historyBlock__card__image__product" />
                    <span className="historyBlock__card__buttonDelete">x</span>
                </div>
                <div className="historyBlock__card__titleBlock">
                    <h3 className="historyBlock__card__title">Samsung Galaxy A20s Dual SIM 32 GB Azul 3 GB RAM</h3>
                </div>
            </div>

            <div className="historyBlock__card">
                <div className="historyBlock__card__image">
                    <img src={Product1} className="historyBlock__card__image__product" />
                    <span className="historyBlock__card__buttonDelete">x</span>
                </div>
                <div className="historyBlock__card__titleBlock">
                    <h3 className="historyBlock__card__title">Samsung Galaxy A20s Dual SIM 32 GB Azul 3 GB RAM</h3>
                </div>
            </div>

            <div className="historyBlock__card">
                <div className="historyBlock__card__image">
                    <img src={Product1} className="historyBlock__card__image__product" />
                    <span className="historyBlock__card__buttonDelete">x</span>
                </div>
                <div className="historyBlock__card__titleBlock">
                    <h3 className="historyBlock__card__title">Samsung Galaxy A20s Dual SIM 32 GB Azul 3 GB RAM</h3>
                </div>
            </div>
        </div>
    </section>
    )
}
