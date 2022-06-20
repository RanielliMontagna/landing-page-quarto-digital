import { FC, memo } from 'react';
import { useApp } from 'store';
import { Loading } from 'components';
import { DivChildren } from './public.styles';

export interface PublicProps {
  children: JSX.Element;
}

const Public: FC<PublicProps> = ({ children }) => {
  const { loading } = useApp();

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {loading && <Loading />}
      <DivChildren>{children}</DivChildren>
    </div>
  );
};

export default memo(Public);
