import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-regular-svg-icons'



export default function index() {
    return (
        <div className="paymentMethodsHeader">
            <div className="paymentMethodsHeader__col col-1">
                <span className="paymentMethodsHeader__textPrimary">Pagamento rápido e seguro</span>
                <span className="paymentMethodsHeader__SubText">com Mercado Pago</span>
            </div>
            <div className="paymentMethodsHeader__col">
                <FontAwesomeIcon icon={faCreditCard} className="paymentMethodsHeader__icon" />
                <div className="paymentMethodsHeader__options">
                    <span className="paymentMethodsHeader__textPrimary">Até 12 vezes sem juros</span>
                    <span className="paymentMethodsHeader__link">ver mais</span>
                </div>
            </div>
            <div className="paymentMethodsHeader__col">
                <FontAwesomeIcon icon={faHandHoldingUsd} className="paymentMethodsHeader__icon" />
                <div className="paymentMethodsHeader__options">
                    <span className="paymentMethodsHeader__textPrimary">À vista no boleto bancário</span>
                    <span className="paymentMethodsHeader__link">ver mais</span>
                </div>
            </div>
            <div className="paymentMethodsHeader__col">
                <FontAwesomeIcon icon={faPlusCircle} className="paymentMethodsHeader__icon" />
                <div className="paymentMethodsHeader__options">
                    <span className="paymentMethodsHeader__textPrimary">Mais formas de pagamento</span>
                    <span className="paymentMethodsHeader__link">ver mais</span>
                </div>
            </div>
        </div>

    )
}
