import Documents from '@/components/global/dashboard/documents';
import PersonalInformation from '@/components/global/dashboard/personal-information';
import ProfessionalInformation from '@/components/global/dashboard/professional-information';
import Skills from '@/components/global/dashboard/skills';
import { useParams, usePathname } from 'next/navigation';
import React from 'react';

const ProFromPartner = () => {
  return (
    <div className='flex flex-col gap-8'>
      <PersonalInformation />
      <ProfessionalInformation />
      <Skills />
      <Documents />
    </div>
  );
};

export default ProFromPartner;
