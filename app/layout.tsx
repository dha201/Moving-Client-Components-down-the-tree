import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '../components/theme-context';
//import { createContext } from 'react';

//  createContext is not supported in Server Components
//export const ThemeContext = createContext({});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1 className="dark:text-gray-100 dark:bg-gray-700 px-6 py-2 bg-indigo-300 border-b-2 border-indigo-600 text-center text-2xl">
          Dark Mode App
        </h1>
        <ThemeProvider>{children}</ThemeProvider>
        {/*<ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>*/}
      </body>
    </html>
  );
}
