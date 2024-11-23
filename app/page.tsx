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

export default function PartnerPage() {
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

  return (
    <div className='mt-16'>
      <Banner />
      <WhyHorizzon data={data} />
      <GetStarted images={images} />
      <Career />
      <Partners />
      <Comparison />
      <Grow />
      <Testimonial />
      <Faqs />
      <Footer />
    </div>
  );
}
