'use client';
import React, { useEffect } from 'react';
import Cover from './cover';
import ProfileImage from './profile-image';
import { useAppContext } from '@/lib/context';
import ProInfo from './pro-info';
import PartnerInfo from './partner-info';

import ProfileSkeleton from './profile-skeleton';

const ProfileInfo = ({
  isProProfileFromPartner,
  userById,
  isPublicProPage,
  isLoading,
  isPartnerFromPro,
}: {
  isProProfileFromPartner: boolean;
  userById: any;
  isPublicProPage: boolean;
  isLoading: boolean;
  isPartnerFromPro: boolean;
}) => {
  const { user } = useAppContext();

  if (isLoading) {
    return <ProfileSkeleton />;
  }

  const userProfileImage =
    isProProfileFromPartner || isPublicProPage || isPartnerFromPro
      ? userById?.personalInfo?.image
      : user?.personalInfo?.image;

  const userCoverImage =
    isProProfileFromPartner || isPublicProPage || isPartnerFromPro
      ? userById?.coverImage
      : user?.coverImage;

  const userData =
    isProProfileFromPartner || isPublicProPage || isPartnerFromPro
      ? userById
      : user;

  return (
    <div className=''>
      <Cover
        isProProfileFromPartner={isProProfileFromPartner}
        isPublicProPage={isPublicProPage}
        isPartnerFromPro={isPartnerFromPro}
        userCoverImage={userCoverImage}
      />
      <div className='bg-white md:rounded-b-[16px] p-4 md:p-8 pt-6 flex gap-3 md:gap-6 sm:flex-row flex-col'>
        <div className='-mt-16 sm:-mt-[90px]'>
          <ProfileImage
            isProProfileFromPartner={isProProfileFromPartner}
            isPublicProPage={isPublicProPage}
            isPartnerFromPro={isPartnerFromPro}
            userProfileImage={userProfileImage}
          />
        </div>

        {(user?.role === 'pro' || isProProfileFromPartner || isPublicProPage) &&
          !isPartnerFromPro && (
            <ProInfo
              user={userData}
              isProProfileFromPartner={isProProfileFromPartner}
              isPublicProPage={isPublicProPage}
            />
          )}
        {(user?.role === 'partner' && !isProProfileFromPartner) ||
        isPartnerFromPro ? (
          <PartnerInfo user={userData} isPartnerFromPro={isPartnerFromPro} />
        ) : null}
      </div>
    </div>
  );
};

export default ProfileInfo;
