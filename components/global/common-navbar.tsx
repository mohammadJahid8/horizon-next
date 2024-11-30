'use client';

import React from 'react';
import Navbar from './navbar';
import { usePathname } from 'next/navigation';

const CommonNavbar = ({ user }: { user: any }) => {
  const pathname = usePathname();
  const showNavbar =
    pathname === '/' || pathname === '/partners' || pathname === '/pros';

  return showNavbar ? <Navbar user={user} /> : null;
};

export default CommonNavbar;
