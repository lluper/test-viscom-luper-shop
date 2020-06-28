import React, { useState } from 'react'
import './index.css'

import NavBar from '../../components/NavBar'
import NavBarMobile from '../../components/NavBarMobile'
import Footer from '../../components/Footer'
import 'react-inputs-validation/lib/react-inputs-validation.min.css';
import Product from '../../images/products/product-1.jpg'
import 'react-credit-cards/es/styles-compiled.css'
import 'react-dropdown/style.css';
import { Animated } from "react-animated-css";
import 'animate.css';
import Adress from './address/'
import PaymentMethod from './paymentMethod/'
import PersonData from './pessonData/'
import { Redirect } from 'react-router'

export default function index() {
    const [page, setPage] = useState(0)

    function NextPage() {
        setPage(page + 1)
        console.log(page)
    }
    function PrevPage() {
        setPage(page - 1)
        console.log(page)
    }


    return (
        <React.Fragment>
            <NavBar />
            <NavBarMobile />

            <main className="buyConfirmBlock">
                {page === 0 && <Animated className="buyConfirmBlock__animated" animationIn="fadeIn" animationOut="fadeOutRight" animationInDuration={500} animationOutDuration={500}>
                    <PersonData nextPage={NextPage} />
                </Animated>}

                {page === 1 && <Animated  className="buyConfirmBlock__animated" animationIn="fadeInLeft" animationOut="fadeOutRight" animationInDuration={500} animationOutDuration={500} >
                    <Adress nextPage={NextPage} prevPage={PrevPage} />
                </Animated>}

                {page === 2 && <Animated  className="buyConfirmBlock__animated" animationIn="fadeInLeft" animationOut="fadeOutRight" animationInDuration={500} animationOutDuration={500} >
                    <PaymentMethod nextPage={NextPage} prevPage={PrevPage} />
                </Animated>}

                {page === 3 && <Redirect to="/completed-purchase" />}

                <div className="buyConfirmBlock__right">
                    <div className="buyConfirmBlock__image__product">
                        <img src={Product} className="buyConfirmBlock__image" />
                    </div>
                    <div className="buyConfirmBlock__product__header">
                        <h4 className="buyConfirmBlock__product__title">
                            Microsoft Xbox 360 Slim 4gb Kinect Matte Black
                        </h4>
                        <h5 className="buyConfirmBlock__product__quantity">
                            Quantidade: 1
                        </h5>
                    </div>
                    <div className="buyConfirmBlock__product">
                        <h4 className="buyConfirmBlock__text">produto</h4>
                        <h3 className="buyConfirmBlock__value">R$1.524 83</h3>
                    </div>
                    <div className="buyConfirmBlock__product">
                        <h4 className="buyConfirmBlock__text__amountPaid">valor total</h4>
                        <h3 className="buyConfirmBlock__value__amountPaid">R$1.524 83</h3>
                    </div>
                </div>
            </main>

            <Footer />

        </React.Fragment>
    )

}
