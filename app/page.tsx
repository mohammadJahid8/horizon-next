import Banner from '@/components/global/landing/banner';
import Career from '@/components/global/landing/career';
import Comparison from '@/components/global/landing/comparison';
import Faqs from '@/components/global/landing/faqs';
import GetStarted from '@/components/global/landing/get-started';
import Grow from '@/components/global/landing/grow';
import Partners from '@/components/global/landing/partners';
import Testimonial from '@/components/global/landing/testimonial';
import WhyHorizzon from '@/components/global/landing/why-horizzon';
import { BriefcaseIcon, FileIcon, IdCardIcon, UserIcon } from 'lucide-react';
import { getHomeData } from './actions';

export default async function Home() {
  const homeData = await getHomeData();
  const {
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
    section7,
    section8,
    section9,
  } = homeData;
  // console.log('🚀 ~ Home ~ homeData:', homeData);
  const whyUsImages = ['/secure.svg', '/peace.svg', '/status.svg'];
  const features = section2?.features?.map((item: any, index: number) => {
    return {
      img: whyUsImages[index],
      ...item,
    };
  });

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

  const stepsIcons = [
    <IdCardIcon className='size-[18px]' key={0} />,
    <FileIcon className='size-[18px]' key={1} />,
    <UserIcon className='size-[18px]' key={2} />,
    <BriefcaseIcon className='size-[18px]' key={3} />,
  ];

  const steps = section3?.steps?.map((item: any, index: number) => {
    return {
      ...item,
      icon: stepsIcons[index],
    };
  });

  return (
    <div className='mt-16'>
      <Banner {...section1} />

      <WhyHorizzon {...section2} features={features} />

      <GetStarted images={images} stepsBgColor={stepsBgColor} steps={steps} />
      <Career {...section4} />
      <Partners {...section5} />
      <Comparison {...section6} />
      <Grow source='home' {...section7} />
      <Testimonial source='home' {...section8} />
      <Faqs {...section9} />
    </div>
  );
}
