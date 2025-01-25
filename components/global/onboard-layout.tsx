import React from 'react';
import OnboardSheet from './onboard-sheet';
import Back from './back';

interface OnboardContentLayoutProps {
  children: React.ReactNode;
  source: 'partner' | 'pro';
}

const OnboardContentLayout: React.FC<OnboardContentLayoutProps> = ({
  children,
  source,
}) => {
  return (
    <div className=' bg-[#f9f9f9] overflow-y-auto px-4 py-6 lg:p-10'>
      <div className='flex items-center gap-3 mb-8'>
        <div className='lg:hidden'>
          <OnboardSheet source={source} />
        </div>
        <Back />
      </div>
      {children}
    </div>
  );
};

export default OnboardContentLayout;
