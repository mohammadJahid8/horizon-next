'use client';

import React, { useState } from 'react';
import Title from '@/components/global/title';
import OnboardButton from '@/components/global/onboard-button';
import { Check, CloudUpload, Trash2, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Loading from '@/components/global/loading';
import { useAppContext } from '@/lib/context';
import { toast } from 'sonner';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import LoadingOverlay from '@/components/global/loading-overlay';

interface FileState {
  certificate: File | null;
  resume: File | null;
  governmentId: File | null;
}

interface UploadProgressState {
  certificate: number;
  resume: number;
  governmentId: number;
}

const DocumentUpload = () => {
  const { user, refetchUser } = useAppContext();
  const router = useRouter();

  const [files, setFiles] = useState<FileState>({
    certificate: null,
    resume: null,
    governmentId: null,
  });

  const [uploadProgress, setUploadProgress] = useState<UploadProgressState>({
    certificate: 0,
    resume: 0,
    governmentId: 0,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: keyof FileState
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const fizeSizeLimit =
      type === 'certificate'
        ? 5
        : type === 'resume'
          ? 5
          : type === 'governmentId'
            ? 2
            : 0;

    if (file.size > fizeSizeLimit * 1024 * 1024) {
      toast.error(`File size exceeds the limit of ${fizeSizeLimit} MB.`);
      return;
    }

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!files.certificate && !files.resume && !files.governmentId) {
      return router.push('/pro/onboard/completed');
    }

    setIsLoading(true);

    const formData = new FormData();
    for (const [key, value] of Object.entries(files)) {
      if (value) {
        formData.append(key, value);
      }
    }

    try {
      const response = await fetch('/api/user/document-upload', {
        method: 'POST',
        body: formData,
      });

      const responseData = await response.json();
      if (responseData.status === 200) {
        refetchUser();
        router.push('/pro/onboard/completed');
      } else {
        throw new Error(responseData.message || 'Something went wrong!');
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const isFileUploaded = (type: keyof FileState) => {
    return user?.documents?.[type] || uploadProgress?.[type] === 100;
  };

  return (
    <div>
      <Title text='Documents upload' />
      {isLoading && <LoadingOverlay />}
      <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4'>
          {(['certificate', 'resume', 'governmentId'] as const).map(
            (type, index) => (
              <div key={index} className='flex flex-col'>
                <div
                  className={cn(
                    'flex sm:flex-row flex-col gap-4 sm:items-center justify-between p-5 bg-white rounded-[12px]',
                    isFileUploaded(type) ? 'rounded-b-none' : ''
                  )}
                >
                  <div className='flex items-center gap-3'>
                    <div
                      className={cn(
                        'w-10 h-10 rounded-full flex items-center justify-center',
                        isFileUploaded(type) ? 'bg-[#33B55B]' : 'bg-[#F5F5F5]'
                      )}
                    >
                      <Check
                        className={cn(
                          'w-6 h-6',
                          isFileUploaded(type) ? 'text-white' : 'text-[#D2D2D2]'
                        )}
                      />
                    </div>
                    <div className='flex flex-col gap-2 flex-1'>
                      <p className='font-semibold text-lg'>
                        {type === 'certificate' && 'Upload certificates'}
                        {type === 'resume' && 'Resume/CV'}
                        {type === 'governmentId' &&
                          'Government ID (Passport, NID, Driving license)'}
                      </p>
                      <p className='text-xs text-[#5E6864]'>
                        {type === 'certificate' &&
                          'doc or pdf formats, up to 5mb.'}
                        {type === 'resume' && 'doc or pdf formats, up to 5mb.'}
                        {type === 'governmentId' &&
                          'jpeg, png, pdf formats, up to 2MB.'}
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
                  <UploadProgress
                    files={files}
                    type={type}
                    uploadProgress={uploadProgress}
                    handleCancel={handleCancel}
                  />
                )}

                {files[type] && uploadProgress[type] === 100 && (
                  <CurrentFile
                    files={files}
                    type={type}
                    handleCancel={handleCancel}
                  />
                )}

                {typeof user?.documents?.[type] === 'string' && (
                  <SavedFile
                    file={user?.documents?.[type]!}
                    type={type}
                    refetch={refetchUser}
                    setIsLoading={setIsLoading}
                  />
                )}
              </div>
            )
          )}
        </div>

        <div className='flex gap-5'>
          <OnboardButton text='Submit' className='w-full' type='submit' />
          <OnboardButton
            text='Skip for now'
            className='w-full bg-white text-[#1C1C1C] border border-gray-300 hover:text-white'
            href='/pro/onboard/personal-info'
          />
        </div>
      </form>
    </div>
  );
};

export default DocumentUpload;

const UploadProgress = ({
  files,
  type,
  uploadProgress,
  handleCancel,
}: {
  files: FileState;
  type: keyof FileState;
  uploadProgress: UploadProgressState;
  handleCancel: (type: keyof FileState) => void;
}) => {
  return (
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
                {(files[type]?.size! / (1024 * 1024)).toFixed(2)} MB •{' '}
                <Loading size='sm' />
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
  );
};

const CurrentFile = ({
  files,
  type,
  handleCancel,
}: {
  files: FileState;
  type: keyof FileState;
  handleCancel: (type: keyof FileState) => void;
}) => {
  return (
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
                {(files[type]?.size! / (1024 * 1024)).toFixed(2)} MB • Ready to
                upload
              </span>
            </div>
            <button
              className='text-[#3A4742]'
              onClick={() => handleCancel(type)}
            >
              <X className='w-6 h-6' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const fileExtensionDetector = (file: string) => {
  const extension = file?.split('.').pop();
  return extension;
};

const SavedFile = ({
  file,
  type,
  refetch,
  setIsLoading,
}: {
  file: string;
  type: keyof FileState;
  refetch: () => void;
  setIsLoading: (isLoading: boolean) => void;
}) => {
  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('data', JSON.stringify({ [type]: null }));
      const response = await fetch('/api/user/document-upload', {
        method: 'POST',
        body: formData,
      });

      const responseData = await response.json();
      if (responseData.status === 200) {
        refetch();
        toast.success(`${type} deleted successfully!`);
      } else {
        throw new Error(responseData.message || 'Something went wrong!');
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='p-5 bg-white rounded-b-[12px] border-t-[1px] border-[#EBEBEB] flex flex-col gap-2'>
      <div className='flex gap-2'>
        <img src='/file.svg' alt='file' className='w-10 h-10' />
        <div className='flex justify-between items-center w-full gap-2'>
          <Link
            href={file}
            target='_blank'
            className='font-medium text-sm text-blue-500 hover:underline'
          >
            {type}.{fileExtensionDetector(file)}
          </Link>
          <button
            type='button'
            className='text-[#3A4742]'
            onClick={handleDelete}
          >
            <Trash2 className='w-6 h-6' />
          </button>
        </div>
      </div>
    </div>
  );
};
