'use client';
import { cn } from '@/lib/utils';
import { IdCard, User, FileText, PencilLine } from 'lucide-react';
import { usePathname } from 'next/navigation';

const steps = [
  {
    id: 1,
    name: 'Personal Information',
    icon: <User className='h-[18px] w-[18px]' />,
    link: '/pro/onboard/personal-info',
  },
  {
    id: 2,
    name: 'Professional Information',
    icon: <IdCard className='h-[18px] w-[18px]' />,
    link: '/pro/onboard/professional-info',
  },
  {
    id: 3,
    name: 'Document Upload',
    icon: <FileText className='h-[18px] w-[18px]' />,
    link: '/pro/onboard/document-upload',
  },
  {
    id: 4,
    name: 'Sign documents',
    icon: <PencilLine className='h-[18px] w-[18px]' />,
    link: '/pro/onboard/sign-documents',
  },
];

const Steps = () => {
  const pathname = usePathname();

  return (
    <ul className='space-y-6'>
      {steps.map((step) => {
        const isActive = pathname === step.link;
        return (
          <li key={step.id} className='flex items-center'>
            <a
              href={step.link}
              className={cn(
                'flex items-center',
                isActive ? 'text-[#1C1C1C]' : 'text-[#8d8d8d]'
              )}
            >
              <div
                className={cn(
                  'h-10 w-10 mr-3 rounded-full border flex items-center justify-center',
                  isActive
                    ? 'border-[#33B55B]'
                    : 'border-[#8e8e8e] text-[#8e8e8e]'
                )}
              >
                {step.icon}
              </div>
              <div className='flex flex-col gap-[10px]'>
                <span
                  className={cn(
                    'text-sm font-medium',
                    isActive ? 'text-[#6C6C6C]' : 'text-[#b6b6b6]'
                  )}
                >
                  Step - {step.id}
                </span>
                <p className='text-lg font-medium'>{step.name}</p>
                {isActive && (
                  <span className='text-sm font-medium text-[#33B55B]'>
                    In progress
                  </span>
                )}
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Steps;
