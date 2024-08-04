import Link from 'next/link';
import { Button } from './ui/button';
import { createClient } from '@/utils/supabase/server';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className='p-4'>
      <div className='max-w-screen-xl flex items-center justify-between mx-auto'>
        <Link href={'/'}>
          <Button variant='outline' className='text-foreground'>
            Superbase Shadcn Application
          </Button>
        </Link>
        <div
          className='flex
        gap-4 items-center'
        >
          {user !== null ? (
            <>
              <p>Hello, {user.email}!</p>
              <Button
                onClick={async () => {
                  'use server';
                  return await supabase.auth.signOut();
                }}
                variant={'secondary'}
                size={'sm'}
              >
                Sign out
              </Button>
            </>
          ) : (
            <>
              <Link href='/login' legacyBehavior passHref>
                <Button variant={'secondary'} size={'sm'}>
                  Login
                </Button>
              </Link>
              <Link href='/signup' legacyBehavior passHref>
                <Button size={'sm'}>Signup</Button>
              </Link>
              <ThemeSwitcher />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
