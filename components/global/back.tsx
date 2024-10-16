'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

const Back: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      className='flex items-center text-base hover:underline'
    >
      <ChevronLeft className='mr-2 w-4 h-4' />
      Back
    </button>
  );
};

export default Back;
