import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,500&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
    // font-family: Roboto, sans-serif;
    // font-family: 'Montserrat', sans-serif;
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
    }
`;

export const theme = {
  colors: {
    black: '#525252',
    blackLighter: '#A6A6A6',
    borderLight: '#f2f2f2',
    white: '#FFFFFF',
    primary: '#381DAA',
    primaryLighter: '#73A4FD',
    primaryDarker: '#150072',
  },
  sizes: {
    text: '1rem',
    th: '1.75rem',
    t1: '5rem',
    t1h: '6.375rem',
    t2: '3.5rem',
    t2h: '4.375rem',
    t3: '1.75rem',
    t3h: '2.5rem',
  },
  transitions: {
    large: 'all 300ms ease-in-out',
    medium: 'all 200ms ease-in-out',
    small: 'all 100ms ease-in-out',
  },
  shadows: {
    hard: 'rgb(56 29 170 / 20%) 0px 2px 1px -1px, rgb(56 29 170 / 14%) 0px 1px 1px 0px, rgb(56 29 170 / 12%) 0px 1px 3px 0px;',
    medium: 'rgb(56 29 170 / 20%) 0px 3px 1px -2px, rgb(56 29 170 / 14%) 0px 2px 2px 0px, rgb(56 29 170 / 12%) 0px 1px 5px 0px;',
    light: 'rgb(56 29 170 / 20%) 0px 3px 3px -2px, rgb(56 29 170 / 14%) 0px 3px 4px 0px, rgb(56 29 170 / 12%) 0px 1px 8px 0px;',
  },
};
