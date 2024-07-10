import ReactRouter from './routes/ReactRouter';
import { useState, useEffect } from 'react';
import LoadingScreen from './components/common/loading';
import * as S from './components/styles/ui-components';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const init = () => {
    setLoading(false);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <S.Wrapper>
      <S.GlobalStyles />
      {isLoading ? <LoadingScreen /> : <ReactRouter />}
    </S.Wrapper>
  );
}
