import { FC } from 'react';
import { ConfiguracoesProvider } from 'store';
import { AppBar, Drawer, DrawerMobile } from 'components';
import * as styled from './private.styles';

export interface PrivateProps {
  children: JSX.Element;
}

const Private: FC<PrivateProps> = ({ children }) => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <styled.DivDrawer>
        <Drawer />
      </styled.DivDrawer>
      <styled.DivDrawerMobile>
        <DrawerMobile />
      </styled.DivDrawerMobile>
      <ConfiguracoesProvider>
        <styled.DivChildren>
          <AppBar />
          {children}
        </styled.DivChildren>
      </ConfiguracoesProvider>
    </div>
  );
};

export default Private;
