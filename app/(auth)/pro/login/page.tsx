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
