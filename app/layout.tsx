import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import './globals.css';
import ResponsiveNav from '@/components/Home/Navbar/ResponsiveNav';
import Provider from '@/components/HOC/Provider';
import Footer from '@/components/Home/Footer/Footer';
import Home from '@/components/Home/Home';
import ScrolltoTop from '@/components/Helper/ScrolltoTop';
import { SessionProvider } from 'next-auth/react';
const font = Roboto({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Job Portal Landing Page',
  description: 'Job Portal landing page using ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${font.className} antialiased`}>
        <SessionProvider>
          <Provider>
            <ResponsiveNav />
            {children}
            <Home />
            <Footer />
            <ScrolltoTop />
          </Provider>
        </SessionProvider>
      </body>
    </html>
  );
}
