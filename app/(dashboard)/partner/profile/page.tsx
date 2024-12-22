import PartnerCompanyInformation from '@/components/global/dashboard/partner-company-information';
import PartnerPersonalInformation from '@/components/global/dashboard/partner-personal-information';
import React from 'react';

const PartnerProfile = () => {
  return (
    <div className='flex flex-col gap-8'>
      <PartnerPersonalInformation />
      <PartnerCompanyInformation />
    </div>
  );
};

export default PartnerProfile;
