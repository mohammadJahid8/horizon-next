'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { useAppContext } from '@/lib/context';

const Back: React.FC<{ disabled?: boolean }> = ({ disabled }) => {
  const router = useRouter();
  const { shouldStorePro } = useAppContext();

  const handleBack = () => {
    if (shouldStorePro) {
      router.push('/partner/pros');
    } else {
      router.back();
    }
  };

  return (
    <button
      onClick={handleBack}
      className='flex items-center text-base hover:underline disabled:opacity-20'
      disabled={disabled}
    >
      <ChevronLeft className='mr-2 w-4 h-4' />
      Back
    </button>
  );
};

export default Back;
