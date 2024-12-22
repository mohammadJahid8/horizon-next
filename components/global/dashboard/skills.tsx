'use client';
import { Button } from '@/components/ui/button';
import React from 'react';
import EditBtn from './edit-btn';
import Title from '../title';
import { useAppContext } from '@/lib/context';
import NoData from '../no-data';

const Skills: React.FC = () => {
  const { user } = useAppContext();

  const skills = user?.professionalInfo?.skills;

  return (
    <div className='px-4 p-6 md:p-8 bg-white md:rounded-[16px]'>
      <div className='flex items-center justify-between border-b pb-4 mb-8'>
        <Title text='Skills' className='mb-0 !text-lg md:!text-2xl' />
        <EditBtn href='/pro/onboard/professional-info' />
      </div>
      {skills ? (
        <div className='flex flex-wrap gap-3'>
          {skills.map((skill: string, index: number) => (
            <Button
              key={index}
              className='bg-accent text-[#1C1C1C] text-xs md:text-lg h-8 md:h-12'
              variant='ghost'
            >
              {skill}
            </Button>
          ))}
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default Skills;
