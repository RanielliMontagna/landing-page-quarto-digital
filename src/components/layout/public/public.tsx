import { memo } from 'react';
import { Outlet } from 'react-router-dom';

import { useApp } from 'store';
import { Loading } from 'components';
import { DivChildren } from './public.styles';

const Public = () => {
  const { loading } = useApp();

  return (
    <div style={{ display: 'flex', overflow: 'hidden' }}>
      {loading && <Loading />}
      <DivChildren>
        <Outlet />
      </DivChildren>
    </div>
  );
};

export default memo(Public);
