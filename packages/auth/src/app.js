import React from 'react';
import { Switch, Route, Router } from "react-router-dom";
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';

const generatedClassName = createGenerateClassName({
    productionPrefix: 'au',
})

export default ({ history, onSignIn }) => {
    return <div>
        <StylesProvider generateClassName={generatedClassName} >
            <Router history={history}>
                <Switch>
                    <Route path='/auth/signin'>
                        <SignIn onSignIn={onSignIn} />
                    </Route>
                    <Route path='/auth/signup'>
                        <SignUp onSignIn={onSignIn} />
                    </Route>
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}