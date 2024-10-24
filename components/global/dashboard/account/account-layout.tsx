import React from 'react';
import AccountSheet from './account-sheet';

interface AccountLayoutProps {
  children: React.ReactNode;
}

const AccountLayout: React.FC<AccountLayoutProps> = ({ children }) => {
  return (
    <div className=' bg-[#f9f9f9] overflow-y-auto px-4 py-6 lg:p-10 mt-16 md:mt-20'>
      <div className='flex items-center gap-3 mb-8'>
        <div className='lg:hidden'>
          <AccountSheet />
        </div>
      </div>
      {children}
    </div>
  );
};

export default AccountLayout;
