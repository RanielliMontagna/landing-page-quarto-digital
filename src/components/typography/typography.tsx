import { FC, memo } from 'react';
import * as styled from './typography.styles';
import { TypographyProps } from './typography.types';

const Typography: FC<TypographyProps> = ({ children, ...props }) => {
  return <styled.Typography {...props}>{children}</styled.Typography>;
};

export default memo(Typography);
