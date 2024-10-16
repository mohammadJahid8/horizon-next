/* eslint-disable react/prop-types */
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
// import { useAppContext } from '@/lib/context';
import Link from 'next/link';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';
import GoogleLogin from './google-login';
import { countries } from '@/lib/countries';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { cn } from '@/lib/utils';

export default function AuthForm({
  inputFields,
  onSubmit,
  submitButtonText,
  type,
}: any) {
  // const { loading, setLoading } = useAppContext();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<{ [key: string]: boolean }>(
    {}
  );

  const schemaFields: any = {};
  inputFields.forEach((field: any) => {
    schemaFields[field.name] = field.validation;
  });

  const createFormSchema = (type: any) => {
    let formSchema: any = z.object(schemaFields);

    if (type === 'Signup') {
      formSchema = formSchema.superRefine(
        ({ confirmPassword, password }: any, ctx: any) => {
          if (confirmPassword !== password) {
            ctx.addIssue({
              code: 'custom',
              message: 'The passwords did not match',
              path: ['confirmPassword'],
            });
          }
        }
      );
    }

    return formSchema;
  };

  const formSchema = createFormSchema(type);

  const defaultValues: any = {};
  inputFields.forEach((field: any) => {
    defaultValues[field.name] = field.defaultValue || '';
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const handleSubmit = async (data: any) => {
    // setLoading(true);
    try {
      await onSubmit(data);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      // setLoading(false);
    }
  };

  const togglePasswordVisibility = (fieldName: string) => {
    setShowPassword((prev) => ({ ...prev, [fieldName]: !prev[fieldName] }));
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className='space-y-6 w-full'
      >
        <div className={`grid grid-cols-1 gap-5`}>
          {inputFields.map((input: any, i: number) => (
            <div key={i}>
              <FormField
                control={form.control}
                name={input.name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-base font-medium'>
                      {input.label}
                    </FormLabel>
                    <FormControl>
                      <div className='relative'>
                        {input.type === 'tel' ? (
                          <div className='flex items-center'>
                            <Select
                              onValueChange={(value) =>
                                field.onChange(
                                  `+${value}${field.value.split(' ')[1] || ''}`
                                )
                              }
                              defaultValue={
                                field.value.split(' ')[0]?.replace('+', '') ||
                                ''
                              }
                            >
                              <SelectTrigger className='w-[100px] text-base h-14 mt-1 rounded-r-none border-gray-300 shadow-sm bg-[#f9f9f9] rounded-l-[12px] focus:ring-0'>
                                <SelectValue placeholder='+99' />
                              </SelectTrigger>
                              <SelectContent>
                                {countries.map((country, index) => (
                                  <SelectItem
                                    key={index}
                                    value={country.phone_code}
                                  >
                                    +{country.phone_code}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <Input
                              type='tel'
                              placeholder={input.placeholder}
                              {...field}
                              onChange={(e) =>
                                field.onChange(
                                  `${field.value.split(' ')[0]} ${
                                    e.target.value
                                  }`
                                )
                              }
                              value={field.value.split(' ')[1] || ''}
                              className={cn(
                                'flex-grow mt-1 block h-14 bg-[#f9f9f9] border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500',
                                {
                                  'rounded-[12px]': input.type !== 'tel',
                                  'rounded-r-[12px] rounded-l-none border-l-0':
                                    input.type === 'tel',
                                }
                              )}
                            />
                          </div>
                        ) : input.type === 'password' ? (
                          <>
                            <Input
                              type={
                                showPassword[input.name] ? 'text' : 'password'
                              }
                              placeholder={input.placeholder}
                              {...field}
                              className='mt-1 block w-full rounded-[12px] h-14 bg-[#f9f9f9] border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 pr-10'
                            />
                            <button
                              type='button'
                              onClick={() =>
                                togglePasswordVisibility(input.name)
                              }
                              className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'
                            >
                              {showPassword[input.name] ? (
                                <EyeOff className='h-4 w-4 text-gray-400' />
                              ) : (
                                <Eye className='h-4 w-4 text-gray-400' />
                              )}
                            </button>
                          </>
                        ) : (
                          <Input
                            type={input.type}
                            placeholder={input.placeholder}
                            {...field}
                            className='mt-1 block w-full rounded-[12px] h-14 bg-[#f9f9f9] border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500'
                          />
                        )}
                      </div>
                    </FormControl>
                    <FormMessage className='text-xs text-red-600' />
                  </FormItem>
                )}
              />
            </div>
          ))}
        </div>

        {type === 'login' && (
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <Checkbox id='remember-me' className='rounded-sm' />
              <label
                htmlFor='remember-me'
                className='ml-2 text-base text-muted-foreground'
              >
                Remember me
              </label>
            </div>
            <Link
              href='/forgot-password'
              className='text-base text-primary underline hover:text-primary-600 transition'
            >
              Forgot password?
            </Link>
          </div>
        )}

        <Button
          // disabled={loading}
          className='w-full relative z-50 h-[75px] rounded-[12px] text-lg font-medium'
          type='submit'
        >
          {submitButtonText}
        </Button>
        <div className='flex items-center my-4'>
          <div className='flex-grow border-t border-gray-400'></div>
          <span className='mx-4 text-gray-500'>OR</span>
          <div className='flex-grow border-t border-gray-400'></div>
        </div>
        <GoogleLogin />
      </form>
    </Form>
  );
}
