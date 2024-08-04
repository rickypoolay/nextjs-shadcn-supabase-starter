'use client';
import React from 'react';
import { Button } from './ui/button';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
      size={'sm'}
    >
      {theme !== 'dark' ? <Moon size={15} /> : <Sun size={15} />}
    </Button>
  );
};

export default ThemeSwitcher;
