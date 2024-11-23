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

  return (
    <div className='mt-16'>
      <ProBanner />
      <WhyHorizzon source='pro' data={data} />
      <CareerPro />
      <Features />
      <GetStarted images={images} />
      <Grow />
      <Testimonial />
      <Faqs />
      <Footer />
    </div>
  );
}
