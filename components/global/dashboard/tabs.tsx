'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface TabItem {
  label: string;
  href: string;
}

interface TabsProps {
  items: TabItem[];
}

const Tabs: React.FC<TabsProps> = ({ items }) => {
  const pathname = usePathname();

  return (
    <div className='px-4 p-6 md:p-8 bg-white md:rounded-[16px]'>
      <div className='flex items-center gap-8'>
        {items.map((item, index) => (
          <Link key={index} href={item.href}>
            <span
              className={`text-base md:text-xl ${
                pathname === item.href
                  ? 'text-[#1C1C1C] font-semibold'
                  : 'text-[#6C6C6C]'
              }`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
