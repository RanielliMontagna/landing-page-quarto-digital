import { Fragment, memo } from 'react';
import { MenuDivider, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { Menu, MenuItemConteudo, DrawerMobile, Typography } from 'components';
import { FiMoon, FiSun } from 'react-icons/fi';
import { IoChevronDownOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppActions, useApp } from 'store';
import * as styled from './appBar.styles';
import { Tooltip } from '@mui/material';
import { ItemsMenu } from './appBar.static';
import crypto from 'crypto';

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
        <Tooltip title={<Typography>Trocar tema</Typography>} placement="bottom" arrow>
          <styled.DivTema onClick={_handleMudarTema}>
            {tema === 'escuro' ? <FiSun size={24} /> : <FiMoon size={24} />}
          </styled.DivTema>
        </Tooltip>
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
            {ItemsMenu.map(({ icon, label, route, divider }) => {
              return (
                <Fragment key={crypto.randomBytes(8).toString('hex')}>
                  {divider && <MenuDivider />}
                  <MenuItem onClick={() => navigate(route)}>{MenuItemConteudo(label, icon)}</MenuItem>
                </Fragment>
              );
            })}
          </>
        </Menu>
      </styled.DivPerfil>
    </styled.DivAppBar>
  );
};

export default memo(AppBar);
