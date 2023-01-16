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
            <body>
                <div className='absolute lg:h-full min-h-full lg:p-0 w-full bg-neutral-800 flex lg:items-center md:items-center h-max justify-center'>
                    <div className='bg-neutral-50 w-full lg:w-4/12 h-max p-4 flex gap-9 rounded-xl flex-col lg:flex-row'>
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
