import OnboardPersonalInfo from '@/components/global/onboard-personal-info';
import React from 'react';

const EditPersonalInformation = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <OnboardPersonalInfo source='pro' id={params.id} />
    </div>
  );
};

export default EditPersonalInformation;
