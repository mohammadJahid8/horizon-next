'use client';
import React from 'react';
import Cover from './cover';
import ProfileImage from './profile-image';
import { useAppContext } from '@/lib/context';
import ProInfo from './pro-info';
import PartnerInfo from './partner-info';

const ProfileInfo = ({
  isProProfileFromPartner,
}: {
  isProProfileFromPartner: boolean;
}) => {
  const { user } = useAppContext();

  return (
    <div className=''>
      <Cover isProProfileFromPartner={isProProfileFromPartner} />
      <div className='bg-white md:rounded-b-[16px] p-4 md:p-8 pt-6 flex gap-3 md:gap-6 sm:flex-row flex-col'>
        <div className='-mt-16 sm:-mt-[90px]'>
          <ProfileImage isProProfileFromPartner={isProProfileFromPartner} />
        </div>

        {(user?.role === 'pro' || isProProfileFromPartner) && (
          <ProInfo
            user={user}
            isProProfileFromPartner={isProProfileFromPartner}
          />
        )}
        {user?.role === 'partner' && !isProProfileFromPartner && (
          <PartnerInfo user={user} />
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
