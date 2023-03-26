import React, { FC, ReactNode } from 'react';

export interface Props {
  children: ReactNode;
  kind?: 'filled' | 'outlined' | 'text';
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  [key: string]: unknown;
}

const Button: FC<Props> = ({
  children,
  kind = 'filled',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  onClick,
  className,
  type = 'button',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  ...rest
}) => (
  <button
    disabled={disabled}
    onClick={onClick}
    type={type}
    className={className}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
