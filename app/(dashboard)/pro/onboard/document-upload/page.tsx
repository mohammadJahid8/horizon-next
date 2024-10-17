'use client';

import React, { useState } from 'react';
import Title from '@/components/global/title';
import OnboardButton from '@/components/global/onboard-button';
import { Check, CloudUpload, File, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Loading from '@/components/global/loading';

interface FileState {
  certificates: File | null;
  resume: File | null;
  id: File | null;
}

interface UploadProgressState {
  certificates: number;
  resume: number;
  id: number;
}

const DocumentUpload = () => {
  const [files, setFiles] = useState<FileState>({
    certificates: null,
    resume: null,
    id: null,
  });

  const [uploadProgress, setUploadProgress] = useState<UploadProgressState>({
    certificates: 0,
    resume: 0,
    id: 0,
  });

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: keyof FileState
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setFiles({ ...files, [type]: file });
      simulateDynamicUpload(type, file);
    }
  };

  const simulateDynamicUpload = (type: keyof FileState, file: File) => {
    const fileSize = file.size;
    const totalChunks = 100;
    const chunkSize = fileSize / totalChunks;
    let uploadedBytes = 0;

    const interval = setInterval(() => {
      const uploadSpeed = Math.random() * chunkSize * 1.5;
      uploadedBytes += uploadSpeed;

      const progress = Math.min(
        Math.floor((uploadedBytes / fileSize) * 100),
        100
      );

      setUploadProgress((prev) => ({ ...prev, [type]: progress }));

      if (progress >= 100) {
        clearInterval(interval);
        console.log(`${type} upload complete`);
      }
    }, 10);
  };

  const handleCancel = (type: keyof FileState) => {
    setFiles({ ...files, [type]: null });
    setUploadProgress({ ...uploadProgress, [type]: 0 });
  };

  return (
    <div>
      <Title text='Documents upload' />

      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-4'>
          {(['certificates', 'resume', 'id'] as const).map((type, index) => (
            <div key={index} className='flex flex-col'>
              <div
                className={cn(
                  'flex sm:flex-row flex-col gap-4 sm:items-center justify-between p-5 bg-white rounded-[12px]',
                  uploadProgress[type] > 0 && uploadProgress[type] < 100
                    ? 'rounded-b-none'
                    : ''
                )}
              >
                <div className='flex items-center gap-3'>
                  <div
                    className={cn(
                      'w-10 h-10 rounded-full flex items-center justify-center',
                      uploadProgress[type] === 100
                        ? 'bg-[#0066FF]'
                        : 'bg-[#F5F5F5]'
                    )}
                  >
                    <Check
                      className={cn(
                        'w-6 h-6',
                        uploadProgress[type] === 100
                          ? 'text-white'
                          : 'text-[#D2D2D2]'
                      )}
                    />
                  </div>
                  <div className='flex flex-col gap-2 flex-1'>
                    <p className='font-semibold text-lg'>
                      {type === 'certificates' && 'Upload certificates'}
                      {type === 'resume' && 'Resume/CV'}
                      {type === 'id' &&
                        'Government ID (Passport, NID, Driving license)'}
                    </p>
                    <p className='text-xs text-[#5E6864]'>
                      {type === 'certificates' &&
                        'doc or pdf formats, up to 5mb.'}
                      {type === 'resume' && 'doc or pdf formats, up to 5mb.'}
                      {type === 'id' && 'jpeg, png, pdf formats, up to 2MB.'}
                    </p>
                  </div>
                </div>
                <label className='cursor-pointer text-[#455468] font-medium text-sm border border-[#AFBACA] h-10 flex items-center justify-center gap-2 rounded-lg px-4'>
                  <input
                    type='file'
                    className='hidden'
                    onChange={(e) => handleFileChange(e, type)}
                  />
                  <CloudUpload className='w-6 h-6' />
                  Upload
                </label>
              </div>

              {uploadProgress[type] > 0 && uploadProgress[type] < 100 && (
                <div className='p-5 bg-white rounded-b-[12px] border-t-[1px] border-[#EBEBEB] flex flex-col gap-2'>
                  <div className='flex gap-2'>
                    <img src='/file.svg' alt='file' className='w-10 h-10' />
                    <div className='flex flex-col w-full gap-2'>
                      <div className='flex justify-between'>
                        <div className='flex flex-col gap-2'>
                          <span className='font-medium text-sm text-[#1C1C1C]'>
                            {files[type]?.name}
                          </span>
                          <span className='text-[#5E6864] text-xs inline-flex items-center gap-2'>
                            {(files[type]?.size! / (1024 * 1024)).toFixed(2)} MB
                            • <Loading size='sm' />
                            Uploading
                          </span>
                        </div>
                        <button
                          className='text-[#3A4742]'
                          onClick={() => handleCancel(type)}
                        >
                          <X className='w-6 h-6' />
                        </button>
                      </div>
                      <div className='flex items-center gap-1 w-full'>
                        <div className='bg-gray-200 rounded-full h-2.5 w-full'>
                          <div
                            className='h-2.5 rounded-full'
                            style={{
                              width: `${uploadProgress[type]}%`,
                              background:
                                'linear-gradient(285.44deg, #45D8FF 0%, #005BEA 82.52%)',
                            }}
                          />
                        </div>
                        <span className='text-sm text-[#3A4742] font-medium'>
                          {uploadProgress[type]}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className='flex gap-5'>
          <OnboardButton
            text='Submit'
            className='w-full'
            href='/pro/onboard/document-upload'
          />
          <OnboardButton
            text='Skip for now'
            className='w-full bg-white text-[#1C1C1C] border border-gray-300 hover:text-white'
            href='/pro/onboard/personal-info'
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentUpload;
