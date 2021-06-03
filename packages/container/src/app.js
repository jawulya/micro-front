import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';

import {MarketingApp} from "./components/marketing-app";
import Header from './components/Header';
import {AuthApp} from "./components/auth-app";

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})
export default () => {
    return (
    <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
            <div>
                <Header />
                <Switch>
                    <Route path="/auth" component={AuthApp} />
                    <Route path="/" component={MarketingApp} />
                </Switch>
            </div>
        </StylesProvider>
    </BrowserRouter>
    )
}