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
  display: flex;
  justify-content: center;
  align-items: center;
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

export default function LoadingScreen() {
  return (
    <Wrapper>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
    </Wrapper>
  );
}
