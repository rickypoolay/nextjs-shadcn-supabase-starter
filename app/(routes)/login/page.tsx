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
import SectionContentContainer from '@/components/PageContainer';

const page = () => {
  const formSchema = z.object({
    emailAddress: z.string().email(),
    password: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: '',
      password: '',
    },
  });

  const handleSubmit = () => {};

  return (
    <SectionContentContainer flexGrow>
      <div className='flex justify-center items-center h-full'>
        <div className='w-full max-w-[500px] flex flex-col p-5 rounded-md bg-card text-card-foreground border border-secondary my-10'>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className='flex flex-col gap-4'
            >
              <h1 className='mb-2'>Login</h1>

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
              <div className='flex gap-12 justify-between items-center'>
                <Link href={'/signup'} className='w-full'>
                  <Button variant='secondary' className='w-full' type='button'>
                    Signup
                  </Button>
                </Link>
                <Button type='submit' className='w-full'>
                  Login
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </SectionContentContainer>
  );
};

export default page;
