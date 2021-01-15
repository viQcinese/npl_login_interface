import React, { ComponentType, InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  placeholder: string;
  icon?: ComponentType<IconBaseProps>;
}

const Input: React.FC<IInputProps> = ({
  name,
  type,
  placeholder,
  icon: Icon,
}) => {
  return (
    <Container>
      {Icon && <Icon size={22} />}
      <input name={name} type={type} placeholder={placeholder} />
    </Container>
  );
};

export default Input;
