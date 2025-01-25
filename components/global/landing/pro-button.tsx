'use client';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/utils';
import React from 'react';

const ProButton = () => {
  return (
    <Button
      onClick={() => scrollToSection('joinwaitlist')}
      className='px-9 h-14 rounded-[12px] w-fit text-base md:text-lg font-semibold mx-auto'
    >
      Join the waitlist
    </Button>
  );
};

export default ProButton;
