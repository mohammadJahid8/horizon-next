import { getPartnerLoginData } from '@/app/actions';
import ForgotPassword from '@/components/global/forgot-password';

export const dynamic = 'force-dynamic';
const PartnerForgotPasswordPage = async () => {
  const loginData = await getPartnerLoginData();
  return (
    <ForgotPassword
      {...loginData}
      image={'/partner_signin.svg'}
      source='partner'
    />
  );
};

export default PartnerForgotPasswordPage;
