import { styled } from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Dim = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
`;
const Popup = styled.div`
  height: 300px;
  width: 300px;
  background-color: beige;
  border-radius: 15px;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default function LayerPopup() {
  return (
    <>
      <Dim />
      <Wrapper>
        <Popup>
          <Content> Test Content </Content>
        </Popup>
      </Wrapper>
    </>
  );
}
