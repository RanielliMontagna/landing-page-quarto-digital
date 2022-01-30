import styled from 'styled-components';
import { Menu as SzhsinMenu } from '@szhsin/react-menu';

export const DivDrawerMobile = styled.div`
  position: absolute;
  right: 24px;
  bottom: 24px;
  padding: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.cores.secundaria};
  border: 1px solid ${({ theme }) => theme.cores.secundaria};
  border-radius: 4px;
`;

export const Menu = styled(SzhsinMenu)<{ tema: string | null }>`
  > ul {
    background-color: ${({ theme, tema }) =>
      tema === 'escuro' ? theme.coresExtras.pretoAppBar : theme.cores.terciaria};
  }
  > ul > li.szh-menu__divider {
    background-color: ${({ theme }) => theme.cores.secundaria}20;
  }
  > ul > div.szh-menu__arrow {
    background-color: ${({ theme, tema }) =>
      tema === 'escuro' ? theme.coresExtras.pretoAppBar : theme.cores.terciaria};
  }
  > ul > li.szh-menu__item {
    height: 30px;
    &:hover {
      background-color: ${({ theme }) => theme.cores.primaria}25;
    }
  }
`;

export const MenuItemIcone = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.cores.secundaria};
`;

export const MenuItemTitulo = styled.p`
  fontweight: 300;
  color: ${({ theme }) => theme.cores.secundaria};
`;
