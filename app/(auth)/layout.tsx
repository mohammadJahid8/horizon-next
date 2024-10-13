/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <>
      {children}
      <div className='fixed bottom-4 right-8 p-2.5 cursor-pointer hover:underline'>
        <span className='flex items-center'>
          <img src='/info.svg' alt='help' />
          <span className='ml-2 text-sm'>Need help?</span>
        </span>
      </div>
    </>
  );
};

export default AuthLayout;
