import { useApp } from 'store';
import { ThemeProvider } from 'styled-components';

const tamanhoFonte = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '20px',
  xl: '32px',
};

export const azulQD = '#384B78';
const pretoQD = '#22252C';
const brancoQD = '#f1f1f1';
const cinzaEscuroQD = '#575757';
const cinzaClaroQD = '#8b8b8b';
const pretoAppBar = '#2b2f38';

export type ThemeType = typeof temaClaro;

export const temaClaro = {
  tamanhoFonte,
  cores: {
    primaria: azulQD,
    secundaria: pretoQD,
    terciaria: brancoQD,
  },
  coresExtras: {
    cinzaClaro: cinzaClaroQD,
    cinzaEscuro: cinzaEscuroQD,
    pretoAppBar: pretoAppBar,
    branco: brancoQD,
    preto: pretoQD,
    azul: azulQD,
  },
};

export const temaEscuro = {
  tamanhoFonte,
  cores: {
    primaria: azulQD,
    secundaria: brancoQD,
    terciaria: pretoQD,
  },
  coresExtras: {
    cinzaClaro: cinzaClaroQD,
    cinzaEscuro: cinzaEscuroQD,
    pretoAppBar: pretoAppBar,
    branco: brancoQD,
    preto: pretoQD,
    azul: azulQD,
  },
};

export const Theme: React.FC = ({ children }) => {
  const { tema } = useApp();
  return <ThemeProvider theme={tema === 'escuro' ? temaEscuro : temaClaro}>{children}</ThemeProvider>;
};
