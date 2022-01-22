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

  body {
    background-color: ${({ theme }) => theme.color.white};
  }
`;
