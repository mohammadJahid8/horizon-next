'use client';

import { Pencil } from 'lucide-react';
import { useParams, usePathname } from 'next/navigation';
import React from 'react';

const EditBtn = () => {
  const params = useParams();
  const pathname = usePathname();

  const isProProfileFromPartner =
    pathname.includes('partner/pros/') && params.id ? true : false;

  if (isProProfileFromPartner) return null;

  return (
    <div className='flex items-center gap-3 cursor-pointer' role='button'>
      <div className='p-1.5 md:p-2 rounded-full bg-primary text-white'>
        <Pencil className='size-3 md:size-4' />
      </div>
      <span className='hidden md:block text-lg text-primary font-medium'>
        Edit
      </span>
    </div>
  );
};

export default EditBtn;
