import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface Props {
    component: React.ComponentType<any> | React.ComponentType<any> | undefined;
    render?: (props: unknown) => Record<string, unknown>;
    exact?: boolean;
    path: string;
}

export default function ProtectedRoute({ component: Component, render, ...rest }: Props): any {
    const isValidUser = () => {
        //Route Authentication Logic Here
        return true;
    };
    return (
        <Route
            {...rest}
            render={props => {
                if (!isValidUser())
                    return (
                        <Redirect
                            to={{
                                pathname: '/',
                                state: { from: props.location },
                            }}
                        />
                    );
                return Component ? <Component {...props} /> : render?.(props);
            }}
        />
    );
}
