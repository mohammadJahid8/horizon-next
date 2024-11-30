import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import CommonNavbar from '@/components/global/common-navbar';
import Provider from '@/lib/provider';
import { Toaster } from 'sonner';
import Refresh from '@/components/global/refresh';
import { getTokens, getUser } from './actions';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Horizzon',
  description:
    "Unlock your next opportunity in healthcare. Sign in and apply jobs. It's fast, free, and puts you in control of your career journey.",
  twitter: {
    card: 'summary_large_image',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  const user = await getUser();
  return (
    <html lang='en'>
      <body className={`${poppins.className}`}>
        <Provider>
          <Refresh />
          <CommonNavbar user={user} />
          <main>{children}</main>
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
