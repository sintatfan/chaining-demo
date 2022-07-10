import {css} from '@emotion/react';

// Assets
import logoWhite from './images/logo.svg';
import logoFilled from './images/logo_filled.svg';

const headingFontFamily = 'QueenofCamelot, sans-serif';

export const baseTheme = {
    colors: {
        brand: ['#dbffff', '#b1fafe', '#84f6fb', '#57f2f9', '#35edf7', '#25d4dd', '#15a6ad', '#04767b', '#00474b', '#001a1b'],
    },
    headings: {
        fontFamily: headingFontFamily,
    },
    primaryColor: 'brand',
};

export const darkTheme = {
    ...baseTheme,
    colorScheme: 'dark',
    primaryShade: 7,
};

export const lightTheme = {
    ...baseTheme,
    colorScheme: 'light',
    primaryShade: 7,
};

export const themeStyles = {
    Button: {
        root: {
            fontFamily: headingFontFamily,
        }
    }
};

export const theme = darkTheme;

export const appStyles = {
    main: {
        background: '#151B1D',
    }
};

export const globalStyles = css`
  @font-face {
    font-family: 'QueenofCamelot';
    src: url('/fonts/QueenofCamelot2.0.eot');
    src: url('/fonts/QueenofCamelot2.0.eot?#iefix') format('embedded-opentype'),
    url('/fonts/QueenofCamelot2.0.svg#QueenofCamelot2.0') format('svg'),
    url('/fonts/QueenofCamelot2.0.ttf') format('truetype'),
    url('/fonts/QueenofCamelot2.0.woff') format('woff'),
    url('/fonts/QueenofCamelot2.0.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
`;

export const logoDark = logoWhite;
export const logoLight = logoFilled;