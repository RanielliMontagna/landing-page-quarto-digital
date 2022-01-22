import { FC } from 'react';
import * as styled from './button.styles';
import { ButtonProps } from './button.types';

const Button: FC<ButtonProps> = ({ children, color, size, fullWidth, variant, startIcon, onClick }) => {
  return (
    <styled.Button
      fullWidth={fullWidth ?? false}
      size={size ?? 'md'}
      className={variant ?? 'neutral'}
      onClick={onClick}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start', marginRight: '6px' }}>
        {startIcon}
      </div>
      <div style={{ whiteSpace: 'nowrap' }}>{children}</div>
    </styled.Button>
  );
};

export default Button;
