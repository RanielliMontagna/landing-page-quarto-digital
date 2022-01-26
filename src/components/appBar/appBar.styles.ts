import styled from 'styled-components';
import { Avatar } from '@mui/material';
import { Menu as SzhsinMenu } from '@szhsin/react-menu';

export const DivAppBar = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.cores.terciaria};
  color: ${({ theme }) => theme.cores.secundaria};
  box-shadow: 0 -11px 9px 11px rgba(0, 0, 0, 0.3);
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
`;
