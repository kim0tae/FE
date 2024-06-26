import { useState } from 'react';
import { styled } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import LayerPopup from '../../components/layer-popup';

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
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [id, setID] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'id') {
      setID(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const onConfirm = () => {};
  const onCancel = () => {};
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading || id === '' || password === '') return;
    try {
      setLoading(true);
      const response = await fetch('http://192.170.1.173:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          password,
        }),
      });
      if (!response.ok) {
        <LayerPopup contentInfo={'Error'} confirm={onConfirm} cancel={onCancel} />;
      }
      var data = await response.json();
      if (data.success) {
        console.log(data);
        navigate(`/my-profile/${id}`, { state: { id } }); //2. ``을 통해 id 를 동적으로 전달합니다.
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <S.ColumnWrapper>
        <Title>로그인</Title>
        <Form onSubmit={onSubmit}>
          <S.Input onChange={onChange} name="id" placeholder="ID를 입력해 주세요." type="text" value={id} required />
          <S.Input
            onChange={onChange}
            name="password"
            placeholder="비밀번호를 입력해 주세요."
            type="password"
            value={password}
            required
          />
          <S.Input type="submit" value="로그인" />
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
