import { memo } from 'react';
import { ConfiguracoesProvider, useApp } from 'store';
import { AppBar, Drawer, Loading } from 'components';
import * as styled from './private.styles';
import { Outlet } from 'react-router-dom';

const Private = () => {
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
          <Outlet />
        </styled.DivChildren>
      </ConfiguracoesProvider>
    </div>
  );
};

export default memo(Private);
