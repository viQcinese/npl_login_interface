import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    height: 100vh;
    background: #000;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;

  background: #fff;
  padding: 24px;

  a {
    text-decoration: none;
    color: #666;
    font-size: 16px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 64px;

  h1 {
    color: #444;
    font-size: 32px;
  }

  a {
    text-decoration: none;
    color: #666;
    font-size: 16px;
  }

  button {
    margin-bottom: 16px;
    margin-top: 8px;
  }
`;
