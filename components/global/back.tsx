'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

const Back: React.FC<{ disabled?: boolean }> = ({ disabled }) => {
  const router = useRouter();

  const [previousRoute, setPreviousRoute] = useState('');
  console.log({ previousRoute });

  useEffect(() => {
    // Check the document referrer on page load
    const previousUrl = document.referrer;
    if (previousUrl) {
      const { pathname } = new URL(previousUrl);
      setPreviousRoute(pathname);
    }
  }, []);

  const handleBack = () => {
    if (previousRoute.includes('pro/') && previousRoute.split('/').length > 2) {
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
