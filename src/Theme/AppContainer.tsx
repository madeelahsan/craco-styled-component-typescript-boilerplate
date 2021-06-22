import React from 'react';
import { lazy } from 'react';
import styled from 'styled-components/macro';

const Header = lazy(() => import('./Layout/Header'));
const Footer = lazy(() => import('./Layout/Footer'));

const Wrapper = styled.div`
    position: relative;
    overflow: hidden;
`;

export default function AppContainer(props: { children: JSX.Element }): JSX.Element {
    return (
        <>
            <Wrapper>
                <Header />
                <main>{props.children}</main>
                <Footer />
            </Wrapper>
        </>
    );
}
