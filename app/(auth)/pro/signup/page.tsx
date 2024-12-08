import { getProSignupData } from '@/app/actions';
import ProSignup from '@/components/global/pro-signup';
import React from 'react';

export default async function ProSignupPage() {
  const signupData = await getProSignupData();
  return <ProSignup {...signupData} />;
}
