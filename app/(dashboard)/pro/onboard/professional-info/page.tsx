'use client';
import React, { useState } from 'react';
import Title from '@/components/global/title';
import { Input } from '@/components/ui/input';
import OnboardButton from '@/components/global/onboard-button';
import { Plus, Trash, Trash2Icon, TrashIcon } from 'lucide-react';

const ProfessionalInfo = () => {
  const [educationFields, setEducationFields] = useState([
    {
      degree: '',
      institution: '',
      yearOfGraduation: '',
      fieldOfStudy: '',
      grade: '',
    },
  ]);

  const [experienceFields, setExperienceFields] = useState([
    { jobTitle: '', companyName: '', duration: '', responsibilities: '' },
  ]);

  const [licenseFields, setLicenseFields] = useState([
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
    field: string,
    value: string
  ) => {
    const updatedFields = [...educationFields];
    updatedFields[index][field as keyof (typeof updatedFields)[0]] = value;
    setEducationFields(updatedFields);
  };

  const handleExperienceChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedFields = [...experienceFields];
    updatedFields[index][field as keyof (typeof updatedFields)[0]] = value;
    setExperienceFields(updatedFields);
  };

  const handleLicenseChange = (
    index: number,
    field: string,
    value: string | File | null
  ) => {
    const updatedFields = [...licenseFields];
    updatedFields[index][field as keyof (typeof updatedFields)[0]] = value;
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
                <button
                  className='flex items-center gap-2 cursor-pointer hover:underline text-red-500 text-lg font-medium'
                  onClick={() => removeEducationField(index)}
                >
                  <div className='bg-[#FCE7E5] rounded-full w-8 h-8 flex items-center justify-center '>
                    <Trash2Icon className='w-4 h-4 ' />
                  </div>
                  Remove
                </button>
              )}
            </div>
          ))}

          <div
            className='flex items-center gap-2 cursor-pointer hover:underline'
            onClick={addEducationField}
          >
            <div className='bg-[#1C1C1C] rounded-full w-8 h-8 text-white flex items-center justify-center'>
              <Plus className='w-4 h-4 text-white' />
            </div>
            <span className='text-lg leading-[25.2px] text-[#1C1C1C]'>
              Add more
            </span>
          </div>
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
                <button
                  className='flex items-center gap-2 cursor-pointer hover:underline text-red-500 text-lg font-medium'
                  onClick={() => removeExperienceField(index)}
                >
                  <div className='bg-[#FCE7E5] rounded-full w-8 h-8 flex items-center justify-center '>
                    <Trash2Icon className='w-4 h-4 ' />
                  </div>
                  Remove
                </button>
              )}
            </div>
          ))}

          <div
            className='flex items-center gap-2 cursor-pointer hover:underline'
            onClick={addExperienceField}
          >
            <div className='bg-[#1C1C1C] rounded-full w-8 h-8 text-white flex items-center justify-center'>
              <Plus className='w-4 h-4 text-white' />
            </div>
            <span className='text-lg leading-[25.2px] text-[#1C1C1C]'>
              Add more
            </span>
          </div>
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
              <div className='flex flex-col gap-3'>
                <label className='text-base font-medium text-[#1C1C1C]'>
                  Upload File
                </label>
                <Input
                  type='file'
                  className='rounded-[12px] h-14 bg-[#f9f9f9]'
                  onChange={(e) =>
                    handleLicenseChange(
                      index,
                      'file',
                      e.target.files ? e.target.files[0] : null
                    )
                  }
                />
              </div>
              {index > 0 && (
                <button
                  className='flex items-center gap-2 cursor-pointer hover:underline text-red-500 text-lg font-medium'
                  onClick={() => removeLicenseField(index)}
                >
                  <div className='bg-[#FCE7E5] rounded-full w-8 h-8 flex items-center justify-center '>
                    <Trash2Icon className='w-4 h-4 ' />
                  </div>
                  Remove
                </button>
              )}
            </div>
          ))}
          <div
            className='flex items-center gap-2 cursor-pointer hover:underline'
            onClick={addLicenseField}
          >
            <div className='bg-[#1C1C1C] rounded-full w-8 h-8 text-white flex items-center justify-center'>
              <Plus className='w-4 h-4 text-white' />
            </div>
            <span className='text-lg leading-[25.2px] text-[#1C1C1C]'>
              Add more
            </span>
          </div>
        </div>

        <OnboardButton text='Next' disabled />
      </div>
    </div>
  );
};

export default ProfessionalInfo;
