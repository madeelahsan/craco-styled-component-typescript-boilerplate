import React from 'react';
import styled from 'styled-components/macro';
import media from 'css-in-js-media';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    flex-direction: column;
`;
const Button = styled.button`
    color: #fff;
    background: #000;
    padding: 30px;
    border: none;
    display: block;
    margin-bottom: 15px;
    &:hover {
        opacity: 0.7;
    }
    ${media('>desktop')} {
        background: var(--light-blue);
    }
`;

export default function Demo(): JSX.Element {
    return (
        <>
            <Wrapper>
                <Button>This is a Demo Page</Button>
                <Button as="a" href="/sign-in">
                    Sign in
                </Button>
            </Wrapper>
        </>
    );
}
