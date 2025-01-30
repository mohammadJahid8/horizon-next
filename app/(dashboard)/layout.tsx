'use client';
import Account from '@/components/global/dashboard/account/account';
import DashboardNav from '@/components/global/dashboard/dashboard-nav';
import DashboardLayout from '@/components/global/dashboard/dashboard-layout';
import { usePathname, useRouter } from 'next/navigation';
import React, { ReactNode } from 'react';
import { useAppContext } from '@/lib/context';

interface DashboardProps {
  children: ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  const pathname = usePathname();

  const isAccountPage =
    pathname.includes('notifications') || pathname.includes('settings');

  return (
    <main className='bg-[#F9F9FA]'>
      <DashboardNav />
      {isAccountPage ? (
        <Account>{children}</Account>
      ) : (
        <DashboardLayout>{children}</DashboardLayout>
      )}
    </main>
  );
};

export default Dashboard;
