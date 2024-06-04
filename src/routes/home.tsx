import { useState, useEffect } from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justfy-content: center;
  align-items: center;
`;

const Button = styled.button`
  height: 30px;
  width: 200px;
  border-radius: 5px;
  border: none;
  background-color: #056ac9;
  color: white;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: 1 px solid;
  width: 100%;
  font-size: 16px;
  &[type='submit'] {
    background-color: #1d9bf0;
    color: black;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000')
      .then((res) => res.json())
      .then((data) => setData(data.page));
  });
  return (
    <Wrapper>
      <Button>{data}</Button>
      <Input name="name" placeholder="" type="text" required />
    </Wrapper>
  );
}
