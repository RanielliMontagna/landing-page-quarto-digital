import { Tooltip } from '@mui/material';
import { FaBoxes, FaUsers } from 'react-icons/fa';
import { IoBedSharp } from 'react-icons/io5';
import { MdRoomService, MdDashboard } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import * as styled from '../drawer.styles';

const Botoes = () => {
  const titleTooltip = (title: string) => <h3 style={{ fontWeight: 500, fontSize: '16px' }}>{title}</h3>;
  const navigate = useNavigate();

  return (
    <styled.DivBotoes>
      <Tooltip title={titleTooltip('Dashboard')} placement="right" arrow>
        <styled.BotaoDrawer onClick={() => navigate('/dashboard')}>
          <MdDashboard size={24} />
        </styled.BotaoDrawer>
      </Tooltip>
      <Tooltip title={titleTooltip('Quartos')} placement="right" arrow>
        <styled.BotaoDrawer onClick={() => navigate('/quartos')}>
          <IoBedSharp size={24} />
        </styled.BotaoDrawer>
      </Tooltip>
      <Tooltip title={titleTooltip('Clientes')} placement="right" arrow>
        <styled.BotaoDrawer onClick={() => navigate('/clientes')}>
          <FaUsers size={24} />
        </styled.BotaoDrawer>
      </Tooltip>
      <Tooltip title={titleTooltip('Produtos')} placement="right" arrow>
        <styled.BotaoDrawer onClick={() => navigate('/produtos')}>
          <FaBoxes size={24} />
        </styled.BotaoDrawer>
      </Tooltip>
      <Tooltip title={titleTooltip('Serviços')} placement="right" arrow>
        <styled.BotaoDrawer onClick={() => navigate('/servicos')}>
          <MdRoomService size={24} />
        </styled.BotaoDrawer>
      </Tooltip>
    </styled.DivBotoes>
  );
};

export default Botoes;
