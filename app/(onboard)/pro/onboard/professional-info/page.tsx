'use client';
import React, { useState } from 'react';
import Title from '@/components/global/title';
import { Input } from '@/components/ui/input';
import OnboardButton from '@/components/global/onboard-button';
import { CloudUploadIcon } from 'lucide-react';
import Skills from '@/components/global/professional-info/skills';
import AddMore from '@/components/global/professional-info/add-more';
import Remove from '@/components/global/professional-info/remove';

interface EducationField {
  degree: string;
  institution: string;
  yearOfGraduation: string;
  fieldOfStudy: string;
  grade: string;
}

interface ExperienceField {
  jobTitle: string;
  companyName: string;
  duration: string;
  responsibilities: string;
}

interface LicenseField {
  title: string;
  nameOfInstitute: string;
  issueDate: string;
  expireDate: string;
  credentialID: string;
  url: string;
  file: File | null;
}

const ProfessionalInfo = () => {
  const [educationFields, setEducationFields] = useState<EducationField[]>([
    {
      degree: '',
      institution: '',
      yearOfGraduation: '',
      fieldOfStudy: '',
      grade: '',
    },
  ]);

  const [experienceFields, setExperienceFields] = useState<ExperienceField[]>([
    { jobTitle: '', companyName: '', duration: '', responsibilities: '' },
  ]);

  const [licenseFields, setLicenseFields] = useState<LicenseField[]>([
    {
      title: '',
      nameOfInstitute: '',
      issueDate: '',
      expireDate: '',
      credentialID: '',
      url: '',
      file: null,
    },
  ]);

  const handleEducationChange = (
    index: number,
    field: keyof EducationField,
    value: string
  ) => {
    const updatedFields = [...educationFields];
    updatedFields[index][field] = value;
    setEducationFields(updatedFields);
  };

  const handleExperienceChange = (
    index: number,
    field: keyof ExperienceField,
    value: string
  ) => {
    const updatedFields = [...experienceFields];
    updatedFields[index][field] = value;
    setExperienceFields(updatedFields);
  };

  const handleLicenseChange = (
    index: number,
    field: keyof LicenseField,
    value: string | File | null
  ) => {
    const updatedFields = [...licenseFields];
    if (field === 'file') {
      updatedFields[index][field] = value as File | null;
    } else {
      updatedFields[index][field] = value as string;
    }
    setLicenseFields(updatedFields);
  };

  const addEducationField = () => {
    setEducationFields([
      ...educationFields,
      {
        degree: '',
        institution: '',
        yearOfGraduation: '',
        fieldOfStudy: '',
        grade: '',
      },
    ]);
  };

  const removeEducationField = (index: number) => {
    const updatedFields = educationFields.filter((_, i) => i !== index);
    setEducationFields(updatedFields);
  };

  const addExperienceField = () => {
    setExperienceFields([
      ...experienceFields,
      { jobTitle: '', companyName: '', duration: '', responsibilities: '' },
    ]);
  };

  const removeExperienceField = (index: number) => {
    const updatedFields = experienceFields.filter((_, i) => i !== index);
    setExperienceFields(updatedFields);
  };

  const addLicenseField = () => {
    setLicenseFields([
      ...licenseFields,
      {
        title: '',
        nameOfInstitute: '',
        issueDate: '',
        expireDate: '',
        credentialID: '',
        url: '',
        file: null,
      },
    ]);
  };

  const removeLicenseField = (index: number) => {
    const updatedFields = licenseFields.filter((_, i) => i !== index);
    setLicenseFields(updatedFields);
  };

  return (
    <div>
      <Title text='Professional Info' />

      <div className='flex flex-col gap-10'>
        {/* Education Section */}
        <div className='flex flex-col gap-5'>
          <h2 className='text-2xl font-medium leading-[33.6px] text-gray-800'>
            Education
          </h2>
          {educationFields.map((education, index) => (
            <div
              key={index}
              className='flex flex-col gap-5 border border-[#DFE2E0] rounded-[16px] p-5'
            >
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <div className='flex flex-col gap-3'>
                  <label className='text-base font-medium text-[#1C1C1C]'>
                    Degree
                  </label>
                  <Input
                    className='rounded-[12px] h-14 bg-[#f9f9f9]'
                    placeholder='Input Text'
                    value={education.degree}
                    onChange={(e) =>
                      handleEducationChange(index, 'degree', e.target.value)
                    }
                  />
                </div>
                <div className='flex flex-col gap-3'>
                  <label className='text-base font-medium text-[#1C1C1C]'>
                    Institution
                  </label>
                  <Input
                    className='rounded-[12px] h-14 bg-[#f9f9f9]'
                    placeholder='Input Text'
                    value={education.institution}
                    onChange={(e) =>
                      handleEducationChange(
                        index,
                        'institution',
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
                <div className='flex flex-col gap-3'>
                  <label className='text-base font-medium text-[#1C1C1C]'>
                    Year of Graduation
                  </label>
                  <Input
                    className='rounded-[12px] h-14 bg-[#f9f9f9]'
                    placeholder='Input Text'
                    value={education.yearOfGraduation}
                    onChange={(e) =>
                      handleEducationChange(
                        index,
                        'yearOfGraduation',
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className='flex flex-col gap-3'>
                  <label className='text-base font-medium text-[#1C1C1C]'>
                    Field of Study
                  </label>
                  <Input
                    className='rounded-[12px] h-14 bg-[#f9f9f9]'
                    placeholder='Input Text'
                    value={education.fieldOfStudy}
                    onChange={(e) =>
                      handleEducationChange(
                        index,
                        'fieldOfStudy',
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className='flex flex-col gap-3'>
                  <label className='text-base font-medium text-[#1C1C1C]'>
                    Grade
                  </label>
                  <Input
                    className='rounded-[12px] h-14 bg-[#f9f9f9]'
                    placeholder='Input Text'
                    value={education.grade}
                    onChange={(e) =>
                      handleEducationChange(index, 'grade', e.target.value)
                    }
                  />
                </div>
              </div>
              {index > 0 && (
                <Remove handleRemove={() => removeEducationField(index)} />
              )}
            </div>
          ))}

          <AddMore handleAdd={addEducationField} />
        </div>

        {/* Experience Section */}
        <div className='flex flex-col gap-5'>
          <h2 className='text-2xl font-medium leading-[33.6px] text-gray-800'>
            Experience
          </h2>
          {experienceFields.map((experience, index) => (
            <div
              key={index}
              className='flex flex-col gap-5 border border-[#DFE2E0] rounded-[16px] p-5'
            >
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
                <div className='flex flex-col gap-3'>
                  <label className='text-base font-medium text-[#1C1C1C]'>
                    Job Title
                  </label>
                  <Input
                    className='rounded-[12px] h-14 bg-[#f9f9f9]'
                    placeholder='Input Text'
                    value={experience.jobTitle}
                    onChange={(e) =>
                      handleExperienceChange(index, 'jobTitle', e.target.value)
                    }
                  />
                </div>
                <div className='flex flex-col gap-3'>
                  <label className='text-base font-medium text-[#1C1C1C]'>
                    Company Name
                  </label>
                  <Input
                    className='rounded-[12px] h-14 bg-[#f9f9f9]'
                    placeholder='Input Text'
                    value={experience.companyName}
                    onChange={(e) =>
                      handleExperienceChange(
                        index,
                        'companyName',
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className='flex flex-col gap-3'>
                  <label className='text-base font-medium text-[#1C1C1C]'>
                    Duration
                  </label>
                  <Input
                    className='rounded-[12px] h-14 bg-[#f9f9f9]'
                    placeholder='Input Text'
                    value={experience.duration}
                    onChange={(e) =>
                      handleExperienceChange(index, 'duration', e.target.value)
                    }
                  />
                </div>
              </div>

              <div className='flex flex-col gap-3'>
                <label className='text-base font-medium text-[#1C1C1C]'>
                  Responsibilities
                </label>
                <Input
                  className='rounded-[12px] h-14 bg-[#f9f9f9]'
                  placeholder='Input Text'
                  value={experience.responsibilities}
                  onChange={(e) =>
                    handleExperienceChange(
                      index,
                      'responsibilities',
                      e.target.value
                    )
                  }
                />
              </div>

              {index > 0 && (
                <Remove handleRemove={() => removeExperienceField(index)} />
              )}
            </div>
          ))}

          <AddMore handleAdd={addExperienceField} />
        </div>

        {/* Licenses & Certifications Section */}
        <div className='flex flex-col gap-5'>
          <h2 className='text-2xl font-medium leading-[33.6px] text-gray-800'>
            Licenses & Certifications
          </h2>
          {licenseFields.map((license, index) => (
            <div
              key={index}
              className='flex flex-col gap-5 border border-[#DFE2E0] rounded-[16px] p-5'
            >
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <div className='flex flex-col gap-3'>
                  <label className='text-base font-medium text-[#1C1C1C]'>
                    Title
                  </label>
                  <Input
                    className='rounded-[12px] h-14 bg-[#f9f9f9]'
                    placeholder='Ex: Patient Service Fundamentals'
                    value={license.title}
                    onChange={(e) =>
                      handleLicenseChange(index, 'title', e.target.value)
                    }
                  />
                </div>
                <div className='flex flex-col gap-3'>
                  <label className='text-base font-medium text-[#1C1C1C]'>
                    Name of Institute
                  </label>
                  <Input
                    className='rounded-[12px] h-14 bg-[#f9f9f9]'
                    placeholder='Ex: Johns Hopkins School of Nursing'
                    value={license.nameOfInstitute}
                    onChange={(e) =>
                      handleLicenseChange(
                        index,
                        'nameOfInstitute',
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <div className='flex flex-col gap-3'>
                  <label className='text-base font-medium text-[#1C1C1C]'>
                    Issue Date
                  </label>
                  <Input
                    className='rounded-[12px] h-14 bg-[#f9f9f9]'
                    placeholder='DD/MM/YYYY'
                    value={license.issueDate}
                    onChange={(e) =>
                      handleLicenseChange(index, 'issueDate', e.target.value)
                    }
                  />
                </div>
                <div className='flex flex-col gap-3'>
                  <label className='text-base font-medium text-[#1C1C1C]'>
                    Expire Date
                  </label>
                  <Input
                    className='rounded-[12px] h-14 bg-[#f9f9f9]'
                    placeholder='DD/MM/YYYY'
                    value={license.expireDate}
                    onChange={(e) =>
                      handleLicenseChange(index, 'expireDate', e.target.value)
                    }
                  />
                </div>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <div className='flex flex-col gap-3'>
                  <label className='text-base font-medium text-[#1C1C1C]'>
                    URL
                  </label>
                  <Input
                    className='rounded-[12px] h-14 bg-[#f9f9f9]'
                    placeholder='https://'
                    value={license.url}
                    onChange={(e) =>
                      handleLicenseChange(index, 'url', e.target.value)
                    }
                  />
                </div>
                <div className='flex flex-col gap-3'>
                  <label className='text-base font-medium text-[#1C1C1C]'>
                    Credential ID
                  </label>
                  <Input
                    className='rounded-[12px] h-14 bg-[#f9f9f9]'
                    placeholder='Ex: ABC123'
                    value={license.credentialID}
                    onChange={(e) =>
                      handleLicenseChange(index, 'credentialID', e.target.value)
                    }
                  />
                </div>
              </div>
              <label htmlFor='licenseFile' className='relative cursor-pointer'>
                <div className='flex flex-col items-center justify-center border border-gray-300 rounded-[12px] p-4 bg-white h-22'>
                  <div className='flex flex-col items-center gap-2.5'>
                    <CloudUploadIcon className='w-6 h-6' />
                    <span className='text-sm text-gray-500'>
                      Upload physical licenses or certificate
                    </span>
                  </div>
                  <Input
                    type='file'
                    className='hidden'
                    id='licenseFile'
                    onChange={(e) =>
                      handleLicenseChange(
                        index,
                        'file',
                        e.target.files ? e.target.files[0] : null
                      )
                    }
                  />
                </div>
              </label>
              {index > 0 && (
                <Remove handleRemove={() => removeLicenseField(index)} />
              )}
            </div>
          ))}
          <AddMore handleAdd={addLicenseField} />
        </div>
        <div className='flex flex-col gap-5'>
          <h2 className='text-2xl font-medium leading-[33.6px] text-gray-800'>
            Skills
          </h2>

          <Skills />
        </div>

        <div className='flex gap-5'>
          <OnboardButton
            text='Previous'
            className='w-full bg-white text-[#1C1C1C] border border-gray-300 hover:text-white'
            href='/pro/onboard/personal-info'
          />
          <OnboardButton
            text='Next'
            className='w-full'
            href='/pro/onboard/document-upload'
          />
        </div>
      </div>
    </div>
  );
};

export default ProfessionalInfo;
