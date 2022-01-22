import { Button } from 'components';
import { FC } from 'react';
import * as styled from './pageHeader.styles';
import { ButtonProps } from 'components/button/button.types';

interface PageHeaderProps {
  titulo: string;
  buttons?: ButtonProps[];
}

const PageHeader: FC<PageHeaderProps> = ({ titulo, buttons }) => {
  return (
    <styled.DivPageHeader>
      <div>
        <h1>{titulo}</h1>
      </div>
      <div>
        {buttons?.map((button) => {
          return <Button {...button}>{button.children}</Button>;
        })}
      </div>
    </styled.DivPageHeader>
  );
};

export default PageHeader;
