import { Metadata } from 'next';

import { SITE } from '~/config.js';

import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
import Announcement from '~/components/widgets/Announcement';
import Footer2 from '~/components/widgets/Footer2';

import { Space_Grotesk } from 'next/font/google';
import '~/assets/styles/base.css';
import CookieMessage from '~/components/widgets/CookieMessage';

const customFont = Space_Grotesk({ subsets: ['latin'], variable: '--font-custom' });

export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-gray-100  racking-tight antialiased text-gray-900 dark:text-slate-300 dark:bg-slate-900">
        <Header />
        <CookieMessage />
        <main>{children}</main>
        <Footer2 />

      </body>
    </html>
  );
}
