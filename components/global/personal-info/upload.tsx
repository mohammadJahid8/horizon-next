'use client';
import { Camera } from 'lucide-react';
import React, { useState } from 'react';

const Upload = ({ setValue, image }: any) => {
  const [imagePreview, setImagePreview] = useState<string | null>(image);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue('image', file, { shouldValidate: false });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <label htmlFor='profileImage' className='cursor-pointer'>
        <div className='flex flex-col items-center gap-8'>
          <span className='text-gray-500'>Upload Your Profile Image</span>
          <div className='w-28 h-28 bg-white rounded-full flex items-center justify-center'>
            {imagePreview ? (
              <img
                src={imagePreview}
                alt='Profile Preview'
                className='w-28 h-28 rounded-full object-cover'
              />
            ) : (
              <div className='bg-accent rounded-full w-9 h-9 flex items-center justify-center'>
                <Camera className='w-5 h-5 text-[#6C6C6C]' />
              </div>
            )}
          </div>
        </div>
        <input
          type='file'
          id='profileImage'
          accept='image/*'
          className='hidden'
          // {...register('image', { required: 'Image is required' })}
          onChange={handleImageChange}
        />
      </label>
    </div>
  );
};

export default Upload;
