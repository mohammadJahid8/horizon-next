import { getPartnerLoginData } from '@/app/actions';
import ForgotPassword from '@/components/global/forgot-password';
import ResetPassword from '@/components/global/reset-password';

export const dynamic = 'force-dynamic';
const PartnerResetPasswordPage = async () => {
  const loginData = await getPartnerLoginData();
  return (
    <ResetPassword
      {...loginData}
      image={'/partner_signin.svg'}
      source='partner'
    />
  );
};

export default PartnerResetPasswordPage;
