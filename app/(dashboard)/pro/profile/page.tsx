import PersonalInformation from '@/components/global/dashboard/personal-information';
import ProfessionalInformation from '@/components/global/dashboard/professional-information';

export default function Profile() {
  return (
    <div className='flex flex-col gap-8'>
      <PersonalInformation />
      <ProfessionalInformation />
    </div>
  );
}
