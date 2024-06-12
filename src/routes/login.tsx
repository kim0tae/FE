import { useState } from 'react';
import { styled } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

import * as S from '../components/ui-components';

export const Title = styled.h1`
  font-size: 42px;
`;

export const Form = styled.form`
  margin-top: 50px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
export const Input = styled.input`
  padding: 10px 20px;
  border: 1px solid #d8d8d8;
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

export default function CreateAccount() {
  const [isLoading, setLoading] = useState(false);
  return (
    <>
      <S.ColumnWrapper>
        <Title>Sign in to myWeb</Title>
        <Form>
          <Input name="email" placeholder="ID" type="email" required />
          <Input name="email" placeholder="Password" type="password" required />
          <Input type="submit" value={isLoading ? 'Loading...' : 'Login'} />
        </Form>
        <S.RowWrapper>
          <Link to="/join">아이디 찾기</Link>
          <Link to="/join">비밀번호 찾기</Link>
          <Link to="/join">회원가입</Link>
        </S.RowWrapper>
      </S.ColumnWrapper>
    </>
  );
}
