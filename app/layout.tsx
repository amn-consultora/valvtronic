import './globals.css';
import type { Metadata } from 'next'
import { montserrat } from './fonts';
import { Footer } from '@/components/ui/Footer';
import { Navbar } from '@/components/ui/Navbar';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: 'Valvtronic',
  description: 'Valvtronic Mendoza'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <link rel="icon" href="/assets/logo/vx-blanco.svg" sizes="any" />
      <body className={`${montserrat.className} bg-slate-100 dark:bg-gray-950 text-primary-blue max-w-[1990px] mx-auto`}>
        <ThemeProvider attribute="class">
          <div className='relative flex flex-col'>
            <Navbar />
            <main className='flex-grow shadow-xl shadow-slate-200/40 dark:shadow-slate-900/40 pb-20 h-full'>
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}