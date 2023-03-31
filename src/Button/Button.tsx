import React, { FC, ReactNode } from 'react';
import { styled } from '@stitches/react';
import Spinner from '../Spinner';

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

const StyledLoading = styled('span', {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
});

const StlyedChildren = styled('span', {
  variants: {
    loading: {
      true: {
        visibility: 'hidden',
      },
      false: {
        visibility: 'visible',
      },
    },
  },
});

const StyledButton = styled('button', {
  // CSS reset
  appearance: 'none',
  border: 'none',
  cursor: 'pointer',
  position: 'relative',
  margin: '0',

  // Base styles
  height: '40px',
  textTransform: 'uppercase',
  padding: '0 24px',
  borderRadius: '4px',
  fontSize: '12px',
  fontWeight: '500',
  fontFamily: 'IBM Plex Sans, sans-serif',
  letterSpacing: '0.25px',

  variants: {
    fullWidth: {
      true: {
        width: '100%',
      },
      false: {
        width: 'fit-content',
      },
    },
    kind: {
      filled: {
        backgroundColor: '#0A121E',
        border: '2px solid #0A121E',
        color: '#fff',
        '&:hover': {
          backgroundColor: '#535961',
          border: '2px solid #535961',
        },
        '&:disabled': {
          backgroundColor: '#646C78',
          border: '2px solid #646C78',
          color: '#ebf5ff',
          cursor: 'not-allowed',
        },
        '&:focus': {
          outline: '2px solid #1673FF',
        },
      },
      outlined: {
        border: '2px solid rgba(10,18,30,0.2)',
        color: '#0A121E',
        backgroundColor: 'transparent',
        '&:hover': {
          border: '2px solid #040f1f',
        },
        '&:disabled': {
          color: '#646C78',
          cursor: 'not-allowed',
          border: '2px solid rgba(10,18,30,0.2)',
        },
        '&:focus': {
          border: '2px solid rgba(10,18,30,0.2)',
          outline: '2px solid #1673FF',
        },
      },
      text: {
        padding: '0',
        backgroundColor: 'transparent',
        color: '#0A121E',
        '&:hover': {
          color: '#535961',
          textDecoration: 'underline',
          textUnderlineOffset: '4px',
          textDecorationColor: '#535961',
          textDecorationThickness: '2px',
        },
        '&:disabled': {
          color: '#646C78',
          cursor: 'not-allowed',
          textDecoration: 'none',
        },
        '&:focus': {
          color: '#1673FF',
          textDecorationColor: '#1673FF',
        },
      },
    },
  },
});

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
  <StyledButton
    kind={kind}
    disabled={disabled || loading}
    fullWidth={fullWidth}
    onClick={onClick}
    type={type}
    className={className}
    {...rest}
  >
    {loading && (
      <StyledLoading>
        <Spinner
          size="sm"
          color={kind === 'filled' ? 'secondary' : 'primary'}
        />
      </StyledLoading>
    )}
    <StlyedChildren loading={loading}>{children}</StlyedChildren>
  </StyledButton>
);

export default Button;
