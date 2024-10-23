'use client';
import { Button } from '@/components/ui/button';
import React from 'react';
import EditBtn from './edit-btn';
import Title from '../title';

const Skills: React.FC = () => {
  const availableSkills = [
    'PPE',
    'VACCINE',
    'ORAL HYGIENE',
    'MEDICAL TERMINOLOGY',
    'BEDPAN',
  ];
  return (
    <div className='px-4 p-6 md:p-8 bg-white md:rounded-[16px]'>
      <div className='flex items-center justify-between border-b pb-4 mb-8'>
        <Title text='Skills' className='mb-0 !text-lg md:!text-2xl' />
        <EditBtn />
      </div>
      <div className='flex flex-wrap gap-3'>
        {availableSkills.map((skill, index) => (
          <Button
            key={index}
            className='bg-accent text-[#1C1C1C] text-xs md:text-lg h-8 md:h-12'
            variant='ghost'
          >
            {skill}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Skills;
