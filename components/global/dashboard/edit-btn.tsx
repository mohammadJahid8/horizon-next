'use client';

import { Button } from '@/components/ui/button';
import { Pencil } from 'lucide-react';
import { useParams, usePathname } from 'next/navigation';
import React from 'react';

const EditBtn = ({
  href,
  onClick,
}: {
  href?: string;
  onClick?: () => void;
}) => {
  const params = useParams();
  const pathname = usePathname();

  const isProProfileFromPartner =
    pathname.includes('partner/pros/') && params.id ? true : false;
  const isPublicProPage = pathname.includes('pro/') && params.id ? true : false;

  if (isProProfileFromPartner || isPublicProPage) return null;

  return (
    <Button
      variant='special'
      className='flex items-center gap-3 cursor-pointer'
      role='button'
      href={href}
      onClick={onClick}
    >
      <div className='p-1.5 md:p-2 rounded-full bg-primary text-white'>
        <Pencil className='size-3 md:size-4' />
      </div>
      <span className='hidden md:block text-lg text-primary font-medium'>
        Edit
      </span>
    </Button>
  );
};

export default EditBtn;
