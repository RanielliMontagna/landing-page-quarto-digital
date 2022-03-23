import { ButtonColors, Size, Variants } from 'shared';

export interface ButtonProps {
  color?: ButtonColors;
  size?: Size;
  fullWidth?: true;
  variant?: Variants;
  startIcon?: JSX.Element;
  onClick?: () => void;
  children: React.ReactNode;
}
