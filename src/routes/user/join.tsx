import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import LoadingScreen from '../../components/loading';

import * as S from '../../components/styles/ui-components';
import LayerPopup from '../../components/layer-popup';
import { Navigate, useNavigate } from 'react-router-dom';

const Form = styled.form`
  margin-top: 50px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;

export default function CreateAccount() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [id, setID] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');
  const [isPopupActived, setIsPopupActived] = useState(false);
  const [content, setContent] = useState('');

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

  const onConfirm = () => {
    navigate('/login');
  };
  const onCancel = () => {
    setIsPopupActived(false);
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
    console.log(regex.test(password));
    if (!regex.test(password)) {
      setContent('비밀번호 다시 입력');
      setIsPopupActived(true);
      return;
    }

    if (isLoading || id === '' || email === '' || password === '' || password2 === '') return;
    try {
      setLoading(true);
      const response = await fetch('http://192.170.1.173:8000/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          email,
          password,
          password2,
          mobile,
        }),
      });
      if (!response.ok) {
        var data = await response.json();
        setContent(data.errorMessage);
        setIsPopupActived(true);
      } else {
        setContent('회원가입이 완료 되었습니다.');
        setIsPopupActived(true);
      }
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
      {isPopupActived ? <LayerPopup contentInfo={content} confirm={onConfirm} cancel={onCancel} /> : null}
      {isLoading ? <LoadingScreen /> : null}
      <S.ColumnWrapper>
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
      </S.ColumnWrapper>
    </>
  );
}
