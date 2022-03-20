import React from 'react';
import Button from '../../components/Button';
import { login } from '../../services/pocket';
import { saveLocal } from '../../services/storage';

export default function LoginPage() {
  const loginInPocket = async () => {
    try {
      const { code } = await login();

      saveLocal('code', code);
    
      window.location.href = `https://getpocket.com/auth/authorize?request_token=${code}&redirect_uri=http://localhost:3000/loading`;
    }
    catch(error) {
      console.error(error);
    } 
  }

  return (
    <div>
      <Button marginTop="20px" onClick={loginInPocket}>Login</Button>
    </div>
  )
}