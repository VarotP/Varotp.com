import type { Metadata } from 'next';
import { Geist, Geist_Mono, Poppins, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Varot Pavaritpong | Portfolio',
  description:
    'Full-stack developer passionate about clean code and creativity.',
  icons: {
    icon: '/whitefavIcon.png',
    apple: '/whitefavIcon.png',
  },
  keywords: [
    'Varot Pavaritpong',
    'Full Stack Developer',
    'Portfolio',
    'UBC',
    'Web Developer',
    'React',
    'TypeScript',
  ],
  openGraph: {
    title: 'Varot Pavaritpong | Portfolio',
    description:
      'Full-stack developer passionate about clean code and creativity.',
    siteName: 'Varot Pavaritpong Portfolio',
    url: 'https://varotp-dev.vercel.app/',
    images: [
      {
        url: 'https://varotp-dev.vercel.app/meta.png',
        width: 1536,
        height: 1024,
        alt: 'Portfolio Open Graph Image',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varot Pavaritpong | Portfolio',
    description:
      'Full-stack developer passionate about clean code and creativity.',
    images: ['https://varotp-dev.vercel.app/meta.png'],
    creator: '@NeonRedPanda',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${plusJakartaSans.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
