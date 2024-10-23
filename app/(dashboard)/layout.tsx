/* eslint-disable @next/next/no-img-element */
import Cover from '@/components/global/dashboard/cover';
import DashboardNav from '@/components/global/dashboard/dash-nav';
import ProfileInfo from '@/components/global/dashboard/profile-info';
import React, { ReactNode } from 'react';

interface OnboardLayoutProps {
  children: ReactNode;
}

const OnboardLayout: React.FC<OnboardLayoutProps> = ({ children }) => {
  return (
    <main className='bg-[#F9F9FA]'>
      <DashboardNav />
      <div className='max-w-screen-xl mx-auto pt-[70px] md:pt-[150px] px-0 md:px-8 xl:px-0'>
        <ProfileInfo />
        <div className='px-4 md:px-8 xl:px-0'>{children}</div>
      </div>
    </main>
  );
};

export default OnboardLayout;
