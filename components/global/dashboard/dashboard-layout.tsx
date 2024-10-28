import React, { ReactNode } from 'react';
import ProfileInfo from './profile-info';
import Tabs from './tabs';
import { useParams, usePathname } from 'next/navigation';
import Back from '../back';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NeedMoreModal } from './need-more-modal';
import { PartnerRequestModal } from './partner-request-modal';
import { useAppContext } from '@/lib/context';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { openNeedMore } = useAppContext();
  const pathname = usePathname();
  const params = useParams();

  const isProProfileFromPartner =
    pathname.includes('partner/pros/') && params.id ? true : false;

  return (
    <div
      className={cn(
        'flex flex-col gap-6 max-w-screen-xl mx-auto pt-[70px] md:pt-[150px] pb-8 md:pb-16 px-0 md:px-8 xl:px-0',
        isProProfileFromPartner && 'pt-[90px] md:pt-[120px] lg:pt-[150px]'
      )}
    >
      {isProProfileFromPartner && (
        <div className='flex items-center justify-between px-4 md:px-0'>
          <Back />

          <div className='flex items-center gap-4'>
            <Button
              variant='ghost'
              size='icon'
              className='h-10 md:h-12 rounded-[8px] p-3 w-fit text-xs md:text-base bg-accent'
            >
              <Heart className='size-6 md:size-8 text-[#DFE2E0] fill-[#DFE2E0]' />
            </Button>
            <Button
              className='h-12 md:h-14 rounded-[12px] text-sm md:text-lg px-12'
              onClick={openNeedMore}
            >
              Send
            </Button>
          </div>
        </div>
      )}

      <ProfileInfo isProProfileFromPartner={isProProfileFromPartner} />
      {!isProProfileFromPartner && <Tabs />}
      <div>{children}</div>

      <PartnerRequestModal />
      <NeedMoreModal />
    </div>
  );
};

export default DashboardLayout;
