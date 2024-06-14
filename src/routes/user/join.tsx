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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'mobile') {
      setMobile(value);
    }
  };

  const onConfirm = () => {};
  const onCancel = () => {};
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading || name === '' || email === '' || password === '') return;
    try {
      setLoading(true);
      const response = await fetch('http://localhost:8000/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, mobile }),
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
      {isLoading ? <LoadingScreen /> : null}
      <S.ColumnWrapper>
        <Form onSubmit={onSubmit}>
          <S.Input onChange={onChange} name="name" placeholder="Name" type="text" value={name} required />
          <S.Input onChange={onChange} name="email" placeholder="Email" type="email" value={email} required />
          <S.Input
            onChange={onChange}
            name="password"
            placeholder="Password"
            type="password"
            value={password}
            required
          />
          <S.Input onChange={onChange} name="mobile" placeholder="Mobile" type="text" value={mobile} required />
          <S.Input type="submit" value="Create Account" />
        </Form>
      </S.ColumnWrapper>
      {error && <div>Error: {error}</div>}
    </>
  );
}
