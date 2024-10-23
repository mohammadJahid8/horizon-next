import EditBtn from '@/components/global/dashboard/edit-btn';
import Title from '@/components/global/title';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MoveUpRight } from 'lucide-react';

export default function ProfessionalInformation() {
  return (
    <div className='px-4 p-6 md:p-8 bg-white md:rounded-[16px]'>
      <div className='flex items-center justify-between border-b pb-4 mb-8'>
        <Title
          text='Professional information'
          className='mb-0 !text-lg md:!text-2xl'
        />
        <EditBtn />
      </div>
      <div className='space-y-6'>
        <div className='border-b pb-6 flex flex-col gap-5 w-full'>
          <SectionTitle text='Education' className='!text-lg md:!text-2xl' />
          <div className='flex items-start gap-4 md:gap-6'>
            <img
              src='/education.svg'
              alt='Education'
              className='size-16 md:size-20'
            />
            <div className='flex flex-col gap-3 md:gap-6 w-full'>
              <div className='flex flex-col gap-1 md:gap-2'>
                <SectionTitle
                  className='font-semibold !text-base md:!text-2xl'
                  text='Bachelor of Science (B.Sc.) in Biomedical Engineering'
                />
                <SectionDescription
                  text='Gotham University'
                  className='!text-sm md:!text-lg'
                />
              </div>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 w-full'>
                <div className='flex flex-col  gap-1.5 md:gap-2.5'>
                  <SectionTitle
                    text='Year of Graduation'
                    className='text-sm md:!text-base font-medium'
                  />
                  <SectionDescription text='2023' />
                </div>
                <div className='flex flex-col  gap-1.5 md:gap-2.5'>
                  <SectionTitle
                    text='Field of Study'
                    className='text-sm md:!text-base font-medium'
                  />
                  <SectionDescription text='Biomedical Engineering' />
                </div>
                <div className='flex flex-col  gap-1.5 md:gap-2.5'>
                  <SectionTitle
                    text='Grade'
                    className='text-sm md:!text-base font-medium'
                  />
                  <SectionDescription text='Magna Cum Laude' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='border-b pb-6 flex flex-col gap-5'>
          <SectionTitle text='Experience' className='!text-lg md:!text-2xl' />
          <ExperienceItem
            title='Register Nurse'
            company='Health Care Medical Clinic'
            duration='March 2017 - February 2022'
            location='2464 Royal Ln. Mesa, New Jersey 45463'
            description='Provided direct patient care, administered medications, and coordinated with healthcare teams.'
            image='/exp1.svg'
          />
          <ExperienceItem
            title='Health Educator'
            company='Wellness Center'
            duration='June 2019 - Present'
            location='2464 Royal Ln. Mesa, New Jersey 45463'
            description='Developed health education programs, conducted workshops, and promoted wellness initiatives.'
            image='/exp2.svg'
          />
        </div>
        <div className='flex flex-col gap-5'>
          <SectionTitle
            text='Licenses & certifications'
            className='!text-lg md:!text-2xl'
          />
          <div className='flex items-start gap-4 md:gap-6'>
            <img
              src='/license.svg'
              alt='License'
              className='size-16 md:size-20'
            />
            <div className='flex flex-col gap-1 md:gap-2'>
              <SectionTitle
                className='font-semibold !text-base md:!text-2xl'
                text='Patient Service Fundamentals'
              />
              <SectionDescription
                text='Johns Hopkins School of Nursing'
                className='!text-sm md:!text-lg font-medium'
              />
              <div className='grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-6'>
                <SectionDescription
                  text='Issue Date: December 20, 2023'
                  className='!text-sm md:!text-base text-[#595959] font-normal'
                />
                <SectionDescription
                  text='Expire Date: December 20, 2023'
                  className='!text-sm md:!text-base text-[#595959] font-normal'
                />
              </div>
              <SectionDescription
                text='Credential ID: 123 456 789'
                className='!text-sm md:!text-base text-[#595959] font-normal'
              />
              <Button
                variant='outline'
                className='h-10 md:h-12 rounded-[12px] w-fit mt-4 text-xs md:text-base'
              >
                View Credential
                <MoveUpRight className='size-4 ml-2' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SectionTitle = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        'text-xl md:text-2xl font-medium text-[#1C1C1C]',
        className
      )}
    >
      {text}
    </h3>
  );
};

const SectionDescription = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <p
      className={cn('text-sm md:text-xl text-[#1C1C1C] font-medium', className)}
    >
      {text}
    </p>
  );
};
const ExperienceItem = ({
  title,
  company,
  duration,
  location,
  description,
  image,
}: {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  image: string;
}) => {
  return (
    <div className='flex items-start gap-4 md:gap-6'>
      <img src={image} alt={title} className='size-16 md:size-20' />
      <div className='flex flex-col gap-1 md:gap-2'>
        <SectionTitle
          text={title}
          className='font-semibold !text-base md:!text-2xl'
        />
        <SectionDescription
          text={company}
          className='!text-sm md:!text-lg font-medium'
        />
        <SectionDescription
          text={duration}
          className='!text-sm md:!text-base text-[#595959] font-normal'
        />
        <SectionDescription
          text={location}
          className='!text-sm md:!text-base text-[#595959] font-normal'
        />
        <SectionDescription text={description} className='mt-4' />
      </div>
    </div>
  );
};
