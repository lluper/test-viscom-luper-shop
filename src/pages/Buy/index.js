import React from 'react'
import './index.css'
import NavBar from '../../components/NavBar';
import NavBarMobile from '../../components/NavBarMobile';
import Footer from '../../components/Footer'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import StarRatingComponent from 'react-star-rating-component';

import Mastercard from '../../images/cards/mastercard.jpg';
import Visa from '../../images/cards/visa.jpg'
import Boleto from '../../images/cards/boleto.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-regular-svg-icons'
import { faShippingFast } from '@fortawesome/free-solid-svg-icons'

import {Link} from 'react-router-dom'

export default function index() {
    const rating = 4;
    const options = [
        '1', '2', '3', '4', '5'
    ];
    const defaultOption = options[0];

    const images = [
        {
            original: 'https://a-static.mlcdn.com.br/618x463/smartphone-samsung-galaxy-s10-128gb-azul-4g-8gb-ram-61-cam-tripla-cam-selfie-10mp/magazineluiza/155551000/81fbf6699b9b3c9ef11231360c6d17a8.jpg',
            thumbnail: 'https://a-static.mlcdn.com.br/618x463/smartphone-samsung-galaxy-s10-128gb-azul-4g-8gb-ram-61-cam-tripla-cam-selfie-10mp/magazineluiza/155551000/81fbf6699b9b3c9ef11231360c6d17a8.jpg',
        },
        {
            original: 'https://www.imgeletro.com.br/900x900/produto/1305416_14098304_20191122164824.jpg',
            thumbnail: 'https://www.imgeletro.com.br/900x900/produto/1305416_14098304_20191122164824.jpg',
        },
        {
            original: 'https://www.imgeletro.com.br/900x900/produto/1305416_14098308_20191122164840.jpg',
            thumbnail: 'https://www.imgeletro.com.br/900x900/produto/1305416_14098308_20191122164840.jpg',
        }
    ];
    return (
        <React.Fragment>
            <NavBar />
            <NavBarMobile />

            <main className="buyResultBlock">
                <div className="buyResultBlock__left">
                    <div className="buyResultBlock__image__product">
                        <ImageGallery
                            items={images}
                            thumbnailPosition="left"
                            showFullscreenButton={true}
                            showThumbnails={true}
                            showPlayButton={false}
                            fullscreen="imageGallery__fullscreen"
                        />
                    </div>

                    <div className="buyResultBlock__moreSellerProducts">
                        <h2 className="buyResultBlock__title">
                            Mais anúncios do vendedor
                        </h2>
                        <a href="#" className="buyResultBlock__link">
                            ver mais anúncios do vendedor
                        </a>
                    </div>

                    <div className="buyResultBlock__specification__product">
                        <h2 className="buyResultBlock__title">Características</h2>

                        <ul className="buyResultBlock__specification__list">
                            <li className="buyResultBlock__specification__item">
                                <h4 className="buyResultBlock__specification__item__title">Marca:</h4>
                                <h2 className="buyResultBlock__specification__item__value">Samsung</h2>
                            </li>
                            <li className="buyResultBlock__specification__item">
                                <h4 className="buyResultBlock__specification__item__title">Modelo:</h4>
                                <h2 className="buyResultBlock__specification__item__value">SM-A307G</h2>
                            </li>
                            <li className="buyResultBlock__specification__item">
                                <h4 className="buyResultBlock__specification__item__title">Linha:</h4>
                                <h2 className="buyResultBlock__specification__item__value">Galaxy</h2>
                            </li>
                            <li className="buyResultBlock__specification__item">
                                <h4 className="buyResultBlock__specification__item__title">Série:</h4>
                                <h2 className="buyResultBlock__specification__item__value">A30s</h2>
                            </li>
                            <li className="buyResultBlock__specification__item">
                                <h4 className="buyResultBlock__specification__item__title">Tipo de Aparelho:</h4>
                                <h2 className="buyResultBlock__specification__item__value">Smartphone</h2>
                            </li>
                            <li className="buyResultBlock__specification__item">
                                <h4 className="buyResultBlock__specification__item__title">Quantidade de Chip:</h4>
                                <h2 className="buyResultBlock__specification__item__value">2 Chips</h2>
                            </li>
                            <li className="buyResultBlock__specification__item">
                                <h4 className="buyResultBlock__specification__item__title">Tipo de Tela:</h4>
                                <h2 className="buyResultBlock__specification__item__value">Super AMOLED</h2>
                            </li>
                            <li className="buyResultBlock__specification__item">
                                <h4 className="buyResultBlock__specification__item__title">Tamanho da Tela:</h4>
                                <h2 className="buyResultBlock__specification__item__value">6,4 Polegadas</h2>
                            </li>
                            <li className="buyResultBlock__specification__item">
                                <h4 className="buyResultBlock__specification__item__title">Resolução da Tela:</h4>
                                <h2 className="buyResultBlock__specification__item__value">HD+</h2>
                            </li>
                            <li className="buyResultBlock__specification__item">
                                <h4 className="buyResultBlock__specification__item__title">Sistema operacional:</h4>
                                <h2 className="buyResultBlock__specification__item__value">Android 9.0 (Pie)</h2>
                            </li>
                            <li className="buyResultBlock__specification__item">
                                <h4 className="buyResultBlock__specification__item__title">Sistema operacional:</h4>
                                <h2 className="buyResultBlock__specification__item__value">Android 9.0 (Pie)</h2>
                            </li>
                        </ul>
                    </div>

                    <div className="buyResultBlock__description__product">
                        <h2 className="buyResultBlock__title">Descrição</h2>

                        <ul className="buyResultBlock__description__list">
                            <li className="buyResultBlock__description__item">
                                <h4 className="buyResultBlock__description__item__title">DESCRIÇÃO</h4>
                                <p className="buyResultBlock__description__item__value">
                                O Galaxy A30S é um celular da Samsung lançado em outubro de 2019.<br />
                                O smartphone tem como destaque a fotografia. Conta com câmera tripla e foco dinâmico e composições automáticas de cenas para melhorar as imagens. O conjunto fotográfico do A30S possui um sensor com 25 megapixels, outro com 8 MP e um terceiro com 5 MP. Além disso, tem tela de 6,4 polegadas, processador octa-core, 4 GB de memória RAM, 64 GB de espaço interno e bateria de 4.000 mAh. O celular sai de fábrica com Android 9 (Pie). Ele está disponível nas cores preto, violeta e branco.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="buyResultBlock__ratings__product">
                        <h2 className="buyResultBlock__title">Opiniões sobre o produto</h2>
                        <div className="buyResultBlock__ratings__notes__block">
                            <h2 className="buyResultBlock__ratings__note">4.7</h2>
                            <StarRatingComponent
                                name="a"
                                className="buyResultBlock__ratings__start"
                                value={rating}
                                starCount={5}

                                starColor="#3483fa"
                                emptyStarColor="#999"
                                editing={false} /* is component available for editing, default `true` */
                            />
                        </div>

                        <ul className="buyResultBlock__ratings__users">
                            <li className="buyResultBlock__ratings__item">
                                <StarRatingComponent
                                    name="a"
                                    value={rating}
                                    starCount={5}

                                    starColor="#3483fa"
                                    emptyStarColor="#999"
                                    editing={false} /* is component available for editing, default `true` */
                                />
                                <h3 className="buyResultBlock__ratings__item__title">
                                    Bom
                                </h3>
                                <p className="buyResultBlock__ratings__item__description">
                                Muito bom
                                </p>
                            </li>
                            <li className="buyResultBlock__ratings__item">
                                <StarRatingComponent
                                    name="a"
                                    value={rating}
                                    starCount={5}

                                    starColor="#3483fa"
                                    emptyStarColor="#999"
                                    editing={false} /* is component available for editing, default `true` */
                                />
                                <h3 className="buyResultBlock__ratings__item__title">
                                    Bom
                                </h3>
                                <p className="buyResultBlock__ratings__item__description">
                                    Bom dia amigos! como são pilhas para o meu aparelho de ouvido ainda não comecei a usar !! assim me desculpa !! mas a marca delas são usadas por amigos meus e eles que me indicaram.
                                </p>
                            </li>

                            <li className="buyResultBlock__ratings__item">
                                <StarRatingComponent
                                    name="a"
                                    value={rating}
                                    starCount={5}

                                    starColor="#3483fa"
                                    emptyStarColor="#999"
                                    editing={false} /* is component available for editing, default `true` */
                                />
                                <h3 className="buyResultBlock__ratings__item__title">
                                    Bom
                                </h3>
                                <p className="buyResultBlock__ratings__item__description">
                                    Bom dia amigos! como são pilhas para o meu aparelho de ouvido ainda não comecei a usar !! assim me desculpa !! mas a marca delas são usadas por amigos meus e eles que me indicaram.
                                </p>
                            </li>

                            <li className="buyResultBlock__ratings__item">
                                <StarRatingComponent
                                    name="a"
                                    value={rating}
                                    starCount={5}
                                    starColor="#3483fa"
                                    emptyStarColor="#999"
                                    editing={false}
                                />
                                <h3 className="buyResultBlock__ratings__item__title">
                                    Bom
                                </h3>
                                <p className="buyResultBlock__ratings__item__description">
                                Maravilhoso
                                </p>
                            </li>

                            <li className="buyResultBlock__ratings__item">
                                <StarRatingComponent
                                    name="a"
                                    value={rating}
                                    starCount={5}

                                    starColor="#3483fa"
                                    emptyStarColor="#999"
                                    editing={false} /* is component available for editing, default `true` */
                                />
                                <h3 className="buyResultBlock__ratings__item__title">
                                    Bom
                                </h3>
                                <p className="buyResultBlock__ratings__item__description">
                                    Bom dia amigos! como são pilhas para o meu aparelho de ouvido ainda não comecei a usar !! assim me desculpa !! mas a marca delas são usadas por amigos meus e eles que me indicaram.
                                </p>
                            </li>
                        </ul>
                    </div>

                </div>


                <div className="buyResultBlock__right">
                    <div className="buyBlock">
                        <div className="buyResultBlock__image__product--mobile">
                            <ImageGallery
                                items={images}
                                thumbnailPosition="bottom"
                                showFullscreenButton={true}
                                showNav={false}
                                showThumbnails={true}
                                showPlayButton={false}
                                fullscreen="imageGallery__fullscreen"
                                additionalClass="buyResultBlock__image__product--mobile__css"
                            />
                        </div>
                        <h4 className="buyBlock__productState">Novo</h4>
                        <h2 className="buyBlock__productName">
                            Smartphone Samsung Galaxy A30s SM-A307G TV Digital 64GB
                        </h2>
                        <StarRatingComponent
                            name="a"
                            value={rating}
                            starCount={5}
                            starColor="#3483fa"
                            emptyStarColor="#999"
                            editing={false}
                            className="buyBlock__productStar"
                        />
                        <h3 className="buyBlock__productPrice">R$ 1329,00</h3>

                        <div className="buyBlock__typePayment">
                            <FontAwesomeIcon icon={faCreditCard} className="buyBlock__icon" />
                            <div className="buyBlock__payment">
                                <h5 className="buyBlock__paymentParceled">12x R$ 8,78</h5>
                                <ul className="buyBlock__paymentCardList">
                                    <li className="buyBlock__paymentCard">
                                        <img src={Mastercard} className="buyBlock__paymentCardImage" />
                                    </li>

                                    <li className="buyBlock__paymentCard">
                                        <img src={Visa} className="buyBlock__paymentCardImage" />
                                    </li>

                                    <li className="buyBlock__paymentCard">
                                        <img src={Boleto} className="buyBlock__paymentCardImage" />
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="buyBlock__shipping">
                            <FontAwesomeIcon icon={faShippingFast} className="buyBlock__icon" />
                            <h5 className="buyBlock__shippingAvailable">
                                frete gratis
                            </h5>
                        </div>

                        <div className="buyBlock__unitsQuantity">
                            <h5 className="buyBlock__unitsQuantity__title">Quantidade</h5>
                            <Dropdown
                                options={options}
                                value={defaultOption}
                                placeholder="Select an option"
                                className="Dropdown-root-buy buyBlock__unitsQuantity__dropdown"
                                controlClassName="Dropdown-control-buy"
                                menuClassName="Dropdown-menu-buy"
                                arrowClassName="Dropdown-arrow-buy"

                            />
                        </div>

                        <div className="buyBlock__buttons">
                            <Link to="buy-form" className="buyBlock__buttons_buy">comprar agora</Link>
                            <a href="#" className="buyBlock__buttons_add">adicionar ao carrino</a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </React.Fragment>
    )
}
