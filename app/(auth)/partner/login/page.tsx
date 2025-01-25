import PartnerLogin from '@/components/global/partner-login';
import { getPartnerLoginData } from '@/app/actions';

export const dynamic = 'force-dynamic';
export default async function PartnerLoginPage() {
  const loginData = await getPartnerLoginData();
  return <PartnerLogin {...loginData} />;
}
