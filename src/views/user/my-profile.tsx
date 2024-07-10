import { styled } from 'styled-components';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface UserInfo {
  id: string;
  name: string;
  email: string;
  socialOnly: string;
  mobile: string;
}

interface BoardInfo {
  _id: string;
  title: string;
  contents: string;
  owner: string;
  author: string;
  createdAt: string;
  __v: number;
}

export default function MyProfile() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [boardInfo, setBoardInfo] = useState<BoardInfo | null>(null);
  const { id } = useParams<{ id: string }>();

  const getUserInfo = async (id: string | undefined) => {
    const response = await axios.post(`http://192.170.1.173:8000/users/${id}`);
    try {
      setUserInfo(response.data.user);
      setBoardInfo(response.data.boards);
    } catch (e) {
      console.error(e);
    } finally {
    }
  };

  useEffect(() => {
    getUserInfo(id);
  }, []);

  return (
    <>
      <p>{userInfo?.id}의 프로필</p>
      <br />
      {boardInfo !== null &&
        boardInfo.map((board: BoardInfo, index: number) => (
          <div key={index}>
            <p>{board.title}</p>
            <p>{board.contents}</p>
            <p>{board.author}</p>
            <p>{new Date(board.createdAt).toLocaleString()}</p>
          </div>
        ))}
    </>
  );
}
