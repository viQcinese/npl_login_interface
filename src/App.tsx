import React, { useCallback, useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import Validate from './utils/validate';

import Input from './components/Input';
import Button from './components/Button';

import { Container, Form, GlobalStyle } from './styles';
import mockLogin from './services/login';

const App: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();

      const isEmailValid = Validate.email(email);
      const isPasswordValid = Validate.password(password);

      setEmailError(!isEmailValid);
      setPasswordError(!isPasswordValid);

      if (isEmailValid && isPasswordValid) {
        await mockLogin({ email, password });
      }
    },
    [email, password],
  );

  return (
    <>
      <GlobalStyle />
      <Container>
        <Form autoComplete="off" onSubmit={handleSubmit} noValidate>
          <h1>Login</h1>
          <Input
            name="email"
            type="email"
            placeholder="email"
            icon={FiMail}
            value={email}
            onChange={e => setEmail(e.target.value)}
            isErrored={emailError}
          />
          <Input
            name="password"
            type="password"
            placeholder="password"
            icon={FiLock}
            value={password}
            onChange={e => setPassword(e.target.value)}
            isErrored={passwordError}
          />

          <Button>Submit</Button>
          <a href="#">Forget password</a>
        </Form>
        <a href="#">Create an account</a>
      </Container>
    </>
  );
};

export default App;
