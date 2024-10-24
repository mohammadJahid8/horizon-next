import { ReactNode } from 'react';
import AccountSidebar from './account-sidebar';
import AccountLayout from './account-layout';

interface AccountProps {
  children: ReactNode;
}

const Account: React.FC<AccountProps> = ({ children }) => {
  return (
    <main className=''>
      <div className='grid grid-rows-1 lg:grid-cols-[26%_auto] h-screen'>
        <div className='hidden lg:block'>
          <AccountSidebar />
        </div>
        <AccountLayout>{children}</AccountLayout>
      </div>
    </main>
  );
};

export default Account;
