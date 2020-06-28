import React from 'react';
import './index.css';
import BackgroundStore from '../../images/stores/background-store.jpg';
import LogoStore from '../../images/stores/logo-store.jpg';
import StoreProduct1 from '../../images/stores/store-product-1.jpg';
import StoreProduct2 from '../../images/stores/store-product-2.jpg';
import StoreProduct3 from '../../images/stores/store-product-3.jpg';

export default function index() {
    return (
        <section className="bestStoresBlock">
        <div className="section__header">
            <h3 className="section__header__title">As melhores Lojas</h3>
            <a href="#" className="section__header__viewAll">ver todas</a>
        </div>

        <div className="bestStoresBlock__body">
            <div className="bestStoresBlock__cardStores">
                <div className="bestStoresBlock__cardStores__header">
                    <img src={BackgroundStore} className="bestStoresBlock__cardStores__background" />
                    <img src={LogoStore} className="bestStoresBlock__cardStores__logo" />
                    <h2 className="bestStoresBlock__cardStores__title">polishoṕ</h2>
                </div>
                <div className="bestStoresBlock__cardStores__body">
                    <div className="bestStoresBlock__cardStores__products">
                        <img src={StoreProduct1} className="bestStoresBlock__cardStores__productsImage" />
                        <img src={StoreProduct2} className="bestStoresBlock__cardStores__productsImage" />
                        <img src={StoreProduct3} className="bestStoresBlock__cardStores__productsImage" />
                    </div>
                    <a href="#" className="bestStoresBlock__cardStores__link">ver loja</a>
                </div>
            </div>

            <div className="bestStoresBlock__cardStores">
                <div className="bestStoresBlock__cardStores__header">
                    <img src={BackgroundStore} className="bestStoresBlock__cardStores__background" />
                    <img src={LogoStore} className="bestStoresBlock__cardStores__logo" />
                    <h2 className="bestStoresBlock__cardStores__title">polishoṕ</h2>
                </div>
                <div className="bestStoresBlock__cardStores__body">
                    <div className="bestStoresBlock__cardStores__products">
                        <img src={StoreProduct1} className="bestStoresBlock__cardStores__productsImage" />
                        <img src={StoreProduct2} className="bestStoresBlock__cardStores__productsImage" />
                        <img src={StoreProduct3} className="bestStoresBlock__cardStores__productsImage" />
                    </div>
                    <a href="#" className="bestStoresBlock__cardStores__link">ver loja</a>
                </div>
            </div>

            <div className="bestStoresBlock__cardStores">
                <div className="bestStoresBlock__cardStores__header">
                    <img src={BackgroundStore} className="bestStoresBlock__cardStores__background" />
                    <img src={LogoStore} className="bestStoresBlock__cardStores__logo" />
                    <h2 className="bestStoresBlock__cardStores__title"></h2>
                </div>
                <div className="bestStoresBlock__cardStores__body">
                    <div className="bestStoresBlock__cardStores__products">
                        <img src={StoreProduct1} className="bestStoresBlock__cardStores__productsImage" />
                        <img src={StoreProduct2} className="bestStoresBlock__cardStores__productsImage" />
                        <img src={StoreProduct3} className="bestStoresBlock__cardStores__productsImage" />
                    </div>
                    <a href="#" className="bestStoresBlock__cardStores__link">ver loja</a>
                </div>
            </div>

            <div className="bestStoresBlock__cardStores">
                <div className="bestStoresBlock__cardStores__header">
                    <img src={BackgroundStore} className="bestStoresBlock__cardStores__background" />
                    <img src={LogoStore} className="bestStoresBlock__cardStores__logo" />
                    <h2 className="bestStoresBlock__cardStores__title">polishoṕ</h2>
                </div>
                <div className="bestStoresBlock__cardStores__body">
                    <div className="bestStoresBlock__cardStores__products">
                        <img src={StoreProduct1} className="bestStoresBlock__cardStores__productsImage" />
                        <img src={StoreProduct2} className="bestStoresBlock__cardStores__productsImage" />
                        <img src={StoreProduct3} className="bestStoresBlock__cardStores__productsImage" />
                    </div>
                    <a href="#" className="bestStoresBlock__cardStores__link">ver loja</a>
                </div>
            </div>
        </div>
    </section>
    )
}
