'use client';

import { logout } from '@/app/actions';
import app from '@/app/firebase/firebase.init';
import { getAuth, signOut } from 'firebase/auth';
import { useEffect } from 'react';
const auth = getAuth(app);
const Logout = () => {
  useEffect(() => {
    const handleLogout = async () => {
      await signOut(auth);
      await logout();
      window.location.href = '/';
    };

    handleLogout();
  }, []);

  return null;
};

export default Logout;
