import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    BrowserRouter
} from "react-router-dom";

import App from "../pages/Index/App";
import PageSearchResult from "../pages/SearchResult/";
import PageBuy from '../pages/Buy/'
import PageBuyForm from '../pages/BuyForm/'
import CompletedPurchase from '../pages/CompletedPurchase/'
export default function router(){
    return(
        <Router>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/search" component={PageSearchResult} />
                    <Route path="/buy" component={PageBuy} />
                    <Route path="/buy-form" component={PageBuyForm} />
                    <Route path="/completed-purchase" component={CompletedPurchase} />
                </Switch>
            </BrowserRouter>
        </Router>
    );
}