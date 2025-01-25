import React from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Copy } from 'lucide-react';
import { useAppContext } from '@/lib/context';
import { proLinkGenerator } from '@/utils/proLinkGenerator';

const ProAccountInfo = () => {
  const { user } = useAppContext();
  return (
    <>
      <div className='flex-1 flex flex-col sm:gap-3 gap-1'>
        <p className='text-base sm:text-xl text-[#3A4742] font-medium'>
          Senior Nurse
        </p>

        <div className='flex flex-wrap items-start sm:items-center sm:flex-row flex-col'>
          <span className='text-sm text-[#6d6d6d] mr-6'>
            Profile Completion
          </span>
          <div className='flex items-center'>
            <div className='w-[185px] h-2 bg-[#FAFAFA] rounded-full overflow-hidden'>
              <div
                className='h-full'
                style={{
                  width: `${user?.completionPercentage}%`,
                  background:
                    'linear-gradient(90deg, #33B55B 0%, #008000 100%)',
                }}
              ></div>
            </div>
            <span className='text-sm text-[#3A4742] font-medium ml-2'>
              {user?.completionPercentage}%
            </span>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-3 flex-1'>
        <p className='text-sm sm:text-base font-semibold text-[#1C1C1C]'>
          Copy Link for Applying the Job
        </p>
        <div className='flex items-center justify-between bg-[#FAFAFA] pl-4 pr-2 sm:h-[52px] h-10 rounded-lg '>
          <span className='text-sm sm:text-lg text-[#1C1C1C] mr-4 truncate max-w-[250px] sm:max-w-[300px]'>
            {proLinkGenerator(user?.personalInfo?.firstName, user?._id)}
          </span>
          <Button
            className='bg-primary h-9 text-white sm:px-4 px-2 rounded-[7px] flex items-center text-sm font-medium'
            onClick={() => {
              navigator.clipboard.writeText(
                proLinkGenerator(user?.personalInfo?.firstName, user?._id)
              );
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
    </>
  );
};

export default ProAccountInfo;
