import { MenuDivider, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { FiMoon, FiSun } from 'react-icons/fi';
import { IoChevronDownOutline, IoExitOutline, IoPersonOutline, IoSettingsOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppActions, useApp } from 'store';
import * as styled from './appBar.styles';

const MenuItemConteudo = (titulo: string, icone: JSX.Element, onClick: () => void) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }} onClick={onClick}>
      <styled.MenuItemIcone>{icone}</styled.MenuItemIcone>
      <div style={{ margin: '0px 8px' }}>
        <styled.MenuItemTitulo>{titulo}</styled.MenuItemTitulo>
      </div>
    </div>
  );
};

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
      <styled.DivTema onClick={_handleMudarTema}>
        {tema === 'escuro' ? <FiMoon size={24} /> : <FiSun size={24} />}
      </styled.DivTema>
      <styled.DivPerfil>
        <styled.Menu
          menuButton={
            <styled.DivMenu>
              <div>
                <styled.styledAvatar alt="Capivarus Hotel" src="Capivarus Hotel" variant="rounded" />
              </div>
              <div style={{ padding: '8px' }}>
                <styled.TituloPerfil>Capivarus Hotel</styled.TituloPerfil>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <IoChevronDownOutline size={16} />
              </div>
            </styled.DivMenu>
          }
          transition
        >
          <MenuItem>
            {MenuItemConteudo('Configurações', <IoSettingsOutline size={16} />, () => navigate('/configuracoes'))}
          </MenuItem>
          <MenuItem>{MenuItemConteudo('Meu usuário', <IoPersonOutline size={16} />, () => null)}</MenuItem>
          <MenuDivider />
          <MenuItem>{MenuItemConteudo('Sair', <IoExitOutline size={16} />, () => navigate('/login'))}</MenuItem>
        </styled.Menu>
      </styled.DivPerfil>
    </styled.DivAppBar>
  );
};

export default AppBar;
