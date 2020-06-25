import React from 'react'
import './index.css'
export default function index() {
    return (
        <React.Fragment>
            <ul className="navMenu navMenuRow">
                <div className="inputCep">
                    <a href="#">Informe seu cep</a>
                </div>

                <ul className="navMenu__category">
                    <li className="navMenu__item"><a href="#" className="navMenu__link">Categorias</a></li>
                    <li className="navMenu__item"><a href="#" className="navMenu__link">ofertas</a></li>
                    <li className="navMenu__item"><a href="#" className="navMenu__link">Historico</a></li>
                    <li className="navMenu__item"><a href="#" className="navMenu__link">Supermercado</a></li>
                    <li className="navMenu__item"><a href="#" className="navMenu__link">Lojas Oficiais</a></li>
                    <li className="navMenu__item"><a href="#" className="navMenu__link">Vender</a></li>
                </ul>

                <ul className="navMenu__account">
                    <li className="navMenu__item"><a href="#" className="navMenu__link">Crie sua conta</a></li>
                    <li className="navMenu__item"><a href="#" className="navMenu__link">Entrar</a></li>
                    <li className="navMenu__item"><a href="#" className="navMenu__link">Compras</a></li>
                    <li className="navMenu__item"><a href="#" className="navMenu__link">CArrinho(icon)</a></li>
                </ul>
            </ul>
        </React.Fragment>
    )
}
