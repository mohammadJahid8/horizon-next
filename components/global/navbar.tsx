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
        <div className='flex justify-between h-16'>
          <div className='flex-shrink-0 flex items-center'>
            <Logo className='text-3xl' />
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

          <div className='flex items-center md:hidden'>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant='ghost' className='p-2'>
                  <Menu className='h-6 w-6' />
                  <span className='sr-only'>Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side='right' className='w-[300px] sm:w-[400px]'>
                <nav className='flex flex-col gap-4'>
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
                  <Link
                    href='/register'
                    className='text-[#6C6C6C] hover:text-primary text-base font-medium'
                    onClick={() => setIsOpen(false)}
                  >
                    Register
                  </Link>
                  <Button
                    className='text-white w-full'
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </nav>
  );
}
