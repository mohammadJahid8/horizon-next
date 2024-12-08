// import { getProLoginData } from '@/app/actions';
import { getProLoginData } from '@/app/actions';
import ProLogin from '@/components/global/pro-login';

export const dynamic = 'force-dynamic';
export default async function ProLoginPage() {
  const loginData = await getProLoginData();

  return <ProLogin {...loginData} />;
}
