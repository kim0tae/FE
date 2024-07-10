import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './components/styles/ui-components';

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
  const onMyProfile = () => {
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
      <S.RowWrapper>
        <S.Button onClick={onClick}>로그인</S.Button>
        <S.Button onClick={onBoard}>게시글 작성</S.Button>
        <S.Button onClick={onMyProfile}>내 프로필</S.Button>
        <S.ColumnWrapper>
          {listData.map((item, index) => (
            <ListItem key={index}>
              <h3>제목 : {item.title}</h3>
              <p>내용 : {item.contents}</p>
              <small>작성자 : {item.author}</small>
              <br></br>
              <small>작성일 : {new Date(item.createdAt).toLocaleString()}</small>
            </ListItem>
          ))}
        </S.ColumnWrapper>
      </S.RowWrapper>
    </>
  );
}
