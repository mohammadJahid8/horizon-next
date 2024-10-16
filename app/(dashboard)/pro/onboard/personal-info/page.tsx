import Upload from '@/components/global/personal-info/upload';
import Title from '@/components/global/title';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';
import OnboardButton from '@/components/global/onboard-button';

const PersonalInfo = () => {
  return (
    <div>
      <Title text='Personal Info' />

      <div className='flex flex-col gap-8'>
        <Upload />

        <div className='flex flex-col gap-3'>
          <h2 className='text-lg font-medium leading-[25.2px] text-gray-800'>
            About/Bio
          </h2>
          <Textarea
            placeholder='Write about yourself; include key areas responsibility, skills, experiences and specific qualification etc.'
            className='resize-none bg-[#f9f9f9] h-[280px] text-[#5E6864] rounded-[12px]'
          />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <div className='flex flex-col gap-3'>
            <label className='text-base font-medium leading-[22.4px] text-[#1C1C1C]'>
              First name
            </label>
            <Input
              className='rounded-[12px] h-14 bg-[#f9f9f9]'
              placeholder='Please enter your full name'
            />
          </div>
          <div className='flex flex-col gap-3'>
            <label className='text-base font-medium leading-[22.4px] text-[#1C1C1C]'>
              Last name
            </label>
            <Input
              className='rounded-[12px] h-14 bg-[#f9f9f9]'
              placeholder='Please enter your full name'
            />
          </div>
          <div className='flex flex-col gap-3'>
            <label className='text-base font-medium leading-[22.4px] text-[#1C1C1C]'>
              Date of Birth
            </label>
            <Input
              className='rounded-[12px] h-14 bg-[#f9f9f9]'
              type='date'
              placeholder='DD/MM/YYYY'
            />
          </div>
          <div className='flex flex-col gap-3'>
            <label className='text-base font-medium leading-[22.4px] text-[#1C1C1C]'>
              Gender
            </label>
            <Select>
              <SelectTrigger className='rounded-[12px] h-14 bg-[#f9f9f9]'>
                <SelectValue placeholder='Gender' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='apple'>Male</SelectItem>
                  <SelectItem value='banana'>Female</SelectItem>
                  <SelectItem value='blueberry'>Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className='flex flex-col gap-5'>
          <h2 className='text-lg font-medium leading-[25.2px] text-gray-800'>
            Address
          </h2>
          <div className='flex flex-col gap-3'>
            <label className='text-base font-medium leading-[22.4px] text-[#1C1C1C]'>
              Street address
            </label>
            <Input
              className='rounded-[12px] h-14 bg-[#f9f9f9]'
              placeholder='Input Text'
            />
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
            <div className='flex flex-col gap-3'>
              <label className='text-base font-medium leading-[22.4px] text-[#1C1C1C]'>
                City
              </label>
              <Input
                className='rounded-[12px] h-14 bg-[#f9f9f9]'
                placeholder='Input Text'
              />
            </div>
            <div className='flex flex-col gap-3'>
              <label className='text-base font-medium leading-[22.4px] text-[#1C1C1C]'>
                State/Province
              </label>
              <Input
                className='rounded-[12px] h-14 bg-[#f9f9f9]'
                placeholder='Input Text'
              />
            </div>
            <div className='flex flex-col gap-3'>
              <label className='text-base font-medium leading-[22.4px] text-[#1C1C1C]'>
                Postal/Zip code
              </label>
              <Input
                className='rounded-[12px] h-14 bg-[#f9f9f9]'
                placeholder='Input Text'
              />
            </div>
            <div className='flex flex-col gap-3'>
              <label className='text-base font-medium leading-[22.4px] text-[#1C1C1C]'>
                Country
              </label>
              <Input
                className='rounded-[12px] h-14 bg-[#f9f9f9]'
                placeholder='Input Text'
              />
            </div>
          </div>
        </div>
        <OnboardButton text='Next' disabled />
      </div>
    </div>
  );
};

export default PersonalInfo;
