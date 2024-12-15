'use client';

import Upload from '@/components/global/personal-info/upload';
import Title from '@/components/global/title';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';
import OnboardButton from '@/components/global/onboard-button';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Controller, useForm } from 'react-hook-form';
import LoadingOverlay from '@/components/global/loading-overlay';
import { useState } from 'react';
import { useAppContext } from '@/lib/context';

const PersonalInfo = () => {
  const { refetchUser, user } = useAppContext();
  const { image, bio, firstName, lastName, dateOfBirth, gender, address } =
    user?.personalInfo || {};
  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      image: image || '',
      bio: bio || '',
      firstName: firstName || '',
      lastName: lastName || '',
      dateOfBirth: dateOfBirth?.split('T')[0] || '',
      gender: gender || '',
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

  const onSubmit = async (data: any) => {
    try {
      if (!isDirty) {
        return router.push('/pro/onboard/professional-info');
      }
      setIsLoading(true);

      data.dateOfBirth = new Date(data.dateOfBirth).toISOString();

      const formData = new FormData();

      const { image, ...rest } = data;

      formData.append('image', data.image);

      formData.append('data', JSON.stringify(rest));

      console.log('formData', formData);

      const response = await fetch('/api/user/personal-information', {
        method: 'POST',
        body: formData,
      });

      const responseData = await response.json();
      if (responseData.status === 200) {
        refetchUser();
        toast.success('Personal information submitted successfully!');
        reset();
        router.push('/pro/onboard/professional-info');
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
      <Title text='Personal Info' />

      <div className='flex flex-col gap-8'>
        <div className='text-center flex flex-col gap-3'>
          <Upload register={register} setValue={setValue} image={image} />
        </div>

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

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <div className='flex flex-col gap-3'>
            <label className='text-base font-medium leading-[22.4px] text-[#1C1C1C]'>
              First name
            </label>
            <Input
              {...register('firstName', { required: 'First name is required' })}
              className='rounded-[12px] h-14 bg-[#f9f9f9]'
              placeholder='Please enter your full name'
              name='firstName'
            />
            {errors.firstName &&
              renderError(errors.firstName.message as string)}
          </div>
          <div className='flex flex-col gap-3'>
            <label className='text-base font-medium leading-[22.4px] text-[#1C1C1C]'>
              Last name
            </label>
            <Input
              {...register('lastName', { required: 'Last name is required' })}
              className='rounded-[12px] h-14 bg-[#f9f9f9]'
              placeholder='Please enter your full name'
              name='lastName'
            />
            {errors.lastName && renderError(errors.lastName.message as string)}
          </div>
          <div className='flex flex-col gap-3'>
            <label className='text-base font-medium leading-[22.4px] text-[#1C1C1C]'>
              Date of Birth
            </label>
            <Input
              {...register('dateOfBirth', {
                required: 'Date of birth is required',
              })}
              className='rounded-[12px] h-14 bg-[#f9f9f9]'
              type='date'
              placeholder='DD/MM/YYYY'
              name='dateOfBirth'
            />
            {errors.dateOfBirth &&
              renderError(errors.dateOfBirth.message as string)}
          </div>
          <div className='flex flex-col gap-3'>
            <label className='text-base font-medium'>Gender</label>
            <Controller
              name='gender'
              control={control}
              rules={{ required: 'Gender is required.' }}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className='rounded-[12px] h-14 bg-[#f9f9f9]'>
                    <SelectValue placeholder='Gender' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value='male'>Male</SelectItem>
                      <SelectItem value='female'>Female</SelectItem>
                      <SelectItem value='other'>Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.gender && renderError(errors.gender.message as string)}
          </div>
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
                {...register('address.city', { required: 'City is required' })}
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

export default PersonalInfo;
