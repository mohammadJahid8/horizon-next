'use client';

import * as z from 'zod';

import { toast } from 'sonner';
import Auth from '@/components/auth/auth';
import AuthForm from '@/components/auth/auth-form';
import { useRouter } from 'next/navigation';
const loginFields = [
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email...',
    validation: z
      .string()
      .min(1, { message: 'Email has to be filled.' })
      .email({ message: 'Enter a valid email address' }),
  },

  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password...',
    validation: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long' }),
  },
];

export default function Signup() {
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    try {
      console.log(data);
      toast.success(`Signup successful`, {
        position: 'top-center',
      });
      router.push('/pro/onboard/personal-info');
    } catch (error: any) {
      console.log(error);

      return toast.error(error.response.data.message || `Log in failed`, {
        position: 'top-center',
      });
    }
  };

  return (
    <Auth
      title={'Welcome back'}
      subtitle={'Log In to Your Account'}
      source='pro'
      type='login'
      image='/pro.jpg'
      descriptionTitle='Get Free Profile Link For Applying job'
      description="Unlock your next opportunity in healthcare. Sign in and apply job. It's fast, free, and puts you in control of your career journey."
    >
      <AuthForm
        inputFields={loginFields}
        onSubmit={handleSubmit}
        submitButtonText='Login'
        type='login'
      />
    </Auth>
  );
}
