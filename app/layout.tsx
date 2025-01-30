import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import CommonNavbar from '@/components/global/common-navbar';
import Provider from '@/lib/provider';
import { Toaster } from 'sonner';
import Refresh from '@/components/global/refresh';
import { getEnvironment, getUser } from './actions';
import CommonFooter from '@/components/global/common-footer';
import { getFooterData } from './actions';
import { transformEnvironment } from '@/utils/transformEnvironment';
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

export const dynamic = 'force-dynamic';
export const revalidate = 10;
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  const footerData = await getFooterData();
  const environment = await getEnvironment();
  const environmentType = transformEnvironment(environment?.environmentType);

  return (
    <html lang='en'>
      <body className={`${poppins.className}`}>
        <Provider>
          <Refresh />
          <CommonNavbar environmentType={environmentType} />
          <main>{children}</main>
          <CommonFooter footerData={footerData} />
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
