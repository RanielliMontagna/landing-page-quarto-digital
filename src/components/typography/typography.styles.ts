import styled, { css } from 'styled-components';
import { TypographyProps } from './typography.types';

const getColor = ({ color }: Pick<TypographyProps, 'color'>) => {
  switch (color) {
    case 'primary':
      return css`
        color: ${({ theme }) => theme.cores.primaria};
      `;
    case 'secondary':
      return css`
        color: ${({ theme }) => theme.cores.secundaria};
      `;
    case 'terciary':
      return css`
        color: ${({ theme }) => theme.cores.terciaria};
      `;
    case 'success':
      return css`
        color: ${({ theme }) => theme.coresUtilitarias.success};
      `;
    case 'warning':
      return css`
        color: ${({ theme }) => theme.coresUtilitarias.warning};
      `;
    case 'danger':
      return css`
        color: ${({ theme }) => theme.coresUtilitarias.danger};
      `;
    case 'darkGray':
      return css`
        color: ${({ theme }) => theme.coresExtras.cinzaClaro};
      `;
    case 'lightGray':
      return css`
        color: ${({ theme }) => theme.coresExtras.cinzaEscuro};
      `;
    case 'darkBlue':
      return css`
        color: ${({ theme }) => theme.coresExtras.pretoAzulado};
      `;
    default:
      return css`
        color: color;
      `;
  }
};

const getSize = ({ size }: Pick<TypographyProps, 'size'>) => {
  switch (size) {
    case 'xs':
      return css`
        font-size: ${({ theme }) => theme.tamanhoFonte.xs};
      `;
    case 'sm':
      return css`
        font-size: ${({ theme }) => theme.tamanhoFonte.sm};
      `;
    case 'md':
      return css`
        font-size: ${({ theme }) => theme.tamanhoFonte.md};
      `;
    case 'lg':
      return css`
        font-size: ${({ theme }) => theme.tamanhoFonte.lg};
      `;
    case 'xl':
      return css`
        font-size: ${({ theme }) => theme.tamanhoFonte.xl};
      `;
    default:
      return css`
        font-size: ${({ theme }) => theme.tamanhoFonte.md};
      `;
  }
};

const getWeight = ({ weight }: Pick<TypographyProps, 'weight'>) => {
  switch (weight) {
    case 'slim':
      return css`
        font-weight: 300;
      `;
    case 'normal':
      return css`
        font-weight: normal;
      `;
    case 'bold':
      return css`
        font-weight: 600;
      `;
  }
};

export const Typography = styled.span<TypographyProps>`
  ${({ weight }) => getWeight({ weight })};
  ${({ size }) => getSize({ size })};
  ${({ color }) => getColor({ color })};
`;
