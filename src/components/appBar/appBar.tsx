import { MenuDivider, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { IoChevronDownOutline, IoExitOutline, IoSettingsOutline, IoPersonOutline } from 'react-icons/io5';
import { FiMoon, FiSun } from 'react-icons/fi';

import { useNavigate } from 'react-router-dom';
import { theme } from 'themes';
import * as styled from './appBar.styles';

const MenuItemConteudo = (titulo: string, icone: JSX.Element, onClick: () => void) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }} onClick={onClick}>
      <div style={{ display: 'flex', alignItems: 'center', color: theme.cores.secundaria }}>{icone}</div>
      <div style={{ margin: '0px 8px' }}>
        <p style={{ fontWeight: 300, color: theme.cores.secundaria }}>{titulo}</p>
      </div>
    </div>
  );
};

const AppBar = () => {
  const navigate = useNavigate();

  const _handleMudarTema = () => {
    //   if (localStorage.getItem('tema') === 'escuro') {
    //     localStorage.setItem('tema', 'claro');
    //   } else {
    //     localStorage.setItem('tema', 'escuro');
    //   }
  };

  return (
    <styled.DivAppBar>
      <styled.DivTema onClick={_handleMudarTema}>
        {localStorage.getItem('tema') === 'escuro' ? <FiMoon size={24} /> : <FiSun size={24} />}
      </styled.DivTema>
      <styled.DivPerfil>
        <styled.Menu
          menuButton={
            <styled.DivMenu>
              <div>
                <styled.styledAvatar alt="Capivarus Hotel" src="Capivarus Hotel" variant="rounded" />
              </div>
              <div style={{ padding: '8px' }}>
                <p style={{ fontWeight: 300 }}>Capivarus Hotel</p>
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
