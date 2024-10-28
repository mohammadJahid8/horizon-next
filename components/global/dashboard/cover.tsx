import { useState } from 'react';
import Image from 'next/image';
import { Camera } from 'lucide-react';

const Cover = ({
  isProProfileFromPartner,
}: {
  isProProfileFromPartner: boolean;
}) => {
  const [coverImage, setCoverImage] = useState('/cover.png');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setCoverImage(imageUrl);
    }
  };

  return (
    <div className='relative w-full h-[150px] md:h-[250px] lg:h-[319px] '>
      {!isProProfileFromPartner && (
        <label className='absolute z-10 top-4 md:top-8 left-4 md:left-8 cursor-pointer flex items-center space-x-2 bg-white/20 backdrop-blur-md p-1.5 md:p-2 rounded-lg md:rounded-[16px] text-white text-xs md:text-sm font-normal'>
          <input
            type='file'
            accept='image/*'
            onChange={handleImageUpload}
            className='hidden'
          />

          <Camera className='h-4 w-4 md:h-6 md:w-6' />
          <span>Cover Image</span>
        </label>
      )}
      <Image
        src={coverImage}
        alt='Cover'
        layout='fill'
        objectFit='cover'
        className='md:rounded-t-[16px]'
      />
    </div>
  );
};

export default Cover;
