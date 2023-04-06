import React, { FC } from 'react';
import { styled } from '@stitches/react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

export interface Props {
  id?: string;
  name?: string;
  defaultChecked?: boolean;
  register?: UseFormRegister<FieldValues>;
  [key: string]: unknown;
}

const StyledSwitch = styled('input', {
  opacity: 0,
  width: 0,
  height: 0,
});

const StyledSwitchLabel = styled('label', {
  position: 'relative',
  display: 'inline-block',
  width: '48px',
  height: '26px',
});

const StyledSwitchSlider = styled('span', {
  position: 'absolute',
  cursor: 'pointer',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '#ccc',
  '-webkit-transition': '.4s',
  transition: '.4s',
  borderRadius: '24px',
  '&:before': {
    position: 'absolute',
    content: '""',
    height: '20px',
    width: '20px',
    left: '3px',
    bottom: '3px',
    backgroundColor: 'white',
    '-webkit-transition': '.3s',
    transition: '.3s',
    borderRadius: '50%',
  },

  'input:checked + &': {
    backgroundColor: '#1673FF',
  },

  'input:checked + &:before': {
    '-webkit-transform': 'translateX(22px)',
    '-ms-transform': 'translateX(22px)',
    transform: 'translateX(22px)',
  },
});

const Switch: FC<Props> = ({ id, register, name }) => {
  const fieldValues = register && register(name);
  return (
    <StyledSwitchLabel>
      <StyledSwitch id={id} type="checkbox" {...fieldValues} />
      <StyledSwitchSlider />
    </StyledSwitchLabel>
  );
};
export default Switch;
