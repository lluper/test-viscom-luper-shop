import React from 'react'
import './index.css'


import { Textbox, Radiobox, Checkbox, Select, Textarea } from 'react-inputs-validation';

import InputMask from "react-input-mask";
export default function index(prop) {
    function nextPage(event){
        event.preventDefault() 
        prop.nextPage();
    }
    return (
        <div className="buyConfirmBlock__left">
            <h2 className="buyConfirmBlock__title"></h2>

            <div className="buyConfirmBlock__address__block">
                <h2 className="buyConfirmBlock__title">dados pessoais</h2>

                <form className="buyConfirmBlock__address__form">
                    <div className="form__group">
                        <label htmlFor="Name" className="label__input">Nome</label>
                        <Textbox
                            attributesInput={{ // Optional.
                                id: 'Name',
                                name: 'Name',
                                type: 'text',
                                placeholder: 'Nome ',
                            }}
                            onBlur={(e) => { console.log(e) }}
                            validationOption={{
                                name: 'Name',
                                required: false,
                                msgOnError: '',
                                customFunc: rest => {
                                    console.log(rest.trim().length)

                                    if (rest.trim().length === 0) {
                                        return 'Campo Obrigatorio'
                                    }

                                    if (rest.trim().length > 50) {

                                        return 'Ultrapassou o limite de 50 caracteres'
                                    }
                                    else {
                                        return true
                                    }
                                }
                            }}
                        />
                    </div>

                    <div className="form__group">
                        <label htmlFor="Phone" className="label__input">Telefone de contato</label>
                        <InputMask mask="(99) 9999-9999" placeholder="Telefone de contato" className="form__group__card__input" />
                       
                    </div>

                    <div className="form__group">
                        <label htmlFor="Email" className="label__input">E-mail</label>
                        <Textbox
                            attributesInput={{ 
                                id: 'Email',
                                name: 'Email',
                                type: 'text',
                                placeholder: 'E-mail',
                            }}
                            onBlur={(e) => { console.log(e) }}
                            validationOption={{
                                name: 'Email',
                                required: false,
                                msgOnError: '',
                                reg: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi,
                                regMsg: ' E-mail Invalido',
                                customFunc: rest => {
                                    console.log(rest.trim().length)

                                    if (rest.trim().length === 0) {
                                        return 'Campo Obrigatorio'
                                    }

                                    if (rest.trim().length > 100) {

                                        return 'E-mail ultrapassou o limite de 100 caracteres'
                                    }
                                    else {
                                        return true
                                    }
                                }
                            }}
                        />
                    </div>

                    <div className="buyConfirmBlock__address__form__buttons">
                        <button type="submit" onClick={nextPage} className="buyConfirmBlock__address__submit">continuar</button>
                    </div>
                </form>
            </div>
        </div>

    )
}
