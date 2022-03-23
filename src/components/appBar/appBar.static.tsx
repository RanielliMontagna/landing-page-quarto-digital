import { IoExitOutline, IoPersonOutline, IoSettingsOutline } from 'react-icons/io5';

export const ItemsMenu = [
  {
    label: 'Configurações',
    route: '/configuracoes',
    icon: <IoSettingsOutline size={16} />,
  },
  {
    label: 'Minha conta',
    route: '/minha-conta',
    icon: <IoPersonOutline size={16} />,
  },
  {
    label: 'Sair',
    route: '/login',
    icon: <IoExitOutline size={16} />,
    divider: true,
  },
];
