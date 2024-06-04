import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000')
      .then((res) => res.json())
      .then((data) => setData(data.page));
  });
  return <div>{data}</div>;
}

export default App;
