import { useState } from 'react';
import { styled } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

import * as S from '../../components/styles/ui-components';

const Title = styled.h1`
  font-size: 42px;
`;

const Form = styled.form`
  margin-top: 50px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;

const UnOrderLists = styled.ul`
  display: flex;
  gap: 20px;
`;

const linkStyle = {
  color: '#888',
  textDecoration: 'none',
  padding: '10px',
};

const List = styled.li``;

export default function Login() {
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
          <UnOrderLists>
            <List>
              <Link style={linkStyle} target="_blank" to="/find-id">
                아이디 찾기
              </Link>
            </List>
            <List>
              <Link style={linkStyle} target="_blank" to="/find-pwd">
                비밀번호 찾기
              </Link>
            </List>
            <List>
              <Link style={linkStyle} target="_blank" to="/join">
                회원가입
              </Link>
            </List>
          </UnOrderLists>
        </S.Wrapper>
      </S.ColumnWrapper>
    </>
  );
}
