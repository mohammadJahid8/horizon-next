'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import Logo from './logo';
import Container from './container';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Pros', href: '/pros' },
    { name: 'Partners', href: '/partners' },
  ];

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white border-b py-4'>
      <Container>
        <div className='flex h-16'>
          <div className='flex items-center md:hidden'>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant='ghost' className='p-2'>
                  <svg
                    width='23'
                    height='20'
                    viewBox='0 0 23 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M2 2H16'
                      stroke='#01400F'
                      strokeWidth='2.3'
                      strokeLinecap='round'
                    />
                    <path
                      d='M2 18H16'
                      stroke='#01400F'
                      strokeWidth='2.3'
                      strokeLinecap='round'
                    />
                    <path
                      d='M7 10H21'
                      stroke='#01400F'
                      strokeWidth='2.3'
                      strokeLinecap='round'
                    />
                  </svg>

                  <span className='sr-only'>Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side='left' className='w-[300px] sm:w-[400px]'>
                <nav className='flex flex-col justify-center items-center gap-12 text-center mt-20'>
                  <div className='flex flex-col gap-12'>
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`text-base font-medium ${
                          pathname === item.href
                            ? 'text-primary'
                            : 'text-[#6C6C6C]'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className='flex flex-col gap-12 w-full'>
                    <Button
                      className='text-white w-full'
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </Button>
                    <Link
                      href='/register'
                      className='text-[#6C6C6C] hover:text-primary text-base font-medium'
                      onClick={() => setIsOpen(false)}
                    >
                      Register
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <div className='flex-shrink-0 flex items-center mx-auto'>
            <Logo className='md:text-3xl' />
          </div>

          <div className='hidden md:flex items-center justify-center flex-1 px-8'>
            <div className='flex space-x-16'>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`inline-flex items-center px-1 pt-1 text-base font-normal ${
                    pathname === item.href
                      ? 'text-primary'
                      : 'text-[#1C1C1C] hover:text-primary transition-colors'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className='hidden md:flex items-center space-x-6'>
            <Link
              href='/register'
              className='text-[#6C6C6C] hover:text-primary px-3 py-2 rounded-md text-base font-medium transition-colors'
            >
              Register
            </Link>
            <Button className='text-white h-10 px-5 rounded-lg font-medium'>
              Login
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
