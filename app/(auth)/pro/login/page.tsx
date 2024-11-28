'use client';

import * as z from 'zod';

import { toast } from 'sonner';
import Auth from '@/components/auth/auth';
import AuthForm from '@/components/auth/auth-form';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/lib/context';
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

export default function Login() {
  const router = useRouter();
  const { setUser } = useAppContext();

  const handleSubmit = async (data: any) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });

    const responseData: any = await response.json();
    console.log('responseData', responseData);

    if (responseData.status === 200) {
      window.location.href = '/';
      return toast.success(responseData.message || `Login successful`, {
        position: 'top-center',
      });
    }

    if (responseData.status === 500) {
      return toast.error(responseData.message || `Login failed`, {
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
