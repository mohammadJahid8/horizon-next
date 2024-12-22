'use client';
import EditBtn from '@/components/global/dashboard/edit-btn';
import Title from '@/components/global/title';
import { Button } from '@/components/ui/button';
import { useAppContext } from '@/lib/context';
import { cn } from '@/lib/utils';
import { MoveUpRight } from 'lucide-react';
import moment from 'moment';
import NoData from '../no-data';

export default function ProfessionalInformation() {
  const { user } = useAppContext();

  const education = user?.professionalInfo?.education;
  const experience = user?.professionalInfo?.experience;
  const certifications = user?.professionalInfo?.certifications;

  const noData = !education && !experience && !certifications;

  return (
    <div className='px-4 p-6 md:p-8 bg-white md:rounded-[16px]'>
      <div className='flex items-center justify-between border-b pb-4 mb-8'>
        <Title
          text='Professional information'
          className='mb-0 !text-lg md:!text-2xl'
        />
        <EditBtn href='/pro/onboard/professional-info' />
      </div>
      {!noData ? (
        <div className='space-y-6'>
          {education && (
            <div className='border-b pb-6 flex flex-col gap-5 w-full'>
              <SectionTitle
                text='Education'
                className='!text-lg md:!text-2xl'
              />
              {education?.map((item: any, index: number) => (
                <EducationItem key={index} {...item} />
              ))}
            </div>
          )}
          {experience && (
            <div className='border-b pb-6 flex flex-col gap-5'>
              <SectionTitle
                text='Experience'
                className='!text-lg md:!text-2xl'
              />
              {experience?.map((item: any, index: number) => (
                <ExperienceItem key={index} {...item} image='/exp1.svg' />
              ))}
            </div>
          )}
          {certifications && (
            <div className='flex flex-col gap-5'>
              <SectionTitle
                text='Licenses & certifications'
                className='!text-lg md:!text-2xl'
              />
              {certifications?.map((item: any, index: number) => (
                <CertificationItem key={index} {...item} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
}

const EducationItem = ({
  degree,
  fieldOfStudy,
  yearOfGraduation,
  grade,
  institution,
}: {
  degree: string;
  fieldOfStudy: string;
  yearOfGraduation: string;
  grade: string;
  institution: string;
}) => {
  return (
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
            text={degree}
          />
          <SectionDescription
            text={institution}
            className='!text-sm md:!text-lg'
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 w-full'>
          <div className='flex flex-col  gap-1.5 md:gap-2.5'>
            <SectionTitle
              text='Year of Graduation'
              className='text-sm md:!text-base font-medium'
            />
            <SectionDescription text={yearOfGraduation} />
          </div>
          <div className='flex flex-col  gap-1.5 md:gap-2.5'>
            <SectionTitle
              text='Field of Study'
              className='text-sm md:!text-base font-medium'
            />
            <SectionDescription text={fieldOfStudy} />
          </div>
          <div className='flex flex-col  gap-1.5 md:gap-2.5'>
            <SectionTitle
              text='Grade'
              className='text-sm md:!text-base font-medium'
            />
            <SectionDescription text={grade} />
          </div>
        </div>
      </div>
    </div>
  );
};
const CertificationItem = ({
  certificateFile,
  credentialId,
  credentialUrl,
  expireDate,
  institution,
  issueDate,
  title,
}: any) => {
  return (
    <div className='flex items-start gap-4 md:gap-6'>
      <img
        src={certificateFile}
        alt='License'
        className='size-16 md:size-20 object-cover rounded-full'
      />
      <div className='flex flex-col gap-1 md:gap-2'>
        <SectionTitle
          className='font-semibold !text-base md:!text-2xl'
          text={title}
        />
        <SectionDescription
          text={institution}
          className='!text-sm md:!text-lg font-medium'
        />
        <div className='grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-6'>
          <SectionDescription
            text={`Issue Date: ${moment(issueDate).format('MMM DD, YYYY')}`}
            className='!text-sm md:!text-base text-[#595959] font-normal'
          />
          {expireDate && (
            <SectionDescription
              text={`Expire Date: ${moment(expireDate).format('MMM DD, YYYY')}`}
              className='!text-sm md:!text-base text-[#595959] font-normal'
            />
          )}
        </div>
        <SectionDescription
          text={`Credential ID: ${credentialId}`}
          className='!text-sm md:!text-base text-[#595959] font-normal'
        />
        <Button
          onClick={() => window.open(credentialUrl, '_blank')}
          variant='outline'
          className='h-10 md:h-12 rounded-[12px] w-fit mt-4 text-xs md:text-base'
        >
          View Credential
          <MoveUpRight className='size-4 ml-2' />
        </Button>
      </div>
    </div>
  );
};

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
  jobTitle,
  companyName,
  duration,
  responsibilities,
  image,
}: any) => {
  return (
    <div className='flex items-start gap-4 md:gap-6'>
      <img src={image} alt={jobTitle} className='size-16 md:size-20' />
      <div className='flex flex-col gap-1 md:gap-2'>
        <SectionTitle
          text={jobTitle}
          className='font-semibold !text-base md:!text-2xl'
        />
        <SectionDescription
          text={companyName}
          className='!text-sm md:!text-lg font-medium'
        />
        <SectionDescription
          text={duration}
          className='!text-sm md:!text-base text-[#595959] font-normal'
        />
        {/* <SectionDescription
          text={'yrdydhfghfghjh'}
          className='!text-sm md:!text-base text-[#595959] font-normal'
        /> */}
        <SectionDescription text={responsibilities} className='mt-4' />
      </div>
    </div>
  );
};
