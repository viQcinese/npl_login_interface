import React, { useCallback, useState } from 'react';
import * as Yup from 'yup';

import { FiMail, FiLock } from 'react-icons/fi';
import Input from './components/Input';
import Button from './components/Button';

import { Container, Form, GlobalStyle } from './styles';

const App: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();
      try {
        const data = { email, password };
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('You have to enter an email')
            .email('You have to enter a valid email'),
          password: Yup.string().required('You have to enter a password'),
        });
      } catch (err) {
        console.log(err);
      }
    },
    [email, password],
  );

  return (
    <>
      <GlobalStyle />
      <Container>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <Input
            name="email"
            type="email"
            placeholder="email"
            icon={FiMail}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            name="password"
            type="password"
            placeholder="password"
            icon={FiLock}
            value={password}
            onChange={e => setPassword(e.target.value)}
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
