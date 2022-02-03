import { MenuDivider, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { Menu, MenuItemConteudo, DrawerMobile } from 'components';
import { FiMoon, FiSun } from 'react-icons/fi';
import { IoChevronDownOutline, IoExitOutline, IoPersonOutline, IoSettingsOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppActions, useApp } from 'store';
import * as styled from './appBar.styles';

const AppBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { tema } = useApp();

  const _handleMudarTema = () => {
    if (tema === 'escuro') {
      dispatch(AppActions.storeTema('claro'));
    } else {
      dispatch(AppActions.storeTema('escuro'));
    }
  };

  return (
    <styled.DivAppBar tema={tema}>
      <div style={{ display: 'flex', height: '100%' }}>
        <styled.DivDrawer>
          <DrawerMobile />
        </styled.DivDrawer>
        <styled.DivTema onClick={_handleMudarTema}>
          {tema === 'escuro' ? <FiMoon size={24} /> : <FiSun size={24} />}
        </styled.DivTema>
      </div>
      <styled.DivPerfil>
        <Menu
          align="end"
          menuButton={
            <styled.DivMenu>
              <div>
                <styled.styledAvatar alt="Capivarus Hotel" src="Capivarus Hotel" variant="rounded" />
              </div>
              <div style={{ padding: '8px', overflow: 'hidden' }}>
                <styled.TituloPerfil>Capivarus Hotel</styled.TituloPerfil>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <IoChevronDownOutline size={16} />
              </div>
            </styled.DivMenu>
          }
        >
          <>
            <MenuItem onClick={() => navigate('/configuracoes')}>
              {MenuItemConteudo('Configurações', <IoSettingsOutline size={16} />)}
            </MenuItem>
            <MenuItem onClick={() => navigate('/minha-conta')}>
              {MenuItemConteudo('Minha conta', <IoPersonOutline size={16} />)}
            </MenuItem>
            <MenuDivider />
            <MenuItem onClick={() => navigate('/login')}>
              {MenuItemConteudo('Sair', <IoExitOutline size={16} />)}
            </MenuItem>
          </>
        </Menu>
      </styled.DivPerfil>
    </styled.DivAppBar>
  );
};

export default AppBar;
