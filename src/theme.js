import logoWhite from './images/logo.svg';
import logoFilled from './images/logo_filled.svg';

export const baseTheme = {
    colors: {
        brand: ['#dbffff', '#b1fafe', '#84f6fb', '#57f2f9', '#35edf7', '#25d4dd', '#15a6ad', '#04767b', '#00474b', '#001a1b'],
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

export const theme = darkTheme;

export const appStyles = {
    main: {
        background: '#151B1D',
    }
};

export const logoDark = logoWhite;
export const logoLight = logoFilled;