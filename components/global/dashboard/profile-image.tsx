import { Camera } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';

const ProfileImage = () => {
  const params = useParams();
  const pathname = usePathname();

  const isProProfileFromPartner =
    pathname.includes('partner/pros/') && params.id ? true : false;
  const [profileImage, setProfileImage] = useState('/user.png');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className='relative w-[104px] h-[104px] md:w-52 md:h-52'>
      <img
        src={profileImage}
        alt='Profile'
        className='rounded-full w-full h-full object-cover p-1 bg-white'
      />
      {!isProProfileFromPartner && (
        <label className='absolute bottom-1 right-1 sm:bottom-2 sm:right-2 bg-[#1C1C1C] p-1 rounded-full cursor-pointer md:w-14 md:h-14 w-7 h-7 sm:w-10  sm:h-10 flex items-center justify-center text-white'>
          <input
            type='file'
            accept='image/*'
            onChange={handleImageUpload}
            className='hidden'
          />
          <Camera className='md:h-6 md:w-6 sm:h-5 sm:w-5 h-4 w-4' />
        </label>
      )}
    </div>
  );
};

export default ProfileImage;
