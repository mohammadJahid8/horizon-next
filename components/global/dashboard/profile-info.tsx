'use client';
import React, { useEffect } from 'react';
import Cover from './cover';
import ProfileImage from './profile-image';
import { useAppContext } from '@/lib/context';
import ProInfo from './pro-info';
import PartnerInfo from './partner-info';
import { useQuery } from '@tanstack/react-query';
import { getUserById } from '@/app/actions';

const ProfileInfo = ({
  isProProfileFromPartner,
  id,
}: {
  isProProfileFromPartner: boolean;
  id: string;
}) => {
  const { user } = useAppContext();

  const { data: userById, isLoading } = useQuery({
    queryKey: [`userById`, id],
    queryFn: async () => await getUserById(id),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const userProfileImage = isProProfileFromPartner
    ? userById?.personalInfo?.image
    : user?.personalInfo?.image;

  const userCoverImage = isProProfileFromPartner
    ? userById?.coverImage
    : user?.coverImage;

  const userData = isProProfileFromPartner ? userById : user;

  return (
    <div className=''>
      <Cover
        isProProfileFromPartner={isProProfileFromPartner}
        userCoverImage={userCoverImage}
      />
      <div className='bg-white md:rounded-b-[16px] p-4 md:p-8 pt-6 flex gap-3 md:gap-6 sm:flex-row flex-col'>
        <div className='-mt-16 sm:-mt-[90px]'>
          <ProfileImage
            isProProfileFromPartner={isProProfileFromPartner}
            userProfileImage={userProfileImage}
          />
        </div>

        {(user?.role === 'pro' || isProProfileFromPartner) && (
          <ProInfo
            user={userData}
            isProProfileFromPartner={isProProfileFromPartner}
          />
        )}
        {user?.role === 'partner' && !isProProfileFromPartner && (
          <PartnerInfo user={userData} />
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
