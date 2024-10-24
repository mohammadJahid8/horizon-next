import React, { ReactNode } from 'react';
import ProfileInfo from './profile-info';
import Tabs from './tabs';

const tabItems = [
  { label: 'Profile', href: '/pro/profile' },
  { label: 'Offers (3)', href: '/pro/offers' },
  { label: 'Jobs (1)', href: '/pro/jobs' },
];

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col gap-6 max-w-screen-xl mx-auto pt-[70px] md:pt-[150px] pb-8 md:pb-16 px-0 md:px-8 xl:px-0'>
      <ProfileInfo />
      <Tabs items={tabItems} />
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
