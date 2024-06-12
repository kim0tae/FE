import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  justfy-content: center;
  align-items: center;
`;

const Button = styled.button`
  height: 35px;
  width: 150px;
  border-radius: 5px;
  border: none;
  background-color: #1d9bf0;
  color: white;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  width: 100%;
  font-size: 16px;
  &[type='submit'] {
    background-color: #1d9bf0;
    color: white;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export default function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000')
      .then((res) => res.json())
      .then((data) => setData(data.page));
  });
  const onClick = () => {
    try {
      navigate('/login');
    } catch (error) {
      //console.log(error.message);
    }
  };
  return (
    <>
      <Wrapper>
        <Button onClick={onClick}>로그인</Button>
      </Wrapper>
    </>
  );
}
