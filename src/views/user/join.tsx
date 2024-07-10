import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import LoadingScreen from '../../components/common/loading';
import * as S from '../../components/styles/ui-components';
import LayerPopup from '../../components/common/layer-popup';
import { useNavigate } from 'react-router-dom';

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
  const [formData, setFormData] = useState({
    id: '',
    email: '',
    password: '',
    password2: '',
    mobile: '',
  });
  const [error, setError] = useState('');
  const [isPopupActived, setIsPopupActived] = useState(false);
  const [content, setContent] = useState('');
  const [isSignupSuccess, setIsSignupSuccess] = useState(false);

  const formatInfo = (name: string, value: string) => {
    if (name === 'id') {
      const Regexhanguel = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
      while (Regexhanguel.test(value)) {
        value = value.slice(0, -1);
      }
    } else if (name === 'mobile') {
      value = value.replace(/-/g, '');
    }
    return value;
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;
    if (name === 'id') {
      formattedValue = formatInfo(name, value);
    } else if (name === 'mobile') {
      formattedValue = formatInfo(name, value);
    }
    setFormData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));
  };

  const onConfirm = () => {
    if (isSignupSuccess) {
      navigate('/login');
    } else {
      setIsPopupActived(false);
    }
  };

  const onCancel = () => {
    setIsPopupActived(false);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { id, email, password, password2, mobile } = formData;

    const emailRegex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailRegex.test(email)) {
      setContent('올바른 이메일 형식을 입력해 주세요.');
      setIsPopupActived(true);
      return;
    }
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
    if (!passwordRegex.test(password) || !passwordRegex.test(password2)) {
      setContent('비밀번호 규칙에 맞게 입력해 주세요. (특수문자, 숫자, 영문 포함 8자 이상)');
      setIsPopupActived(true);
      return;
    }

    if (isLoading || !id || !email || !password || !password2) return;

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

      const data = await response.json();
      if (!response.ok) {
        setContent(data.errorMessage);
        setIsSignupSuccess(false);
      } else {
        setContent('회원가입이 완료 되었습니다.');
        setIsSignupSuccess(true);
      }
      setIsPopupActived(true);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        setContent(error.message);
        setIsSignupSuccess(false);
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
      {isPopupActived && <LayerPopup contentInfo={content} confirm={onConfirm} cancel={onCancel} />}
      {isLoading && <LoadingScreen />}
      <S.ColumnWrapper>
        <Form onSubmit={onSubmit}>
          <S.Input
            onChange={onChange}
            name="id"
            placeholder="아이디를 입력해 주세요."
            type="text"
            value={formData.id}
            required
          />
          <S.Input
            onChange={onChange}
            name="email"
            placeholder="이메일 주소를 입력해 주세요."
            type="email"
            value={formData.email}
            required
          />
          <S.Input
            onChange={onChange}
            name="password"
            placeholder="패스워드를 입력해 주세요."
            type="password"
            value={formData.password}
            required
          />
          <S.Input
            onChange={onChange}
            name="password2"
            placeholder="확인 패스워드를 입력해 주세요."
            type="password"
            value={formData.password2}
            required
          />
          <S.Input
            onChange={onChange}
            name="mobile"
            placeholder="휴대폰 번호('-') 제외하고 입력해 주세요."
            type="text"
            value={formData.mobile}
            required
          />
          <S.Input type="submit" value="회원가입" />
        </Form>
      </S.ColumnWrapper>
    </>
  );
}
