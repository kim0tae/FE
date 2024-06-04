import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000')
      .then((res) => res.json())
      .then((data) => setData(data.page));
  });
  return <div className="App">{data}</div>;
}

export default App;
