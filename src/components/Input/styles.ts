import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 8px 12px;
  border-radius: 16px;
  background: #eee;

  svg {
    color: #999;
  }

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  input {
    background: #eee;
    border: none;
    outline: none;
    font-size: 16px;
    color: #555;
    margin-left: 8px;
  }
`;
