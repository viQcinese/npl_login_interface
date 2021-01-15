import React, { ComponentType, InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isErrored: boolean;
  icon: ComponentType<IconBaseProps>;
}

const Input: React.FC<IInputProps> = ({ icon: Icon, isErrored, ...rest }) => {
  return (
    <Container isErrored={isErrored}>
      {Icon && <Icon size={22} />}
      <input {...rest} />
    </Container>
  );
};

export default Input;
