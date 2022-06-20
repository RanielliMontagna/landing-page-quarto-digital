import { FC } from 'react';
import { Private } from 'components';
import Public from 'components/layout/public/public';

interface RotaProps {
  element: JSX.Element;
  isPrivate?: boolean;
}

export const Rota: FC<RotaProps> = ({ element, isPrivate }) => {
  if (isPrivate) return <Private>{element}</Private>;
  return <Public>{element}</Public>;
};

export default Rota;
