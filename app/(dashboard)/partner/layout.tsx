import { getUser } from '@/app/actions';
import { redirect } from 'next/navigation';

export default async function PartnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();
  if (user?.role !== 'partner') {
    return redirect('/');
  }
  return <div>{children}</div>;
}
