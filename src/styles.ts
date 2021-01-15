import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;

  background: #fff;
  padding: 24px;
  padding-bottom: 40px;

  a {
    text-decoration: none;
    color: #666;
    font-size: 16px;
  }

  > a:last-child {
    font-weight: bold;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;

  h1 {
    color: #444;
    font-size: 32px;
    margin-bottom: 40px;
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

export const LoadingSpinner = styled.img`
  height: 54px;
  width: 54px;
  margin-bottom: 24px;
`;

export const LoadingPlaceholder = styled.div`
  height: 54px;
  width: 54px;
  margin-bottom: 24px;
`;
