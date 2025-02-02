'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  Building2,
  Briefcase,
  HeadphonesIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AdminNav() {
  const pathname = usePathname();

  const items = [
    {
      title: 'Dashboard',
      href: '/admin',
      icon: LayoutDashboard,
    },
    {
      title: "Pro's",
      href: '/dashboard/pros',
      icon: Users,
    },
    {
      title: 'Partners',
      href: '/dashboard/partners',
      icon: Building2,
    },
    {
      title: 'Hires',
      href: '/dashboard/hires',
      icon: Briefcase,
    },
    {
      title: 'Support',
      href: '/dashboard/support',
      icon: HeadphonesIcon,
    },
  ];

  return (
    <nav className='grid items-start gap-2 p-4'>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Link key={item.href} href={item.href}>
            <Button
              variant={pathname === item.href ? 'secondary' : 'ghost'}
              className='w-full justify-start gap-2'
            >
              <Icon className='h-4 w-4' />
              {item.title}
            </Button>
          </Link>
        );
      })}
    </nav>
  );
}
