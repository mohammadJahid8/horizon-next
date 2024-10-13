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
          {inputFields.map((input: any) => (
            <div key={input.name}>
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
                        <Input
                          type={
                            input.type === 'password' &&
                            showPassword[input.name]
                              ? 'text'
                              : input.type
                          }
                          placeholder={input.placeholder}
                          // disabled={loading}
                          {...field}
                          className='mt-1 block w-full rounded-[12px] h-14 bg-[#f9f9f9] border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 pr-10'
                        />
                        {input.type === 'password' && (
                          <button
                            type='button'
                            onClick={() => togglePasswordVisibility(input.name)}
                            className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'
                          >
                            {showPassword[input.name] ? (
                              <EyeOff className='h-4 w-4 text-gray-400' />
                            ) : (
                              <Eye className='h-4 w-4 text-gray-400' />
                            )}
                          </button>
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
