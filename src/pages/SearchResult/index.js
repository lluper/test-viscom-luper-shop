import React from 'react';
import NavBar from '../../components/NavBar';
import NavBarMobile from '../../components/NavBarMobile';
import Footer from '../../components/Footer'
import Aside from '../../components/SearchAside'
import Result from '../../components/Results'

import './index.css'

export default function index() {
    return (
        <React.Fragment>
            <header>
                <NavBar />
                <NavBarMobile/>
            </header>

            <main className="searchResultBlock">
                <Aside />
                <Result />
            </main>

            <Footer/>
        </React.Fragment>
    )
}
