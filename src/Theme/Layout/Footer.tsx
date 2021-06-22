import React from 'react';
import styled from 'styled-components/macro';

const SiteFooter = styled.footer`
    text-align: center;
`;
export default function Footer(): JSX.Element {
    return (
        <SiteFooter>
            <strong>footer</strong>
        </SiteFooter>
    );
}
