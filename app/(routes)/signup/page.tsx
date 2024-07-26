'use client';

import React, { useEffect, useState } from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { createClient } from '@/utils/supabase/client';
import SectionContentContainer from '@/components/PageContainer';
import { Loader2 } from 'lucide-react';

const page = () => {
  const [isLoading, setIsLoading] = useState(false);

  const supabase = createClient();

  const formSchema = z
    .object({
      username: z.string().max(30),
      emailAddress: z.string().email(),
      password: z.string().min(6),
      passwordConfirm: z.string(),
    })
    .refine(
      (data) => {
        return data.password === data.passwordConfirm;
      },
      {
        message: 'Passwords do not match',
        path: ['passwordConfirm'],
      }
    );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      emailAddress: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const handleSubmit = async (formData: z.infer<typeof formSchema>) => {
    const { emailAddress, password, username } = formData;

    let { data, error } = await supabase.auth.signUp({
      email: emailAddress,
      password,
    });

    setIsLoading(true);

    if (error) {
      console.error(error);
      return setIsLoading(false);
    }

    if ((data.session || data.user) && !error) {
      console.log('success');
      return setIsLoading(false);
    }
  };

  return (
    <SectionContentContainer flexGrow>
      <div className='flex justify-center items-center h-full '>
        {isLoading ? (
          <Loader2 className='animate-spin' size={50} />
        ) : (
          <div className='w-full max-w-[500px] flex flex-col  p-5 rounded-md bg-card text-card-foreground border border-secondary my-10'>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className='flex flex-col gap-4'
              >
                <h1 className='mb-2'>Create an account</h1>
                <FormField
                  control={form.control}
                  name='username'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='emailAddress'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email address</FormLabel>
                      <FormControl>
                        <Input placeholder='email@example.com' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type='password' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='passwordConfirm'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm password</FormLabel>
                      <FormControl>
                        <Input type='password' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className='flex gap-12 justify-between items-center'>
                  <Link href={'/login'} className='w-full'>
                    <Button
                      variant='secondary'
                      className='w-full'
                      type='button'
                    >
                      Login
                    </Button>
                  </Link>
                  <Button type='submit' className='w-full'>
                    Signup
                  </Button>
                </div>
              </form>
            </Form>
            {/* {authSession && authUser && (
              <>
                <h1>Success</h1>
                <p>You will be redirected.</p>
              </>
            )} */}
          </div>
        )}
      </div>
    </SectionContentContainer>
  );
};

export default page;
