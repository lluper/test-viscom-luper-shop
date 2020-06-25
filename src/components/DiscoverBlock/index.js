import React from 'react'
import './index.css';


import Discover1 from '../../images/discover/discover-1.jpg';
import Discover2 from '../../images/discover/discover-2.jpg';

export default function index() {
    return (
        <section className="discoverBlock">
            <div className="section__header">
                <h3 className="section__header__title">descubra</h3>
            </div>

            <div className="discoverBlock__body">
                <div className="discoverBlock__card">
                    <div className="discoverBlock__card__texts">
                        <h4 className="discoverBlock__card__secondTitle">mercado credito</h4>
                        <h2 className="discoverBlock__card__title">compre parcelado no boleto</h2>
                        <a href="#" className="discoverBlock__card__button">ver mais</a>
                    </div>
                    <img src={Discover1} className="discoverBlock__card__image" />
                </div>

                <div className="discoverBlock__card">
                    <div className="discoverBlock__card__texts">
                        <h4 className="discoverBlock__card__secondTitle">mercado credito</h4>
                        <h2 className="discoverBlock__card__title">compre parcelado no boleto</h2>
                        <a href="#" className="discoverBlock__card__button">ver mais</a>
                    </div>
                    <img src={Discover2} className="discoverBlock__card__image" />
                </div>
            </div>
        </section>
    )
}
