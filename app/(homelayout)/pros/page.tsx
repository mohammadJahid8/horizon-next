import Career from '@/components/global/landing/career';
import CareerPro from '@/components/global/landing/career-pro';
import Faqs from '@/components/global/landing/faqs';
import Features from '@/components/global/landing/features';
import Footer from '@/components/global/landing/footer';
import GetStarted from '@/components/global/landing/get-started';
import Grow from '@/components/global/landing/grow';
import Partners from '@/components/global/landing/partners';
import ProBanner from '@/components/global/landing/pro-banner';
import Testimonial from '@/components/global/landing/testimonial';
import WhyHorizzon from '@/components/global/landing/why-horizzon';
import { BriefcaseIcon, FileIcon, IdCardIcon, UserIcon } from 'lucide-react';
import Image from 'next/image';

export default function ProLandingPage() {
  const data = [
    {
      img: '/interview.svg',
      title: 'Faster Hiring Process',
      description:
        'No more waiting weeks for paperwork to be processed. Get hired quicker, and start earning sooner!',
    },
    {
      img: '/peace.svg',
      title: 'Peace of Mind',
      description:
        'Focus on your work with confidence, knowing that your credentials and opportunities are in good hands.',
    },
    {
      img: '/earn.svg',
      title: 'Earn More Money',
      description:
        'The quicker you land your next role, the quicker you can start earning—and potentially increase your income with more opportunities at your fingertips.',
    },
  ];

  const images = {
    null: '/get-started-pro.svg',
    0: '/professional.svg',
    1: '/document-info.svg',
    2: '/profile.svg',
    3: '/jobs.svg',
  };

  const stepsBgColor = {
    null: 'bg-[#bcf8dc]',
    0: 'bg-[#87e4a5]',
    1: 'bg-[#c9f9e3]',
    2: 'bg-[#87e4a5]',
    3: 'bg-[#c9f9e3]',
  };

  const steps = [
    {
      step: 'Step 1',
      icon: <IdCardIcon className='size-[18px]' />,
      text: 'Personal information',
      description:
        'Register with your email and create a secure profile. Provide your personal and professional details to get started.',
    },
    {
      step: 'Step 2',
      icon: <FileIcon className='size-[18px]' />,
      text: 'Upload Documents',
      description:
        'Showcase your educational degree, add experiences with licences and certifications',
    },
    {
      step: 'Step 3',
      icon: <UserIcon className='size-[18px]' />,
      text: 'Complete Profile',
      description:
        'Easily upload your CV, certifications, licenses, and other important documents. Keep everything organized and easily accessible.',
    },
    {
      step: 'Step 4',
      icon: <BriefcaseIcon className='size-[18px]' />,
      text: 'Share your profile and Get Hired',
      description:
        'Create secure, shareable links to your documents. Share these links with potential employers or during job applications.',
    },
  ];
  return (
    <div className='mt-16 relative overflow-hidden'>
      <ProBanner />
      <Image
        src='/vector-banner.svg'
        alt='partner bg'
        width={600}
        height={512}
        className='absolute md:-right-36 -right-24 top-[40rem] md:top-[60rem] md:w-[689px] w-[248px] md:h-[512px] h-[184px]'
      />
      <WhyHorizzon source='pro' data={data} />
      <Image
        src='/vector-expand-pro.svg'
        alt='partner bg'
        width={453}
        height={384}
        className='absolute -left-36 top-[155rem] w-[453px] h-[384px] z-10 md:block hidden'
      />
      <CareerPro />
      <Features />
      <GetStarted images={images} stepsBgColor={stepsBgColor} steps={steps} />
      <Grow
        source='pro'
        title='Give your self better choices by building your absolute profile in one place'
        description='Join numerous healthcare CNAs who are already hired by employers. Sign up and start applying today.'
      />
      <Testimonial source='pro' />
      <Faqs />
      <Footer />
    </div>
  );
}
