'use client';

import { logout } from '@/app/actions';
import { useEffect } from 'react';

const Logout = () => {
  useEffect(() => {
    const handleLogout = async () => {
      await logout();
      window.location.href = '/';
    };

    handleLogout();
  }, []);

  return null;
};

export default Logout;
