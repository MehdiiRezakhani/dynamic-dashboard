import React from 'react'
import type { Metadata } from 'next'
import { dmsans } from '@/app/components/fonts'
import '../globals.css'
import { Providers } from '@/app/providers'

export const metadata: Metadata = {
    title: 'Dynamic Dashboard',
    description: 'Display user data fetched from an API.',
}

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en'>
            <body className={`${dmsans.className} antialiased`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
