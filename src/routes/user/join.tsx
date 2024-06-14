import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import LoadingScreen from '../../components/loading';

import * as S from '../../components/styles/ui-components';
import LayerPopup from '../../components/layer-popup';

const Form = styled.form`
  margin-top: 50px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;

const Title = styled.h1`
  font-size: 42px;
`;

export default function CreateAccount() {
  const [isLoading, setLoading] = useState(false);
  const [id, setID] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'id') {
      setID(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'mobile') {
      setMobile(value);
    } else if (name === 'password2') {
      setPassword2(value);
    }
  };

  const onConfirm = () => {};
  const onCancel = () => {};
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading || id === '' || email === '' || password === '') return;
    try {
      setLoading(true);
      const response = await fetch('http://192.170.1.173:8000/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, email, password, password2, mobile }),
      });
      if (!response.ok) {
        <LayerPopup contentInfo={'Error'} confirm={onConfirm} cancel={onCancel} />;
      }
      console.log(response);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <S.ColumnWrapper>
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <Form onSubmit={onSubmit}>
            <S.Input onChange={onChange} name="id" placeholder="Name" type="text" value={id} required />
            <S.Input onChange={onChange} name="email" placeholder="Email" type="email" value={email} required />
            <S.Input
              onChange={onChange}
              name="password"
              placeholder="Password"
              type="password"
              value={password}
              required
            />
            <S.Input
              onChange={onChange}
              name="password2"
              placeholder="Password Confirm"
              type="password"
              value={password2}
              required
            />
            <S.Input onChange={onChange} name="mobile" placeholder="Mobile" type="text" value={mobile} required />
            <S.Input type="submit" value="Create Account" />
          </Form>
        )}
      </S.ColumnWrapper>
      {error && <div>Error: {error}</div>}
    </>
  );
}
