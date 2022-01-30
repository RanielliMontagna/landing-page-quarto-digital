import { MenuItem } from '@szhsin/react-menu';
import { opcoesMenu } from 'components';
import { IoMenuSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useApp } from 'store';
import * as styled from './drawerMobile.styles';
import { DivDrawerMobile } from './drawerMobile.styles';

const DrawerMobile = () => {
  const navigate = useNavigate();
  const { tema } = useApp();

  const _menuItemConteudo = (titulo: string, icone: JSX.Element) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <styled.MenuItemIcone>{icone}</styled.MenuItemIcone>
        <div style={{ margin: '0px 8px' }}>
          <styled.MenuItemTitulo>{titulo}</styled.MenuItemTitulo>
        </div>
      </div>
    );
  };

  return (
    <styled.Menu
      tema={tema}
      menuButton={
        <DivDrawerMobile>
          <IoMenuSharp size={36} />
        </DivDrawerMobile>
      }
      direction="top"
      align="end"
      offsetY={4}
      arrow
      transition
    >
      {opcoesMenu.map((value) => {
        return (
          <MenuItem onClick={() => navigate(value.caminho)}>{_menuItemConteudo(value.titulo, value.icone)}</MenuItem>
        );
      })}
    </styled.Menu>
  );
};

export default DrawerMobile;
