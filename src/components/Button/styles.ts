import styled from 'styled-components';

export const ButtonElement = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 16px;
  width: 100%;

  outline: none;
  border: none;

  background: #224db9;
  color: #fafafa;
  font-size: 20px;
  letter-spacing: 1px;

  cursor: pointer;

  &:hover {
    background: #1c3f98;
  }
`;
