import ExpandJob from '@/components/global/landing/expand-job';
import Faqs from '@/components/global/landing/faqs';
import Features from '@/components/global/landing/features';
import Footer from '@/components/global/landing/footer';
import GetStarted from '@/components/global/landing/get-started';
import Grow from '@/components/global/landing/grow';
import PartnerBanner from '@/components/global/landing/partner-banner';
import {
  BriefcaseIcon,
  FileIcon,
  FileText,
  IdCardIcon,
  UserIcon,
} from 'lucide-react';
import Testimonial from '@/components/global/landing/testimonial';
import WhyHorizzon from '@/components/global/landing/why-horizzon';
import Image from 'next/image';

export default function PartnerLandingPage() {
  const data = [
    {
      img: '/expedite.svg',
      title: 'Expedite the Hiring Process',
      description:
        'The quicker you fill a position, the more you save in recruitment and training costs.',
    },
    {
      img: '/turnover.svg',
      title: 'Decrease Turnover',
      description:
        'A streamlined hiring process leads to higher employee satisfaction and retention.',
    },
    {
      img: '/cost.svg',
      title: 'Lower Hiring Costs',
      description:
        'By reducing the time it takes to hire and onboard CNAs, your facility can maintain high standards of care without disruptions.',
    },
  ];

  const images = {
    null: '/get-started-partner.svg',
    0: '/registration.svg',
    1: '/review-cna.svg',
    2: '/send-offer.svg',
    3: '/hire-cna.svg',
  };
  const stepsBgColor = {
    null: 'bg-[#6ADD8D]',
    0: 'bg-[#6ADD8D]',
    1: 'bg-[#c9f9e3]',
    2: 'bg-[#6ADD8D]',
    3: 'bg-[#c9f9e3]',
  };

  const steps = [
    {
      step: 'Step 1',
      icon: <IdCardIcon className='size-[18px]' />,
      text: 'Register with simple information',
      description:
        'Register with your email and create a secure profile. Provide your professional information to get started.',
    },
    {
      step: 'Step 2',
      icon: <UserIcon className='size-[18px]' />,
      text: 'Review CNA profile',
      description:
        'Explore the CNA profile by reviewing all the available information ',
    },
    {
      step: 'Step 3',
      icon: <FileText className='size-[18px]' />,
      text: 'Send an offer  & requirements',
      description:
        'Click the button to hire the candidate and decide whether you need more details to be provided',
    },
    {
      step: 'Step 4',
      icon: <BriefcaseIcon className='size-[18px]' />,
      text: 'Hire CNA!',
      description:
        'Hire the candidate right away after getting approval response.',
    },
  ];
  return (
    <div className='mt-16 relative overflow-hidden'>
      <PartnerBanner />

      <Image
        src='/vector-banner.svg'
        alt='partner bg'
        width={600}
        height={512}
        className='absolute md:-right-36 -right-24 top-[40rem] md:top-[60rem] md:w-[689px] w-[248px] md:h-[512px] h-[184px]'
      />

      <WhyHorizzon source='partner' data={data} />
      <Image
        src='/vector-expand.svg'
        alt='partner bg'
        width={600}
        height={512}
        className='absolute -left-36 top-[150rem] w-[689px] h-[512px] z-10 md:block hidden'
      />
      <ExpandJob />
      <Features />
      <GetStarted images={images} stepsBgColor={stepsBgColor} steps={steps} />
      <Grow
        source='partner'
        title='Stat now to review CNA’s profiles and hire the suitable candidate'
        description='Join numerous healthcare CNAs who are already hired by employers. Sign up and start applying today.'
      />
      <Testimonial source='partner' />
      <Faqs />
      <Footer />
    </div>
  );
}
