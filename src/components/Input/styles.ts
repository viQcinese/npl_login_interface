import styled, { css } from 'styled-components';

interface IContainerProps {
  isErrored: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  padding: 8px 12px;
  border-radius: 16px;
  background: #eee;
  border: 1px solid #eee;
  /* transition: all 0.2s; */

  svg {
    color: #999;
  }

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border: 1px solid #ef9a9a;

      svg {
        color: #b71c1c;
      }
    `}

  input {
    background: #eee;
    border: none;
    outline: none;
    font-size: 16px;
    color: #555;
    margin-left: 8px;
  }
`;
