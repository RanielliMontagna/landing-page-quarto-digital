import { Colors, Size, Variants } from 'shared/shared.types';

export interface ButtonProps {
  color?: Colors;
  size?: Size;
  fullWidth?: true;
  variant?: Variants;
  startIcon?: JSX.Element;
  onClick?: () => void;
  children: React.ReactNode;
}
