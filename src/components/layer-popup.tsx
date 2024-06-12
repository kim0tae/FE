import { styled } from 'styled-components';

interface LayerPopupProps {
  contentInfo: string;
  confirm: () => void;
  cancel: () => void;
}

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  top: 50%;
  left: 50%;
  z-index: 999;
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
  background-color: white;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Content = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  height: 40px;
  width: 50%;
  border-radius: 5px;
  border: 1px solid #056ac9;
  background-color: #f0f5fa;
  color: #1074f3;
  font-weight: 600;
  &:nth-child(2) {
    background-color: #056ac9;
    color: white;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px;
`;

const ContentTitle = styled.h1`
  margin: 15px;
  font-size: 20px;
  font-weight: 600;
`;

export default function LayerPopup({ contentInfo, confirm, cancel }: LayerPopupProps) {
  return (
    <>
      <Dim />
      <Wrapper>
        <Popup>
          <ContentTitle> 알림 </ContentTitle>
          <Content>{contentInfo}</Content>
          <ButtonContainer>
            <Button onClick={confirm}>확인</Button>
            <Button onClick={cancel}>취소</Button>
          </ButtonContainer>
        </Popup>
      </Wrapper>
    </>
  );
}
