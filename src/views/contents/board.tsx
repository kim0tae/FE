import { styled } from 'styled-components';
import * as S from '../../components/styles/ui-components';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = styled.form`
  margin-top: 50px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
  font-family: 'Noto Sans KR';
`;

const TextArea = styled.textarea`
  border-radius: 8px;
  border: 1px solid #dadada;
  height: 350px;
  padding: 10px;
  resize: none;
  font-family: 'Noto Sans KR';
  &:focus {
    outline: 1px solid #2990e4;
  }
`;

export default function InsertBoard() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    contents: '',
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://192.170.1.173:8000/board/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        //
      } else {
        navigate('/');
      }
    } catch (error) {
      if (error instanceof Error) {
      }
    } finally {
    }
  };
  return (
    <>
      <S.ColumnWrapper>
        <Form onSubmit={onSubmit}>
          <S.Input
            onChange={onChange}
            name="title"
            placeholder="제목을 입력해 주세요."
            type="text"
            value={formData.title}
            required
          />
          <TextArea name="contents" placeholder="게시글을 작성해주세요." onChange={onChange} />
          <S.Input type="submit" value="게시글 작성" />
        </Form>
      </S.ColumnWrapper>
    </>
  );
}
