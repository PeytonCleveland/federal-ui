import React, { FC } from 'react';
import { styled, keyframes } from '@stitches/react';

interface Props {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary';
  className?: string;
  [key: string]: unknown;
}

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const StyledSpinner = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '20px',
  height: '20px',
  '&:after': {
    content: '""',
    display: 'block',
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    border: '2px solid #fff',
    animation: `${spin} 0.7s linear infinite`,
  },
  variants: {
    size: {
      xs: {
        width: '14px',
        height: '14px',
        '&:after': {
          width: '10px',
          height: '10px',
          borderWidth: '1px',
        },
      },
      sm: {
        width: '20px',
        height: '20px',
        '&:after': {
          width: '14px',
          height: '14px',
          borderWidth: '2px',
        },
      },
      md: {
        width: '30px',
        height: '30px',
        '&:after': {
          width: '20px',
          height: '20px',
          borderWidth: '3px',
        },
      },
      lg: {
        width: '40px',
        height: '40px',
        '&:after': {
          width: '28px',
          height: '28px',
          borderWidth: '4px',
        },
      },
      xl: {
        width: '50px',
        height: '50px',
        '&:after': {
          width: '36px',
          height: '36px',
          borderWidth: '5px',
        },
      },
    },
    color: {
      primary: {
        '&:after': {
          borderColor: '#ccc #ccc #1673FF #ccc',
        },
      },
      secondary: {
        '&:after': {
          borderColor: '#ccc #ccc #fff #ccc',
        },
      },
    },
  },
});

const Spinner: FC<Props> = ({
  size = 'md',
  color = 'primary',
  className,
  ...rest
}) => (
  <StyledSpinner size={size} color={color} className={className} {...rest} />
);

export default Spinner;
