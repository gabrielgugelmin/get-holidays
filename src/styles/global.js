import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.primary};
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;