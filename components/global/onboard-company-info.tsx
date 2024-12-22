'use client';
import Title from '@/components/global/title';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

import OnboardButton from '@/components/global/onboard-button';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import LoadingOverlay from '@/components/global/loading-overlay';
import { useState } from 'react';
import { useAppContext } from '@/lib/context';

const OnboardCompanyInfo = () => {
  const { refetchUser, user } = useAppContext();
  const { bio, dateEstablished, address } = user?.companyInfo || {};

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      bio: bio || '',
      dateEstablished: dateEstablished ? dateEstablished?.split('T')[0] : '',
      address: {
        street: address?.street || '',
        city: address?.city || '',
        state: address?.state || '',
        zipCode: address?.zipCode || '',
        country: address?.country || '',
      },
    },
  });

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  console.log({ isDirty });

  const onSubmit = async (data: any) => {
    try {
      const path = '/partner/profile';
      if (!isDirty) {
        router.push(path);
        return;
      }
      setIsLoading(true);

      data.dateEstablished = new Date(data.dateEstablished).toISOString();

      const response = await fetch('/api/user/company-information', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      if (responseData.status === 200) {
        refetchUser();
        toast.success('Company information submitted successfully!');
        reset();
        router.push(path);
      } else {
        toast.error(responseData.message || 'Something went wrong!');
      }
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      console.log('inside catch', error);
      toast.error(error.message || 'Something went wrong!');
    }
  };

  const renderError = (message: string) => {
    return <p className='text-red-500 text-sm'>{message}</p>;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isLoading && <LoadingOverlay />}
      <Title text='Company Info' />

      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-3'>
          <h2 className='text-lg font-medium leading-[25.2px] text-gray-800'>
            About/Bio
          </h2>
          <Textarea
            {...register('bio', { required: 'Bio is required' })}
            placeholder='Write about yourself; include key areas responsibility, skills, experiences and specific qualification etc.'
            className='resize-none bg-[#f9f9f9] h-[280px] text-[#5E6864] rounded-[12px]'
          />
          {errors.bio && renderError(errors.bio.message as string)}
        </div>
        <div className='flex flex-col gap-3'>
          <label className='text-base font-medium leading-[22.4px] text-[#1C1C1C]'>
            Date of Establishment
          </label>
          <Input
            {...register('dateEstablished', {
              required: 'Date of establishment is required',
            })}
            className='rounded-[12px] h-14 bg-[#f9f9f9]'
            type='date'
            placeholder='DD/MM/YYYY'
            name='dateEstablished'
          />
          {errors.dateEstablished &&
            renderError(errors.dateEstablished.message as string)}
        </div>

        <div className='flex flex-col gap-5'>
          <h2 className='text-lg font-medium leading-[25.2px] text-gray-800'>
            Address
          </h2>
          <div className='flex flex-col gap-3'>
            <label className='text-base font-medium leading-[22.4px] text-[#1C1C1C]'>
              Street address
            </label>
            <Input
              className='rounded-[12px] h-14 bg-[#f9f9f9]'
              placeholder='Input Text'
              {...register('address.street', {
                required: 'Street address is required',
              })}
            />
            {errors.address?.street &&
              renderError(errors.address.street.message as string)}
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
            <div className='flex flex-col gap-3'>
              <label className='text-base font-medium leading-[22.4px] text-[#1C1C1C]'>
                City
              </label>
              <Input
                className='rounded-[12px] h-14 bg-[#f9f9f9]'
                placeholder='Input Text'
                {...register('address.city', {
                  required: 'City is required',
                })}
              />
              {errors.address?.city &&
                renderError(errors.address.city.message as string)}
            </div>
            <div className='flex flex-col gap-3'>
              <label className='text-base font-medium leading-[22.4px] text-[#1C1C1C]'>
                State/Province
              </label>
              <Input
                className='rounded-[12px] h-14 bg-[#f9f9f9]'
                placeholder='Input Text'
                {...register('address.state', {
                  required: 'State is required',
                })}
              />
              {errors.address?.state &&
                renderError(errors.address.state.message as string)}
            </div>
            <div className='flex flex-col gap-3'>
              <label className='text-base font-medium leading-[22.4px] text-[#1C1C1C]'>
                Postal/Zip code
              </label>
              <Input
                className='rounded-[12px] h-14 bg-[#f9f9f9]'
                placeholder='Input Text'
                {...register('address.zipCode', {
                  required: 'Zip code is required',
                })}
              />
              {errors.address?.zipCode &&
                renderError(errors.address.zipCode.message as string)}
            </div>
            <div className='flex flex-col gap-3'>
              <label className='text-base font-medium leading-[22.4px] text-[#1C1C1C]'>
                Country
              </label>
              <Input
                className='rounded-[12px] h-14 bg-[#f9f9f9]'
                placeholder='Input Text'
                {...register('address.country', {
                  required: 'Country is required',
                })}
              />
              {errors.address?.country &&
                renderError(errors.address.country.message as string)}
            </div>
          </div>
        </div>

        <OnboardButton text='Next' type='submit' />
      </div>
    </form>
  );
};

export default OnboardCompanyInfo;
