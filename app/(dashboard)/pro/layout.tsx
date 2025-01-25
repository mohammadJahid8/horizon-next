import { getUser } from '@/app/actions';
import { redirect } from 'next/navigation';

export default async function ProLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();
  if (user && user?.role !== 'pro') {
    return redirect('/');
  }
  return <div>{children}</div>;
}
