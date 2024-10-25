import React, { ReactNode } from 'react';
import ProfileInfo from './profile-info';
import Tabs from './tabs';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col gap-6 max-w-screen-xl mx-auto pt-[70px] md:pt-[150px] pb-8 md:pb-16 px-0 md:px-8 xl:px-0'>
      <ProfileInfo />
      <Tabs />
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
