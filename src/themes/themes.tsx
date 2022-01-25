import { ThemeProvider } from 'styled-components';

const tamanhoFonte: any = ['12px', '14px', '16px', '20px', '24px'];
tamanhoFonte.xs = tamanhoFonte[0];
tamanhoFonte.sm = tamanhoFonte[1];
tamanhoFonte.md = tamanhoFonte[2];
tamanhoFonte.lg = tamanhoFonte[3];
tamanhoFonte.xl = tamanhoFonte[3];

const azulQD = '#384B78';
const pretoQD = '#22252C';
const brancoQD = '#f1f1f1';
const cinzaEscuroQD = '#575757';
const cinzaClaroQD = '#8b8b8b';

export const theme = {
  tamanhoFonte,
  cores: {
    primaria: azulQD,
    secundaria: pretoQD,
    terciaria: brancoQD,
  },
  coresExtras: {
    cinzaClaro: cinzaClaroQD,
    cinzaEscuro: cinzaEscuroQD,
    branco: brancoQD,
    preto: pretoQD,
    azul: azulQD,
  },
};

export type ThemeType = typeof theme;

export const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
