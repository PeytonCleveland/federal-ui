import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({ children }) => <button>{children}</button>;

export default Button;
