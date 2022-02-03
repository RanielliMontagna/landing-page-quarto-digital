import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './themes';

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0px;
    padding: 0px;
    font-family: 'Segoe UI', sans-serif;
    user-select: none;
  }

  h1 {
    font-weight: 500;
    letter-spacing: 1px;
  }

  body, html {
    height: 100vh;
    background-color: ${({ theme }) => theme.cores.secundaria};
  }

  /* &::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  } */
`;
