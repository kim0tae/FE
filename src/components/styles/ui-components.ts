import { styled } from 'styled-components';

export const RowWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 50px 0px;
`;

export const ColumnWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 50px 0px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  padding: 10px 20px;
  box-shadow: none;
  border: 1px solid #dadada;
  border-radius: 8px;
  width: 100%;
  font-size: 16px;
  &[type='submit'] {
    background-color: #1d9bf0;
    color: white;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    border: none;
  }
`;
