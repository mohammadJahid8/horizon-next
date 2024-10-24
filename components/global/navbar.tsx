'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className='bg-white shadow-lg'>
      <div className='max-w-3xl mx-auto px-4'>
        <div className='flex justify-between'>
          <div className='flex space-x-7'>
            <div>
              <Link href='/' className='flex items-center py-4 px-2'>
                <span className='font-semibold text-gray-500 text-lg'>
                  Logo
                </span>
              </Link>
            </div>
          </div>
          <div className='hidden md:flex items-center space-x-3'>
            <Link
              href='/'
              className={`py-4 px-2 ${
                pathname === '/'
                  ? 'text-green-500 border-b-4 border-green-500'
                  : 'text-gray-500 hover:text-green-500 transition duration-300'
              }`}
            >
              Home
            </Link>
            <Link
              href='/pro'
              className={`py-4 px-2 ${
                pathname === '/pro'
                  ? 'text-green-500 border-b-4 border-green-500'
                  : 'text-gray-500 hover:text-green-500 transition duration-300'
              }`}
            >
              Pro
            </Link>
            <Link
              href='/partner'
              className={`py-4 px-2 ${
                pathname === '/partner'
                  ? 'text-green-500 border-b-4 border-green-500'
                  : 'text-gray-500 hover:text-green-500 transition duration-300'
              }`}
            >
              Partner
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
