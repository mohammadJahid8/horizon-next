import Banner from '@/components/global/landing/banner';
import Career from '@/components/global/landing/career';
import Comparison from '@/components/global/landing/comparison';
import Faqs from '@/components/global/landing/faqs';
import Footer from '@/components/global/landing/footer';
import GetStarted from '@/components/global/landing/get-started';
import Grow from '@/components/global/landing/grow';
import Partners from '@/components/global/landing/partners';
import Testimonial from '@/components/global/landing/testimonial';
import WhyHorizzon from '@/components/global/landing/why-horizzon';
import { BriefcaseIcon, FileIcon, IdCardIcon, UserIcon } from 'lucide-react';
export default function Home() {
  const data = [
    {
      img: '/secure.svg',
      title: 'Secured Information',
      description: 'All your uploaded documents are secured and saved!',
    },
    {
      img: '/peace.svg',
      title: 'All in one place',
      description: 'You will be able to access to your information any time',
    },
    {
      img: '/status.svg',
      title: 'Easy to share',
      description:
        'Different ways to share your profile. By a generated link or QR code',
    },
  ];
  const images = {
    null: '/doctor.svg',
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
    <div className='mt-16'>
      <Banner />
      <WhyHorizzon data={data} />
      <GetStarted images={images} stepsBgColor={stepsBgColor} steps={steps} />
      <Career />
      <Partners />
      <Comparison />
      <Grow
        source='home'
        title='Horizzon keeps the CNA’s available in one place and grow'
        description='Join numerous healthcare CNAs who are already hired by employers. Sign up and start applying today.'
      />
      <Testimonial source='home' />
      <Faqs />
      <Footer />
    </div>
  );
}
