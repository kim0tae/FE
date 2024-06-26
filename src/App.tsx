import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { styled } from 'styled-components';
import Home from './routes/home';
import reset from 'styled-reset';
import Login from './routes/user/login';
import { useState, useEffect } from 'react';
import LoadingScreen from './components/loading';
import LayerPopup from './components/layer-popup';
import CreateAccount from './routes/user/join';
import FindID from './routes/user/find-id';
import FindPWD from './routes/user/find-pwd';
import MyProfile from './routes/user/my-profile';
import InsertBoard from './routes/contents/board';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [],
  },
  {
    path: '/login',
    element: <Login />,
    children: [],
  },
  {
    path: '/join',
    element: <CreateAccount />,
  },
  {
    path: '/find-id',
    element: <FindID />,
  },
  {
    path: '/find-pwd',
    element: <FindPWD />,
  },
  {
    path: '/my-profile/:id', // 1. ':사용할 Param 이름' 방식으로 전달합니다.
    element: <MyProfile />,
  },
  {
    path: '/contents/board',
    element: <InsertBoard />,
  },
]);

const GlobalStyles = createGlobalStyle` 
  ${reset};
  * {
    box-sizing: border-box;
	font-family: 'Noto Sans KR';
	letter-spacing: -0.05em;
    .scroll {
      overflow: hidden;
    }
    
  }
  body {
    font-family: 'Noto Sans KR';
    letter-spacing: -0.05em;
  }
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

function App() {
  const [isLoading, setLoading] = useState(true);
  const init = () => {
    setLoading(false);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <Wrapper>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </Wrapper>
  );
}

export default App;
