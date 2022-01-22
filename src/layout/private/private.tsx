import { FC } from 'react';
import { Drawer } from 'components';
import { theme } from 'themes';

export interface PrivateProps {
  children: JSX.Element;
}

const Private: FC<PrivateProps> = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <Drawer />
      </div>
      <div style={{ width: '100%', background: theme.color.dark, color: theme.color.white, overflow: 'auto' }}>
        {children}
      </div>
    </div>
  );
};

export default Private;
