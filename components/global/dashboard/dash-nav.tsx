'use client';

import * as React from 'react';
import Link from 'next/link';
import { Bell, FileText, Settings, Menu, Rocket } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Logo from '../logo';

export default function DashboardNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  const items = [
    {
      href: '/notifications',
      icon: <Bell className='h-5 w-5 md:h-4 md:w-4 lg:h-6 lg:w-6' />,
      label: 'Notifications',
    },
    {
      href: '/documents',
      icon: <FileText className='h-5 w-5 md:h-4 md:w-4 lg:h-6 lg:w-6' />,
      label: 'Documents',
    },
    {
      href: '/settings',
      icon: <Settings className='h-5 w-5 md:h-4 md:w-4 lg:h-6 lg:w-6' />,
      label: 'Settings',
    },
  ];

  return (
    <nav className='p-6 bg-white fixed top-0 w-full z-50'>
      <div className='flex items-center justify-between max-w-[1392px] mx-auto'>
        <div className='flex items-center gap-2 lg:gap-8'>
          <Logo className='text-3xl lg:text-4xl' />
          <div className='hidden md:block'>
            <UpgradeButton />
          </div>
        </div>
        <div className='hidden md:flex items-center gap-2 lg:gap-8'>
          {items.map((item) => (
            <NavItem key={item.href} href={item.href} icon={item.icon}>
              {item.label}
            </NavItem>
          ))}

          <Button
            variant='ghost'
            size='icon'
            className='rounded-full w-10 h-10 lg:w-16 lg:h-16'
          >
            <img
              src='/user.png'
              alt='User'
              className='rounded-full w-full h-full object-cover'
            />
          </Button>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant='outline' size='icon' className='md:hidden'>
              <Menu className='h-6 w-6' />
            </Button>
          </SheetTrigger>
          <SheetContent side='left' className='max-w-[300px]'>
            <SheetTitle />
            <nav className='flex flex-col space-y-4 mt-10'>
              <Button
                variant='ghost'
                size='icon'
                className='rounded-full w-20 h-20 mx-auto'
              >
                <img
                  src='/user.png'
                  alt='User'
                  className='rounded-full w-full h-full object-cover'
                />
              </Button>

              <UpgradeButton />

              {items.map((item) => (
                <NavItem key={item.href} href={item.href} icon={item.icon}>
                  {item.label}
                </NavItem>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

function NavItem({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Button
      href={href}
      className={cn(
        'h-[45px] md:h-[50px] lg:h-[55px] 2xl:h-[65px] rounded-[12px] p-5 flex justify-start md:justify-center items-center gap-2 bg-accent text-[#6C6C6C] hover:text-white transition-colors duration-200 px-3 lg:px-4 text-base md:text-sm lg:text-lg font-medium'
      )}
    >
      {icon}
      <span>{children}</span>
    </Button>
  );
}

const UpgradeButton = () => {
  return (
    <Button className='flex items-center bg-secondary h-[50px] lg:h-[55px] 2xl:h-[65px] text-sm lg:text-lg font-medium rounded-[12px] px-3 lg:px-4'>
      <Rocket className='mr-2 h-5 w-5 md:w-4 lg:w-6 lg:h-6 md:h-4  fill-current' />
      Upgrade to Pro
    </Button>
  );
};