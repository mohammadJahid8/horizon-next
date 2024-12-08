import { getPartnerLoginData } from '@/app/actions';
import PartnerLogin from '@/components/global/partner-login';
import React from 'react';

export default async function PartnerLoginPage() {
  const loginData = await getPartnerLoginData();
  return <PartnerLogin {...loginData} />;
}
