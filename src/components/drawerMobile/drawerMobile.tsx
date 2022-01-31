import { MenuItem } from '@szhsin/react-menu';
import { Menu, MenuItemConteudo, OpcoesMenu } from 'components';
import { IoMenuSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { DivDrawerMobile } from './drawerMobile.styles';

const DrawerMobile = () => {
  const navigate = useNavigate();

  return (
    <Menu
      align="end"
      menuButton={
        <DivDrawerMobile>
          <IoMenuSharp size={36} />
        </DivDrawerMobile>
      }
    >
      <>
        {OpcoesMenu.map((value) => (
          <MenuItem onClick={() => navigate(value.caminho)}>{MenuItemConteudo(value.titulo, value.icone)}</MenuItem>
        ))}
      </>
    </Menu>
  );
};

export default DrawerMobile;
