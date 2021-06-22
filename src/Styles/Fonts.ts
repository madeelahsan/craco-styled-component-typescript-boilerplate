import { createGlobalStyle } from 'styled-components/macro';

import caviarDreamsBoldWoff2 from '../assets/fonts/CaviarDreams-Bold.woff2';
import caviarDreamsBoldWoff from '../assets/fonts/CaviarDreams-Bold.woff';
import caviarDreamsWoff2 from '../assets/fonts/CaviarDreams.woff2';
import caviarDreamsWoff from '../assets/fonts/CaviarDreams.woff';
import goldoniWoff2 from '../assets/fonts/Goldoni.woff2';
import goldoniWoff from '../assets/fonts/Goldoni.woff';
import SegoeUIWoff2 from '../assets/fonts/SegoeUI.woff2';
import SegoeUIWoff from '../assets/fonts/SegoeUI.woff';
import SegoeUIBoldWoff2 from '../assets/fonts/SegoeUI-Bold.woff2';
import SegoeUIBoldWoff from '../assets/fonts/SegoeUI-Bold.woff';
import SegoeUISemiboldWoff2 from '../assets/fonts/SegoeUI-Semibold.woff2';
import SegoeUISemiboldWoff from '../assets/fonts/SegoeUI-Semibold.woff';
import SegoeUILightWoff2 from '../assets/fonts/SegoeUI-Light.woff2';
import SegoeUILightWoff from '../assets/fonts/SegoeUI-Light.woff';

export const Fonts = createGlobalStyle`
    @font-face {
        font-family: 'Caviar Dreams';
        src: url(${caviarDreamsBoldWoff2}) format('woff2'),
            url(${caviarDreamsBoldWoff}) format('woff');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Caviar Dreams';
        src: url(${caviarDreamsWoff2}) format('woff2'),
            url(${caviarDreamsWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Goldoni';
        src: url(${goldoniWoff2}) format('woff2'),
            url(${goldoniWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Segoe UI';
        src: url(${SegoeUISemiboldWoff2}) format('woff2'),
            url(${SegoeUISemiboldWoff}) format('woff');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Segoe UI';
        src: url(${SegoeUILightWoff2}) format('woff2'),
            url(${SegoeUILightWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Segoe UI';
        src: url(${SegoeUIWoff2}) format('woff2'),
            url(${SegoeUIWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Segoe UI';
        src: url(${SegoeUIBoldWoff2}) format('woff2'),
            url(${SegoeUIBoldWoff}) format('woff');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }
`;
