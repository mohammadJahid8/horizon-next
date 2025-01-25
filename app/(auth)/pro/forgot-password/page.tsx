import { getProLoginData } from '@/app/actions';
import ForgotPassword from '@/components/global/forgot-password';

export const dynamic = 'force-dynamic';
const ProForgotPasswordPage = async () => {
  const loginData = await getProLoginData();
  return <ForgotPassword {...loginData} image={'/pro.jpg'} source='pro' />;
};

export default ProForgotPasswordPage;
