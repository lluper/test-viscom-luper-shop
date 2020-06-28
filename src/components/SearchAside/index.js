import React from 'react'

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './index.css'
export default function index() {

    const options = [
        { value: 'Mais relevante', label: 'Mais relevante' },
        { value: 'Menor preco', label: 'Menor preco' },
        { value: 'maior preco', label: 'maior preco' },
    ];
    const defaultOption = options[0];
    return (
        <aside className="searchAsideFilter">
            <div className="searchAsideFilter__breadcrumb">
            Celulares e Telefones &gt; Celulares e Smartphones
            </div>

            <div className="searchAsideFilter__block searchAsideFilter__resultNameAndTotal">
                <h3 className="searchAsideFilter__resultName">Smartphone</h3>
                <h5 className="searchAsideFilter__resultTotal">72.245 resultados</h5>
            </div>

            <div className="searchAsideFilter__block searchAsideFilter__orderResult">
                <h5 className="searchAsideFilter__subTitle">Organizar anúncios</h5>

                <Dropdown
                    className="orderResult__select"
                    options={options}
                    value={defaultOption} />

            </div>

            <div className="searchAsideFilter__block searchAsideFilter__stores">
                <h5 className="searchAsideFilter__subTitle">Lojas oficiais</h5>
                <a href="#" className="searchAsideFilter__item">
                    Somente lojas oficiais
                    <span className="searchAsideFilter__itemValue">(1.941)</span>
                </a>
            </div>

            <div className="searchAsideFilter__block searchAsideFilter__brand">
                <h5 className="searchAsideFilter__subTitle">Marca</h5>
                <a href="#" className="searchAsideFilter__item">
                    Apple
                    <span className="searchAsideFilter__itemValue"> (22.520)</span>
                </a>

                <a href="#" className="searchAsideFilter__item">
                    Samsung
                    <span className="searchAsideFilter__itemValue">(13.456)</span>
                </a>

                <a href="#" className="searchAsideFilter__item">
                    Motorola
                    <span className="searchAsideFilter__itemValue">(8.024)</span>
                </a>

                <a href="#" className="searchAsideFilter__item">
                    Xiaomi
                    <span className="searchAsideFilter__itemValue">(7.024)</span>
                </a>

                <a href="#" className="searchAsideFilter__item">
                    LG
                    <span className="searchAsideFilter__itemValue">(3.752)</span>
                </a>
            </div>


            <div className="searchAsideFilter__block searchAsideFilter__model">
                <h5 className="searchAsideFilter__subTitle">Modelo</h5>

                <a href="#" className="searchAsideFilter__item">
                    Note 8
                    <span className="searchAsideFilter__itemValue">(2.800)</span>
                </a>

                <a href="#" className="searchAsideFilter__item">
                    iPhone 6s
                    <span className="searchAsideFilter__itemValue">(2.184)</span>
                </a>

                <a href="#" className="searchAsideFilter__item">
                    iPhone 6
                    <span className="searchAsideFilter__itemValue">(2.120)</span>
                </a>

                <a href="#" className="searchAsideFilter__item">
                    iPhone 5s
                    <span className="searchAsideFilter__itemValue">(1.696)</span>
                </a>

                <a href="#" className="searchAsideFilter__item">
                    iPhone 8
                    <span className="searchAsideFilter__itemValue">(1.392)</span>
                </a>
            </div>

            <div className="searchAsideFilter__block searchAsideFilter__price">
                <h5 className="searchAsideFilter__subTitle">Preço</h5>
                <a href="#" className="searchAsideFilter__item">
                    <span className="searchAsideFilter__itemValue"></span>
                </a>

                <form action="" className="searchAsideFilter__priceForm">
                    <input type="number" min="0" className="searchAsideFilter__priceInput" placeholder="minimo" />
                    -
                    <input type="number" min="0" className="searchAsideFilter__priceInput" placeholder="maximo" />
                    <button type="submit" className="searchAsideFilter__priceSubmit" >&gt;</button>
                </form>
            </div>

        </aside>
    )
}
