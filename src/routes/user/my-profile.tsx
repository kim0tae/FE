import { styled } from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function MyProfile() {
  const [username, setUserName] = useState([]);
  const location = useLocation();
  const { id } = location.state || {};
  setUserName(id);
  useEffect(() => {
    try {
      const response = fetch(`http://192.170.1.173:8000/users/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
    } catch (error) {
      if (error instanceof Error) {
      }
    } finally {
    }
  }, []);
  return (
    <>
      <div>{username} myProfile</div>
    </>
  );
}
