import { Size } from 'shared';
import styled from 'styled-components';

export const Button = styled.button<{ size: Size; fullWidth: boolean }>`
  padding: 0px 16px 0 10px;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${(props) => props.theme.tamanhoFonte.md ?? undefined};
  width: ${(props) => props.fullWidth && '100%'};
  height: ${(props) => (props.size === 'sm' ? '24px' : props.size === 'md' ? '36px' : '44px')};

  &.neutral {
    background-color: ${({ theme }) => theme.cores.secundaria};
    color: ${({ theme }) => theme.cores.terciaria};

    &:hover {
      filter: brightness(0.8);
      transition: 0.5s;
    }
  }

  &.outlined {
    border: 1px solid ${({ theme }) => theme.cores.secundaria};
    background-color: transparent;
    color: ${({ theme }) => theme.cores.secundaria};

    &:hover {
      background-color: ${({ theme }) => theme.cores.secundaria};
      color: ${({ theme }) => theme.cores.terciaria};
      transition: 0.5s;
    }
  }
`;
