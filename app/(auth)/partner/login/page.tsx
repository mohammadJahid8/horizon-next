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
    try {
      console.log(data);
      toast.success(`Login successful`, {
        position: 'top-center',
      });
      localStorage.setItem(
        'user',
        JSON.stringify({
          name: 'Partner name',
          role: 'partner',
        })
      );
      setUser({
        name: 'Partner name',
        role: 'partner',
      });
      router.push('/partner/profile');
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
      source='partner'
      type='login'
      image='/partner_signin.svg'
      descriptionTitle='Review Professionals CNA’s profiles'
      description="Unlock your next opportunity in healthcare. Sign in and hire pros. It's fast, free, and puts you in control of your candidate journey."
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
