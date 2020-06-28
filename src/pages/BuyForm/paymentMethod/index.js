import React, { useState }from 'react'
import './index.css'


import Cards from 'react-credit-cards';
import Dropdown from 'react-dropdown';

import InputMask from "react-input-mask";

export default function index(prop) {
    function nextPage(event){
        event.preventDefault() 
        prop.nextPage();
    }
    function prevPage(event){
        event.preventDefault() 
        prop.prevPage();
    }
    const options = [
        { value: 0, label: 'Boleto' },
        { value: 1, label: 'Cartão' },
    ];

    const [optionSelect, setOptionSelect] = useState(0)
    const defaultOption = options[0];

    const [cardCvc, setCardCvc] = useState("")
    const [cardExpiry, setCardExpiry] = useState("")
    const [cardFocus, setCardFocus] = useState("")
    const [cardName, setCardName] = useState("")
    const [cardNumber, setCardNumber] = useState("")
    return (
        <div className="buyConfirmBlock__left">
            <h2 className="buyConfirmBlock__title"></h2>

            <div className="buyConfirmBlock__address__block">
                <h2 className="buyConfirmBlock__title">dados da compra</h2>

                <form className="buyConfirmBlock__address__form">
                    <div className="form__group">
                        <label htmlFor="Name" className="label__input">meio de pagamento</label>
                        <Dropdown options={options} value={options[optionSelect]} onChange={(e)=> {setOptionSelect(e.value)}} placeholder="Select an option" />

                    </div>

                    {optionSelect === 0 && <div className="form__group__card">
                        <label htmlFor="Phone" className="label__input">Dados do boleto</label>
                        <div className="form__group__card__block">

                            <div className="form__card__input__block">
                                <div className="form__group__input__card">
                                    <label className="form__group__input__card__label">Nome </label>
                                    <input type="text" name="name" onChange={(e)=>setCardName(e.target.value)} onFocus={(e)=> setCardFocus(e.target.name)} className="form__group__card__input" />
                                </div>
                                <div className="form__group__input__card">
                                    <label className="form__group__input__card__label">cpf</label>
                                    <InputMask mask="9999 9999 9999 9999" name="number" onChange={(e)=>setCardNumber(e.target.value)} onFocus={(e)=> setCardFocus(e.target.name)} className="form__group__card__input" />
                                </div>

                            </div>
                        </div>
                    </div>}

                    {optionSelect === 1 && <div className="form__group__card">
                        <label htmlFor="Phone" className="label__input">Dados do cartão</label>
                        <div className="form__group__card__block">

                            <div className="form__card__input__block">
                                <div className="form__group__input__card">
                                    <label className="form__group__input__card__label">Nome no cartão</label>
                                    <input type="text" name="name" onChange={(e)=>setCardName(e.target.value)} onFocus={(e)=> setCardFocus(e.target.name)} className="form__group__card__input" />
                                </div>
                                <div className="form__group__input__card">
                                    <label className="form__group__input__card__label">Numero do cartão</label>
                                    <InputMask mask="9999 9999 9999 9999" name="number" onChange={(e)=>setCardNumber(e.target.value)} onFocus={(e)=> setCardFocus(e.target.name)} className="form__group__card__input" />
                                </div>

                                <div className="form__group__input__card">
                                    <label className="form__group__input__card__label">data de Validade</label>
                                    <InputMask mask="99/99" name="expiry" onChange={(e)=>setCardExpiry(e.target.value)}  onFocus={(e)=> setCardFocus(e.target.name)} className="form__group__card__input" />
                                </div>

                                <div className="form__group__input__card">
                                    <label className="form__group__input__card__label">cvc</label>
                                    <InputMask mask="999" name="cvc" onChange={(e)=>setCardCvc(e.target.value)} onFocus={(e)=> setCardFocus(e.target.name)} className="form__group__card__input" />
                                </div>

                            </div>
                            <Cards
                                className="card__module"
                                cvc={cardCvc}
                                expiry={cardExpiry}
                                focused={cardFocus}
                                name={cardName}
                                number={cardNumber}
                            />
                        </div>
                    </div>}
                    



                    <div className="buyConfirmBlock__address__form__buttons">
                       <button type="submit" onClick={prevPage}  className="buyConfirmBlock__address__submit">Voltar</button>
                       <button type="submit" onClick={nextPage}  className="buyConfirmBlock__address__submit">concluir</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
