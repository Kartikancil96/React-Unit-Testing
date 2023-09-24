import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useCheckLogin = (token: string | null) => {
    const navigate = useNavigate();

  const checkToken = useCallback(() => {
    if (!token) {
      navigate('/');
    }
  }, [token, navigate]);

  useEffect(() => {
    checkToken();
  }, [checkToken]);
};

export default useCheckLogin;
