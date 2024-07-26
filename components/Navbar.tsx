'use client';
import Link from 'next/link';
import { Button } from './ui/button';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
        gap-4'
        >
          <Link href='/login' legacyBehavior passHref>
            <Button variant={'secondary'} size={'sm'}>
              Login
            </Button>
          </Link>
          <Link href='/signup' legacyBehavior passHref>
            <Button size={'sm'}>Signup</Button>
          </Link>
          {isClient && (
            <Button
              onClick={() =>
                theme === 'dark' ? setTheme('light') : setTheme('dark')
              }
              size={'sm'}
            >
              {theme !== 'dark' ? <Moon size={15} /> : <Sun size={15} />}
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
