import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes/index';
import reportWebVitals from './reportWebVitals';
import { Fonts } from './Styles/Fonts';
import { Normalize } from 'styled-normalize';
import { Variables } from './Styles/Variables';
import { Reset } from './Styles/Reset';
import { Typography } from './Styles/Typography';
import { Forms } from './Styles/Forms';

ReactDOM.render(
    <Router>
        <Fonts />
        <Normalize />
        <Variables />
        <Reset />
        <Typography />
        <Forms />
        <Routes />
    </Router>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
