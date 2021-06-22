import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';
import { Provider } from 'react-redux';
import store from '../Redux';
import { Spinner } from '../Components';
import { Demo, SignIn } from '../Pages';
import ProtectedRoute from './ProtectedRoute';

export default function Routes(): any {
    return (
        <HttpsRedirect>
            <Provider store={store}>
                <Suspense fallback={<Spinner />}>
                    <Switch>
                        {/**Use This for Private Routes */}
                        <ProtectedRoute exact path="/" component={Demo} />
                        {/**Use This for Public Routes */}
                        <Route path="/sign-in" component={SignIn} />
                        <Route path="*" component={Demo} />
                    </Switch>
                </Suspense>
            </Provider>
        </HttpsRedirect>
    );
}
