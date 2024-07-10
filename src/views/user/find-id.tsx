import * as S from '../../components/styles/ui-components';
import { useState } from 'react';
import LayerPopup from '../../components/common/layer-popup';
import axios from 'axios';

export default function FindID() {
  const [mobile, setMobile] = useState('');
  const [isPopupActived, setIsPopupActived] = useState(false);
  const [content, setContent] = useState('');
  const onConfirm = () => {
    setIsPopupActived(false);
  };
  const onCancel = () => {
    setIsPopupActived(false);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMobile(e.target.value);
  };
  const onClick = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://192.170.1.173:8000/users/find-id', {
        mobile,
      });
      if (response.data.success) {
        setContent(`찾은 ID : '${response.data.user}'입니다.`);
        setIsPopupActived(true);
      }
    } catch (error) {
      if (error instanceof Error) {
      }
    } finally {
    }
  };
  return (
    <>
      <S.ColumnWrapper>
        {isPopupActived && <LayerPopup contentInfo={content} confirm={onConfirm} cancel={onCancel} />}
        <S.Input name="email" onChange={onChange} value={mobile} placeholder="휴대폰 번호를 입력해주세요." />
        <S.Input onClick={onClick} type="submit" value="ID 찾기" />
      </S.ColumnWrapper>
    </>
  );
}
