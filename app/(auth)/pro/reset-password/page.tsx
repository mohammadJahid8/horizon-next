import { getProLoginData } from '@/app/actions';
import ResetPassword from '@/components/global/reset-password';

export const dynamic = 'force-dynamic';
const ProResetPasswordPage = async () => {
  const loginData = await getProLoginData();
  return <ResetPassword {...loginData} image={'/pro.jpg'} source='pro' />;
};

export default ProResetPasswordPage;
