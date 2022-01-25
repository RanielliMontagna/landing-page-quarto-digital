import { Drawer } from 'components';
import { FC } from 'react';
import ConfiguracoesProvider from 'store/config/configuracoesProvider/configuracoesProvider';
import * as styled from './private.styles';

export interface PrivateProps {
  children: JSX.Element;
}

const Private: FC<PrivateProps> = ({ children }) => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <div>
        <Drawer />
      </div>
      <ConfiguracoesProvider>
        <styled.DivChildren>{children}</styled.DivChildren>
      </ConfiguracoesProvider>
    </div>
  );
};

export default Private;
