import React, { useState } from 'react'
import './index.css'
import StarRatingComponent from 'react-star-rating-component';
import Product from '../../images/products/product-1.jpg'
import Pagination from "react-js-pagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faSortAmountDownAlt, faSlidersH } from '@fortawesome/free-solid-svg-icons'

export default function index() {
    const [activePage, setActivePage] = useState(1);

    function handlePageChange(pageNumber) {
        console.log(` página ativa é  ${pageNumber} `);
        setActivePage(pageNumber);
    }
    return (
        <div className="resultSearchBlock">
            <div className="resultSearchBlock__filters">
                <ul className="resultSearchBlock__filters__list">
                    <li className="resultSearchBlock__filters__item">
                        <a href="#" className="resultSearchBlock__filters__link">
                            <FontAwesomeIcon icon={faSortAmountDownAlt} className="resultSearchBlock__filters__icon" />
                            Ordernar
                        </a>
                    </li>
                    <li className="resultSearchBlock__filters__item">
                        <a href="#" className="resultSearchBlock__filters__link">
                            <FontAwesomeIcon icon={faSlidersH} className="resultSearchBlock__filters__icon" />
                            Filtrar
                        </a>
                    </li>
                </ul>
            </div>
            <div className="resultSearchBlock__product">
                <a href="#" className="resultSearchBlock__image">
                    <img src={Product} />
                </a>
                <div className="resultSearchBlock__description">
                    <a href="#" className="resultSearchBlock__description__title">
                        Xiaomi Redmi Note 8 Dual SIM 64 GB Azul-netuno 4 GB RAM
                    </a>
                    <div className="resultSearchBlock__description__details">
                        <div className="resultSearchBlock__details__priceAndParceledAndShipping">
                            <h3 className="resultSearchBlock__details__price">
                                R$ 1200
                            </h3>
                            <h4 className="resultSearchBlock__details__parceled">
                                12 x R$ 120
                            </h4>
                            <h5 className="resultSearchBlock__details__shipping">
                                frete gratis
                            </h5>
                            <FontAwesomeIcon icon={faHeart} className="resultSearchBlock__details__favorites" />
                        </div>
                        <div className="resultSearchBlock__details__stars">
                            <StarRatingComponent
                                name="rate1"
                                starCount={5}
                                value={5}
                                starColor={"#3483fa"}
                                editing={false}
                                className="starRatingComponent"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="resultSearchBlock__product">
                <a href="#" className="resultSearchBlock__image">
                    <img src={Product} />
                </a>
                <div className="resultSearchBlock__description">
                    <a href="#" className="resultSearchBlock__description__title">
                        Xiaomi Redmi Note 8 Dual SIM 64 GB Azul-netuno 4 GB RAM
                    </a>
                    <div className="resultSearchBlock__description__details">
                        <div className="resultSearchBlock__details__priceAndParceledAndShipping">
                            <h3 className="resultSearchBlock__details__price">
                                R$ 1200
                            </h3>
                            <h4 className="resultSearchBlock__details__parceled">
                                12 x R$ 120
                            </h4>
                            <h5 className="resultSearchBlock__details__shipping">
                                frete gratis
                            </h5>
                            <FontAwesomeIcon icon={faHeart} className="resultSearchBlock__details__favorites" />
                        </div>
                        <div className="resultSearchBlock__details__stars">
                            <StarRatingComponent
                                name="rate1"
                                starCount={5}
                                value={5}
                                starColor={"#3483fa"}
                                editing={false}
                                className="starRatingComponent"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="resultSearchBlock__product">
                <a href="#" className="resultSearchBlock__image">
                    <img src={Product} />
                </a>
                <div className="resultSearchBlock__description">
                    <a href="#" className="resultSearchBlock__description__title">
                        Xiaomi Redmi Note 8 Dual SIM 64 GB Azul-netuno 4 GB RAM
                    </a>
                    <div className="resultSearchBlock__description__details">
                        <div className="resultSearchBlock__details__priceAndParceledAndShipping">
                            <h3 className="resultSearchBlock__details__price">
                                R$ 1200
                            </h3>
                            <h4 className="resultSearchBlock__details__parceled">
                                12 x R$ 120
                            </h4>
                            <h5 className="resultSearchBlock__details__shipping">
                                frete gratis
                            </h5>
                            <FontAwesomeIcon icon={faHeart} className="resultSearchBlock__details__favorites" />
                        </div>
                        <div className="resultSearchBlock__details__stars">
                            <StarRatingComponent
                                name="rate1"
                                starCount={5}
                                value={5}
                                starColor={"#3483fa"}
                                editing={false}
                                className="starRatingComponent"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="resultSearchBlock__product">
                <a href="#" className="resultSearchBlock__image">
                    <img src={Product} />
                </a>
                <div className="resultSearchBlock__description">
                    <a href="#" className="resultSearchBlock__description__title">
                        Xiaomi Redmi Note 8 Dual SIM 64 GB Azul-netuno 4 GB RAM
                    </a>
                    <div className="resultSearchBlock__description__details">
                        <div className="resultSearchBlock__details__priceAndParceledAndShipping">
                            <h3 className="resultSearchBlock__details__price">
                                R$ 1200
                            </h3>
                            <h4 className="resultSearchBlock__details__parceled">
                                12 x R$ 120
                            </h4>
                            <h5 className="resultSearchBlock__details__shipping">
                                frete gratis
                            </h5>
                            <FontAwesomeIcon icon={faHeart} className="resultSearchBlock__details__favorites" />
                        </div>
                        <div className="resultSearchBlock__details__stars">
                            <StarRatingComponent
                                name="rate1"
                                starCount={5}
                                value={5}
                                starColor={"#3483fa"}
                                editing={false}
                                className="starRatingComponent"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="resultSearchBlock__product">
                <a href="#" className="resultSearchBlock__image">
                    <img src={Product} />
                </a>
                <div className="resultSearchBlock__description">
                    <a href="#" className="resultSearchBlock__description__title">
                        Xiaomi Redmi Note 8 Dual SIM 64 GB Azul-netuno 4 GB RAM
                    </a>
                    <div className="resultSearchBlock__description__details">
                        <div className="resultSearchBlock__details__priceAndParceledAndShipping">
                            <h3 className="resultSearchBlock__details__price">
                                R$ 1200
                            </h3>
                            <h4 className="resultSearchBlock__details__parceled">
                                12 x R$ 120
                            </h4>
                            <h5 className="resultSearchBlock__details__shipping">
                                frete gratis
                            </h5>
                            <FontAwesomeIcon icon={faHeart} className="resultSearchBlock__details__favorites" />
                        </div>
                        <div className="resultSearchBlock__details__stars">
                            <StarRatingComponent
                                name="rate1"
                                starCount={5}
                                value={5}
                                starColor={"#3483fa"}
                                editing={false}
                                className="starRatingComponent"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="resultSearchBlock__product">
                <a href="#" className="resultSearchBlock__image">
                    <img src={Product} />
                </a>
                <div className="resultSearchBlock__description">
                    <a href="#" className="resultSearchBlock__description__title">
                        Xiaomi Redmi Note 8 Dual SIM 64 GB Azul-netuno 4 GB RAM
                    </a>
                    <div className="resultSearchBlock__description__details">
                        <div className="resultSearchBlock__details__priceAndParceledAndShipping">
                            <h3 className="resultSearchBlock__details__price">
                                R$ 1200
                            </h3>
                            <h4 className="resultSearchBlock__details__parceled">
                                12 x R$ 120
                            </h4>
                            <h5 className="resultSearchBlock__details__shipping">
                                frete gratis
                            </h5>
                            <FontAwesomeIcon icon={faHeart} className="resultSearchBlock__details__favorites" />
                        </div>
                        <div className="resultSearchBlock__details__stars">
                            <StarRatingComponent
                                name="rate1"
                                starCount={5}
                                value={5}
                                starColor={"#3483fa"}
                                editing={false}
                                className="starRatingComponent"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="resultSearchBlock__pagination">
                <Pagination
                    activePage={activePage}
                    itemsCountPerPage={5}
                    totalItemsCount={100}
                    pageRangeDisplayed={10}
                    hideDisabled={true}
                    hideNavigation={true}
                    onChange={handlePageChange}
                    innerClass="pagination__innerClass pagination--pc"
                    itemClass="pagination__itemClass"
                    linkClass="pagination__linkclass"
                    activeClass="pagination__activeClass"
                    activeLinkClass="pagination__activeLinkClass"
                />
                <Pagination
                    activePage={activePage}
                    itemsCountPerPage={5}
                    totalItemsCount={100}
                    pageRangeDisplayed={5}
                    hideDisabled={true}
                    hideNavigation={true}
                    onChange={handlePageChange}
                    innerClass="pagination__innerClass pagination--mobile"
                    itemClass="pagination__itemClass"
                    linkClass="pagination__linkclass"
                    activeClass="pagination__activeClass"
                    activeLinkClass="pagination__activeLinkClass"
                />
            </div>
        </div>
    )
}
