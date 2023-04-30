import Link from 'next/link';
import React from 'react';
import './globals.css';
export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className='dark'>
                <div className='absolute z-30 h-16 w-full hidden lg:flex justify-between px-10 items-center'>
                    <Link href={'/'}>
                        <h1 className='text-white text-xl'>Exámenes DGT</h1>
                    </Link>
                </div>
                
                <section className="absolute bg-gradient-to-r from-blue-400 to-indigo-700 dark:from-zinc-900 dark:to-slate-900 h-full w-full grid grid-cols-12 items-center grid-flow-col">
                    <div className={`rounded-md w-full h-max col-span-12 p-4 md:col-start-3 md:col-span-8 2xl:col-span-4 2xl:col-start-5 xl:col-span-5 xl:col-start-4 sm:col-span-12 flex flex-col gap-5 dark:bg-neutral-800 dark:text-white`}>
                        {children}
                </div>
		</section>
            </body>
        </html>
    );
}
