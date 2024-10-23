'use client';
import { Button } from '@/components/ui/button';
import React from 'react';
import EditBtn from './edit-btn';
import Title from '../title';
import { MoreHorizontal } from 'lucide-react';

const Documents: React.FC = () => {
  const availableDocuments = [
    { name: 'Certificate.jpeg', type: 'JPEG', image: '/jpeg.svg' },
    { name: 'Resume.pdf', type: 'PDF', image: '/file.svg' },
    { name: 'Driving License.jpeg', type: 'JPEG', image: '/jpeg.svg' },
    { name: 'NID.doc', type: 'DOC', image: '/doc.svg' },
  ];
  return (
    <div className='px-4 p-6 md:p-8 bg-white md:rounded-[16px]'>
      <div className='flex items-center justify-between border-b pb-4 mb-8'>
        <Title text='Documents' className='mb-0 !text-lg md:!text-2xl' />
        <EditBtn />
      </div>
      <div className='flex flex-wrap md:flex-nowrap gap-6'>
        {availableDocuments.map((document, index) => (
          <div
            key={index}
            className='flex flex-col justify-between p-4 md:p-8 border rounded-[24px] w-full h-32 md:h-48'
          >
            <div className='flex justify-between'>
              <img
                src={document.image}
                alt={document.type}
                className='size-[40px] md:size-[60px] mr-2'
              />

              <MoreHorizontal className='size-4 md:size-8 cursor-pointer' />
            </div>

            <p className='text-sm md:text-lg font-medium text-[#1C1C1C]'>
              {document.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documents;
