import React from 'react'
import './index.css';

export default function index() {
    return (
        <footer>
        <a href="#" className="button__moreInformation">Mais informações</a>
        <div className="footer--hide">
            <ul className="companyCategory">
                <li className="companyCategory__item__title">Sobre o</li>
                <li className="companyCategory__item"><a href="#" className="companyCategory__link">mercado Livre</a></li>
                <li className="companyCategory__item"><a href="#" className="companyCategory__link">Investor</a></li>
                <li className="companyCategory__item"><a href="#" className="companyCategory__link">revelations</a></li>
            </ul>

            <ul className="companyCategory">
                <li className="companyCategory__item__title">Outros sites</li>
                <li className="companyCategory__item"><a href="#" className="companyCategory__link">Desenvolvedores</a></li>
                <li className="companyCategory__item"><a href="#" className="companyCategory__link">Investor</a></li>
                <li className="companyCategory__item"><a href="#" className="companyCategory__link">revelations</a></li>
                <li className="companyCategory__item"><a href="#" className="companyCategory__link">revelations</a></li>
                <li className="companyCategory__item"><a href="#" className="companyCategory__link">revelations</a></li>
            </ul>

            <ul className="companyCategory">
                <li className="companyCategory__item__title">contato</li>
                <li className="companyCategory__item"><a href="#" className="companyCategory__link">Comprar</a></li>
                <li className="companyCategory__item"><a href="#" className="companyCategory__link">vender</a></li>
                <li className="companyCategory__item"><a href="#" className="companyCategory__link">solucao de probemas</a></li>
                <li className="companyCategory__item"><a href="#" className="companyCategory__link">seguranca</a></li>
            </ul>

            <ul className="companyCategory">
                <li className="companyCategory__item__title">redes sociais</li>
                <li className="companyCategory__item"><a href="#" className="companyCategory__link">facebook</a></li>
                <li className="companyCategory__item"><a href="#" className="companyCategory__link">twitter</a></li>
                <li className="companyCategory__item"><a href="#" className="companyCategory__link">instagram</a></li>
                <li className="companyCategory__item"><a href="#" className="companyCategory__link">youtube</a></li>
            </ul>
        </div>
        
        <div className="footer__bottom">
            <div className="companyDescription">
                <ul className="companyDataList">
                    <li className="companyDataListitem">Trabalhe conosco</li>
                    <li className="companyDataListitem">Termos e condições</li>
                    <li className="companyDataListitem">Políticas de privacidade</li>
                    <li className="companyDataListitem">Contato</li>
                </ul>
                <h4 className="footer__copyright">Copyright © 1999-2020 Ebazar.com.br LTDA.</h4>
                <h4 className="footer__companyData">CNPJ n.º 03.007.331/0001-41 / Av. das Nações Unidas, nº 3.003, Bonfim, Osasco/SP - CEP 06233-903 - empresa do grupo Mercado Livre.</h4>
            </div>
            <div className="footer__downloadApp">
                <a href="#" className="footer__downloadApp__button">Baixe gratis o app Mercado Livre</a>
            </div>
        </div>
    </footer>
    )
}
