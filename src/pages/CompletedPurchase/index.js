import React from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom' 

export default function index() {
    return (
        <main className="completedPurchaseBlock">
            <div className="completedPurchaseBlock__box">
                <div className="completedPurchaseBlock__box__icon">
                    <FontAwesomeIcon icon={faCheckCircle} />
                </div>

                <div className="completedPurchaseBlock__box__text">
                    <h1>Compra efeutada com sucesso</h1>
                    <h3>obrigado por comprar conosco</h3>
                </div>

                <div className="completedPurchaseBlock__box__buttons">
                    <Link to="/">Voltar para as compras</Link>
                </div>
            </div>
        </main>
    )
}
