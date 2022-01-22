import { ThemeProvider } from 'styled-components';

const fontSizes: any = ['12px', '14px', '16px', '20px', '24px'];
fontSizes.xs = fontSizes[0];
fontSizes.sm = fontSizes[1];
fontSizes.md = fontSizes[2];
fontSizes.lg = fontSizes[3];
fontSizes.xl = fontSizes[3];

const primary = '#F3485C';
const dark = '#22252C';
const white = '#ffffff';
const darkGray = '#575757';
const whiteGray = '#8b8b8b';

export const theme = {
  fontSizes,
  color: {
    primary,
    dark,
    white,
    darkGray,
    whiteGray,
  },
};

export type ThemeType = typeof theme;

export const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
