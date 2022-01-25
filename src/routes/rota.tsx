import { Private } from 'components';
import { FC } from 'react';

interface RotaProps {
  element: JSX.Element;
  isPrivate?: boolean;
}

export const Rota: FC<RotaProps> = ({ element, isPrivate }) => {
  if (isPrivate) return <Private>{element}</Private>;
  return element;
};

export default Rota;
