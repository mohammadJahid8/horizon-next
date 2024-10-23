import DashboardNav from '@/components/global/dashboard/dash-nav';
import ProfileInfo from '@/components/global/dashboard/profile-info';
import Tabs from '@/components/global/dashboard/tabs';
import React, { ReactNode } from 'react';

interface OnboardLayoutProps {
  children: ReactNode;
}

const tabItems = [
  { label: 'Profile', href: '/pro/profile' },
  { label: 'Offers (3)', href: '/pro/offers' },
  { label: 'Jobs (1)', href: '/pro/jobs' },
];

const OnboardLayout: React.FC<OnboardLayoutProps> = ({ children }) => {
  return (
    <main className='bg-[#F9F9FA]'>
      <DashboardNav />
      <div className='flex flex-col gap-6 max-w-screen-xl mx-auto pt-[70px] md:pt-[150px] px-0 md:px-8 xl:px-0'>
        <ProfileInfo />
        <Tabs items={tabItems} />
        <div className='px-0 md:px-8 xl:px-0'>{children}</div>
      </div>
    </main>
  );
};

export default OnboardLayout;
