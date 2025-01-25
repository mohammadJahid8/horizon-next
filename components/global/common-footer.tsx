'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Footer from './landing/footer';

const CommonFooter = ({ footerData }: { footerData: any }) => {
  const pathname = usePathname();
  const showFooter =
    pathname === '/' || pathname === '/partners' || pathname === '/pros';

  return showFooter ? <Footer {...footerData} /> : null;
};

export default CommonFooter;
