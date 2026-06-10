import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';
import '@/styles/variables.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.qurio.ca'),
  title: {
    default: 'Qurio',
    template: '%s | Qurio',
  },
  description:
    'Qurio is a personal digital garden for documenting experiments, builds, notes, and lessons learned through building.',
  applicationName: 'Qurio',
  keywords: [
    'digital garden',
    'experiments',
    'build logs',
    'notes',
    'learning by building',
    'indie builder',
  ],
  openGraph: {
    title: 'Qurio',
    description: 'Curiosity turned into action.',
    type: 'website',
    url: 'https://www.qurio.ca',
    siteName: 'Qurio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qurio',
    description: 'Curiosity turned into action.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <Header />
          <main className="site-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
