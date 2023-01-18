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
            <body className=''>
                <div className='absolute z-30 h-16 w-full hidden lg:flex justify-between px-10 items-center'>
                    <Link href={'/'}>
                        <h1 className='text-white text-xl'>Exámenes DGT</h1>
                    </Link>
                </div>
                <div className='bg-neutral-800 h-screen grid place-items-center grid-cols-6 w-full'>
                    <div className='bg-neutral-50 col-span-6 lg:col-span-2 w-full lg:col-start-3 col-start-1 h-max p-3 md:p-4 flex gap-9 rounded-xl flex-col lg:flex-row'>
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
