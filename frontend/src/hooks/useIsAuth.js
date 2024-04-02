import { useState, useEffect } from 'react';
const cookie = require('js-cookie');

export function useIsAuth() {
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    setAuth(cookie.get('authToken') ? true : false);
  }, []);

  return { isAuth, setAuth };
}