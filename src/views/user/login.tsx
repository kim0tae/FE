import { useState } from 'react';
import { styled } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import LayerPopup from '../../components/common/layer-popup';
import axios from 'axios';

import * as S from '../../components/styles/ui-components';
import { useMutation } from 'react-query';

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

  const loginMutation = useMutation(
    async ({ id, password }: { id: string; password: string }) => {
      const response = await axios.post('http://192.170.1.173:8000/login', {
        id,
        password,
      });
      return response.data;
    },
    {
      onSuccess: (data) => {
        if (data.success) {
          localStorage.setItem('token', data.jwtToken);
          navigate(`/my-profile/${data.user._id}`, { state: { id } });
        } else {
          setError('Login failed');
        }
      },
      onError: (error: any) => {
        setError(error.message);
      },
      onSettled: () => {
        setLoading(false);
      },
    }
  );

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id === '' || password === '') return;

    try {
      await loginMutation.mutateAsync({ id, password });
    } catch (error) {
      setError('Failed to log in');
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
