import { styled, keyframes } from 'styled-components';

const ChangeScale = keyframes`
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
`;

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Item = styled.div`
  background-color: pink;
  height: 200px;
  width: 20px;
  margin: 2px;
  transform: scaleY(0.4);
  animation: ${ChangeScale} 1.2s infinite ease-in-out;
  &:nth-child(2) {
    animation-delay: 0.1s;
  }
  &:nth-child(3) {
    animation-delay: 0.2s;
  }
  &:nth-child(4) {
    animation-delay: 0.3s;
  }
  &:last-child {
    animation-delay: 0.4s;
  }
`;
const Dim = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`;
export default function LoadingScreen() {
  const itemArray = [];
  for (let i = 0; i <= 4; i++) {
    itemArray.push(<Item />);
  }
  return (
    <>
      <Dim />
      <Wrapper>{itemArray}</Wrapper>
    </>
  );
}
