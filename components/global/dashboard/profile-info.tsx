'use client';
import React from 'react';
import Cover from './cover';
import ProfileImage from './profile-image';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const ProfileInfo = () => {
  return (
    <div className=''>
      <Cover />
      <div className='bg-white md:rounded-b-[16px] p-4 md:p-8 pt-6 flex gap-3 md:gap-6 sm:flex-row flex-col'>
        <div className='-mt-16 sm:-mt-[90px]'>
          <ProfileImage />
        </div>

        <div className='flex flex-col gap-1 sm:gap-3 w-full'>
          <h1 className='text-xl sm:text-2xl font-semibold'>John Doe</h1>
          <div className='flex justify-between lg:flex-row flex-col sm:gap-6 gap-3'>
            <div className='flex-1 flex flex-col sm:gap-3 gap-1'>
              <p className='text-base sm:text-xl text-[#3A4742] font-medium'>
                Senior Nurse
              </p>

              <div className='flex items-start sm:items-center sm:flex-row flex-col'>
                <span className='text-sm text-[#6d6d6d] mr-6'>
                  Profile Completion
                </span>
                <div className='flex items-center'>
                  <div className='w-[185px] h-2 bg-[#FAFAFA] rounded-full overflow-hidden'>
                    <div
                      className='h-full'
                      style={{
                        width: '90%',
                        background:
                          'linear-gradient(90deg, #33B55B 0%, #008000 100%)',
                      }}
                    ></div>
                  </div>
                  <span className='text-sm text-[#3A4742] font-medium ml-2'>
                    90%
                  </span>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-3 flex-1 xl:-mt-5'>
              <p className='text-sm sm:text-base font-semibold text-[#1C1C1C]'>
                Copy Link for Applying the Job
              </p>
              <div className='flex items-center justify-between bg-[#FAFAFA] pl-4 pr-2 sm:h-[52px] h-10 rounded-lg '>
                <span className='text-sm sm:text-lg text-[#1C1C1C] mr-4'>
                  healthcare/rahat9873
                </span>
                <Button
                  className='bg-primary h-9 text-white sm:px-4 px-2 rounded-[7px] flex items-center text-sm font-medium'
                  onClick={() => {
                    navigator.clipboard.writeText('healthcare/rahat9873');
                    toast.success('Link copied to clipboard!', {
                      position: 'top-center',
                    });
                  }}
                >
                  <Copy className='h-4 w-4 sm:mr-3' />
                  <span className='sm:block hidden'>Copy</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
