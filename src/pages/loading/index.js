import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authorizeUser } from '../../services/pocket';
import { loadLocal, saveLocal } from '../../services/storage';

export default function LoadingPage() {
  const navigate = useNavigate();

  const getToken = async () => {
    try {
      const code = loadLocal('code');
      const { access_token, username } = await authorizeUser(code);

      saveLocal('access_token', access_token);
      saveLocal('username', username);
      navigate('/home');
    }
    catch(error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    getToken();
  })

  return (
    <div>
      <h1>Loading</h1>
    </div>
  )
}