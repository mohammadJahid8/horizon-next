// @ts-nocheck
'use client';
import React, { useEffect, useState } from 'react';
import Title from '@/components/global/title';
import { Input } from '@/components/ui/input';
import OnboardButton from '@/components/global/onboard-button';
import { CloudUploadIcon, LinkIcon } from 'lucide-react';
import AddMore from '@/components/global/professional-info/add-more';
import Remove from '@/components/global/professional-info/remove';
import SkillsSelector from '@/components/global/professional-info/skills-selector';
import { useFieldArray, useForm } from 'react-hook-form';
import { useAppContext } from '@/lib/context';
import { toast } from 'sonner';
import LoadingOverlay from '@/components/global/loading-overlay';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

const OnboardProfessionalInfo = ({ from }: { from?: 'admin' }) => {
  const searchParams = useSearchParams();
  const isEdit = searchParams.get('edit') === 'true';

  const { user, refetchUser } = useAppContext();
  const { education, experience, certifications, skills } =
    user?.professionalInfo || {};

  const processedCertifications = certifications?.map((certification: any) => {
    return {
      ...certification,
      issueDate: certification?.issueDate
        ? certification?.issueDate?.split('T')[0]
        : '',
      expireDate: certification?.expireDate
        ? certification?.expireDate?.split('T')[0]
        : '',
    };
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    watch,
    formState: { errors, isDirty },
    reset,
  } = useForm({
    defaultValues: {
      education: education || [
        {
          degree: '',
          institution: '',
          yearOfGraduation: '',
          fieldOfStudy: '',
          grade: '',
        },
      ],
      experience: experience || [
        {
          jobTitle: '',
          companyName: '',
          duration: '',
          responsibilities: '',
        },
      ],
      certifications: processedCertifications || [
        {
          fileId: new Date().getTime(),
          title: '',
          institution: '',
          issueDate: '',
          expireDate: '',
          credentialId: '',
          credentialUrl: '',
          certificateFile: null,
        },
      ],
      skills: skills || [],
    },
  });

  const {
    fields: educationFields,
    append: appendEducation,
    remove: removeEducation,
  } = useFieldArray({
    control,
    name: 'education',
  });
  const {
    fields: experienceFields,
    append: appendExperience,
    remove: removeExperience,
  } = useFieldArray({
    control,
    name: 'experience',
  });
  const {
    fields: certificationFields,
    append: appendCertification,
    remove: removeCertification,
  } = useFieldArray({
    control,
    name: 'certifications',
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const targetElement = document.querySelector(window.location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setIsMounted(true);
    }
  }, [isMounted]);

  const onSubmit = async (data: any) => {
    try {
      if (!isDirty && !isEdit) {
        return router.push('/pro/onboard/document-upload');
      }

      setIsLoading(true);
      const certificationData = data.certifications.map(
        (certification: any) => {
          return {
            ...certification,
            issueDate: certification.issueDate
              ? new Date(certification.issueDate).toISOString()
              : '',
            expireDate: certification.expireDate
              ? new Date(certification.expireDate).toISOString()
              : '',
          };
        }
      );

      data.certifications = certificationData;

      const certificationFiles = data.certifications.map(
        (certification: any) => {
          return {
            certificateFile: certification.certificateFile?.[0],
            fileId: certification.fileId,
          };
        }
      );

      const newCertificationData = data.certifications.map(
        (certification: any) => {
          return {
            ...certification,
            // certificateFile: null,
          };
        }
      );

      data.certifications = newCertificationData;

      const formData = new FormData();

      for (const file of certificationFiles) {
        if (typeof file.certificateFile === 'object' && file.certificateFile) {
          formData.append(`${file.fileId}`, file.certificateFile, file.fileId);
        }
      }

      formData.append('data', JSON.stringify(data));

      const response = await fetch('/api/user/professional-information', {
        method: 'POST',
        body: formData,
      });

      const responseData = await response.json();
      if (responseData.status === 200) {
        refetchUser();
        toast.success(
          isEdit
            ? 'Professional information updated successfully!'
            : 'Professional information submitted successfully!'
        );
        reset();
        if (isEdit) {
          router.back();
        } else {
          router.push('/pro/onboard/document-upload');
        }
      } else {
        toast.error(responseData.message || 'Something went wrong!');
      }
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      console.log('inside catch', error);
      toast.error(error.message || 'Something went wrong!');
    }
  };

  const renderError = (message: string) => {
    return <p className='text-red-500 text-sm'>{message}</p>;
  };

  const watchCertificationFileData: any = watch('certifications');
  const watchSkills: any = watch('skills');

  // console.log({ errors });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Title text='Professional Info' />

      {isLoading && <LoadingOverlay />}

      <div className='flex flex-col gap-10'>
        {/* Education Section */}
        <div className='flex flex-col gap-5'>
          <h2 className='text-2xl font-medium leading-[33.6px] text-gray-800'>
            Education
          </h2>
          {educationFields?.map((education, index) => (
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
                    {...register(`education.${index}.degree`)}
                  />
                  {/* {errors?.education &&
                    errors?.education[index] &&
                    errors?.education[index]?.degree &&
                    renderError(errors?.education[index]?.degree?.message!)} */}
                </div>
                <div className='flex flex-col gap-3'>
                  <label className='text-base font-medium text-[#1C1C1C]'>
                    Institution
                  </label>
                  <Input
                    className='rounded-[12px] h-14 bg-[#f9f9f9]'
                    placeholder='Input Text'
                    {...register(`education.${index}.institution`)}
                  />
                  {/* {errors.education &&
                    errors.education[index] &&
                    errors.education[index].institution &&
                    renderError(errors.education[index].institution.message!)} */}
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
                    type='number'
                    {...register(`education.${index}.yearOfGraduation`)}
                  />
                  {/* {errors.education &&
                      errors.education[index] &&
                      errors.education[index].yearOfGraduation &&
                      renderError(
                        errors.education[index].yearOfGraduation.message!
                      )} */}
                </div>
                <div className='flex flex-col gap-3'>
                  <label className='text-base font-medium text-[#1C1C1C]'>
                    Field of Study
                  </label>
                  <Input
                    className='rounded-[12px] h-14 bg-[#f9f9f9]'
                    placeholder='Input Text'
                    {...register(`education.${index}.fieldOfStudy`)}
                  />
                  {/* {errors.education &&
                    errors.education[index] &&
                    errors.education[index].fieldOfStudy &&
                    renderError(errors.education[index].fieldOfStudy.message!)} */}
                </div>
                <div className='flex flex-col gap-3'>
                  <label className='text-base font-medium text-[#1C1C1C]'>
                    Grade
                  </label>
                  <Input
                    className='rounded-[12px] h-14 bg-[#f9f9f9]'
                    placeholder='Input Text'
                    {...register(`education.${index}.grade`)}
                  />
                  {/* {errors.education &&
                    errors.education[index] &&
                    errors.education[index].grade &&
                    renderError(errors.education[index].grade.message!)} */}
                </div>
              </div>
              {index > 0 && (
                <Remove handleRemove={() => removeEducation(index)} />
              )}
            </div>
          ))}

          <AddMore
            handleAdd={() =>
              appendEducation({
                degree: '',
                institution: '',
                yearOfGraduation: '',
                fieldOfStudy: '',
                grade: '',
              })
            }
          />
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
                    {...register(`experience.${index}.jobTitle`)}
                  />
                  {/* {errors.experience &&
                    errors.experience[index] &&
                    errors.experience[index].jobTitle &&
                    renderError(errors.experience[index].jobTitle.message!)} */}
                </div>
                <div className='flex flex-col gap-3'>
                  <label className='text-base font-medium text-[#1C1C1C]'>
                    Company Name
                  </label>
                  <Input
                    className='rounded-[12px] h-14 bg-[#f9f9f9]'
                    placeholder='Input Text'
                    {...register(`experience.${index}.companyName`)}
                    isError={!!errors.experience?.[index]?.companyName}
                  />
                  {/* {errors.experience &&
                    errors.experience[index] &&
                    errors.experience[index].companyName &&
                    renderError(errors.experience[index].companyName.message!)} */}
                </div>
                <div className='flex flex-col gap-3'>
                  <label className='text-base font-medium text-[#1C1C1C]'>
                    Duration
                  </label>
                  <Input
                    className='rounded-[12px] h-14 bg-[#f9f9f9]'
                    placeholder='Input Text'
                    {...register(`experience.${index}.duration`)}
                  />
                  {/* {errors.experience &&
                    errors.experience[index] &&
                    errors.experience[index].duration &&
                    renderError(errors.experience[index].duration.message!)} */}
                </div>
              </div>

              <div className='flex flex-col gap-3'>
                <label className='text-base font-medium text-[#1C1C1C]'>
                  Responsibilities
                </label>
                <Input
                  className='rounded-[12px] h-14 bg-[#f9f9f9]'
                  placeholder='Input Text'
                  {...register(`experience.${index}.responsibilities`)}
                />
                {/* {errors.experience &&
                  errors.experience[index] &&
                  errors.experience[index].responsibilities &&
                  renderError(
                    errors.experience[index].responsibilities.message!
                  )} */}
              </div>

              {index > 0 && (
                <Remove handleRemove={() => removeExperience(index)} />
              )}
            </div>
          ))}

          <AddMore
            handleAdd={() =>
              appendExperience({
                jobTitle: '',
                companyName: '',
                duration: '',
                responsibilities: '',
              })
            }
          />
        </div>

        {/* Licenses & Certifications Section */}
        <div className='flex flex-col gap-5'>
          <h2 className='text-2xl font-medium leading-[33.6px] text-gray-800'>
            Licenses & Certifications
          </h2>
          {certificationFields.map((certification, index) => (
            <div
              key={index}
              className='flex flex-col gap-5 border border-[#DFE2E0] rounded-[16px] p-5'
            >
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <div className='flex flex-col gap-3'>
                  <label className='text-base font-medium text-[#1C1C1C]'>
                    Title <span className='text-red-500'>*</span>
                  </label>
                  <Input
                    className='rounded-[12px] h-14 bg-[#f9f9f9]'
                    placeholder='Ex: Patient Service Fundamentals'
                    {...register(`certifications.${index}.title`, {
                      required: 'Title is required',
                    })}
                    isError={!!errors.certifications?.[index]?.title}
                  />
                  {errors.certifications &&
                    errors.certifications[index] &&
                    errors.certifications[index].title &&
                    renderError(errors.certifications[index].title.message!)}
                </div>
                <div className='flex flex-col gap-3'>
                  <label className='text-base font-medium text-[#1C1C1C]'>
                    Name of Institute <span className='text-red-500'>*</span>
                  </label>
                  <Input
                    className='rounded-[12px] h-14 bg-[#f9f9f9]'
                    placeholder='Ex: Johns Hopkins School of Nursing'
                    {...register(`certifications.${index}.institution`, {
                      required: 'Name of Institute is required',
                    })}
                    isError={!!errors.certifications?.[index]?.institution}
                  />
                  {errors.certifications &&
                    errors.certifications[index] &&
                    errors.certifications[index].institution &&
                    renderError(
                      errors.certifications[index].institution.message!
                    )}
                </div>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <div className='flex flex-col gap-3'>
                  <label className='text-base font-medium text-[#1C1C1C]'>
                    Issue Date <span className='text-red-500'>*</span>
                  </label>
                  <Input
                    type='date'
                    className='rounded-[12px] h-14 bg-[#f9f9f9] uppercase'
                    placeholder='DD/MM/YYYY'
                    {...register(`certifications.${index}.issueDate`, {
                      required: 'Issue Date is required',
                    })}
                    isError={!!errors.certifications?.[index]?.issueDate}
                    max={new Date().toISOString().split('T')[0]}
                  />
                  {errors.certifications &&
                    errors.certifications[index] &&
                    errors.certifications[index].issueDate &&
                    renderError(
                      errors.certifications[index].issueDate.message!
                    )}
                </div>
                <div className='flex flex-col gap-3'>
                  <label className='text-base font-medium text-[#1C1C1C]'>
                    Expire Date <span className='text-red-500'>*</span>
                  </label>
                  <Input
                    type='date'
                    className='rounded-[12px] h-14 bg-[#f9f9f9] uppercase'
                    placeholder='DD/MM/YYYY'
                    {...register(`certifications.${index}.expireDate`, {
                      required: 'Expire Date is required',
                    })}
                    isError={!!errors.certifications?.[index]?.expireDate}
                  />
                  {errors.certifications &&
                    errors.certifications[index] &&
                    errors.certifications[index].expireDate &&
                    renderError(
                      errors.certifications[index].expireDate.message!
                    )}
                </div>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <div className='flex flex-col gap-3'>
                  <label className='text-base font-medium text-[#1C1C1C]'>
                    Credential URL
                  </label>
                  <Input
                    className='rounded-[12px] h-14 bg-[#f9f9f9]'
                    placeholder='https://www.credential.com/1234567890'
                    {...register(`certifications.${index}.credentialUrl`)}
                    type='url'
                  />
                  {/* {errors.certifications &&
                    errors.certifications[index] &&
                    errors.certifications[index].credentialUrl &&
                    renderError(
                      errors.certifications[index].credentialUrl.message!
                    )} */}
                </div>
                <div className='flex flex-col gap-3'>
                  <label className='text-base font-medium text-[#1C1C1C]'>
                    Credential ID <span className='text-red-500'>*</span>
                  </label>
                  <Input
                    className='rounded-[12px] h-14 bg-[#f9f9f9]'
                    placeholder='Ex: ABC123'
                    {...register(`certifications.${index}.credentialId`, {
                      required: 'Credential ID is required',
                    })}
                    isError={!!errors.certifications?.[index]?.credentialId}
                  />
                  {errors.certifications &&
                    errors.certifications[index] &&
                    errors.certifications[index].credentialId &&
                    renderError(
                      errors.certifications[index].credentialId.message!
                    )}
                </div>
              </div>
              <label
                htmlFor={`licenseFile-${index}`}
                className='relative cursor-pointer'
              >
                <div className='flex flex-col items-center justify-center border border-gray-300 rounded-[12px] p-4 bg-white h-22'>
                  <div className='flex flex-col items-center gap-2.5'>
                    <CloudUploadIcon className='w-6 h-6' />
                    <span className='text-sm text-gray-500'>
                      Upload physical licenses or certificate
                    </span>
                  </div>
                  <input
                    type='file'
                    className='hidden'
                    id={`licenseFile-${index}`}
                    accept='image/*,application/pdf'
                    // {...register(`certifications.${index}.certificateFile`)}
                    {...register(`certifications.${index}.certificateFile`, {
                      validate: {
                        fileSize: (value) => {
                          // Check if a file exists and validate its size
                          const file =
                            typeof value === 'object' ? value?.[0] : null;
                          console.log({ value });
                          return (
                            !file ||
                            file.size <= 1024 * 1024 ||
                            'File size should be less than 1MB'
                          );
                        },
                      },
                    })}
                    // onChange={(e) => {
                    //   setValue(
                    //     `certifications.${index}.certificateFile`,
                    //     // @ts-ignore
                    //     e.target.files ? e.target.files[0] : null
                    //   );
                    // }}
                  />
                  {errors.certifications &&
                    errors.certifications[index] &&
                    errors.certifications[index].certificateFile &&
                    renderError(
                      errors.certifications[index].certificateFile.message!
                    )}
                  {watchCertificationFileData[index]?.certificateFile &&
                    watchCertificationFileData[index]?.certificateFile?.[0]
                      ?.name && (
                      <p className='text-base text-black py-2 inline-flex gap-4'>
                        <span>
                          Name:{' '}
                          {
                            watchCertificationFileData[index]
                              ?.certificateFile?.[0]?.name
                          }
                        </span>
                        <span>
                          Size:{' '}
                          {(
                            watchCertificationFileData[index]
                              ?.certificateFile?.[0]?.size / 1024
                          ).toFixed(2)}{' '}
                          KB
                        </span>
                      </p>
                    )}
                </div>

                {processedCertifications?.[index]?.certificateFile && (
                  <Link
                    href={processedCertifications?.[index]?.certificateFile}
                    target='_blank'
                    className='text-blue-600 underline text-sm flex items-center gap-2 pt-2'
                  >
                    <LinkIcon className='w-4 h-4' />
                    View current certificate
                  </Link>
                )}
              </label>
              {index > 0 && (
                <Remove handleRemove={() => removeCertification(index)} />
              )}
            </div>
          ))}
          <AddMore
            handleAdd={() =>
              appendCertification({
                fileId: new Date().getTime(),
                title: '',
                institution: '',
                issueDate: '',
                expireDate: '',
                credentialId: '',
                credentialUrl: '',
                certificateFile: null,
              })
            }
          />
        </div>
        <div className='flex flex-col gap-5' id='skills'>
          <h2 className='text-2xl font-medium leading-[33.6px] text-gray-800'>
            Skills <span className='text-red-500'>*</span>
          </h2>

          <SkillsSelector
            errors={errors}
            setValue={setValue}
            watchSkills={watchSkills}
          />
          <input
            type='hidden'
            value={watch('skills')}
            {...register('skills', {
              required: 'At least one skill is required',
            })}
          />
          {errors.skills &&
            errors.skills.message &&
            renderError(errors.skills.message)}
        </div>

        {from !== 'admin' && (
          <div className='flex gap-5'>
            <OnboardButton
              text={isEdit ? 'Cancel' : 'Previous'}
              className='w-full bg-white text-[#1C1C1C] border border-gray-300 hover:text-white'
              onClick={() => router.back()}
            />
            <OnboardButton
              text={isEdit ? 'Save & Exit' : 'Next'}
              className='w-full'
              type='submit'
              disabled={!isDirty && isEdit}
            />
          </div>
        )}
      </div>
    </form>
  );
};

export default OnboardProfessionalInfo;
