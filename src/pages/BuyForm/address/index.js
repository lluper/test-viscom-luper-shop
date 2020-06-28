import React from 'react'
import './index.css'


import { Textbox, Radiobox, Checkbox, Select, Textarea } from 'react-inputs-validation';

export default function index(prop) {
    function nextPage(event){
        event.preventDefault() 
        prop.nextPage();
    }
    function prevPage(event){
        event.preventDefault() 
        prop.prevPage();
    }
    return (
        <div className="buyConfirmBlock__left">
            <h2 className="buyConfirmBlock__title"></h2>

            <div className="buyConfirmBlock__address__block">
                <h2 className="buyConfirmBlock__title">endereço</h2>

                <form className="buyConfirmBlock__address__form">
                    <div className="form__group">
                        <label htmlFor="Street" className="label__input">Rua</label>
                        <Textbox
                            attributesInput={{ // Optional.
                                id: 'Street',
                                name: 'Street',
                                type: 'text',
                                placeholder: 'Nome da rua',
                            }}
                            onBlur={(e) => { console.log(e) }}
                            validationOption={{
                                name: 'Street',
                                required: false,
                                msgOnError: '',
                                customFunc: rest => {
                                    console.log(rest.trim().length)

                                    if (rest.trim().length === 0) {
                                        return 'Campo Obrigatorio'
                                    }

                                    if (rest.trim().length > 50) {

                                        return 'endereco muito grande'
                                    }
                                    else {
                                        return true
                                    }
                                }
                            }}
                        />
                    </div>

                    <div className="form__group">
                        <label htmlFor="Number" className="label__input">Numero</label>
                        <Textbox
                            attributesInput={{ // Optional.
                                id: 'Number',
                                name: 'Number',
                                type: 'Number',
                                placeholder: 'Numero',
                            }}
                            onBlur={(e) => { console.log(e) }}
                            validationOption={{
                                name: 'Number',
                                required: false,
                                msgOnError: '',
                                customFunc: rest => {
                                    console.log(rest.trim().length)

                                    if (rest.trim().length === 0) {
                                        return 'Campo Obrigatorio'
                                    }

                                    else {
                                        return true
                                    }
                                }
                            }}
                        />
                    </div>

                    <div className="form__group">
                        <label htmlFor="Complement" className="label__input">Complemento</label>
                        <Textbox
                            attributesInput={{ // Optional.
                                id: 'Complement',
                                name: 'Complement',
                                type: 'text',
                                placeholder: 'Complemento',
                            }}
                            onBlur={(e) => { console.log(e) }}
                            validationOption={{
                                name: 'Complement',
                                required: false,
                                msgOnError: '',
                                customFunc: rest => {
                                    console.log(rest.trim().length)

                                    if (rest.trim().length === 0) {
                                        return 'Campo Obrigatorio'
                                    }

                                   
                                    else {
                                        return true
                                    }
                                }
                            }}
                        />
                    </div>

                    <div className="form__group">
                        <label htmlFor="Neighborhood" className="label__input">Bairro</label>
                        <Textbox
                            attributesInput={{ // Optional.
                                id: 'Neighborhood',
                                name: 'Neighborhood',
                                type: 'text',
                                placeholder: 'Bairro',
                            }}
                            onBlur={(e) => { console.log(e) }}
                            validationOption={{
                                name: 'Neighborhood',
                                required: false,
                                msgOnError: '',
                                customFunc: rest => {
                                    console.log(rest.trim().length)

                                    if (rest.trim().length === 0) {
                                        return 'Campo Obrigatorio'
                                    }

                                    else {
                                        return true
                                    }
                                }
                            }}
                        />
                    </div>

                    <div className="form__group">
                        <label htmlFor="Cep" className="label__input">cep</label>
                        <Textbox
                            attributesInput={{ 
                                id: 'Cep',
                                name: 'Cep',
                                type: 'text',
                                placeholder: 'Nome da rua',
                            }}
                            onBlur={(e) => { console.log(e) }}
                            validationOption={{
                                name: 'Cep',
                                required: false,
                                msgOnError: '',
                                customFunc: rest => {
                                    console.log(rest.trim().length)

                                    if (rest.trim().length === 0) {
                                        return 'Campo Obrigatorio'
                                    }

                                    else {
                                        return true
                                    }
                                }
                            }}
                        />
                    </div>

                    <div className="buyConfirmBlock__address__form__buttons">
                        <button type="submit" onClick={prevPage}  className="buyConfirmBlock__address__submit">voltar</button>
                        <button type="submit" onClick={nextPage}  className="buyConfirmBlock__address__submit">continuar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
