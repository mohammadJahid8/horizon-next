import { getPartnerLoginData } from '@/app/actions';
import VerifyOTP from '@/components/global/verify-otp';

export const dynamic = 'force-dynamic';
const PartnerVerifyOTPPage = async () => {
  const loginData = await getPartnerLoginData();
  return (
    <VerifyOTP {...loginData} image={'/partner_signin.svg'} source='partner' />
  );
};

export default PartnerVerifyOTPPage;
