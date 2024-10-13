'use client';

import * as z from 'zod';

import { toast } from 'sonner';
import Auth from '@/components/auth/auth';
import AuthForm from '@/components/auth/auth-form';
import { useRouter } from 'next/navigation';
const signupFields = [
  {
    name: 'fullName',
    label: 'Full Name',
    type: 'text',
    placeholder: 'Enter your full name...',
    validation: z.string().min(1, { message: 'Full name has to be filled.' }),
  },

  {
    name: 'companyEmail',
    label: 'Company Email',
    type: 'email',
    placeholder: 'Enter your company email...',
    validation: z
      .string()
      .min(1, { message: 'Company email has to be filled.' })
      .email({ message: 'Enter a valid company email address' }),
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
  {
    name: 'confirmPassword',
    label: 'Re-type Password',
    type: 'password',
    placeholder: 'Re-enter your password...',
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
      title={'Sign up'}
      subtitle={'Create your account'}
      source='partner'
      type='signup'
      image='/partner_signin.svg'
      descriptionTitle='Review Professionals CNA’s profiles'
      description="Unlock your next opportunity in healthcare. Sign in and hire pros. It's fast, free, and puts you in control of your candidate journey."
    >
      <AuthForm
        inputFields={signupFields}
        onSubmit={handleSubmit}
        submitButtonText='Sign Up'
        type='signup'
      />
    </Auth>
  );
}
