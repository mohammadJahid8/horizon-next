'use client';

import React from 'react';
import Navbar from './navbar';
import { usePathname } from 'next/navigation';

const CommonNavbar = () => {
  const pathname = usePathname();
  const isAuthPage = pathname.includes('login') || pathname.includes('signup');

  return isAuthPage ? null : <Navbar />;
};

export default CommonNavbar;
