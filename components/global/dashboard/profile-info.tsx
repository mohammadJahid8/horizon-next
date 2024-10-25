'use client';
import React from 'react';
import Cover from './cover';
import ProfileImage from './profile-image';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import ProfileName from './profile-name';
import { useAppContext } from '@/lib/context';
import ProInfo from './pro-info';
import PartnerInfo from './partner-info';

const ProfileInfo = () => {
  const { user } = useAppContext();

  return (
    <div className=''>
      <Cover />
      <div className='bg-white md:rounded-b-[16px] p-4 md:p-8 pt-6 flex gap-3 md:gap-6 sm:flex-row flex-col'>
        <div className='-mt-16 sm:-mt-[90px]'>
          <ProfileImage />
        </div>

        {user?.role === 'pro' && <ProInfo user={user} />}
        {user?.role === 'partner' && <PartnerInfo user={user} />}
      </div>
    </div>
  );
};

export default ProfileInfo;
