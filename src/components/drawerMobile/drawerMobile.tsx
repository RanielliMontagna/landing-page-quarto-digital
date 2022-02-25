import { memo } from 'react';
import { MenuItem } from '@szhsin/react-menu';
import { Menu, MenuItemConteudo, OpcoesMenu } from 'components';
import { IoMenuSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import crypto from 'crypto';

const DrawerMobile = () => {
  const navigate = useNavigate();

  return (
    <Menu
      align="start"
      menuButton={
        <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
          <IoMenuSharp size={24} />
        </div>
      }
    >
      <>
        {OpcoesMenu.map((value) => (
          <MenuItem key={crypto.randomBytes(8).toString('hex')} onClick={() => navigate(value.caminho)}>
            {MenuItemConteudo(value.titulo, value.icone)}
          </MenuItem>
        ))}
      </>
    </Menu>
  );
};

export default memo(DrawerMobile);
