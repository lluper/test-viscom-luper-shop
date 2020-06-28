import React from 'react';
import NavBar from '../../components/NavBar/index';
import NavBarMobile from '../../components/NavBarMobile';
import Slider from '../../components/Slider';
import PaymentMethodHeader from '../../components/PaymentMethodHeader';
import OffersBlock from '../../components/OffersBlock';
import DiscoverBlock from '../../components/DiscoverBlock';
import BestStoresBlock from '../../components/BestStoresBlock';
import CategoryBlock from '../../components/CategoryBlock';
import HistoryBlock from '../../components/HistoryBlock';
import Footer from '../../components/Footer';

import './App.css';


function App() {
    return (
        <React.Fragment>
            <header>
                <NavBar />
                <NavBarMobile />
                <Slider />
            </header>

            <main className="pageHome__main">
                <PaymentMethodHeader />
                <OffersBlock />
                <DiscoverBlock />
                <BestStoresBlock />
                <CategoryBlock />
                <HistoryBlock />
            </main>
            <Footer />

        </React.Fragment>


    );
}

export default App;