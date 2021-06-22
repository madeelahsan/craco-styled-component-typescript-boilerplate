import React from 'react';
import styled from 'styled-components/macro';

const SiteHeader = styled.header`
    text-align: center;
`;
export default function Header(): JSX.Element {
    return (
        <SiteHeader>
            <h1>header</h1>
        </SiteHeader>
    );
}
