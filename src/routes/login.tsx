import { useState } from 'react';
import { styled } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

import * as S from '../components/styles/ui-components';

const Title = styled.h1`
  font-size: 42px;
`;

const Form = styled.form`
  margin-top: 50px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ALink = styled.a`
  color: #17191d;
  text-decoration: none;
`;

const GnbLists = styled.ul`
  display: flex;
`;

export default function CreateAccount() {
  const [isLoading, setLoading] = useState(false);
  return (
    <>
      <S.ColumnWrapper>
        <Title>Sign in to myWeb</Title>
        <Form>
          <S.Input name="email" placeholder="ID" type="email" required />
          <S.Input name="email" placeholder="Password" type="password" required />
          <S.Input type="submit" value={isLoading ? 'Loading...' : 'Login'} />
        </Form>
        <S.Wrapper>
          <GnbLists>
            <li>
              <ALink href="/join">아이디 찾기</ALink>
            </li>
            <li>
              <ALink href="/join">비밀번호 찾기</ALink>
            </li>
            <li>
              <ALink href="/join">회원가입</ALink>
            </li>
          </GnbLists>
        </S.Wrapper>
      </S.ColumnWrapper>
    </>
  );
}
