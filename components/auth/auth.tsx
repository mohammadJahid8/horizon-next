/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { Baskervville } from 'next/font/google';

const baskervville = Baskervville({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Auth({ title, children, subtitle, type, source }: any) {
  return (
    <div className='relative min-h-screen flex flex-col lg:flex-row'>
      <div
        className='hidden lg:flex lg:w-1/3 bg-cover bg-center text-center flex-col justify-between items-center text-white px-8 xl:px-14 pt-14'
        style={{ backgroundImage: "url('/pro_signin.svg')" }}
      >
        <div className='flex flex-col items-center justify-between h-[90vh]'>
          <h1 className={`${baskervville.className} text-5xl font-bold`}>
            Horizon
          </h1>
          <div className='xl:max-w-md mx-auto'>
            <p className='text-[32px] mb-4 leading-[46px] font-bold'>
              Get Free Profile Link For Applying job
            </p>

            <p className='mb-10'>
              Unlock your next opportunity in healthcare. Sign in and apply
              jobs. It's fast, free, and puts you in control of your career
              journey.
            </p>
          </div>
        </div>
      </div>
      <div className='w-full lg:w-2/3 p-4 pt-24 lg:p-8 bg-[#f9f9f9] overflow-y-auto h-screen scrollbar-hide'>
        <div className='w-full max-w-[620px] mx-auto space-y-6'>
          <div className='text-center space-y-2 mb-10'>
            <h1 className='text-[32px] font-semibold tracking-tight'>
              {title}
            </h1>

            <p className='text-base '>{subtitle}</p>
          </div>
          {children}

          <div className='text-start'>
            {type === 'login' ? (
              <p className='text-base'>
                New to Horizon?{' '}
                <Link
                  href={`/${source}/signup`}
                  className='text-primary font-semibold underline underline-offset-4'
                >
                  Create an account
                </Link>
              </p>
            ) : (
              <p className='text-base'>
                Already have an account?{' '}
                <Link
                  href={`/${source}/login`}
                  className='text-primary font-semibold underline underline-offset-4'
                >
                  Login
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
