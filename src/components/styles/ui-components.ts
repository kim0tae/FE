import { createGlobalStyle, styled } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle` 
  ${reset};
  * {
    box-sizing: border-box;
    font-family: 'Noto Sans KR';
    letter-spacing: -0.05em;
    .scroll {
      overflow: hidden;
    }    
  }
  body {
    font-family: 'Noto Sans KR';
    letter-spacing: -0.05em;
  }
`;

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
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Input = styled.input`
  padding: 10px 20px;
  box-shadow: none;
  border: 1px solid #dadada;
  border-radius: 8px;
  width: 100%;
  font-size: 16px;
  outline: none;
  &:focus {
    outline: 1px solid #2990e4;
    border: 1px solid transparent;
  }
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

export const Button = styled.button`
  height: 35px;
  width: 150px;
  border-radius: 5px;
  border: none;
  background-color: #1d9bf0;
  color: white;
  font-weight: 500;
  margin: 10px;
`;
