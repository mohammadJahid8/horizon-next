import React from 'react';
import ProfileName from './profile-name';
import { CircleHelp, Copy, Star } from 'lucide-react';
import { useAppContext } from '@/lib/context';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const PartnerInfo = ({ user }: any) => {
  const { completionPercentage } = useAppContext();
  const personalInfo = user?.personalInfo;
  console.log({ personalInfo });

  const name = `${personalInfo?.firstName} ${personalInfo?.lastName}`;
  const companyName = personalInfo?.companyName;
  return (
    <div className='flex flex-col gap-2 sm:gap-3 w-full'>
      <div className='flex justify-between lg:flex-row flex-col sm:gap-6 gap-3'>
        <div className='flex flex-col gap-2'>
          <ProfileName name={name} />
          <p className='text-base sm:text-xl text-[#3A4742] font-medium'>
            {companyName}
          </p>
        </div>
        <Tracks />
      </div>
    </div>
  );
};

export default PartnerInfo;

const Tracks = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
      <div className='flex flex-col gap-1'>
        <p className='text-[#6C6C6C] text-sm md:text-base flex items-center gap-2'>
          Offers Sent{' '}
          <Star className='size-5 fill-[#FAB607] stroke-[#FAB607]' />
        </p>
        <p className='text-[#1C1C1C] font-medium text-lg md:text-2xl'>12</p>
      </div>
      <div className='flex flex-col gap-1'>
        <p className='text-[#6C6C6C] text-sm md:text-base flex items-center gap-2'>
          Jobs Conversion <CircleHelp className='size-5' />
        </p>
        <p className='text-[#1C1C1C] font-medium text-lg md:text-2xl'>0.18%</p>
      </div>
    </div>
  );
};
