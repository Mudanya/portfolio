import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import TransitionProvider from '@/components/TransitionProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
   title: 'Nelson Mudanya',
   description: 'Nelson Mudanya Portfolio',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang='en'>
         <body className={inter.className}>
            <TransitionProvider>{children} </TransitionProvider>
         </body>
      </html>
   );
}
