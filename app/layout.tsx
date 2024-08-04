import { GeistSans } from 'geist/font/sans';
import './globals.css';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from 'next-themes';
import Footer from '@/components/Footer';
import { createClient } from '@/utils/supabase/client';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Next.js, Shadcn, and Supabase Starter Kit',
  description:
    'The fastest way to build apps with Next.js, Shadcn and Supabase',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={GeistSans.className}>
      <body className='bg-background text-primary min-h-[100vh] flex flex-col'>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Navbar />
          <main className='flex-1 flex flex-col'>{children}</main>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
