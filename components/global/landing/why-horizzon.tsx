'use client';
import Image from 'next/image';
import Link from 'next/link';
import { MoveLeft, MoveRight } from 'lucide-react';
import Container from '../container';
import axios from 'axios';
import { useState } from 'react';

export default function WhyHorizzon({
  source,
  data,
}: {
  source?: string;
  data: any[];
}) {
  const [files, setFiles] = useState<File[]>([]);
  async function postMultipartFormData() {
    try {
      const formdata = new FormData();
      formdata.append(
        'data',
        JSON.stringify({
          professionalInformation: {
            education: [
              {
                degree: 'Bachelor of Science in Computer Science',
                institution: 'University of California, Berkeley',
                yearOfGraduation: '2012-06-01T00:00:00Z',
                fieldOfStudy: 'Computer Science',
                grade: '3.8 GPA',
              },
              {
                degree: 'Master of Science in Software Engineering',
                institution: 'Stanford University',
                yearOfGraduation: '2014-06-01T00:00:00Z',
                fieldOfStudy: 'Software Engineering',
                grade: '4.0 GPA',
              },
            ],
            experience: [
              {
                jobTitle: 'Frontend Developer',
                companyName: 'Tech Solutions Inc.',
                duration: '2 years',
                responsibilities:
                  'Developed responsive web applications using React.js and ensured cross-browser compatibility.',
              },
              {
                jobTitle: 'Senior Software Engineer',
                companyName: 'Innovatech',
                duration: '3 years',
                responsibilities:
                  'Led a team of developers to build scalable web applications and improve application performance.',
              },
            ],
            certifications: [
              {
                fileId: '2',
                title: 'Certified React Developer',
                institution: 'React Academy',
                issueDate: '2021-03-15T00:00:00Z',
                expireDate: '2024-03-15T00:00:00Z',
                credentialId: '12345',
                credentialUrl: 'https://reactacademy.com/certifications/12345',
                certificateFile: 'react_developer_cert.pdf',
              },
              {
                fileId: '1',
                title: 'AWS Certified Solutions Architect',
                institution: 'Amazon Web Services',
                issueDate: '2020-09-20T00:00:00Z',
                expireDate: '2023-09-20T00:00:00Z',
                credentialId: '67890',
                credentialUrl: 'https://aws.amazon.com/certifications/67890',
                certificateFile: '',
              },
            ],
          },
        })
      );
      // files.forEach((file, index) => {
      //   formdata.append(`certifications`, file, `${index + 1}`);
      // });
      const response = await axios.patch(
        'http://localhost:5000/api/v1/user/professional-information',
        formdata,
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3Rwcm9AZ21haWwuY29tIiwicm9sZSI6InBybyIsImlhdCI6MTczMzI5NDQyOSwiZXhwIjoxNzMzMjk4MDI5fQ.xYKyG7FCoMAaCbcS201nkbdVsysfhtaeEdLrHy79oCo`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error posting multipart form data:', error);
      throw error;
    }
  }

  return (
    <Container className='md:my-24 my-16'>
      {/* <input
        type='file'
        onChange={(e) => setFiles(Array.from(e.target.files || []))}
        multiple
      />
      <button onClick={postMultipartFormData}>Upload</button> */}
      {source === 'pro' && (
        <h2 className='md:text-[45px] text-[31px] font-light text-green-900 md:leading-[54px] leading-[37.2px] text-center max-w-[509px] mx-auto transition-all duration-300 mb-12'>
          Why CNA’s join <span className='font-medium'>Horizzon</span>
        </h2>
      )}
      {source === 'partner' && (
        <h2 className='md:text-[45px] text-[31px] font-light text-green-900 md:leading-[54px] leading-[37.2px] text-center max-w-[509px] mx-auto transition-all duration-300 mb-12'>
          Why Partners join <span className='font-medium'>Horizzon</span>
        </h2>
      )}
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

      {!source && (
        <div className='md:mt-20 mt-16 flex flex-col items-center justify-center md:gap-16 gap-14 sm:flex-row'>
          <Link
            href='/pro/signup'
            className='inline-flex items-center font-medium underline text-primary hover:text-primary/80'
          >
            <MoveLeft className='mr-3 size-6' />
            Get Started as Pro
          </Link>
          <Link
            href='/partner/signup'
            className='inline-flex items-center font-medium underline text-secondary hover:text-secondary/80'
          >
            Get Started as a Partner
            <MoveRight className='ml-3 size-6' />
          </Link>
        </div>
      )}
    </Container>
  );
}
