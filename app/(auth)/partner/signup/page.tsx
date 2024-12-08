import { getPartnerSignupData } from '@/app/actions';
import PartnerSignup from '@/components/global/partner-signup';
import React from 'react';

export default async function PartnerSignupPage() {
  const signupData = await getPartnerSignupData();
  return <PartnerSignup {...signupData} />;
}
