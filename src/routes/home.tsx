import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
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

export default function Home() {
  const navigate = useNavigate();
  const onClick = () => {
    try {
      navigate('/login');
    } catch (error) {}
  };
  return (
    <>
      <Wrapper>
        <Button onClick={onClick}>로그인</Button>
      </Wrapper>
    </>
  );
}
