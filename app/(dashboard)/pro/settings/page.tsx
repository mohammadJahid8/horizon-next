import { ChevronRight, Info } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const links = [
  {
    icon: <img src='/info.svg' alt='account' className='size-6' />,
    name: 'Account Information',
    path: '#',
  },
  {
    icon: <img src='/docs.svg' alt='account' className='size-6' />,
    name: 'License & Documents',
    path: '#',
    notification: 1,
  },
  {
    icon: <img src='/contact.svg' alt='account' className='size-6' />,
    name: 'Contact Us',
    path: '#',
  },
  {
    icon: <img src='/form.svg' alt='account' className='size-6' />,
    name: 'W-9 Form',
    path: '#',
  },
  {
    icon: <img src='/faq.svg' alt='account' className='size-6' />,
    name: 'FAQ',
    path: '#',
  },
  {
    icon: <img src='/privacy.svg' alt='account' className='size-6' />,
    name: 'Privacy Policy',
    path: '#',
  },
  {
    icon: <img src='/terms.svg' alt='account' className='size-6' />,
    name: 'Terms and Conditions',
    path: '#',
  },
  {
    icon: <img src='/logout.svg' alt='account' className='size-6' />,
    name: 'Logout',
    path: '#',
    className: 'text-red-500',
  },
];

const ProSettings = () => {
  return (
    <div className='flex flex-col bg-white rounded-lg p-6 gap-5'>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`flex items-center justify-between p-4 ${
            link.className || ''
          }`}
        >
          <div className='flex items-center gap-6'>
            {link.icon}
            <span className='text-[#6C6C6C] text-sm'>{link.name}</span>
            {link.notification && (
              <span className='bg-[#fdb603] text-white rounded-full px-2 py-1 text-xs size-6 flex items-center justify-center'>
                {link.notification}
              </span>
            )}
          </div>
          <ChevronRight className='size-5' />
        </Link>
      ))}
    </div>
  );
};

export default ProSettings;
