import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styled from './drawer.styles';

import Botoes from './botoes/botoes';
import { ImExit } from 'react-icons/im';
import { Tooltip } from '@mui/material';

interface DrawerProps {}

const Drawer: FC<DrawerProps> = () => {
  const titleTooltip = (title: string) => <h3 style={{ fontWeight: 500, fontSize: '16px' }}>{title}</h3>;
  const navigate = useNavigate();
  const logo = '/static/logo/quartoDigitalBranco.svg';

  return (
    <styled.DivMenu>
      <styled.DivLogo>
        <img src={logo} alt={logo} style={{ width: '60px' }} />
      </styled.DivLogo>
      <Botoes />
      <Tooltip title={titleTooltip('Sair')} placement="right" arrow>
        <styled.DivRodape onClick={() => navigate('/login')}>
          <styled.BotaoSair>
            <ImExit size={24} />
          </styled.BotaoSair>
        </styled.DivRodape>
      </Tooltip>
    </styled.DivMenu>
  );
};

export default Drawer;
