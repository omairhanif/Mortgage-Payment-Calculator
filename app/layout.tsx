import type {Metadata} from 'next';
import './globals.css'; // Global styles
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Mortgage Lab - Smart Mortgage Calculator Suite',
  description: 'Interactive suite of analytical mortgage calculators for home buyers, including payments, affordability, amortization, comparison, PMI, and refinancing.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="bg-[#f8fafc] text-slate-900 antialiased font-sans min-h-screen flex flex-col">
        <div className="flex flex-col min-h-screen w-full relative">
          <Header />
          <div className="flex-1 flex flex-col min-w-0">
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
