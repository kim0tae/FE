import { useState, useEffect } from 'react';
import { styled } from 'styled-components';

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000')
      .then((res) => res.json())
      .then((data) => setData(data.page));
  });
  return { data };
}
