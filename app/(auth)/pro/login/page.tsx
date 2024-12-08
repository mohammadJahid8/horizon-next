import { getProLoginData } from '@/app/actions';
import ProLogin from '@/components/global/pro-login';

export default async function ProLoginPage() {
  const loginData = await getProLoginData();

  return <ProLogin {...loginData} />;
}
