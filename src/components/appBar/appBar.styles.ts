import styled from 'styled-components';
import { Avatar } from '@mui/material';
import { Menu as SzhsinMenu } from '@szhsin/react-menu';

export const DivAppBar = styled.div<{ tema: string | null }>`
  width: 100%;
  height: 60px;
  background-color: ${({ theme, tema }) => (tema === 'escuro' ? theme.coresExtras.pretoAppBar : theme.cores.terciaria)};
  color: ${({ theme }) => theme.cores.secundaria};
  box-shadow: 1px 0px 13px 0px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DivTema = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.cores.secundaria};

  &:hover {
    transition: 0.5s;
    background-color: ${({ theme }) => theme.cores.primaria}25;
  }
`;

export const DivPerfil = styled.div`
  height: 100%;
`;

export const DivMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 16px;
  height: 100%;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    background-color: ${({ theme }) => theme.cores.primaria}25;
  }
`;

export const styledAvatar = styled(Avatar)`
  width: 35px !important;
  height: 35px !important;
  color: ${({ theme }) => theme.coresExtras.branco} !important;
  background-color: ${({ theme }) => theme.cores.primaria} !important;
`;

export const Menu = styled(SzhsinMenu)`
  > ul {
    width: 205px;
    background-color: ${({ theme }) => theme.cores.terciaria};
  }
  > ul > li.szh-menu__divider {
    background-color: ${({ theme }) => theme.cores.secundaria}20;
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

export const TituloPerfil = styled.p`
  font-weight: 300;
  white-space: nowrap;

  @media (max-width: 400px) {
    display: none;
  }
`;
