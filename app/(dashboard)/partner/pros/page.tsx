import { Button } from '@/components/ui/button';
import { FileText, Heart, MapPin, MoveUpRight, X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const pros = [
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
  },
  {
    id: 2,
    name: 'Nishan Tomson',
    location: 'Brookline, MA, 02445',
    bio: 'Floyd Miles is a magna cum laude Biomedical Engineering graduate from Gotham University. With experience as a Registered Nurse and a current role as a Health Educator, he brings expertise in patient care and health education. Certified in Patient Service Fundamentals by Johns Hopkins, he is based in Springfield, Illinois.',
    email: 'deanna.curtis@example.com',
    phone: '(201) 555-0123',
    image: '/user.png',
  },
];

const availableSkills = ['PPE', 'VACCINE'];

const PartnerPros = () => {
  return (
    <div className='flex flex-col gap-8'>
      {pros.map((pro, index) => (
        <div key={index} className='px-4 p-6 md:p-8 bg-white md:rounded-[16px]'>
          <div className='flex flex-col gap-4 w-full'>
            <div className='flex xs:flex-row flex-col justify-between gap-4 xs:items-center'>
              <div className='flex items-center gap-2'>
                <Image
                  src={pro.image}
                  alt={pro.name}
                  width={58}
                  height={58}
                  className='w-12 h-12 sm:size-[58px] rounded-full object-cover'
                />
                <div>
                  <h2 className='text-base sm:text-lg text-[#1C1C1C] inline-flex items-center gap-2 sm:pb-1 font-semibold'>
                    {pro.name}{' '}
                  </h2>
                  <p className='text-[#6C6C6C] text-xs sm:text-sm flex items-center gap-1.5'>
                    <MapPin className='size-4' /> {pro.location}
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <Button
                  href={`/partner/pros/${pro.id}`}
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

            <p className='text-sm md:text-base text-[#6C6C6C]'>{pro.bio}</p>

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
                  {pro.email}
                </p>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-[#6C6C6C] text-sm'>Phone number</p>
                <p className='text-[#1C1C1C] font-medium text-sm md:text-base'>
                  {pro.phone}
                </p>
              </div>
            </div>

            {pro.requirements && (
              <div className='flex flex-col gap-3'>
                <p className='text-base text-[#1C1C1C] flex items-center gap-2'>
                  <FileText className='w-6 h-6 text-[#6C6C6C]' />
                  Requirements
                </p>
                <ul className='flex flex-wrap justify-between text-xs sm:text-sm text-[#1C1C1C] font-medium border border-[#DFE2E0] py-2 sm:px-4 sm:p-3 rounded-[12px] w-auto sm:w-max'>
                  {pro.requirements?.map((requirement, idx) => (
                    <li
                      key={idx}
                      className='text-start sm:text-center px-6 list-disc list-inside w-max'
                    >
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartnerPros;
