import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../home';
import Login from '../views/user/login';
import CreateAccount from '../views/user/join';
import FindID from '../views/user/find-id';
import FindPWD from '../views/user/find-pwd';
import MyProfile from '../views/user/my-profile';
import InsertBoard from '../views/contents/board';

export default function ReactRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<CreateAccount />} />
        <Route path="/my-profile/:id" element={<MyProfile />} />
        <Route path="/contents/board" element={<InsertBoard />} />
      </Routes>
    </BrowserRouter>
  );
}
