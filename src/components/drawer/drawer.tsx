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

  return (
    <styled.DivMenu>
      <styled.DivLogo>
        <div>
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <h1 style={{ fontWeight: 800, fontSize: '50px', fontFamily: 'Qanelas Soft' }}>Q</h1>
            <h3 style={{ fontFamily: 'Qanelas Soft', fontSize: '20px' }}>D</h3>
          </div>
        </div>
      </styled.DivLogo>
      <Botoes />
      <Tooltip title={titleTooltip('Sair')} placement="right" arrow>
        <styled.DivRodape onClick={() => navigate('/login')}>
          <ImExit size={24} />
        </styled.DivRodape>
      </Tooltip>
    </styled.DivMenu>
  );
};

export default Drawer;
