import React from 'react';
import ProfileImage from '../profile-image';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import ProfileName from '../profile-name';
import ProAccountInfo from './pro-account-info';
import { useAppContext } from '@/lib/context';
import PartnerAccountInfo from './partner-account-info';

const AccountSidebar = () => {
  const { user } = useAppContext();
  const name =
    user?.personalInfo?.firstName + ' ' + user?.personalInfo?.lastName;
  return (
    <aside className='lg:px-6 2xl:px-10 py-10 2xl:py-20 bg-white flex flex-col gap-[52px] h-screen  overflow-y-auto scrollbar-hide'>
      <div className='flex flex-col gap-8 lg:pt-20'>
        <div className='flex flex-col gap-4'>
          <ProfileImage />
          <div className='flex flex-col gap-1 sm:gap-3 w-full'>
            <ProfileName name={name} />
            <div className='flex justify-between flex-col gap-12'>
              {user?.role === 'pro' && <ProAccountInfo />}
              {user?.role === 'partner' && <PartnerAccountInfo />}
              <Button
                variant='ghost'
                className='text-start text-red-500 font-medium w-max'
              >
                <Trash2 className='h-4 w-4 mr-2' />
                Delete Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AccountSidebar;
