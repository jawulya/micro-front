import React, {lazy, Suspense, useState} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';

import Header from './components/Header';
const MarketingLazy = lazy(() => import('./components/marketing-app'));
const AuthLazy = lazy(() => import('./components/auth-app'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})
export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false)
    console.log(isSignedIn)
    return (
    <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
            <div>
                <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                <Suspense fallback={<div>loading...</div>}>
                    <Switch>
                        <Route path="/auth">
                            <AuthLazy onSignIn={() => setIsSignedIn(true)}/>
                        </Route>
                        <Route path="/" component={MarketingLazy} />
                    </Switch>
                </Suspense>
            </div>
        </StylesProvider>
    </BrowserRouter>
    )
}