import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  margin: 10px;
`;

const ListItem = styled.div`
  background-color: #f1f1f1;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  width: 100%;
  max-width: 500px;
  text-align: left;
`;

export default function Home() {
  const [listData, setData] = useState([]);
  const navigate = useNavigate();
  const onClick = () => {
    try {
      navigate('/login');
    } catch (error) {}
  };
  const onBoard = () => {
    try {
      navigate('/contents/board');
    } catch (error) {}
  };
  useEffect(() => {
    const getBoard = async () => {
      try {
        const response = await axios.get('http://192.170.1.173:8000/');
        setData(response.data.boards);
      } catch (error) {
        console.error(error);
      }
    };
    getBoard();
  }, []);

  return (
    <>
      <Wrapper>
        <Button onClick={onClick}>로그인</Button>
        <Button onClick={onBoard}>게시글 작성</Button>
        {listData.map((item, index) => (
          <ListItem key={index}>
            <h3>제목 : {item.title}</h3>
            <p>내용 : {item.contents}</p>
            <small>작성일 : {new Date(item.createdAt).toLocaleString()}</small>
          </ListItem>
        ))}
      </Wrapper>
    </>
  );
}
