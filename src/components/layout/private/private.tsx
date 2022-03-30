import { FC, memo } from 'react';
import { ConfiguracoesProvider, useApp } from 'store';
import { AppBar, Drawer, Loading } from 'components';
import * as styled from './private.styles';

export interface PrivateProps {
  children: JSX.Element;
}

const Private: FC<PrivateProps> = ({ children }) => {
  const { loading } = useApp();

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {loading && <Loading />}

      <styled.DivDrawer>
        <Drawer />
      </styled.DivDrawer>
      <ConfiguracoesProvider>
        <styled.DivChildren>
          <AppBar />
          {children}
        </styled.DivChildren>
      </ConfiguracoesProvider>
    </div>
  );
};

export default memo(Private);
