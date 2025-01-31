'use client';

import React from 'react';
import Navbar from './navbar';
import { usePathname } from 'next/navigation';

const CommonNavbar = ({ environmentType }: { environmentType: string }) => {
  const pathname = usePathname();
  const showNavbar =
    pathname === '/' || pathname === '/partners' || pathname === '/pros';

  return showNavbar ? <Navbar environmentType={environmentType} /> : null;
};

export default CommonNavbar;
