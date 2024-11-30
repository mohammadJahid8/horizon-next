'use client';

import * as z from 'zod';

import Auth from '@/components/auth/auth';
import AuthForm from '@/components/auth/auth-form';
import { useAppContext } from '@/lib/context';
const signupFields = [
  {
    name: 'name',
    label: 'Full Name',
    type: 'text',
    placeholder: 'Enter your full name...',
    validation: z.string().min(1, { message: 'Full name has to be filled.' }),
  },

  {
    name: 'email',
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
  const { handleSignup } = useAppContext();

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
        onSubmit={handleSignup}
        submitButtonText='Sign Up'
        type='signup'
        source='partner'
      />
    </Auth>
  );
}
