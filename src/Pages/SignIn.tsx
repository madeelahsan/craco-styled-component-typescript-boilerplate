import React from 'react';
import styled from 'styled-components/macro';
import AppContainer from '../Theme/';

const Content = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px;
`;

export default function SignIn(): JSX.Element {
    return (
        <>
            <AppContainer>
                <Content>
                    <p>Content</p>
                </Content>
            </AppContainer>
        </>
    );
}
