import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, MoveLeft, MoveRight } from 'lucide-react';
import Container from '../container';

export default function GetStarted() {
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

  return (
    <Container className='md:my-20 my-16'>
      <div className='grid gap-9 md:grid-cols-3'>
        {data.map((item, index) => (
          <div key={index} className='flex flex-col items-center text-center'>
            <div className=''>
              <Image
                src={item.img}
                alt={item.title}
                width={376}
                height={376}
                className='h-full w-full'
              />
            </div>
            <h3 className='md:mb-9 mb-6 md:text-[28px] text-lg font-semibold md:leading-[39.2px] leading-[25.2px] text-secondary max-w-[180px]'>
              {item.title}
            </h3>
            <p className='text-muted-foreground md:text-base text-sm max-w-[332px]'>
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className='md:mt-20 mt-16 flex flex-col items-center justify-center md:gap-16 gap-14 sm:flex-row'>
        <Link
          href='/cna'
          className='inline-flex items-center font-medium underline text-primary hover:text-primary/80'
        >
          <MoveLeft className='mr-3 size-6' />
          Get Started as CNA
        </Link>
        <Link
          href='/partner'
          className='inline-flex items-center font-medium underline text-secondary hover:text-secondary/80'
        >
          Get Started as a Partner
          <MoveRight className='ml-3 size-6' />
        </Link>
      </div>
    </Container>
  );
}
