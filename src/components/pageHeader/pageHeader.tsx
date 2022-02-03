import { Button } from 'components';
import { FC } from 'react';
import * as styled from './pageHeader.styles';
import { ButtonProps } from 'components/button/button.types';
import { MdAdd } from 'react-icons/md';

interface PageHeaderProps {
  titulo: string;
  button?: ButtonProps;
}

const PageHeader: FC<PageHeaderProps> = ({ titulo, button }) => {
  return (
    <styled.DivPageHeader>
      <div className="divTitulo">
        <h1>{titulo}</h1>
      </div>
      {button && (
        <>
          <div className="botaoWeb">
            <Button {...button}>{button.children}</Button>
          </div>
          <div className="botaoMobile">
            <button onClick={button.onClick}>
              <MdAdd size={40} />
            </button>
          </div>
        </>
      )}
    </styled.DivPageHeader>
  );
};

export default PageHeader;
