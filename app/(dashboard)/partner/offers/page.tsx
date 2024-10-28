import { Button } from '@/components/ui/button';
import {
  Download,
  FileText,
  Heart,
  Hourglass,
  MapPin,
  MoveUpRight,
  RotateCw,
  X,
} from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import { Check, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

// Start of Selection
const offers = [
  {
    id: 1,
    name: 'Leslie Alexander',
    location: 'Brookline, MA, 02445',
    bio: 'Floyd Miles is a magna cum laude Biomedical Engineering graduate from Gotham University. With experience as a Registered Nurse and a current role as a Health Educator, he brings expertise in patient care and health education. Certified in Patient Service Fundamentals by Johns Hopkins, he is based in Springfield, Illinois.',
    email: 'deanna.curtis@example.com',
    phone: '(307) 555-0133',
    requirements: [
      'Proof letter of a certain experience',
      'Signed NDA',
      'Form C',
    ],
    image: '/user.png',
    date: '10:37AM, 12 Sep, 2024',
    status: 'PENDING',
    action: 'Update Requirements',
  },
  {
    id: 2,
    name: 'Julie Rupert',
    location: 'Brookline, MA, 02445',
    bio: 'Floyd Miles is a magna cum laude Biomedical Engineering graduate from Gotham University. With experience as a Registered Nurse and a current role as a Health Educator, he brings expertise in patient care and health education. Certified in Patient Service Fundamentals by Johns Hopkins, he is based in Springfield, Illinois.',
    email: 'deanna.curtis@example.com',
    phone: '(307) 555-0133',
    requirements: [
      'Proof letter of a certain experience',
      'Signed NDA',
      'Form C',
    ],
    image: '/user.png',
    isAccepted: true,
    date: '10:37AM, 12 Sep, 2024',
    status: 'ACCEPTED',
    action: 'Download All',
  },
  {
    id: 3,
    name: 'Emilio Northern',
    location: 'Brookline, MA, 02445',
    bio: 'Floyd Miles is a magna cum laude Biomedical Engineering graduate from Gotham University. With experience as a Registered Nurse and a current role as a Health Educator, he brings expertise in patient care and health education. Certified in Patient Service Fundamentals by Johns Hopkins, he is based in Springfield, Illinois.',
    email: 'deanna.curtis@example.com',
    phone: '(201) 555-0123',
    image: '/user.png',
    date: '10:37AM, 12 Sep, 2024',
    status: 'REJECTED',
  },
];

const availableSkills = ['PPE', 'VACCINE'];

const statusColors = {
  PENDING: 'text-[#FF9500]',
  ACCEPTED: 'text-[#33B55B]',
  REJECTED: 'text-[#FF5652]',
};

const statusIcons = {
  PENDING: <Hourglass className='size-4' />,
  ACCEPTED: <Check className='size-4' />,
  REJECTED: <X className='size-4' />,
};

const actionIcons = {
  'Update Requirements': <RotateCw className='size-3 md:size-4 mr-1' />,
  'Download All': <Download className='size-3 md:size-4 mr-1' />,
};
const actionColors = {
  ACCEPTED: 'text-primary',
  PENDING: 'text-[#DFE2E0]',
};

const PartnerOffers = () => {
  return (
    <div className='flex flex-col gap-8'>
      {offers.map((offer, index) => (
        <div key={index} className='px-4 p-6 md:p-8 bg-white md:rounded-[16px]'>
          <div className='flex flex-col gap-4 w-full'>
            <div className='flex justify-between items-start'>
              <div className='flex flex-col gap-4'>
                <span
                  className={cn(
                    'text-[#6C6C6C80] text-sm flex items-center gap-2',
                    statusColors[offer.status as keyof typeof statusColors]
                  )}
                >
                  {statusIcons[offer.status as keyof typeof statusIcons]}
                  {offer.status}
                </span>
                <span className='text-[#6C6C6C80] text-sm'>{offer.date}</span>
              </div>
              <MoreHorizontal className='w-6 h-6' />
            </div>
            <div className='flex xs:flex-row flex-col justify-between gap-4 xs:items-center'>
              <div className='flex items-center gap-2'>
                <Image
                  src={offer.image}
                  alt={offer.name}
                  width={58}
                  height={58}
                  className='w-12 h-12 sm:size-[58px] rounded-full object-cover'
                />
                <div>
                  <h2 className='text-base sm:text-lg text-[#1C1C1C] inline-flex items-center gap-2 sm:pb-1 font-semibold'>
                    {offer.name}{' '}
                  </h2>
                  <p className='text-[#6C6C6C] text-xs sm:text-sm flex items-center gap-1.5'>
                    <MapPin className='size-4' /> {offer.location}
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <Button
                  href={`/partner/offers/${offer.id}`}
                  variant='outline'
                  className='h-10 md:h-12 rounded-[12px] w-fit text-xs md:text-base'
                >
                  View Profile
                  <MoveUpRight className='size-4 ml-2' />
                </Button>
                <Button
                  variant='ghost'
                  size='icon'
                  className='h-10 md:h-12 rounded-[8px] p-3 w-fit text-xs md:text-base bg-accent'
                >
                  <Heart className='size-6 text-secondary fill-secondary' />
                </Button>
              </div>
            </div>

            <p className='text-sm md:text-base text-[#6C6C6C]'>{offer.bio}</p>

            <div className='flex flex-wrap gap-3 items-center'>
              {availableSkills.map((skill, index) => (
                <Button
                  key={index}
                  className='bg-accent text-[#1C1C1C] text-xs md:text-sm h-7 md:h-9'
                  variant='ghost'
                >
                  {skill}
                </Button>
              ))}
              <span className='text-xs md:text-sm text-[#1C1C1C]'>
                +12 more
              </span>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 w-auto'>
              <div className='flex flex-col gap-2'>
                <p className='text-[#6C6C6C] text-sm'>Email address</p>
                <p className='text-[#1C1C1C] font-medium text-sm md:text-base'>
                  {offer.email}
                </p>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-[#6C6C6C] text-sm'>Phone number</p>
                <p className='text-[#1C1C1C] font-medium text-sm md:text-base'>
                  {offer.phone}
                </p>
              </div>
            </div>

            {offer.requirements && (
              <div className='flex flex-col gap-3'>
                <p className='text-base text-[#1C1C1C] flex items-center gap-2'>
                  <FileText className='w-6 h-6 text-[#6C6C6C]' />
                  Requirements
                </p>
                <ul className='flex flex-col gap-2 text-xs sm:text-sm text-[#1C1C1C] font-medium border border-[#DFE2E0] p-4 rounded-[12px] w-full'>
                  {offer.requirements?.map((requirement, idx) => (
                    <li
                      key={idx}
                      className='flex items-center gap-2 list-disc list-inside'
                    >
                      <Check
                        className={cn(
                          'size-4',
                          actionColors[
                            offer.status as keyof typeof actionColors
                          ]
                        )}
                      />
                      {requirement}
                    </li>
                  ))}
                  <Button
                    variant='outline'
                    className='border border-secondary py-2 px-4 rounded-[12px] w-full h-9'
                  >
                    {actionIcons[offer.action as keyof typeof actionIcons]}
                    {offer.action}
                  </Button>
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartnerOffers;
