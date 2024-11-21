import Banner from '@/components/global/landing/banner';
import Career from '@/components/global/landing/career';
import Comparison from '@/components/global/landing/comparison';
import Faqs from '@/components/global/landing/faqs';
import Features from '@/components/global/landing/features';
import Footer from '@/components/global/landing/footer';
import GetStarted from '@/components/global/landing/get-started';
import Grow from '@/components/global/landing/grow';
import Partners from '@/components/global/landing/partners';

export default function PartnerPage() {
  return (
    <div className='mt-16'>
      <Banner />
      <Features />
      <GetStarted />
      <Career />
      <Partners />
      <Comparison />
      <Grow />
      <Faqs />
      <Footer />
    </div>
  );
}
