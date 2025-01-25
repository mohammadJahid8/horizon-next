import { getPartnerSignupData } from '@/app/actions';
import PartnerSignup from '@/components/global/partner-signup';

export const dynamic = 'force-dynamic';
export default async function PartnerSignupPage() {
  const signupData = await getPartnerSignupData();
  return <PartnerSignup {...signupData} />;
}
