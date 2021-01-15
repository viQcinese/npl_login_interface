import React, { ButtonHTMLAttributes } from 'react';

import { ButtonElement } from './styles';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  type,
}) => {
  return <ButtonElement type={type}>{children}</ButtonElement>;
};

export default Button;
