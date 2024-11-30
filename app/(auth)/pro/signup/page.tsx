'use client';

import * as z from 'zod';

import { toast } from 'sonner';
import Auth from '@/components/auth/auth';
import AuthForm from '@/components/auth/auth-form';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/lib/context';
// import { signupPro } from '@/utils/auth';
const signupFields = [
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
    name: 'phone',
    label: 'Phone Number',
    type: 'number',
    placeholder: 'Enter your phone number...',
    validation: z
      .string()
      .min(10, { message: 'Phone number must be at least 10 digits long' })
      .regex(/^\d+$/, { message: 'Enter a valid phone number' }),
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
      subtitle={'Create Your Account'}
      source='pro'
      type='signup'
      image='/pro.jpg'
      descriptionTitle='Get Free Profile Link For Applying job'
      description="Unlock your next opportunity in healthcare. Sign in and apply job. It's fast, free, and puts you in control of your career journey."
    >
      <AuthForm
        inputFields={signupFields}
        onSubmit={handleSignup}
        submitButtonText='Sign up'
        type='signup'
        source='pro'
      />
    </Auth>
  );
}
