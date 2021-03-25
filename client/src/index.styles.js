//Core
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    section {
        min-height: 100%;
        padding: 5rem 0 1rem;
    }
`;

export const size = {
	mobile: '320px',
	tablet: '768px',
	desktop: '1280px',
};

export const device = {
	mobile: `screen and (min-width: ${size.mobile})`,
	tablet: `screen and (min-width: ${size.tablet})`,
	desktop: `screen and (min-width: ${size.desktop})`,
};

export default GlobalStyle;
