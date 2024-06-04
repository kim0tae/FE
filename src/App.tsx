import { useState, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
