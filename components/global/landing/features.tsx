import React from 'react';
import Container from '../container';
import {
  PencilLine,
  IdCard,
  Upload,
  CloudUpload,
  FileText,
  Video,
  ScanQrCode,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Features = () => {
  const data = [
    {
      title: 'Form Signatures',
      description:
        'Develop a verification system that is both reliable and simple to navigate. CNAs should be able to verify their certifications efficiently, with clear feedback on the status and any additional steps needed.',
      icon: <PencilLine className='size-9 text-primary' />,
      bgColor: 'bg-[#BBF8DC]',
    },
    {
      title: 'Background Checks',
      description:
        'Create a seamless flow for CNAs to initiate and track their background checks. The design should make the process transparent and stress-free, providing clear instructions and real-time updates.',
      icon: <IdCard className='size-9 text-primary' />,
      bgColor: 'bg-[#6ADD8D]',
    },
    {
      title: 'Uploading Forms',
      description:
        'Design an easy-to-use document upload system. CNAs should be able to quickly upload their necessary forms, with visual indicators for successfully uploaded documents and any required actions.',
      icon: <CloudUpload className='size-9 text-primary' />,
      bgColor: 'bg-[#BBF8DC]',
    },
    {
      title: 'Certification Verification',
      description:
        'Develop a verification system that is both reliable and simple to navigate. CNAs should be able to verify their certifications efficiently, with clear feedback on the status and any additional steps needed.',
      icon: <FileText className='size-9 text-primary' />,
      bgColor: 'bg-[#6ADD8D]',
    },
    {
      title: 'Video Interviews',
      description:
        'Create a user-friendly interface for scheduling and conducting video interviews. The system should be integrated into the platform, providing CNAs with the flexibility to choose interview times and access interview resources easily.',
      icon: <Video className='size-9 text-primary' />,
      bgColor: 'bg-[#BBF8DC]',
    },
    {
      title: 'Profile Link',
      description:
        'Develop a verification system that is both reliable and simple to navigate. CNAs should be able to verify their certifications efficiently, with clear feedback on the status and any additional steps needed.',
      icon: <ScanQrCode className='size-9 text-primary' />,
      bgColor: 'bg-[#6ADD8D]',
    },
  ];

  return (
    <Container className='md:my-24 my-16 flex flex-col gap-12'>
      <h2 className='md:text-[45px] text-[31px] font-light text-green-900 md:leading-[54px] leading-[37.2px] text-center max-w-[509px] mx-auto transition-all duration-300'>
        What are the <span className='font-medium'>features of Horizzon</span>
      </h2>

      <div className='grid md:grid-cols-3 gap-5'>
        {data.map((item, index) => (
          <div
            key={index}
            className={cn(
              `bg-white p-4 md:px-9 md:py-12 gap-6 flex flex-col items-start justify-start md:min-h-[448px]`,
              item.bgColor
            )}
          >
            <div className='flex items-center justify-center md:mb-4 bg-white rounded-full size-[92px]'>
              {item.icon}
            </div>
            <h3 className='md:text-[22px] text-lg font-medium text-[#1C1C1C]'>
              {item.title}
            </h3>
            <p className='text-sm md:text-base text-[#1C1C1C]'>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Features;
